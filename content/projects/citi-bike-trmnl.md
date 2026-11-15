---
title: Citi Bike for TRMNL
code: TRMNL
id: M-11
kind: side
status: nominal
order: 11
summary: Live Citi Bike station availability on a TRMNL e-ink display.
launched: 2026-01-26
last_contact: 2026-01-26
repo: citi_bike_trmnl
stack: [JavaScript, Cloudflare Workers, TRMNL, GBFS]
---

## What it is

A plugin for the TRMNL e-ink display. It shows the live state of one Citi Bike station.

## Why

Before I leave home, I want to know if the dock has a bike. I did not want to open an app for that. The TRMNL sits on a shelf and is always on.

## What it does

The display shows one station:

- classic bikes
- electric bikes
- total bikes
- free docks
- the time of the last report

## How it works

There are two parts.

- **A Cloudflare Worker.** It reads the public Citi Bike feed, keeps only my station, and returns a small JSON answer. It runs on the free tier.
- **The TRMNL plugin.** It holds the templates for each size of view. TRMNL asks the Worker for the data, then draws the screen.

The Worker returns this:

```json
{
  "station_name": "6 Ave & W 34 St",
  "classic_bikes": 5,
  "electric_bikes": 3,
  "total_bikes": 8,
  "docks_available": 12,
  "last_reported": "10:30 AM EDT"
}
```

A small script finds the ID of a station from its name.
