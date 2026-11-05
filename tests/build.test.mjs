import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {execFileSync} from 'node:child_process';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
test('La build genera un sito completo con navigazione e risorse locali',()=>{
 execFileSync(process.execPath,['scripts/build.mjs'],{cwd:root});
 const html=fs.readFileSync(path.join(root,'dist/index.html'),'utf8');
 assert.ok(html.includes('<html lang="it">'));assert.ok(!html.includes('%%'));
 const ids=[...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);
 assert.equal(ids.length,new Set(ids).size);
 for(const m of html.matchAll(/href="#([^"]+)"/g))assert.ok(ids.includes(m[1]),`Ancora mancante: ${m[1]}`);
 for(const m of html.matchAll(/(?:href|src)="([^"#]+)"/g)){if(/^https?:/.test(m[1]))continue;assert.ok(fs.existsSync(path.join(root,'dist',m[1])),`Risorsa mancante: ${m[1]}`);}
 assert.equal((html.match(/class="brand-profile"/g)||[]).length,13);
 assert.ok(html.includes('non verificati nuovamente'));
 assert.ok(html.includes('Categorie non dettagliate'));
 for(const width of html.matchAll(/style="width:([^%]+)%"/g))assert.ok(Number(width[1])>=0&&Number(width[1])<=100);
});
