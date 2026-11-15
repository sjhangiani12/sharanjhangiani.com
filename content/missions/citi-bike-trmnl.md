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

## The mission

Before I leave home, I want to know if the dock has a bike. I did not want to open an app for that.

## What I built

A plugin for the TRMNL e-ink display. It shows one station:

- classic bikes
- electric bikes
- free docks
- the time of the last report

## How it works

A free Cloudflare Worker reads the Citi Bike feed and keeps only my station. The TRMNL plugin shows the result in each size of view.
