---
layout: default
title: Categories
---

<ul>
    {% for category in site.categories %}
    <li id="{{ category[0] }}">{{ category[0] }}</li>
    {% for post in category[1] %}
    <li>
        <time datetime="{{ post.date | date:"%Y-%m-%d" }}">{{ post.date | date:"%Y-%m-%d" }}</time>
        <a href="{{ site.url }}{{ post.url }}" title="{{ post.title }}">{{ post.title }}</a>
    </li>
    {% endfor %}
    {% endfor %}
</ul>
