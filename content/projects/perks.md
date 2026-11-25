---
title: Perks
code: PERKS
id: M-17
kind: side
status: active
order: 1.5
summary: A monitor for credit card perks, built by my own software factory.
launched: 2025-11-01
last_contact: 2026-11-24
site: https://perks.money
stack: [TypeScript, Next.js, Postgres, Plaid, Claude Code, Hetzner]
posts:
  - url: https://x.com/sharanjhangiani/status/2124721580811198606
    date: 2026-11-23
    text: |
      last week i setup a lil baby software factory via Hetzner + a new claude account

      told it to work on building out Perks, a project i've wanted to build for a long long time and to not ask me for anything

      tried it today..  after a few messages throughout the week... not bad!!!
---

## What it is

Perks Money is a quiet monitor for credit card perks. It sends me a text when a perk needs attention. Otherwise, it stays silent.

My cards have monthly and yearly credits for Uber, Resy, Lululemon, hotels and more. I kept forgetting to use them.

## How it works

The first step is an audit. I link a card, and Perks shows what I used and what I missed last year.

After that, Perks watches the card. When a credit is about to expire, it texts me.

## The factory

A software factory builds Perks. It runs on a small Hetzner server, with its own Claude account and its own GitHub account.

The factory picks its own work, opens pull requests, merges them when the checks pass, and deploys. It does not ask me for anything.

It has three parts:

- **A cron job** starts a new run on a schedule.
- **A stateless agent** does the work. It keeps nothing in memory between runs.
- **A ledger** on the server keeps the queue, the scores and the decisions, so the next run knows where to continue.

The factory scores each change against the real statement credits on my cards. A change that makes the score worse does not land.

## Log

- 2026-11-14: Set up the factory and gave it Perks as its first project.
- 2026-11-23: Tried Perks after one week of factory work. The factory had merged about 150 pull requests.
