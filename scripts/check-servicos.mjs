// scripts/check-servicos.mjs
import { promises as fs } from "fs";
import path from "path";

const ROOT = process.cwd();
const EXCLUDE = new Set(["node_modules", ".next", ".git"]);
const FILE_RE = /\.(ts|tsx|js|jsx|mjs|cjs|mdx|css|json)$/i;

// Aceita " '/ ` e extensões maiúsculas/minúsculas; permite query/hash
const IMG_REF = /(["'`])\/servicos\/[^"'`]+?\.(?:png|jpe?g|webp|svg)(?:[?#][^"'`]*)?\1/gi;

// Base para testes: BASE_URL ou BASE; senão localhost:PORT (padrão 3000)
const rawBase =
  process.env.BASE_URL ??
  process.env.BASE ??
  `http://localhost:${process.env.PORT ?? 3000}`;

// remove barra final pra evitar // ao concatenar
const BASE = rawBase.endsWith("/") ? rawBase.slice(0, -1) : rawBase;

async function walk(dir, out = []) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const e of entries) {
    if (EXCLUDE.has(e.name)) continue;
    const full = path.join(dir, e.name);
    if (e.isDirectory()) {
      await walk(full, out);
    } else if (FILE_RE.test(e.name)) {
      out.push(full);
    }
  }
  return out;
}

const files = await walk(ROOT);
const refs = new Set();

// Coleta todas as referências "/servicos/....(png|jpg|jpeg|webp|svg)"
for (const f of files) {
  const txt = await fs.readFile(f, "utf8").catch(() => null);
  if (!txt) continue;
  for (const m of txt.matchAll(IMG_REF)) {
    // m[0] inclui aspas; tira a 1ª e a última
    refs.add(m[0].slice(1, -1));
  }
}

console.log(`→ Encontradas ${refs.size} referências.\nTestando contra ${BASE}\n`);

let missing = 0;

for (const p of [...refs].sort()) {
  const url = `${BASE}${p.startsWith("/") ? "" : "/"}${p}`;
  try {
    const res = await fetch(url);
    console.log(`${String(res.status).padStart(3, " ")}  ${url}`);
    if (res.status === 404) missing++;
  } catch (e) {
    console.log(`ERR  ${url}  (${e.message})`);
    missing++;
  }
}

console.log(`\nResumo: ${refs.size} referênc${refs.size === 1 ? "ia" : "ias"}; ${missing} com problema(s).`);
if (missing > 0) process.exitCode = 1;
