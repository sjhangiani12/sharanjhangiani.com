---
title: S1 Directory
code: S-1
id: M-05
kind: side
status: active
order: 5
summary: "The Opening Bell: a library of tech S-1 filings, bound as books."
launched: 2020-05-01
last_contact: 2026-11-06
repo: s1directory.com
site: https://www.s1directory.com
stack: [HTML, CSS, JavaScript, SEC EDGAR]
posts:
  - url: https://x.com/sharanjhangiani/status/2115006198655455291
    date: 2026-10-27
    text: |
      in honor of Anthropic's S1, thought i'd revive and redesign a 6yr(!) old project of mine: The Opening Bell

      full directory of every "tech" related S1

      check it out below :)
---

## What it is

The Opening Bell: a library of 258 tech S-1 filings, from IPOs between 1995 and 2018. Each filing is a book.

![The S1 Directory home page: a shelf of books with halftone covers](/media/s1-directory/hero-light.jpg)

## Why

Before a company goes public, it files an S-1 with the SEC. The S-1 says what the company does, how it makes money, and what can sink it. Investors can sue over a false line, so it is the most honest thing most companies write about themselves.

The filings are hard to find and hard to read. I wanted a place that makes a person want to open one.

## What it does

**The library.** Each cover is a real artwork from the open-access collection of the Art Institute of Chicago, printed as a two-color halftone. Amazon is a river. Netflix is a Degas stage. No two books share an artwork.

![The library: a grid of halftone book covers](/media/s1-directory/library.jpg)

**The books.** Each book has a short essay: what the company bet on, how the IPO went, and where the company is today. A sidebar lists the founders, the milestones, and the link to the filing on SEC EDGAR.

![The Netflix page: a sidebar of facts, an essay, and the cover](/media/s1-directory/article.jpg)

**The directory.** A list of all the filings, newest first. Search covers names, tickers, founders, cities, and years.

![The directory: one row for each filing](/media/s1-directory/directory.jpg)

## How it works

- **No framework.** The site is plain HTML, CSS, and one small script. One Python file builds each page, each cover, and the sitemap.
- **The covers.** A tool downloads each artwork and applies the halftone print effect.
- **New IPOs.** A tool reads the final prospectuses on EDGAR. It keeps first-time IPOs in tech sectors, and skips SPACs.
- **The books open.** Each cover sits on a hinge. Click a book, and the cover swings open before the page turns.

## History

I started the site in 2020 as a plain list of S-1 links. In 2026 I rebuilt it as The Opening Bell.
