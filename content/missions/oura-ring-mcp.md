---
title: Oura Ring MCP
code: OURA
id: M-10
kind: side
status: nominal
order: 10
summary: An MCP server that gives an AI assistant my sleep, readiness, and activity data.
launched: 2026-01-24
last_contact: 2026-01-30
repo: oura-ring-mcp
stack: [TypeScript, MCP, Oura API]
---

## The mission

My Oura Ring knows how I slept. I wanted to ask an assistant about it in plain words.

## What I built

An MCP server that reads the Oura API with a personal access token. It gives the assistant these tools:

- **A daily health report.** Sleep, readiness, activity, and stress for one day.
- **Sleep.** Stages, HRV, heart rate, and efficiency.
- **Readiness.** The recovery score and what moved it.
- **Activity and workouts.** Steps, calories, and sessions.
- **Heart rate.** Readings at 5-minute intervals.
- **Weekly trends.** A summary of 7 days.
