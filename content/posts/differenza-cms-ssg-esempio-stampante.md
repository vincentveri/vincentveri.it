+++
date = '2026-10-25T14:14:37+01:00'
draft = false
title = 'Spiego la differenza tra CMS e SSG con una stampante'
summary = 'Pro e contro delle due tecnologie'
+++

In molti conoscono la sigla CMS; ancora più persone conoscono WordPress, Joomla o Drupal. I non addetti ai lavori difficilmente sanno spiegare cosa si intende per Static Site Generator (SSG). Oggi vediamo insieme le differenze, i vantaggi e gli svantaggi delle due tecnologie prendendo come riferimento una stampante.

Il CMS è come una stampante collegata a un computer che stampa le pagine solo su richiesta, al volo e con informazioni sempre aggiornate. Immaginiamo di aver bisogno di un certificato stampato su carta e che il documento sia salvato sul PC. Stampandolo avremmo immediatamente il certificato aggiornato, attendendo soltanto il tempo necessario per recuperare il file e stamparlo.

Un SSG (come Astro, Jekyll o Hugo) è come una copisteria ben organizzata: ha pile di fogli già stampati, ordinati e pronti per essere recuperati. Se ci serve il certificato, basta prenderlo dalla pila. Se chi lo recupera sa già dove si trova, il recupero è istantaneo, senza alcuna attesa.

Proviamo ad aggiungere un dettaglio: il nostro certificato ha un'informazione sbagliata, per esempio la data di emissione. Nel primo caso basterebbe modificare il file originale e stamparlo nuovamente, e la modifica sarebbe disponibile a chiunque voglia la stessa stampa; nel secondo caso bisognerebbe aggiornare l'informazione e stampare nuovamente *tutte* le pagine che contengono quell'informazione, per poi recuperare la nuova copia (quest'ultimo processo si chiama *build*).

Se 10.000 persone hanno bisogno dello stesso certificato, nel caso del CMS dovrebbero in teoria aspettare la stampa di ogni foglio per ottenere il proprio (nella realtà il sistema gestisce richieste multiple, ma rendiamo le cose semplici). Nel caso dell'SSG ogni persona avrebbe già la copia pronta, già stampata, con un'attesa minima.

I CMS sono strumenti che permettono di gestire i contenuti di un sito in maniera guidata, attraverso schermate dotate di moduli da compilare e che normalmente non richiedono alcuna competenza specifica (come ad esempio la conoscenza di HTML). Gli SSG invece sono strumenti in grado di analizzare la struttura del sito, solitamente codificata e rispettosa di regole rigorose su sintassi, nomenclature, estensioni e organizzazione dei file in cartelle, per poi *buildare* (creare una versione statica del) il sito, pronto per essere caricato sul server.

Nei CMS come WordPress o Joomla la gestione di autenticazione, ruoli e permessi e i componenti esterni di terze parti sono nativi e semplici da utilizzare. La modifica di un'informazione richiede solo il click del pulsante "Salva". Negli Static Site Generator come Hugo o Astro invece tutto è suddiviso in file e cartelle di codice. Una modifica richiede obbligatoriamente il build del progetto e il deploy sul server di produzione (cose che affronteremo in un altro articolo).

## Quale scegliere?

Non esiste una tecnologia migliore in assoluto, esiste quella più adatta al lavoro da fare. Se il sito cambia ogni giorno e chi lo gestisce non ha competenze tecniche, il CMS è la scelta naturale: si modifica, si salva, è online. Se invece i contenuti cambiano di rado e contano velocità, sicurezza e costi di hosting ridotti, un SSG ti consegna fogli già stampati e pronti, senza database da attaccare e senza attese. Il prezzo da pagare è un po' di dimestichezza con il codice. La vera domanda, quindi, non è "quale stampante è migliore?", ma "quante volte, e a chi, devo consegnare quel certificato?".
