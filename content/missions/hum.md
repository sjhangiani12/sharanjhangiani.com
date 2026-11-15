---
title: Hum
code: HUM
id: M-08
kind: side
status: nominal
order: 8
summary: A macOS menu bar app that names the song that plays near you.
launched: 2026-02-08
last_contact: 2026-02-08
repo: hum
stack: [Swift 6, SwiftUI, ShazamKit, macOS]
---

## The mission

I wanted Shazam on my Mac, one click away, with a record of each song.

## What I built

- **One click.** Click the music note in the menu bar. Hum listens for a few seconds and names the song.
- **Copy and search.** One click copies the title and the artist. One more opens the song in Spotify.
- **A log.** Hum writes each song to a Markdown file, with the time, the album, and the genres.
- **The last five songs.** They stay in the menu.
- **No dock icon.** Hum lives only in the menu bar.

## How it works

Hum uses ShazamKit to match audio from the microphone against the Shazam catalog. The interface is SwiftUI in an `NSPopover`.

Hum was the model for the Sonos extension: one small tool, always one key or one click away.
