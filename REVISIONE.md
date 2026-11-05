# Inventario e controllo di condivisione

## Materiale ricevuto

Un testo contenente corrispondenza privata e un rapporto HTML completo in portoghese. Il rapporto contiene CSS e JavaScript incorporati, otto viste (sintesi, perimetro, riferimento, confronto, gruppi, insight, azioni, metodologia), tabelle di portfolio e confronto, grafici a barre e schede operative. Non sono stati consegnati CSV, script di raccolta, immagini locali, configurazione di build o test preesistenti.

Il repository GitHub indicato era pubblico e vuoto: nessuna cronologia o file remoto da ripulire. L’audit riguarda quindi l’allegato ricevuto e il nuovo pacchetto locale; non certifica file non forniti o archivi esterni.

## Pacchetto preparato

| File | Funzione |
| --- | --- |
| `index.html` | Sito italiano generato, con grafici e tabelle statici |
| `assets/` | Due immagini WebP originali generate con AI e registro dei prompt |
| `styles.css` | Identità visiva derivata dal riferimento Raw Data Club, responsive e stampa |
| `app.js` | Filtri di gruppo e selezione delle schede |
| `data.mjs` | Aggregati storici, registro dei domini, definizioni e indici |
| `operations.json` | Distribuzioni operative trascritte, etichette tradotte |
| `scripts/build.mjs` | Generazione ripetibile senza servizi esterni |
| `scripts/serve.mjs` | Server di anteprima sul solo loopback locale |
| `tests/analysis.test.mjs` | Coerenza dei calcoli e ricerca di pattern sensibili |
| `tests/build.test.mjs` | Build, ancore, risorse e completezza delle schede |
| `README.md` | Scopo, metodo, tecnologia e limiti |
| `PROVENIENZA.md` | Origine dei campi, trasformazioni e dati mancanti |
| `PUBBLICAZIONE.md` | Controlli da approvare prima di push e hosting |
| `VERIFICA.md` | Risultati e limiti delle verifiche |
| `.gitignore`, `package.json` | Esclusioni e comandi del progetto |

`dist/` è derivata dalla build e ignorata da Git. Le cartelle di lavoro e l’allegato originale restano fuori dalla cartella pubblicabile.

## Contenuti esclusi

Email, nomi dei destinatari, indirizzi personali, trattative, riferimenti a compensi o vantaggi commerciali, contesto di colloquio e testo di riservatezza. Non sono copiati screenshot, firme, link Gmail, URL privati o metadati dell’allegato. Il nome personale presente nel footer originario non è incluso. Il rapporto integrale resta nell’allegato originale senza modifiche.

Le raccomandazioni specifiche della versione cliente e i giudizi qualitativi sui punti deboli dei marchi non entrano nella versione pubblica. Vengono conservati gli aggregati dichiarati di catalogo, le distribuzioni, il perimetro, il metodo e le limitazioni. Le implicazioni editoriali sono esplicitamente nuove ipotesi indipendenti.

Nessun pattern riconoscibile di chiave API o chiave privata è stato rilevato nel materiale sorgente. Il controllo è euristico e include scansione del pacchetto di output: non è una certificazione dell’assenza di ogni possibile segreto.

## Decisioni ancora manuali

L’autore ha limitato l’ambito ai dati di cataloghi pubblici. Resta necessario confermare la provenienza effettiva degli aggregati, il diritto di condividere l’elaborazione e l’accettabilità di pubblicare valori storici senza snapshot. Il codice non effettua push, deploy o invii a terzi. Il progetto non introduce dati sintetici mascherati da osservazioni.
