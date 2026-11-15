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

## What it is

An MCP server with one tool. It lets an AI assistant find the nearest Citi Bike stations, with live bike counts.

## Why

"Where is the nearest e-bike?" is a good question for an assistant. The assistant needs live data to answer it.

## What it does

The tool is `nearest_citibikes`. It takes a latitude, a longitude, and an optional limit. It returns the nearest stations, nearest first.

Each station has:

- the name and the distance in meters
- the count of e-bikes
- the count of classic bikes
- the count of free docks
- the time of the last report

## How it works

- The tool reads two public Citi Bike feeds on each call, so the counts are live.
- It joins the feeds on the station ID.
- It measures the distance to each station with the haversine formula.
- It sorts the stations by distance.

The server needs no API key. It is one TypeScript file, and it runs on Smithery.
