---
title: Breadcrumb
code: CRUMB
id: M-07
kind: side
status: nominal
order: 7
summary: See every message, tool call, and response from an AI conversation in Slack.
launched: 2026-01-26
last_contact: 2026-03-01
repo: breadcrumb
stack: [TypeScript, Slack, Vercel AI SDK, npm]
---

## The mission

When an AI feature is new, the fastest way to learn is to read real conversations. Most tracing tools hide them behind a dashboard that nobody opens.

Breadcrumb puts each conversation in a Slack thread. The team sees each message, tool call, and response where it already works.

## What I built

- **A small library.** Start a trace, log the events, and end the trace.
- **A Slack sink.** Each trace becomes one thread in a channel.
- **Adapters for the Vercel AI SDK.** Wrap `streamText`, and the trace fills in with no other code.
- **A setup command.** `npx breadcrumb slack` creates the Slack app and saves the config.

## Use it

```sh
npm install breadcrumb-chat
npx breadcrumb slack
```
