import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

function extractMascotPng(html, publicDir) {
  const match = html.match(/window\.__resources\s*=\s*(\{[\s\S]*?\});/);
  if (!match) return;
  const resources = JSON.parse(match[1]);
  const dataUrl = resources.mascotPng;
  if (!dataUrl?.startsWith("data:image/png;base64,")) return;
  const b64 = dataUrl.split(",", 2)[1];
  mkdirSync(publicDir, { recursive: true });
  writeFileSync(join(publicDir, "mascot.png"), Buffer.from(b64, "base64"));
}

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const html = readFileSync(join(root, "Fans Market.html"), "utf8");

const styleMatch = html.match(/<style>([\s\S]*?)<\/style>/);
let styles = styleMatch?.[1]?.trim() ?? "";
// Inline mascot PNG is ~4MB; use public/mascot.png instead (see unpack / prepare flow).
styles = styles.replace(
  /\.mascot \{ background-image: url\("data:image\/png;base64,[\s\S]*?"\); background-size: contain; background-repeat: no-repeat; background-position: center; filter: drop-shadow\(0 12px 30px rgba\(255,45,45,0\.4\)\); \}/,
  `.mascot {
  background-image: url("/mascot.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  filter: drop-shadow(0 12px 30px rgba(255, 45, 45, 0.4));
}`,
);

const babelBlocks = [...html.matchAll(/<script type="text\/babel">([\s\S]*?)<\/script>/g)].map(
  (m) => m[1].trim(),
);

let jsx = babelBlocks.join("\n\n");
jsx = jsx.replace(
  /ReactDOM\.createRoot\(document\.getElementById\("root"\)\)\.render\(<Root\/>\);\s*$/,
  "",
);
// Separate script tags reused `Row` in different scopes; merge into one module.
jsx = jsx.replace(
  /const Row = \(\{ k, v, hi, sep \}\) =>/,
  "const KvRow = ({ k, v, hi, sep }) =>",
);
jsx = jsx.replace(/<Row\s+k=/g, "<KvRow k=");
jsx = jsx.replace(
  /Object\.assign\(window,/g,
  'typeof window !== "undefined" && Object.assign(window,',
);

const component = `'use client';

import React from "react";

${jsx}

export default function FansMarketApp() {
  return <Root />;
}
`;

mkdirSync(join(root, "app"), { recursive: true });
mkdirSync(join(root, "components"), { recursive: true });
extractMascotPng(html, join(root, "public"));
writeFileSync(join(root, "app", "globals.css"), styles);
writeFileSync(join(root, "components", "FansMarketApp.jsx"), component);

console.log(
  `Prepared app/globals.css and components/FansMarketApp.jsx (${babelBlocks.length} babel blocks merged).`,
);
