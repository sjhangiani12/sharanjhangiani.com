---
title: Oura Ring MCP
code: OURA
id: M-10
kind: side
status: complete
order: 10
summary: An MCP server that gives an AI assistant my sleep, readiness, and activity data.
launched: 2026-01-24
last_contact: 2026-01-30
repo: oura-ring-mcp
stack: [TypeScript, MCP, Oura API]
---

## What it is

An MCP server that connects an AI assistant to my Oura Ring. The assistant can read my sleep, readiness, activity, heart rate, and stress.

## Why

My ring knows how I slept. The Oura app shows it as charts. I wanted to ask a question in plain words and get an answer.

## What it does

I ask things like these:

- "Get my health report for today."
- "How was my readiness yesterday?"
- "What are my trends this week?"

The server gives the assistant these tools.

| Tool | What it returns |
| --- | --- |
| `get_daily_report` | Sleep, readiness, activity, and stress for one day. |
| `get_sleep_data` | Sleep stages, HRV, and heart rate. |
| `get_readiness_data` | The readiness score and what moved it. |
| `get_activity_data` | Steps, calories, and active time. |
| `get_heart_rate` | Heart rate readings for a period. |
| `get_stress_data` | Stress and recovery for each day. |
| `get_workouts` | Workout sessions. |
| `get_weekly_trends` | A summary of 7 days. |

## How it works

The server is TypeScript. It reads the Oura API with a personal access token, which stays in an environment variable. It runs on my machine, or on Smithery.
