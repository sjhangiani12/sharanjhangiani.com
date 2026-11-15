---
title: Nightstand
code: NIGHT
id: M-02
kind: side
status: active
order: 2
summary: A calm home screen, reader, and book delivery for a jailbroken Kindle.
launched: 2026-11-10
last_contact: 2026-11-10
repo: nightstand
stack: [TypeScript, Cloudflare Workers, Kindle, MCP]
---

## The mission

The stock Kindle home screen sells books. I wanted a bedside screen that helps me go to sleep.

Nightstand replaces the home screen of a jailbroken Kindle Paperwhite. It also has its own reader and its own delivery, so nothing goes through Amazon.

![The Nightstand home screen on a Kindle](https://raw.githubusercontent.com/sjhangiani12/nightstand/main/shots/device-home.png)

## What I built

- **A home screen.** It shows a clock, my current book, and the calendar for tomorrow.
- **Lights out.** One button turns off the Hue lamps and says goodnight.
- **A Sonos alarm.** The screen suggests an alarm from the first event of tomorrow.
- **A reader.** Books and articles open in the Nightstand reader, not in the stock one.
- **Delivery.** I send an article from my phone, or I ask Claude for a book. The server makes a clean EPUB, and the Kindle pulls it over Wi-Fi.
- **A photo lock screen.**

## How it works

A small server runs on the free tier of Cloudflare. The Kindle asks the server for new items. An MCP server lets Claude send books and articles to the Kindle.

## Limits

It runs each day on one device: a Kindle Paperwhite 4 on firmware 5.18.1.1.1. It handles DRM-free books only.
