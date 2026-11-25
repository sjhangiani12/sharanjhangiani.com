---
title: Nightstand
code: NIGHT
id: M-02
kind: side
status: complete
order: 2
summary: A calm home screen, reader, and book delivery for a jailbroken Kindle.
launched: 2026-11-10
last_contact: 2026-11-10
repo: nightstand
stack: [TypeScript, Cloudflare Workers, Kindle, MCP]
---

## What it is

Nightstand is a new home screen, a reader, and a delivery service for a jailbroken Kindle Paperwhite. It turns the Kindle into a bedside screen.

<div class="shots">
  <img src="/media/nightstand/device-home.png" alt="The Nightstand home screen on a Kindle">
  <img src="/media/nightstand/device-library.png" alt="The library screen">
  <img src="/media/nightstand/device-reader.png" alt="The reader">
</div>

## Why

The stock Kindle home screen sells books. I wanted a calm screen next to my bed that helps me go to sleep and tells me about tomorrow.

I also wanted to send an article or a book to the Kindle with no Amazon step, no email, and no cable.

## What it does

| Screen | What it does |
| --- | --- |
| **Home** | The clock, the cover of my current book, the next four items in the library, and a strip with the first meeting of tomorrow, the alarm, and the weather. |
| **Tonight** | The calendar for tomorrow, a suggested alarm, the lamps, and a **Lights out** button. |
| **Light** | One lamp: the brightness and the Hue presets. |
| **Alarms** | Alarms on a Sonos speaker, for any date and time. |
| **Library** | Reading, Articles, Books, and Finished. Books on their way show a progress bar. |
| **Get a book** | A keyboard on the screen. I search, tap a result, and the book arrives. |
| **Reader** | A paged EPUB reader. Progress syncs to the server. |
| **Goodnight** | The lamps fade off in 10 seconds. Then the Kindle sleeps. |

<div class="shots">
  <img src="/media/nightstand/device-tonight.png" alt="The Tonight screen">
  <img src="/media/nightstand/device-getbook.png" alt="The Get a book screen">
  <img src="/media/nightstand/device-goodnight.png" alt="The Goodnight screen">
</div>

**The suggested alarm** is the first real meeting minus 75 minutes, kept between 7:00 and 9:00. A small model labels each event, so a "Focus time" block does not wake me early.

## How it works

There are three parts.

- **The Kindle app** is an HTML app. It runs in the web runtime that the Kindle already has.
- **The helper** is a very small HTTP server on the Kindle. It does what a web page cannot do: it talks to Hue and Sonos on the Wi-Fi, downloads books, and draws the lock screen.
- **The server** is a Cloudflare Worker with a D1 database and R2 storage. It builds the EPUB files, reads the calendar, and answers Claude over MCP.

Nothing connects into the Kindle. The Kindle reaches out to the server, so it needs no open port.

Each book passes a check before it reaches the Kindle. The server rejects files with DRM, the wrong book, samples, and broken EPUB files.

## Delivery

- **Articles.** I share a page from my phone. The server cleans it and makes an EPUB.
- **Books.** I ask Claude for a book, or I search on the Kindle.
- **Amazon books.** They have DRM. Nightstand shows them on the shelf, and a tap opens them in the Amazon reader. Nightstand never removes DRM.

## Limits

It runs each day on one device: a Kindle Paperwhite 4 on firmware 5.18.1.1.1. Other models can need changes.
