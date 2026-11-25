---
title: Breadcrumb
code: CRUMB
id: M-07
kind: side
status: complete
order: 7
summary: See every message, tool call, and response from an AI conversation in Slack.
launched: 2026-01-26
last_contact: 2026-03-01
repo: breadcrumb
stack: [TypeScript, Slack, Vercel AI SDK, npm]
---

## What it is

A small TypeScript library that sends each AI conversation in a product to a Slack thread. The team sees each message, tool call, and response.

![The Breadcrumb site, with a demo of one trace in a Slack channel](/media/breadcrumb/site.png)

## Why

When an AI feature is new, the fastest way to learn is to read real conversations. Most tracing tools put them in a dashboard that nobody opens.

Slack is where the team already is. A conversation that appears there gets read.

## What it does

Each conversation becomes one Slack thread. The first message shows the user. Each event is a reply:

- the message of the user
- the response of the assistant
- each tool call, with its arguments
- each tool result
- the reasoning of the assistant
- errors

## How it works

Start a trace, log the events, and end the trace.

```ts
const trace = await bc.trace({ userId: "user_123" });

await trace.userInput("What's the weather?");
await trace.toolCall("get_weather", "call_1", { location: "NYC" });
await trace.toolResult("get_weather", "call_1", { temp: 72 });
await trace.assistantResponse("It's 72°F in NYC!");

await trace.end();
```

With the Vercel AI SDK, there is less to write. Wrap `streamText` or `generateText`, and the trace fills in with no other code.

A trace goes to one or more **sinks**. There are two: Slack and PostgreSQL.

## Set it up

```sh
npm install breadcrumb-chat
npx breadcrumb slack
```

The second command creates the Slack app and saves the config.
