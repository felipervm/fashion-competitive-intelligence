# Provenienza e trasformazioni

## Livelli di evidenza

**Dato riportato:** aggregato presente nel rapporto HTML ricevuto. Il rapporto dichiara fonti pubbliche. Non equivale a verifica indipendente.

**Dato derivato:** calcolo ripetibile sui valori riportati, per esempio indice o quota percentuale. L’esattezza del calcolo non certifica il dato iniziale.

**Interpretazione:** ipotesi formulata per il portfolio, accompagnata dalla verifica necessaria. Nessuna intenzione commerciale viene attribuita a un marchio come fatto.

## Registro dei campi

| Campo | Origine nel rapporto | Trasformazione | Limite |
| --- | --- | --- | --- |
| Conteggio per marchio | Matrice comparativa e aggregati JavaScript | Trascrizione; nessuna modifica del conteggio | Unità prodotto/SKU non uniforme; copertura differente |
| Prezzo medio | Matrice comparativa e aggregati JavaScript | Valore numerico originale; formato italiano e BRL | Mancano prezzi per record e criteri completi sulle promozioni |
| Indice scala | Conteggio / 426 | Ricalcolo con arrotondamento | Non misura quota di mercato |
| Indice prezzo | Prezzo medio / 332,72 | Solo valuta BRL; mancante resta mancante | Il mix non è normalizzato per categoria |
| Categorie Bolovo | Array di categorie | Conteggio / 426; residuo 34 | Il residuo non è una categoria osservata |
| Fasce Bolovo | Array di prezzo | Conteggio / 426 | Periodo di prezzo non verificabile |
| Cluster Bolovo | Array delle collezioni | Conteggi conservati | Sovrapposizioni possibili |
| Totale / parziale | Descrizioni della matrice | Campi separati; nessuna aggregazione | Denominatori e livello variante non uniformemente documentati |
| Categorie e prezzi per marchio | Schede operative JavaScript | Etichette italiane; valori e quote conservati | Selezioni parziali e approssimazioni restano tali |
| Collezioni / drop | Matrice comparativa | Nomi propri mantenuti, testo descrittivo tradotto | Volumi attivi e stime non ricostruiscono il lancio iniziale |
| Segmenti e linee | Tabella di portfolio | Traduzione e sintesi descrittiva | Nessuna verifica delle linee attuali |
| Domini fonte | Piè di pagina del rapporto | Collegamenti HTTPS ai cataloghi dichiarati | Non sono gli URL storici delle catture |
| Identità visiva | Ispezione del sito Raw Data Club del 5 novembre 2026 | Token cromatici e convenzioni tipografiche | Fonte estetica, non dei valori di catalogo |

## Materiali mancanti

CSV per marchio; URL delle pagine effettivamente acquisite; timestamp; versione degli script; definizioni prodotto/variante; regole di deduplicazione; basi delle percentuali di disponibilità; regole sui prezzi promozionali; denominatori completi delle distribuzioni operative. Questi elementi devono essere recuperati o il benchmark va ricostruito con una nuova raccolta pubblica datata.

Non retrodatare una nuova raccolta per farla coincidere con il rapporto. Se i numeri cambiano, pubblicare una nuova edizione con confronto e date esplicite.
