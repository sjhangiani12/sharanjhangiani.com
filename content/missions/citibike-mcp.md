---
title: Citi Bike MCP
code: BIKE
id: M-12
kind: side
status: nominal
order: 12
summary: An MCP server that finds the nearest Citi Bike stations, with live bike counts.
launched: 2025-10-28
last_contact: 2026-11-14
repo: citibike_mcp
stack: [TypeScript, MCP, Smithery, GBFS]
---

## The mission

Ask an assistant where the nearest Citi Bike is, and get a live answer.

## What I built

An MCP server with one tool, `nearest_citibikes`. The tool takes a location. It returns the nearest stations, with the count of e-bikes, classic bikes, and free docks at each one.

## How it works

- The tool reads two public Citi Bike feeds on each call.
- It joins the feeds on the station ID.
- It measures the distance to each station with the haversine formula.
- It sorts the stations by distance.

The server needs no API key.
