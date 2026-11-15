# sharanjhangiani.com

My personal site, plain and quiet. Each project has its own page.

## Add or change a project

Each project is one Markdown file in `content/projects/`. The file name is the URL: `content/projects/hum.md` becomes `/projects/hum`.

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

## What it is

Write the log here, in Markdown.
```

If a project has a `repo`, the site reads the date of the last push from GitHub one time each hour. `last_contact` is the fallback.

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
| `content/projects/*.md` | The projects. Images are in `public/media/`. |
| `lib/projects.ts` | Reads the Markdown files and the GitHub dates. |
| `app/page.tsx` | The home page. |
| `app/projects/[slug]/page.tsx` | The page of one project. |
| `app/layout.tsx` | The font and the page shell. |
| `app/globals.css` | All the styles. |
| `components/Clocks.tsx` | The sol count and the New York time. |
| `public/events/index.html` | The events calendar, one plain HTML file. |

The site is a Next.js app. All the pages are static today, so it can deploy to Vercel with no settings.
