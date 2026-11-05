# Revisione prima della pubblicazione

L’autore ha autorizzato la condivisione pubblica di questa edizione il 5 novembre 2026, dopo aver ricevuto le limitazioni di provenienza. L’autorizzazione riguarda il repository, non il deploy del sito. I controlli storici elencati restano da completare e non vengono dichiarati risolti.

- [ ] Confermare che gli aggregati selezionati derivino esclusivamente da cataloghi pubblici e che la loro rielaborazione sia condivisibile. Non pubblicare piani cliente o corrispondenza.
- [ ] Recuperare date, CSV e URL delle catture; verificare i conteggi, i prezzi e le percentuali. Se non disponibili, decidere esplicitamente se pubblicare come ricostruzione storica non verificata oppure sostituire l’edizione con una nuova raccolta documentata.
- [ ] Confermare definizioni di prodotto/SKU e denominatori totale/parziale. Documentare trattamento di sale e liquidazione.
- [ ] Revisionare nomi dei segmenti, copertura per marchio e citazioni. I domini non dimostrano i valori storici.
- [ ] Controllare licenze e diritto di riuso del codice, della presentazione e dei dati. La natura pubblica della fonte non equivale automaticamente a una licenza di riuso dell’elaborazione.
- [ ] Eseguire `npm test` e `npm run build`; verificare l’anteprima desktop, mobile, tastiera e stampa.
- [ ] Ispezionare `git status`, `git diff --cached` e la lista dei file. Nessun allegato, email, contatto personale, segreto, cartella di lavoro o file locale privato deve entrare nel commit.
- [ ] Usare un’identità Git con email noreply configurata dall’autore per evitare contatti personali nei metadati del commit. Non riusare credenziali in URL.
- [ ] Solo dopo la revisione: creare un commit e fare push al repository indicato. Configurare GitHub Pages separatamente e solo se desiderato. Non sono presenti workflow di deploy automatico.

Repository di destinazione: https://github.com/felipervm/fashion-competitive-intelligence

La cartella `dist/` è generata e ignorata da Git. Può essere usata per un hosting statico dopo l’approvazione. Nessuna configurazione di hosting o dominio viene modificata dalla build.
