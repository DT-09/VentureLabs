import { readFileSync } from "node:fs";
import vm from "node:vm";

const html = readFileSync(new URL("../index.html", import.meta.url), "utf8");
const errors = [];
const count = (pattern) => [...html.matchAll(pattern)].length;

if (!/^\s*<!doctype html>/i.test(html)) errors.push("index.html: missing HTML5 doctype");
if (!/<html\b[^>]*\blang=["'][a-z-]+["']/i.test(html)) errors.push("index.html: missing document language");
if (count(/<title\b[^>]*>[\s\S]*?<\/title>/gi) !== 1) errors.push("index.html: expected exactly one title");
if (!/<meta\b[^>]*name=["']description["'][^>]*content=["'][^"']+["']/i.test(html)) errors.push("index.html: missing meta description");
if (count(/<h1\b/gi) !== 1) errors.push("index.html: expected exactly one h1");
if (count(/<main\b/gi) !== 1) errors.push("index.html: expected exactly one main landmark");

const ids = [...html.matchAll(/\bid=["']([^"']+)["']/gi)].map((m) => m[1]);
if (new Set(ids).size !== ids.length) errors.push("index.html: duplicate id attributes");

for (const [index, match] of [...html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi)].entries()) {
  const attrs = match[1] || "";
  const source = match[2] || "";
  if (/\bsrc\s*=/.test(attrs) || !source.trim()) continue;
  try {
    if (/type=["']application\/ld\+json["']/i.test(attrs)) JSON.parse(source);
    else new vm.Script(source, { filename: `index.html:inline-script-${index + 1}` });
  } catch (error) {
    errors.push(`index.html: inline script ${index + 1} is invalid: ${error.message}`);
  }
}

if (errors.length) {
  console.error("VentureLabs site validation failed:");
  for (const error of errors) console.error(` - ${error}`);
  process.exit(1);
}
console.log("VentureLabs site structure and inline scripts passed validation.");
