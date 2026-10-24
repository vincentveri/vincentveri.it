+++
date = '2026-10-24T17:43:59+02:00'
draft = true
title = 'Refactor Sito Web'
summary = 'Perché ho abbandonato Next.js in favore di Hugo'
+++
## Introduzione

Abbandono Next.js e passo a Hugo, un potente tool che ho utilizzato per alcuni progetti personali e con cui mi sono trovato egregiamente. L'idea è quella di avere un sito statico, veloce e senza troppe distrazioni: focus sulla sostanza, fornendo informazioni e consigli utili ad appassionati di tecnologia, foto e video legati allo sport.

In questo periodo dove alcune vulnerabilità PHP hanno scosso il mondo intero, costringendo istituzioni e governi a buttare giù i propri siti, ho scelto di mantenere l'idea di non avere alcun CMS dietro e scrivere contenuti in Markdown.

La curva di apprendimento di Hugo è abbastanza ripida, ma per creare un sito di piccola/media entità penso sia un buon compromesso. Spinto dalla curiosità, ho provato Astro come SSG ma il fatto di basare l'intera codebase su JS o TS non mi garbava.

Il template che ho realizzato non ha dipendenze da librerie CSS o JS, stile plain e js minimal. Ripeto: build and ship fast. Non mi interessa se è brutto, basta che sia utile e facile da gestire.
