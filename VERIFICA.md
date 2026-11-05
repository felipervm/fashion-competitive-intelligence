# Verifiche eseguite

- `npm test`: sei test superati su calcoli, distribuzioni, disponibilità, pattern sensibili e build.
- `npm run build`: completata senza dipendenze esterne.
- Anteprima nel browser: pagina italiana caricata, CSS e JavaScript attivi; 28 grafici, una figura editoriale, due immagini caricate e 13 schede.
- Filtro Streetwear: sette righe visibili incluso il riferimento; messaggio di stato aggiornato.
- Selezione Patagonia e PIET: una sola scheda visibile; unità USD e riferimenti di prezzo BRL distinti dalle percentuali.
- Navigazione per ancore e ritorno all’inizio verificati.
- Viste desktop, 390 px e 768 px ispezionate; nessun overflow orizzontale del documento rilevato. Le tabelle e l’indice hanno scorrimento interno.
- Nessun errore di console rilevato nel flusso verificato.
- Ancore, risorse locali e ampiezze dei grafici controllate automaticamente. Dati mancanti, zero e metriche parziali testati separatamente.

Sono predisposti focus visibile, link per saltare al contenuto, etichette dei controlli, intestazioni di tabella, tabelle scorrevoli accessibili da tastiera, valori testuali per ogni barra, riduzione delle animazioni e CSS di stampa. Non è stato effettuato un audit completo con screen reader né un collaudo esaustivo su tutti i browser o della stampa PDF.

Queste verifiche certificano il comportamento del pacchetto controllato, non l’esattezza storica dei dati di origine. Nessun test precedente era disponibile nel materiale fornito.
