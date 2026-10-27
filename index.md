---
layout: default
title: 홈
---

# Ariar's Blog

개발과 공부를 정리하는 개인 블로그입니다.

## 최근 글

<ul>
  {% for post in site.posts limit: 5 %}
    <li>
      <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
      <span> - {{ post.date | date: "%Y-%m-%d" }}</span>
    </li>
  {% endfor %}
</ul>

## 소개

- 기술 블로그
- 개발 경험 정리
- 공부한 내용을 기록

[소개 페이지로 이동](/about.html)
