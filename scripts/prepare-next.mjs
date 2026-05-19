import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const html = readFileSync(join(root, "Fans Market.html"), "utf8");

const styleMatch = html.match(/<style>([\s\S]*?)<\/style>/);
const styles = styleMatch?.[1]?.trim() ?? "";

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
writeFileSync(join(root, "app", "globals.css"), styles);
writeFileSync(join(root, "components", "FansMarketApp.jsx"), component);

console.log(
  `Prepared app/globals.css and components/FansMarketApp.jsx (${babelBlocks.length} babel blocks merged).`,
);
