+++
date = '2026-10-24T17:43:59+02:00'
draft = false
title = 'Nuova veste, nuovo scheletro del blog'
summary = 'Abbandono Next.js in favore di Hugo, non il cocktail.'
+++
## Introduzione

Abbandono Next.js e passo a Hugo, un potente tool che ho utilizzato per alcuni progetti personali e con cui mi sono trovato egregiamente. L'idea è quella di avere un sito statico, veloce e senza troppe distrazioni: focus sulla sostanza, fornendo informazioni e consigli utili ad appassionati di tecnologia, foto e video legati allo sport.

In questo periodo dove alcune vulnerabilità PHP (note come PHP2Shell, identificate con i codici CVE-2026-109618 e CVE-2026-109619, che presentano un livello di gravità pari a 9,2 su 10) hanno scosso il mondo intero, costringendo istituzioni e governi a buttare giù i propri siti, ho scelto di non fare uso di alcun CMS e di scrivere tutto in Markdown.

La curva di apprendimento di Hugo è abbastanza ripida, ma per creare un sito di piccola/media entità penso sia un buon compromesso. Spinto dalla curiosità, ho provato Astro come SSG ma il fatto di basare l'intera codebase su JS o TS non mi garbava.

Il template che ho realizzato non ha dipendenze da librerie CSS o JS, stile plain e js minimal. Ripeto: build and ship fast. Non mi interessa se è brutto, basta che sia utile e facile da gestire. Il deploy avviene su Vercel, mentre tutta la parte di gestione DNS risiede su CloudFlare.

Ho notato che a volte aggiungere livelli di complessità nel processo, rallenta e inibisce il pensiero creativo: aggiornamenti, gestione dell'autenticazione, plugin per aggiungere anche il più semplice tracking code per Analytics: totalmente inutili. 

Prendo appunti su Notion e sul registratore vocale dell'iPhone quando mi trovo in macchina o durante le passeggiate di salute. Ed è un metodo che a mio avviso funziona molto bene.

Vediamo dove mi porterà questo nuovo progetto.