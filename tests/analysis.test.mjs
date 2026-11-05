import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {brands,categories,priceBands,collections,index,priceIndex} from '../data.mjs';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
test('I denominatori e le distribuzioni Bolovo restano coerenti',()=>{
 assert.equal(brands.length,13);assert.equal(new Set(brands.map(b=>b.name)).size,13);
 assert.equal(categories.reduce((s,r)=>s+r[1],0),426);
 assert.equal(priceBands.reduce((s,r)=>s+r[1],0),426);
 assert.equal(priceBands[2][1]+priceBands[3][1],279);
 assert.equal(Math.round(279/426*1000)/10,65.5);
 assert.ok(collections.reduce((s,r)=>s+r[1],0)<426);
});
test('Gli indici correggono gli errori storici senza convertire valute',()=>{
 assert.equal(index(4344,426),1020);assert.equal(index(3045,426),715);
 assert.equal(index(426,426),100);assert.equal(index(null,426),null);
 assert.equal(index(1,0),null);assert.equal(priceIndex(brands[0]),100);
 assert.equal(priceIndex({price:200,currency:'USD'}),null);
});
test('Zero, mancante e disponibilità parziale rimangono distinti',()=>{
 assert.equal(brands.find(b=>b.name==='Carnan').total,0);
 assert.equal(brands.find(b=>b.name==='Adidas').total,null);
 assert.equal(brands.find(b=>b.name==='High Company').partial,51.5);
 assert.equal(brands.find(b=>b.name==='High Company').total,14.2);
});
test('Le distribuzioni pubblicate non contengono valori fuori scala',()=>{
 const ops=JSON.parse(fs.readFileSync(path.join(root,'operations.json'),'utf8'));
 for(const o of ops){assert.ok(brands.some(b=>b.name===o.brand));for(const r of [...o.categories,...o.prices]){assert.ok(Number.isFinite(r[1])&&r[1]>=0);if(r[2].includes('%'))assert.ok(r[1]<=100);}}
});
test('Il pacchetto non include contatti privati, credenziali o email originali',()=>{
 const walk=d=>fs.readdirSync(d,{withFileTypes:true}).flatMap(e=>e.isDirectory()?(e.name.startsWith('.')||e.name==='node_modules'?[]:walk(path.join(d,e.name))):[path.join(d,e.name)]);
 const forbidden=[/-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----/,/sk-proj-[A-Za-z0-9_-]{12,}/,/gh[pousr]_[A-Za-z0-9]{20,}/,/AKIA[0-9A-Z]{16}/,/https?:\/\/[^\s/]+:[^\s@]+@/,/\b[A-Z0-9._%+-]+@(?:gmail\.com|bolovo\.com\.br)\b/i,/mail\.google\.com/,/googleusercontent\.com/,/\+39\s*329/,/C:\\Users\\/];
 for(const file of walk(root)){if(!/\.(?:html|css|js|mjs|json|md)$/.test(file))continue;if(file.endsWith('analysis.test.mjs'))continue;const content=fs.readFileSync(file,'utf8');for(const pattern of forbidden)assert.ok(!pattern.test(content),`Contenuto da controllare: ${path.relative(root,file)}`);}
});
