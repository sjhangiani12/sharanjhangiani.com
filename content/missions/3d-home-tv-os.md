---
title: 3D Home TV OS
code: HOME
id: M-04
kind: side
status: active
order: 4
summary: My home as the home screen of my TV, with live lights, subway, and Citi Bike.
launched: 2026-10-25
last_contact: 2026-11-07
repo: 3d-home-tv-os
stack: [TypeScript, Three.js, Android TV, Philips Hue, Sonos]
---

## The mission

A TV home screen is full of ads and suggestions. I wanted mine to show my home and my street.

This is my fork of [Rod292/3d-home-tv-os](https://github.com/Rod292/3d-home-tv-os). That project turns a scan of a home into a live 3D model, and makes the model the home screen of a Google TV.

## What my version shows

- **The block.** A live pixel-art model of my street, with traffic, people, and the weather.
- **The subway.** The nearest station, with live train times from the MTA feed.
- **Citi Bike.** Two docks, with live bike counts.
- **My apartment in 3D.** The lamps in the model match the real Hue lamps. I turn a lamp on from the remote, and it turns on in the room and in the model.
- **Sonos.** A sign shows what plays. A music panel has play, pause, skip, and a volume bar for each room.

## How it works

A bridge service runs on a machine at home. It reads Hue, Sonos, the MTA feed, and the Citi Bike feed, and gives the TV one live API. The TV launcher shows the 3D model, a lights panel, and a dock of apps.
