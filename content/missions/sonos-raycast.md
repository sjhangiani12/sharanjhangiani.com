---
title: Sonos for Raycast
code: SONOS
id: M-03
kind: side
status: active
order: 3
summary: Change the volume and pick the rooms that play, from the keyboard.
launched: 2026-11-14
last_contact: 2026-11-14
repo: sonos-raycast
stack: [TypeScript, React, Raycast, UPnP]
---

## The mission

I could not control my Sonos speakers easily from my laptop. I wanted two things to be instant: change the volume, and pick the rooms that play.

![The Sonos Rooms list in Raycast](https://raw.githubusercontent.com/sjhangiani12/sonos-raycast/main/assets/rooms.png)

## What I built

- **A rooms list.** It shows each room, its volume, and what plays.
- **Volume keys.** Press the left and right arrow keys to change one room.
- **Type a number.** Type `30`, then press Enter, to set the volume.
- **Commands with no window.** Volume up, volume down, play or pause, and one toggle for each room. Each one can have a global hotkey.

## How it works

Each Sonos speaker has a local control service on port 1400. The extension finds one speaker with SSDP, and that speaker lists the others. There is no Sonos account and no cloud.

**Music wins over TV audio.** A soundbar on its TV input always reports that it plays. The volume keys change the soundbar only when no music plays.

## Limits

The Mac and the speakers must be on the same network. To pick new music, use the Sonos app.
