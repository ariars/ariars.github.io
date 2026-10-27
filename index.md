---
layout: default
title: ARIARS.COM
permalink: /
hide_header_footer: true
---

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.cdnfonts.com/css/google-sans" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Google+Sans:wght@400;500&family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Spectral:wght@300;400;500&display=swap" rel="stylesheet">

<style>
  /* Reset theme spacing on /homepage/ */
  html, body {
    margin: 0 !important;
    padding: 0 !important;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: #000000 !important;
    user-select: none;
  }
  .global-wrap,
  main.content {
    margin: 0 !important;
    padding: 0 !important;
    width: 100vw;
    height: 100vh;
    background-color: #000000;
  }

  /* Main Stage */
  .swf-stage {
    position: relative;
    width: 100vw;
    height: 100vh;
    background-color: #000000;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-family: "Plus Jakarta Sans", "Segoe UI", Arial, sans-serif;
  }

  /* Center Black Canvas Area */
  .swf-canvas {
    position: relative;
    flex: 1;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #000000;
  }

  /* 1. Intro Logo: ARIARS.COM */
  .intro-logo-wrap {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;
    z-index: 10;
    opacity: 1;
    transition: opacity 0.8s ease;
  }

  .intro-logo-svg {
    width: min(820px, 86vw);
    height: auto;
    overflow: visible;
  }

  /* Post-menu Center-Bottom 4-Sprite Scene (524 x 226 exact pixel composition) */
  .home-scene {
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 524px;
    height: 226px;
    transform: translateX(-50%);
    pointer-events: none;
    z-index: 6;
  }

  .sprite-mover {
    position: absolute;
    opacity: 0;
    filter: blur(18px);
    transform: translateX(-110vw);
    will-change: transform, opacity, filter;
  }

  /* Exact pixel positions inside the 524x226 composition */
  .sprite-mover--1 {
    left: 327px;
    top: 43px;
    width: 197px;
    height: 95px;
    z-index: 1;
    animation: slideLeftToCenter 1.45s cubic-bezier(0.16, 1, 0.3, 1) 5.65s forwards;
  }

  .sprite-mover--2 {
    left: 0px;
    top: 0px;
    width: 174px;
    height: 138px;
    z-index: 2;
    animation: slideLeftToCenter 1.32s cubic-bezier(0.16, 1, 0.3, 1) 5.58s forwards;
  }

  .sprite-mover--3 {
    left: 95px;
    top: 62px;
    width: 334px;
    height: 164px;
    z-index: 3;
    animation: slideLeftToCenter 1.12s cubic-bezier(0.16, 1, 0.3, 1) 5.45s forwards;
  }

  .sprite-mover--4 {
    left: 197px;
    top: 12px;
    width: 107px;
    height: 214px;
    z-index: 4;
    animation: slideLeftToCenter 1.22s cubic-bezier(0.16, 1, 0.3, 1) 5.52s forwards;
  }

  @keyframes slideLeftToCenter {
    0% {
      opacity: 0;
      filter: blur(18px);
      transform: translateX(-100vw);
    }
    20% {
      opacity: 1;
      filter: blur(14px);
    }
    75% {
      opacity: 1;
      filter: blur(3px);
    }
    100% {
      opacity: 1;
      filter: blur(0px);
      transform: translateX(0);
    }
  }

  .sprite-mover img {
    display: block;
    width: 100%;
    height: 100%;
  }

  /* Continuous gentle motion for 1 (right wing) and 2 (left wing) */
  .wing-float-1 {
    transform-origin: 10% 85%;
    animation: gentleWingRight 3.6s ease-in-out 6.8s infinite alternate;
  }

  .wing-float-2 {
    transform-origin: 90% 85%;
    animation: gentleWingLeft 3.2s ease-in-out 6.7s infinite alternate;
  }

  @keyframes gentleWingRight {
    0% {
      transform: translate(0px, 0px) rotate(0deg);
    }
    50% {
      transform: translate(2px, -3.5px) rotate(-2.2deg);
    }
    100% {
      transform: translate(-1.5px, 2.5px) rotate(1.8deg);
    }
  }

  @keyframes gentleWingLeft {
    0% {
      transform: translate(0px, 0px) rotate(0deg);
    }
    50% {
      transform: translate(-2px, -4px) rotate(2.4deg);
    }
    100% {
      transform: translate(1.5px, 2.5px) rotate(-1.6deg);
    }
  }

  /* 2. Bottom Bar Area */
  .swf-bottom-area {
    position: relative;
    width: 100%;
    height: 82px;
    background-color: #000000;
    overflow: hidden;
  }

  /* Middle/Top grey bar: fills from left edge to right edge */
  .swf-bottom-grey-strip {
    position: absolute;
    top: 0;
    left: 0;
    height: 6px;
    width: 100%;
    background-color: #6b6b6b;
    transform: scaleX(0);
    transform-origin: left center;
    animation: barFillLeftToRight 0.75s cubic-bezier(0.25, 1, 0.5, 1) 3.8s forwards;
    z-index: 4;
  }

  /* Bottom white bar background: fills from left edge to right edge */
  .swf-bottom-white-bg {
    position: absolute;
    top: 6px;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ffffff;
    transform: scaleX(0);
    transform-origin: left center;
    animation: barFillLeftToRight 0.8s cubic-bezier(0.25, 1, 0.5, 1) 3.95s forwards;
    z-index: 2;
  }

  @keyframes barFillLeftToRight {
    0% {
      transform: scaleX(0);
    }
    100% {
      transform: scaleX(1);
    }
  }

  /* Content container inside the bottom bar (revealed after bar fill completes) */
  .swf-bottom-content {
    position: relative;
    z-index: 5;
    width: 100%;
    height: 100%;
    padding: 6px 36px 0 36px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  /* Left: ariars (Spectral font, lowercase) */
  .swf-brand {
    display: inline-flex;
    align-items: baseline;
    text-decoration: none !important;
    color: #141414;
    opacity: 0;
    filter: blur(6px);
    animation: blurReveal 0.6s ease 4.8s forwards;
    cursor: pointer;
    flex-shrink: 0;
  }

  .swf-brand__ariars {
    font-family: "Spectral", Georgia, serif;
    font-size: 32px;
    font-weight: 400;
    letter-spacing: -0.01em;
    line-height: 1;
    color: #1c1c1c;
  }

  /* Center Menu: Home | About | Pages | Category | Tags */
  .swf-nav {
    display: flex;
    align-items: center;
    gap: 10px;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .swf-nav__item {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    opacity: 0;
    filter: blur(8px);
    transform: translateX(10px);
  }

  /* Staggered reveal starting AFTER the bar fill finishes (4.85s ~) */
  .swf-nav__item:nth-child(1) { animation: navBlurIn 0.5s ease 4.85s forwards; }
  .swf-nav__item:nth-child(2) { animation: navBlurIn 0.5s ease 5.00s forwards; }
  .swf-nav__item:nth-child(3) { animation: navBlurIn 0.5s ease 5.15s forwards; }
  .swf-nav__item:nth-child(4) { animation: navBlurIn 0.55s ease 5.30s forwards; }
  .swf-nav__item:nth-child(5) { animation: navBlurIn 0.55s ease 5.45s forwards; }

  @keyframes navBlurIn {
    0% {
      opacity: 0;
      filter: blur(8px);
      transform: translateX(10px);
    }
    100% {
      opacity: 1;
      filter: blur(0px);
      transform: translateX(0);
    }
  }

  @keyframes blurReveal {
    0% {
      opacity: 0;
      filter: blur(6px);
    }
    100% {
      opacity: 1;
      filter: blur(0px);
    }
  }

  .swf-nav__link {
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 0.04em;
    color: #2b2b2b;
    text-decoration: none !important;
    transition: color 0.2s ease;
    cursor: pointer;
  }

  .swf-nav__link:hover,
  .swf-nav__link.is-active {
    color: #c8641e;
  }

  .swf-nav__sep {
    font-size: 12px;
    color: #777777;
    font-weight: 400;
  }

  /* Right: copyright(c) 2026 ariars. */
  .swf-copyright {
    font-size: 10.5px;
    font-weight: 600;
    letter-spacing: 0.04em;
    color: #555555;
    white-space: nowrap;
    opacity: 0;
    filter: blur(5px);
    animation: blurReveal 0.6s ease 5.45s forwards;
    flex-shrink: 0;
  }

  @media (max-width: 900px) {
    .swf-bottom-content {
      flex-direction: column;
      justify-content: center;
      gap: 6px;
      padding: 8px 16px;
    }
    .swf-bottom-area {
      height: 96px;
    }
    .swf-brand__ariars {
      font-size: 24px;
    }
    .swf-nav__link {
      font-size: 11px;
    }
    .swf-copyright {
      font-size: 9px;
    }
  }
</style>

<div class="swf-stage" id="swf-stage">
  <!-- Main Black Stage -->
  <div class="swf-canvas">
    <!-- Intro Logo: Grey (#4a4a4a) filling from bottom (y=100%) to top (y=0%) with White (#ffffff) -->
    <div class="intro-logo-wrap" id="intro-logo">
      <svg class="intro-logo-svg" viewBox="0 0 860 130" xmlns="http://www.w3.org/2000/svg" aria-label="ARIARS.COM">
        <defs>
          <!-- Vertical gradient from bottom (y1="100%") to top (y2="0%") of the text bounding box -->
          <linearGradient id="bottomToTopFill" x1="0%" y1="100%" x2="0%" y2="0%" gradientUnits="objectBoundingBox">
            <stop id="fill-white-stop" offset="0%" stop-color="#ffffff" />
            <stop id="fill-grey-stop" offset="0%" stop-color="#222222" />
          </linearGradient>
        </defs>
        <text x="50%" y="92"
              text-anchor="middle"
              fill="url(#bottomToTopFill)"
              font-family="'Google Sans', 'Product Sans', sans-serif"
              font-size="86"
              font-weight="400"
              letter-spacing="3">ARIARS.COM</text>
      </svg>
    </div>

    <!-- Post-menu 4-Sprite Scene (slides in from left with staggered speeds, wings 1 & 2 gently sway) -->
    <div class="home-scene" aria-hidden="true">
      <div class="sprite-mover sprite-mover--1">
        <img class="wing-float-1" src="{{ '/assets/images/home/movie_1-1.png' | relative_url }}" alt="">
      </div>
      <div class="sprite-mover sprite-mover--2">
        <img class="wing-float-2" src="{{ '/assets/images/home/movie_1-2.png' | relative_url }}" alt="">
      </div>
      <div class="sprite-mover sprite-mover--3">
        <img src="{{ '/assets/images/home/movie_1-3.png' | relative_url }}" alt="">
      </div>
      <div class="sprite-mover sprite-mover--4">
        <img src="{{ '/assets/images/home/movie_1-4.png' | relative_url }}" alt="">
      </div>
    </div>
  </div>

  <!-- Bottom Bar -->
  <div class="swf-bottom-area">
    <div class="swf-bottom-grey-strip" id="grey-strip"></div>
    <div class="swf-bottom-white-bg" id="white-bg"></div>
    <div class="swf-bottom-content" id="white-bar">
      <!-- Left: Brand -->
      <a href="{{ '/' | relative_url }}" class="swf-brand" title="Back to Blog Home">
        <span class="swf-brand__ariars">ariars</span>
      </a>

      <!-- Center: 5 Navigation Links -->
      <ul class="swf-nav">
        <li class="swf-nav__item">
          <a class="swf-nav__link is-active" href="{{ '/' | relative_url }}">Home</a>
          <span class="swf-nav__sep">|</span>
        </li>
        <li class="swf-nav__item">
          <a class="swf-nav__link" href="{{ '/about/' | relative_url }}">About</a>
          <span class="swf-nav__sep">|</span>
        </li>
        <li class="swf-nav__item">
          <a class="swf-nav__link" href="{{ '/Program/' | relative_url }}">Pages</a>
          <span class="swf-nav__sep">|</span>
        </li>
        <li class="swf-nav__item">
          <a class="swf-nav__link" href="{{ '/categories/' | relative_url }}">Category</a>
          <span class="swf-nav__sep">|</span>
        </li>
        <li class="swf-nav__item">
          <a class="swf-nav__link" href="{{ '/tags/' | relative_url }}">Tags</a>
        </li>
      </ul>

      <!-- Right: Copyright -->
      <div class="swf-copyright">
        copyright(c) 2026 ariars.
      </div>
    </div>
  </div>
</div>

<script>
  (function () {
    const whiteStop = document.getElementById("fill-white-stop");
    const greyStop = document.getElementById("fill-grey-stop");
    const introLogo = document.getElementById("intro-logo");

    if (!whiteStop || !greyStop || !introLogo) return;

    // Wait 350ms on solid grey (#4a4a4a), then fill bottom-to-top to white (#ffffff) over 2000ms
    const startDelay = 350;
    const fillDuration = 2000;
    const holdAfterFill = 500;
    const startTime = performance.now();

    function animateFill(now) {
      const elapsed = now - startTime;

      if (elapsed < startDelay) {
        whiteStop.setAttribute("offset", "0%");
        greyStop.setAttribute("offset", "0%");
        requestAnimationFrame(animateFill);
        return;
      }

      const progress = Math.min(1, (elapsed - startDelay) / fillDuration);
      // Smooth ease-in-out curve
      const eased = progress < 0.5
        ? 2 * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 2) / 2;

      const pct = (eased * 100).toFixed(2);
      // Slight 3% soft edge between white and grey as it rises
      const edgePct = Math.min(100, eased * 100 + 2).toFixed(2);

      whiteStop.setAttribute("offset", pct + "%");
      greyStop.setAttribute("offset", edgePct + "%");

      if (progress < 1) {
        requestAnimationFrame(animateFill);
      } else {
        // After filling completely to 100% white, hold briefly then fade out
        setTimeout(function () {
          introLogo.style.opacity = "0";
        }, holdAfterFill);
      }
    }

    requestAnimationFrame(animateFill);
  })();
</script>
