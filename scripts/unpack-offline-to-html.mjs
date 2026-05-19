import { readFileSync, writeFileSync } from "node:fs";
import { gunzipSync } from "node:zlib";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const offlinePath = join(root, "Fans Market - Offline.html");
const outPath = join(root, "Fans Market.html");
const offline = readFileSync(offlinePath, "utf8");

const manifest = JSON.parse(
  offline.match(/<script type="__bundler\/manifest">\s*([\s\S]*?)\s*<\/script>/)[1],
);
let template = JSON.parse(
  offline.match(/<script type="__bundler\/template">\s*([\s\S]*?)\s*<\/script>/)[1],
);

const extResources = JSON.parse(
  offline.match(/<script type="__bundler\/ext_resources">\s*([\s\S]*?)\s*<\/script>/)[1],
);

/** @type {Record<string, string>} */
const dataUrls = {};

for (const [uuid, entry] of Object.entries(manifest)) {
  let bytes = Buffer.from(entry.data, "base64");
  if (entry.compressed) {
    bytes = gunzipSync(bytes);
  }
  const b64 = bytes.toString("base64");
  dataUrls[uuid] = `data:${entry.mime};base64,${b64}`;
}

for (const uuid of Object.keys(manifest)) {
  template = template.split(uuid).join(dataUrls[uuid]);
}

template = template
  .replace(/\s+integrity="[^"]*"/gi, "")
  .replace(/\s+crossorigin="[^"]*"/gi, "");

const resourceMap = {};
for (const { id, uuid } of extResources) {
  if (dataUrls[uuid]) resourceMap[id] = dataUrls[uuid];
}

const resourceScript =
  `<script>window.__resources = ${JSON.stringify(resourceMap)};</script>`;

const headOpen = template.match(/<head[^>]*>/i);
if (headOpen) {
  const i = headOpen.index + headOpen[0].length;
  template = template.slice(0, i) + resourceScript + template.slice(i);
}

// Inline external scripts (React, ReactDOM, Babel, and text/babel modules).
template = template.replace(
  /<script([^>]*)\ssrc="(data:[^"]+)"([^>]*)>\s*<\/script>/gi,
  (_match, before, src, after) => {
    const attrs = `${before}${after}`;
    if (attrs.includes('type="text/babel"') || attrs.includes("type='text/babel'")) {
      const code = Buffer.from(src.split(",")[1], "base64").toString("utf8");
      const typeAttr = attrs.match(/\stype=(["'])(text\/babel|text\/jsx)\1/i);
      const type = typeAttr ? ` type=${typeAttr[1]}${typeAttr[2]}${typeAttr[1]}` : ' type="text/babel"';
      return `<script${type}>\n${code}\n</script>`;
    }
    const code = Buffer.from(src.split(",")[1], "base64").toString("utf8");
    return `<script>\n${code}\n</script>`;
  },
);

writeFileSync(outPath, template, "utf8");
console.log(`Wrote ${outPath} (${template.length} bytes)`);
