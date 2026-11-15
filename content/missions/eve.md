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

## The mission

Claude Code can work for a long time with no help. I wanted to start work, leave my desk, and steer it from my phone.

## What I built

- **A daemon for the Mac.** It registers repositories and makes workspaces.
- **Workspaces.** Each workspace is a git worktree with its own Claude Code session in tmux.
- **An iOS app.** It has a dashboard, a chat view, and a terminal.

## How it works

The phone talks to the daemon over Tailscale, with WebSocket and a REST API. The daemon makes a worktree on a new branch, then starts Claude Code in a tmux session for that worktree.

## Status

Eve was an experiment from February 2026. I do not work on it now.
