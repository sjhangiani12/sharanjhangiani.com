---
title: Eve
code: EVE
id: M-09
kind: side
status: archived
order: 9
summary: Run Claude Code workspaces on a Mac, and control them from an iPhone.
launched: 2026-02-03
last_contact: 2026-02-03
repo: eve
stack: [SwiftUI, Node.js, tmux, Tailscale, git worktrees]
---

## What it is

A way to run Claude Code on my Mac and control it from my iPhone. Each task gets its own workspace.

<div class="shots shots-one"><img src="/media/eve/dashboard.png" alt="The Eve dashboard on an iPhone: two repositories, with workspaces that are active, waiting, or idle"></div>

*The dashboard, in the iOS simulator with sample workspaces.*

## Why

Claude Code can work for a long time with no help. I wanted to start work, leave my desk, and steer it from my phone.

## What it does

- **Repositories.** I register a git repository with Eve.
- **Workspaces.** Each workspace is a git worktree on a new branch, with its own Claude Code session. Workspaces do not touch each other.
- **The iOS app.** It has a dashboard of workspaces, a chat view, and a terminal.

## How it works

```
iPhone app  ──  Tailscale  ──  Mac daemon  ──  tmux  ──  Claude Code
(SwiftUI)      WebSocket       (Node.js)               (one per worktree)
               + REST
```

- **The daemon** runs on the Mac. It makes a worktree, then starts Claude Code in a tmux session for that worktree.
- **The phone** talks to the daemon over Tailscale, so the Mac needs no public address.
- **A WebSocket** streams the Claude Code output to the phone in real time.
- **A REST API** makes workspaces, sends input, and archives old work.

## Status

Eve was an experiment from February 2026. I do not work on it now.
