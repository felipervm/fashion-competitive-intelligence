// Aggregati trascritti dal rapporto fornito. Nessuna nuova raccolta dei cataloghi.
export const provenance = {
  status: 'reported-public-unverified',
  period: '2026; date di acquisizione per marchio non disponibili',
  unit: 'Prodotti/record di catalogo, non unità fisiche di magazzino',
  note: 'Il rapporto dichiara fonti pubbliche. CSV, snapshot e script di raccolta non sono stati forniti. I valori non sono stati verificati nuovamente.'
};
export const brands = [
  {name:'Bolovo',group:'Riferimento',count:426,price:332.72,currency:'BRL',scope:'Catalogo /tudo',coverage:'Dichiarato completo',total:8,partial:null,drop:'Go Out: 67 · Home Video: 45 · Verão 26: 44 · Taça: 12',segments:'Unisex',lines:'Abbigliamento, accessori e oggetti',source:'https://bolovo.com.br',quality:'Conteggio riportato'},
  {name:'Adidas',group:'Sportswear / Performance',count:4344,price:null,currency:'BRL',scope:'Abbigliamento e accessori; scarpe escluse',coverage:'Perimetro selezionato',total:null,partial:null,drop:'Offerta continuativa; calendario sportivo',segments:'Uomo, donna, bambino, unisex',lines:'Performance · Originals · Sportswear · TERREX',source:'https://www.adidas.com.br',quality:'Conteggio riportato'},
  {name:'Nike',group:'Sportswear / Performance',count:3045,price:null,currency:'BRL',scope:'Abbigliamento e accessori; scarpe escluse',coverage:'Perimetro selezionato',total:null,partial:null,drop:'SNKRS come calendario parallelo',segments:'Uomo, donna, bambino, unisex',lines:'Jordan · SNKRS · calcio',source:'https://www.nike.com.br',quality:'Conteggio riportato'},
  {name:'High Company',group:'Streetwear',count:402,price:273.32,currency:'BRL',scope:'Catalogo corrente nel rapporto',coverage:'Dichiarato completo',total:14.2,partial:51.5,drop:'Inverno E1: 70 · Brasil 26: 22',segments:'Unisex; Girlz come collezione',lines:'Abbigliamento e accessori',source:'https://high.com.br',quality:'Conteggio riportato'},
  {name:'PIET',group:'Streetwear',count:125,price:480,currency:'BRL',scope:'Catalogo attivo stimato',coverage:'Stima',total:null,partial:null,drop:'Collezione: 20–50 · collaborazione: 3–15 (stime)',segments:'Nessuna divisione uomo/donna esplicita nel rapporto',lines:'Collezioni e collaborazioni',source:'https://piet.com.br',quality:'Stima'},
  {name:'Carnan',group:'Streetwear',count:154,price:640.32,currency:'BRL',scope:'Catalogo pubblico e sezioni Standard / New In',coverage:'Perimetro selezionato',total:0,partial:37,drop:'New In: 58 · Standard: 83 · Leathergoods: 15 · calzature: 2',segments:'Man · Woman',lines:'Standard Line · borse e pelletteria',source:'https://carnan.com.br',quality:'Conteggio riportato'},
  {name:'Welcome Rio',group:'Streetwear',count:147,price:476.98,currency:'BRL',scope:'Catalogo e nuovi arrivi',coverage:'Perimetro selezionato',total:1.4,partial:51.7,drop:'Nuovi arrivi: 33 · T-shirt Ver26: 7',segments:'Nessuna divisione uomo/donna nei dati riportati',lines:'Abbigliamento, calzature, gioielli e accessori',source:'https://welcomesunnygarments.com.br',quality:'Conteggio riportato'},
  {name:'Vans',group:'Streetwear',count:1000,price:250,currency:'BRL',scope:'Abbigliamento e accessori stimati',coverage:'Stima',total:null,partial:null,drop:'Modello di offerta continuativa',segments:'Uomo, donna, unisex',lines:'Offerta principale · Lx',source:'https://www.vans.com.br',quality:'Stima'},
  {name:'Class',group:'Streetwear',count:68,price:374.59,currency:'BRL',scope:'Fall 26; collaborazioni come contesto',coverage:'Una collezione',total:20.6,partial:41.2,drop:'Fall 26: 68 · adidas: 2 · VIGA: 1',segments:'Unisex',lines:'Abbigliamento e accessori; struttura per drop',source:'https://classofficial.com.br',quality:'Conteggio riportato'},
  {name:'Patagonia',group:'Outdoor / Lifestyle',count:1355,price:null,currency:'USD',scope:'Abbigliamento, bambino, zaini e attrezzatura',coverage:'Perimetro selezionato',total:null,partial:null,drop:'Famiglie di prodotto continuative',segments:'Uomo, donna, bambino, neonato, unisex',lines:'Capilene · Nano Puff · Better Sweater · Torrentshell · Houdini · Baggies',source:'https://www.patagonia.com',quality:'Conteggio riportato'},
  {name:'The North Face',group:'Outdoor / Lifestyle',count:502,price:null,currency:'BRL',scope:'Abbigliamento adulto e attrezzatura',coverage:'Perimetro selezionato',total:null,partial:null,drop:'Collezioni per tecnologia e utilizzo',segments:'Uomo, donna, bambino, unisex',lines:'Summit Series · Nuptse · FUTURELIGHT · DryVent · Gore-Tex',source:'https://www.thenorthface.com.br',quality:'Conteggio riportato'},
  {name:'Osklen',group:'Premium brasiliano',count:964,price:855.95,currency:'BRL',scope:'Abbigliamento e accessori; bazar e scarpe esclusi',coverage:'Perimetro selezionato',total:0,partial:33.6,drop:'FW / SS e capsule',segments:'Men · Women',lines:'e-fabrics · Pirarucu',source:'https://www.osklen.com',quality:'Conteggio riportato'},
  {name:'Reserva',group:'Premium brasiliano',count:2922,price:444.04,currency:'BRL',scope:'Uomo adulto; liquidazione esclusa',coverage:'Perimetro selezionato',total:31.5,partial:null,drop:'Nuovi arrivi: 583 · collaborazioni: 456 · Sprint: 72',segments:'Perimetro: uomo adulto; portfolio con GO e Mini',lines:'Reserva · GO · Mini · Sprint',source:'https://www.usereserva.com',quality:'Conteggio riportato'}
];
export const categories = [['T-shirt',68],['Shorts',66],['Oggetti e lifestyle',61],['Cappotti / giacche',58],['Headwear',51],['Borse',45],['Camicie',17],['Pantaloni',13],['Calze',13],['Categorie non dettagliate',34]];
export const priceBands = [['Fino a 99',60],['100–199',44],['200–299',167],['300–499',112],['500–799',21],['800–1.199',6],['1.200 e oltre',16]];
export const collections = [['Go Out',67],['Home Video',45],['Verão 26',44],['Born to Travel',20],['Desce Mais Uma Taça',12]];
export const baseStats = {median:250,p75:400,max:1999,unavailable:34};
// Quote macro riportate separatamente: non inferite dalle categorie di dettaglio.
export const macroMix = [['Abbigliamento',53.3],['Accessori e oggetti',44.1],['Residuo non specificato (derivato)',2.6]];
export const dimensions = [
 ['Prodotto','Profondità del catalogo, categorie, famiglie e segmenti. Separare prodotto, variante e SKU prima di confrontare i volumi.'],
 ['Prezzo','Media del campione, mediana, fasce e massimo. Specificare valuta, mercato e trattamento delle promozioni.'],
 ['Cadenza','Collezioni, capsule, collaborazioni e nuovi arrivi. Il numero di prodotti attivi non ricostruisce il volume iniziale di un drop.'],
 ['Disponibilità','Indisponibilità totale e parziale della gamma taglie come metriche distinte. Uno snapshot non misura vendite o sell-through.'],
 ['Presenza digitale','Menu, pagine di collezione e territorio editoriale. I giudizi qualitativi richiedono esempi datati; in questa versione non si pubblicano valutazioni del feed social.']
];
export function index(value, baseline){return value == null || baseline == null || baseline <= 0 ? null : Math.round(value / baseline * 100);}
export function priceIndex(brand){return brand.currency === brands[0].currency ? index(brand.price,brands[0].price) : null;}
