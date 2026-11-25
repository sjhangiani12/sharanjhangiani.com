---
title: 3D Home TV OS
code: HOME
id: M-04
kind: side
status: complete
order: 4
summary: My home as the home screen of my TV, with live lights, subway, and Citi Bike.
launched: 2026-10-25
last_contact: 2026-11-07
repo: 3d-home-tv-os
stack: [TypeScript, Three.js, Android TV, Philips Hue, Sonos]
---

## What it is

The home screen of my TV is a live model of my street and my apartment. It is my fork of [Rod292/3d-home-tv-os](https://github.com/Rod292/3d-home-tv-os).

The original project turns a scan of a home into a live 3D model, and makes that model the home screen of a Google TV.

![The block: a pixel-art street at night, with the subway times, two Citi Bike docks, the lights, and a dock of apps](/media/3d-home-tv-os/block.jpg)

*The block, with the generic street and mock data. My own street stays private.*

## Why

A TV home screen is full of ads and "recommended for you" rows. I wanted mine to show things that are true about my home right now: the lights, the music, the next train.

## What it does

- **The block.** A live pixel-art model of my street, with traffic, people, and the weather.
- **The subway.** The nearest station, with live train times from the MTA feed.
- **Citi Bike.** Two docks, with live bike counts.
- **My apartment in 3D.** The lamps in the model match the real Hue lamps. I turn a lamp on from the remote, and it turns on in the room and in the model.

![A 3D apartment at night, with one lamp on and the TV on](/media/3d-home-tv-os/apartment.jpg)

*The demo apartment that comes with the project.*
- **Sonos.** A sign next to the house shows what plays, with the cover as pixel art. A music panel has play, pause, skip, and a volume bar for each room.
- **A dock of apps.** The TV still opens the usual apps.

## How it works

| Part | What it does |
| --- | --- |
| **The scan** | An iPhone with LiDAR scans the rooms, the walls, and the furniture. |
| **The model** | A low-poly model of the home, which I edit in the browser. |
| **The bridge** | A service on a machine at home. It reads Hue, Sonos, the MTA feed, and the Citi Bike feed, and gives the TV one live API. |
| **The launcher** | An Android TV app that replaces the home screen. It shows the block, the 3D model, the lights panel, and the dock. |

The stock Google TV home stays on the TV as a fallback. If the launcher fails, the Home key goes back to Google TV.

## Privacy

The scan is the inside of my home. The scans, the scene, the tokens, and the device config stay out of git.
