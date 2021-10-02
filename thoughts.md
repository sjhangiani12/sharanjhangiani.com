---
title: Thoughts
---

<!-- I like to think about things. This is a place for me to put these thoughts into cohesive ideas to avoid jumping "from epiphany to epiphany without investigating any of the ideas" (quoted from [Dave Perell's post "One Big Idea"](https://www.perell.com/blog/one-big-idea)).

I'll also probably dump all my research and notes from each [Hypothesis](http://hypothesis.fm) episode here.  -->

{% for post in site.posts %}
## [{{ post.title }}]({{ post.url }})

*{{ post.date | date: '%B %d, %Y' }}*

{{ post.content | strip_html | truncatewords: 30 }} [Read more]({{ post.url }})
{% endfor %}