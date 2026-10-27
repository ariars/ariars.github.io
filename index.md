---
layout: default
title: Hello, we’re Shodo 👋
description: A quiet place on the internet for writing, design, and thoughtful ideas.
---

<section class="hero">
  <p class="eyebrow">A quiet place on the internet</p>
  <h1>Hello, we’re Shodo 👋</h1>
  <p class="lead">
    Design meets technology, creativity meets reflection, and stories unfold at a slower,
    more intentional pace. This is a space for thoughtful writing, product thinking, and ideas worth keeping.
  </p>
  <div class="hero-actions">
    <a class="button primary" href="#featured">Read featured stories</a>
    <a class="button secondary" href="{{ '/about.html' | relative_url }}">About this blog</a>
  </div>
</section>

<section id="featured">
  <div class="section-heading">Featured stories</div>
  <div class="story-grid">
    {% for post in site.posts limit: 4 %}
      <article class="story-card">
        <p class="story-meta">{{ post.date | date: "%b %-d, %Y" }} · {{ post.categories | join: ", " }}</p>
        <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
        <p>{{ post.excerpt | strip_html | truncatewords: 24 }}</p>
        <a class="read-more" href="{{ post.url | relative_url }}">Read article →</a>
      </article>
    {% endfor %}
  </div>
</section>

<section class="content-grid">
  <div class="posts-column">
    <div class="section-heading">Latest writing</div>

    {% for post in site.posts %}
      <article class="post-row">
        <div class="post-date">{{ post.date | date: "%b %-d, %Y" }}</div>
        <div class="post-body">
          <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
          <p>{{ post.excerpt | strip_html | truncatewords: 32 }}</p>
        </div>
      </article>
    {% endfor %}
  </div>

  <aside class="sidebar">
    <div class="sidebar-box">
      <h3>Popular topics</h3>
      <div class="tag-list">
        <a href="#">Design</a>
        <a href="#">Writing</a>
        <a href="#">Lifestyle</a>
        <a href="#">Philosophy</a>
      </div>
    </div>

    <div class="sidebar-box">
      <h3>Pinned</h3>
      <p>Ideas worth slowing down for.</p>
    </div>
  </aside>
</section>
