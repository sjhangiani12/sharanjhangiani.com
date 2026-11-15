# sharanjhangiani.com

My personal site, in the style of a mission control room. Each project is a "mission" with its own page.

## Add or change a mission

Each mission is one Markdown file in `content/missions/`. The file name is the URL: `content/missions/hum.md` becomes `/missions/hum`.

```md
---
title: Hum
code: HUM            # the short name on the go / no-go row
id: M-08
kind: side           # primary, side, or past
status: nominal      # active, nominal, complete, or archived
order: 8             # the position on the mission board
summary: One line for the board.
launched: 2026-02-08
last_contact: 2026-02-08
repo: hum            # optional: the GitHub repository name
site: https://...    # optional
stack: [Swift, SwiftUI]
---

## The mission

Write the log here, in Markdown.
```

If a mission has a `repo`, the site reads the date of the last push from GitHub one time each hour. `last_contact` is the fallback.

## Run it

You need Node 20 or later and pnpm.

```sh
pnpm install
pnpm dev
```

Then open http://localhost:3000.

## How it works

| File | Purpose |
| --- | --- |
| `content/missions/*.md` | The missions. |
| `lib/missions.ts` | Reads the Markdown files and the GitHub dates. |
| `app/page.tsx` | Mission control: the home page. |
| `app/missions/[slug]/page.tsx` | The page of one mission. |
| `app/layout.tsx` | The top bar, the clocks, and the footer. |
| `app/globals.css` | All the styles. |
| `components/Clocks.tsx` | The UTC, NYC, and sol clocks. |
| `public/events/index.html` | The events calendar, one plain HTML file. |

The site is a Next.js app. All the pages are static today, so it can deploy to Vercel with no settings.
