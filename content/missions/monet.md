---
title: Monet
code: MONET
id: M-06
kind: side
status: nominal
order: 6
summary: A Claude plugin for solo GPs and small funds, by Cura.
launched: 2026-04-28
last_contact: 2026-05-04
repo: cura-claude-automation
stack: [Claude Code, Claude Cowork, Skills, MCP]
---

## The mission

A solo GP does the work of a full team. Monet gives that person a set of Claude skills for the repeated work of a fund.

Monet is free. It works alone, and it works better when the Cura MCP is connected.

## What I built

Monet is a plugin for Claude Cowork and Claude Code. Each skill does one job.

| Skill | What it does |
| --- | --- |
| `setup` | Drafts a fund profile from the connected tools. The GP reviews it. |
| `triage-inbound-deals` | Scores an inbound founder against the thesis, and drafts a reply. |
| `summarize-pending-work-this-week` | A Monday brief: late replies, quiet companies, owed introductions. |
| `prep-for-first-founder-call` | Context and sharp questions before a first call. |
| `run-full-diligence-on-company` | A company workup: founders, market, competitors, risks. |
| `gather-references-on-founder` | Finds references and drafts the outreach. |
| `write-investment-memo-for-deal` | An investment memo in the voice of the GP. |

## Install

```
/plugin marketplace add sjhangiani12/cura-claude-automation
/plugin install monet@cura-claude-automation
```
