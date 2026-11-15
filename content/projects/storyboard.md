---
title: Storyboard
code: STORY
id: M-13
kind: side
status: archived
order: 13
summary: Storyboard a product feature in three rows. AI draws the customer scenes.
launched: 2026-01-20
last_contact: 2026-11-14
repo: storyboard
stack: [Next.js, React, Google Imagen, Vercel KV]
---

## What it is

A web app that makes a storyboard for a product feature. An AI model draws the scenes.

![A storyboard with three phases. Each phase has a customer frame, a product frame, and a service frame.](/media/storyboard/board.jpg)

*The app with a sample storyboard. The illustration frames are empty, because I ran it with no image key.*

## Why

A good feature story shows three things at the same time: what the customer feels, what the product shows, and what the service does behind it. Most specs show only the screens.

## What it does

A storyboard shows one feature as a sequence of phases, for example Discovery, Onboarding, and First Use. Each phase is a column with three frames.

| Frame | What it holds |
| --- | --- |
| **Customer** | What the person does and feels. An illustration shows the scene. |
| **Product** | The screens that the person sees. I upload the screenshots. |
| **Service** | The touchpoints and the processes behind the screens. |

## How it works

- **Illustrations.** Google Imagen draws each customer scene from a short description.
- **One style.** One style prompt applies to the full storyboard, so all the illustrations look alike. The default is warm, with earth tones.
- **Storage.** Vercel KV holds the storyboards. Vercel Blob holds the images.
- **The app** is Next.js and React, with shadcn/ui.

## Status

Storyboard was an experiment from January 2026. I do not work on it now.
