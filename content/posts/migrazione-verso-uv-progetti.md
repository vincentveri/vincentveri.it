+++
date = '2026-11-09T19:57:49+01:00'
draft = false
title = '5 motivi per passare a uv come gestore di pacchetti python'
summary = 'Tanti strumenti racchiusi in un unico, velocissimo gestore.'
+++

Fino a qualche settimana fa utilizzavo il classico workflow pyenv, venv e pip per gestire ambienti virtuali con versioni specifiche di python e per gestire i pacchetti.

Ho scoperto e iniziato ad usare per tutti i miei progetti **uv**, gestore di pacchetti sviluppato da Astral in Rust.

Le caratteristiche principali sono:

- **velocità**: installazione e risoluzione delle dipendenze davvero rapide, dalle 10 alle 100 volte più veloce di <span class="ch">pip</span>
- **gestione semplificata delle versioni di python**: con <span class="code-highlight">uv python install 3.12</span> scarica e gestisce interpreti senza pyenv o installazioni di sistema
- **cache globale condivisa**: i pacchetti vengono memorizzati una volta sola e collegati tra i progetti tramite hardlink o copy-on-write, risparmiando tempo e spazio
- **distribuzione tramite binario**: zero dipendenze da Python preinstallato
- **compatibilità con standard**: lavora con <span class="ch">pyproject.toml</span> per integrarsi con i progetti esistenti

## Consigli utili

Crea un nuovo progetto eseguendo <span class="ch">uv init</span> che crea un file <span class="ch">pyproject.toml</span> e usa <span class="ch">uv add PACCHETTO</span> per aggiungere una dipendenza, aggiornando automaticamente <span class="ch">uv.lock</span>. Il virtualenv <span class="ch">.venv/</span> viene creato da <span class="ch">uv sync</span>. Se gestisci dipendenze per lo sviluppo usa aggiungendo il flag --dev <span class="ch">uv add --dev</span>.

In sostanza tempi di CI e setup dei nuovi ambienti più rapidi; lockfile per ambienti riproducibili e comandi semplici per installazione e dipendenze.