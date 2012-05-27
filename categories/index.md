---
layout: page
title: Categories
---


{% for category in site.categories %}
###{{ category[0] }}###
{% for post in category[1] %}
*   <time datetime="{{ post.date | date:"%Y-%m-%d" }}">{{ post.date | date:"%Y-%m-%d" }}</time>&nbsp;&nbsp;<a href="{{ site.url }}{{ post.url }}" title="{{ post.title }}">{{ post.title }}</a>
{% endfor %}
{% endfor %}