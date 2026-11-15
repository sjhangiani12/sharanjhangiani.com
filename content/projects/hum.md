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

## What it is

A macOS menu bar app that names the song that plays near me. It is Shazam, one click away, with a record of each song.

## Why

I hear a song in a cafe or in a video, and I want its name before it ends. On a Mac, that took too many steps. I also wanted a list of each song I found.

## What it does

- **One click.** I click the music note in the menu bar. Hum listens for a few seconds and names the song.
- **Copy.** One click copies the title and the artist.
- **Spotify.** One click opens a Spotify search for the song.
- **The last five songs** stay in the menu.
- **No dock icon.** Hum lives only in the menu bar.

## The log

Hum writes each song to a Markdown file in my Documents folder.

```md
## Bohemian Rhapsody — Queen
- **Recognized**: 2026-02-08 21:30:45
- **Album**: A Night at the Opera
- **Genres**: Rock, Classic Rock
- **ISRC**: GBUM71029604
```

## How it works

- **ShazamKit** matches audio from the microphone against the Shazam catalog.
- **AVAudioEngine** captures the audio.
- **SwiftUI** draws the menu, inside an `NSPopover` on an `NSStatusItem`.
- The code uses Swift 6 strict concurrency.

Hum was the model for the Sonos extension: one small tool, always one key or one click away.
