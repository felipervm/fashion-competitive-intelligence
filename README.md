# Fashion Competitive Intelligence

![Archivio moda immaginario: illustrazione editoriale generata con AI](assets/archive-hero.webp)

*Immagine concettuale generata con AI. Non rappresenta prodotti o sedi reali dei marchi analizzati.*

Caso di studio indipendente in italiano: un’interfaccia editoriale per leggere assortimenti, architetture di prezzo, disponibilità e collezioni di marchi fashion. Bolovo è il riferimento quantitativo; il perimetro comprende altri 12 marchi.

**Stato: edizione portfolio, con condivisione pubblica autorizzata dall’autore il 5 novembre 2026.** I valori sono aggregati storici trascritti da un rapporto HTML fornito dall’autore, che dichiara fonti di catalogo pubbliche. Non sono stati forniti CSV, snapshot, script di acquisizione o date per marchio. Questa edizione non rappresenta una nuova raccolta né il catalogo attuale. L’autorizzazione a condividere non risolve i limiti di verifica indicati.

## Scopo e lettura

Il progetto dimostra come trasformare un benchmark in uno strumento leggibile e interrogabile, mantenendo separati dato riportato, interpretazione e verifica necessaria. Non dimostra un aumento delle vendite o delle conversioni. Le implicazioni pubblicate sono ipotesi indipendenti; non riproducono raccomandazioni commerciali riservate.

I gruppi di confronto sono Sportswear / Performance, Streetwear, Outdoor / Lifestyle e Premium brasiliano. Le cinque dimensioni sono prodotto, prezzo, cadenza, disponibilità e presenza digitale. La presentazione comprende una copertina fotografica illustrativa, uno studio di materiali, una mappa visiva dei quattro gruppi e grafici in pannelli editoriali. Il sito contiene matrice filtrabile, schede per marchio, distribuzioni di categoria e prezzo, cluster di collezione, registro delle fonti e limiti metodologici.

## Avvio e tecnologie

Node.js 22 o successivo, HTML semantico, CSS responsive e JavaScript senza dipendenze esterne. Nessuna API, chiave, telemetria, libreria di grafici remota o font esterno. Non è necessario installare pacchetti.

```sh
npm test
npm run build
npm start
```

Aprire `http://127.0.0.1:4173`. `npm run build` genera `index.html` e la cartella ignorata `dist/`. La distribuzione statica contiene il sito e la documentazione, non gli strumenti o le eventuali cartelle locali riservate. I grafici e le tabelle sono già presenti nell’HTML: senza JavaScript restano leggibili tutte le schede; con JavaScript funzionano i filtri.

## Metodo e provenienza

1. Il rapporto descrive estrazione da pagine pubbliche, JSON-LD e interfacce pubbliche di catalogo, navigazione manuale e consultazione di profili social aperti. Non è possibile verificare qui gli strumenti effettivamente eseguiti.
2. Gli aggregati di catalogo, prezzo e disponibilità sono trascritti in `data.mjs`. Le distribuzioni operative riportate sono in `operations.json`. `PROVENIENZA.md` documenta campo, trasformazione e limite.
3. Gli indici sono calcolati come `valore / valore Bolovo * 100`, con arrotondamento all’intero più vicino. Base catalogo: 426; base prezzo: R$ 332,72. Non si calcolano indici di prezzo fra valute diverse.
4. Quote di categoria e fascia Bolovo usano 426 come denominatore. Le categorie dettagliate sommano 392: 34 record sono indicati come residuo non dettagliato. Non viene inventata una categoria commerciale per completarli.
5. Indisponibilità totale, indisponibilità parziale della gamma taglie e sale sono misure diverse. Sono rappresentate separatamente. Zero e dato mancante rimangono distinti.
6. I cluster possono sovrapporsi. I prodotti attivi in una collezione non sono il volume iniziale di un lancio e non permettono di ricostruire una frequenza annuale.

## Correzioni e scelte editoriali

- Chiarito il totale: 13 marchi, cioè 12 confronti più Bolovo.
- Ricalcolati gli indici dai valori di catalogo: Adidas 1.020 e Nike 715. Nel testo originale comparivano indici non coerenti con base 426. I conteggi non sono stati modificati.
- Corretta la resa delle percentuali: il grafico originario di categoria usava un campo numerico non coerente con l’unità visualizzata e poteva duplicare il simbolo `%`.
- Mantenute le medie di prezzo a precisione originale nella matrice; R$ 333 è solo l’arrotondamento del valore R$ 332,72 nella sintesi.
- Le distribuzioni estratte restano selezioni parziali; non sono rinormalizzate artificialmente al 100%.
- Esclusi i giudizi reputazionali, le inferenze non dimostrate sulle intenzioni dei marchi e i piani commerciali specifici della versione cliente. Gli aggregati di catalogo vengono conservati con la relativa incertezza.

## Identità visiva

Riferimento ispezionato: [rawdataclub.com](https://rawdataclub.com), 5 novembre 2026. Palette rilevata: nero `#090908`, carbonio `#151514`, grafite `#292825`, argento `#b8b8b3`, polvere `#c9bba9`, osso `#e8e2d8`, bianco `#f3f1ec`. Tipografia di sistema Arial / Helvetica, titoli editoriali ampi, microetichette, righe sottili e alternanza scuro/osso riprendono convenzioni esistenti. Nessun nuovo logo è stato creato. Due illustrazioni editoriali originali generate con AI — un archivio immaginario e uno studio di tessuti — accompagnano il contenuto con disclosure esplicita. Nessun prodotto illustrato viene attribuito ai marchi analizzati. Prompt e origine sono documentati in `assets/IMMAGINI.md`; nessun asset di terzi è copiato.

## Limiti

Mancano record grezzi e date di raccolta. Le fonti sono dichiarate nel rapporto, non certificate dai soli collegamenti ai domini. La terminologia originale alterna prodotto e SKU: qui si usa “record”. Campioni parziali, stime e perimetri completi non sono equivalenti. Valute, assortimenti e coperture differiscono. Non sono disponibili vendite, stock fisico, margini o risultati di canale. Una fotografia della disponibilità non prova domanda o sell-through. Nessun dato sintetico sostituisce osservazioni mancanti in questa edizione.

## Privacy e pubblicazione

Il repository di destinazione è [felipervm/fashion-competitive-intelligence](https://github.com/felipervm/fashion-competitive-intelligence). Al controllo iniziale risultava pubblico e vuoto. L’autore ha autorizzato il caricamento di questa edizione con le limitazioni dichiarate. Nessun deploy o attivazione di GitHub Pages è incluso.

Il pacchetto esclude il testo delle email, i contatti personali, i dettagli commerciali, il contesto di selezione professionale, il rapporto cliente integrale e i suoi metadati identificativi. Non vengono incluse credenziali. L’autore ha limitato l’ambito condivisibile ai dati di cataloghi pubblici: questo vincolo guida la selezione editoriale, ma non sostituisce la verifica della provenienza storica.

Prima di pubblicare, verificare la checklist in `PUBBLICAZIONE.md`, in particolare tracciabilità dei dati e diritto di riuso dell’elaborazione. Non aggiungere gli allegati originali, email, file `.env`, esportazioni private o cartelle di lavoro. Non è inclusa una licenza generale che conceda diritti sui dati o marchi di terzi.

**Progetto di portfolio indipendente.** La menzione di marchi e prodotti non implica endorsement, approvazione o affiliazione. I marchi appartengono ai rispettivi titolari. Questa edizione pubblica non attribuisce ai marchi la paternità delle interpretazioni.
