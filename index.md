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
<link rel="preload" as="video" href="{{ '/assets/movie1.mp4' | relative_url }}" type="video/mp4">

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
    width: 100%;
    height: 100%;
    height: 100dvh;
    background-color: #000000;
  }

  /* Main Stage - fixed to visible viewport (100dvh) so mobile browser bars never clip the bottom bar */
  .swf-stage {
    position: fixed;
    inset: 0;
    width: 100%;
    height: 100%;
    height: 100dvh;
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
    flex: 1 1 auto;
    min-height: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #000000;
    overflow: hidden;
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

  /* Post-menu Background Video (assets/movie1.mp4) */
  .swf-bg-video {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    z-index: 2;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.8s ease;
    background-color: #000000;
  }

  .swf-bg-video.is-active {
    opacity: 1;
  }

  /* Post-menu Top-Left Text Movie Animation (replicates assets/text-movie.mp4) */
  .text-movie-wrap {
    position: absolute;
    top: 28px;
    left: 36px;
    right: 36px;
    z-index: 6;
    max-width: calc(100vw - 72px);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.35s ease;
  }

  .text-movie-wrap.is-active {
    opacity: 1;
  }

  .text-movie__title {
    display: block;
    width: 100%;
    font-family: "Plus Jakarta Sans", "Malgun Gothic", "맑은 고딕", "Helvetica Neue", Arial, sans-serif;
    font-size: clamp(32px, 5.2vw, 60px);
    font-weight: 700;
    line-height: 1.22;
    letter-spacing: -0.01em;
    color: #ffffff;
    text-shadow: 0 3px 14px rgba(0, 0, 0, 0.92), 0 1px 4px rgba(0, 0, 0, 0.98);
    white-space: normal;
    word-break: keep-all;
    overflow-wrap: anywhere;
    min-height: 1.22em;
    margin: 0 0 8px 0;
  }

  .text-movie__title.is-placeholder {
    color: #8a8a8a;
  }

  .text-movie__sub {
    display: block;
    width: 100%;
    font-family: "Malgun Gothic", "맑은 고딕", "Dotum", "돋움", "Tahoma", "Verdana", Arial, sans-serif;
    font-size: 13px;
    font-weight: 500;
    line-height: 1.5;
    letter-spacing: 0.02em;
    color: #e2e2e2;
    text-shadow: 0 2px 8px rgba(0, 0, 0, 0.95), 0 1px 3px rgba(0, 0, 0, 1);
    white-space: normal;
    word-break: keep-all;
    overflow-wrap: anywhere;
    min-height: 1.5em;
    margin: 0;
    padding-left: 2px;
  }

  .text-movie__sub.is-placeholder {
    color: #7a7a7a;
  }

  /* 2. Bottom Bar Area */
  .swf-bottom-area {
    position: relative;
    flex-shrink: 0;
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
    .text-movie-wrap {
      top: 16px;
      left: 16px;
      right: 16px;
      max-width: calc(100vw - 32px);
      overflow: visible;
    }
    .swf-bottom-area {
      height: auto;
      min-height: 106px;
    }
    .swf-bottom-content {
      height: auto;
      min-height: 106px;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 7px;
      padding: 12px 12px calc(12px + env(safe-area-inset-bottom, 0px)) 12px;
    }
    .swf-brand__ariars {
      font-size: 24px;
    }
    .swf-nav {
      flex-wrap: wrap;
      justify-content: center;
      gap: 6px;
    }
    .swf-nav__item {
      gap: 6px;
    }
    .swf-nav__link {
      font-size: 12px;
    }
    .swf-copyright {
      font-size: 9.5px;
    }
  }
</style>

<div class="swf-stage" id="swf-stage">
  <!-- Main Black Stage -->
  <div class="swf-canvas">
    <!-- Intro Logo: Grey (#222222) filling from bottom (y=100%) to top (y=0%) with White (#ffffff) -->
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

    <!-- Post-menu Background Video (preloaded during intro, plays after menu appears) -->
    <video class="swf-bg-video" id="swf-bg-video" src="{{ '/assets/movie1.mp4' | relative_url }}" muted playsinline loop preload="auto" aria-hidden="true"></video>

    <!-- Post-menu Top-Left Text Movie Animation (assets/text-movie.mp4 style) -->
    <div class="text-movie-wrap" id="text-movie-wrap" aria-live="polite">
      <div class="text-movie__title" id="text-movie-title"></div>
      <div class="text-movie__sub" id="text-movie-sub"></div>
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

    // Wait 350ms on solid dark grey (#222222), then fill bottom-to-top to white (#ffffff) over 2000ms
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
      // Slight 2% soft edge between white and grey as it rises
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

    // =========================================================================
    // Post-menu Text Movie Animation (0.05s per character for X -> - -> Text)
    // Runs once after the bottom menu finishes appearing
    // =========================================================================
    const textWrap = document.getElementById("text-movie-wrap");
    const titleEl = document.getElementById("text-movie-title");
    const subEl = document.getElementById("text-movie-sub");

    // Arbitrary sample text (can be replaced with any desired text)
    const TEXT_ITEM = {
      title: "달이 아름답네요 (月が綺麗ですね).",
      sub: "워메 소새끼는 '달이 아름답네요.'라고 상대에게 표현해도 마음은 전해지는 것이라고 생각했다."
    };

    const CHAR_INTERVAL_MS = 30; // 0.02s per character

    function getStepText(target, stepIndex) {
      const len = target.length;
      if (stepIndex <= 0) {
        return "";
      }
      // 1. Sequentially grow 'X' up to target.length (0.05s per char)
      if (stepIndex <= len) {
        return "X".repeat(stepIndex);
      }
      // 2. Sequentially replace each 'X' with '-' (0.05s per char)
      if (stepIndex <= len * 2) {
        const dashCount = stepIndex - len;
        return "-".repeat(dashCount) + "X".repeat(len - dashCount);
      }
      // 3. Sequentially replace each '-' with the actual character (0.05s per char)
      if (stepIndex <= len * 3) {
        const charCount = stepIndex - len * 2;
        return target.slice(0, charCount) + "-".repeat(len - charCount);
      }
      // 4. Completed
      return target;
    }

    function runSingleTextMovie(item) {
      const targetTitle = item.title;
      const targetSub = item.sub;
      const maxSteps = Math.max(targetTitle.length, targetSub.length) * 3;
      let currentStep = 0;

      titleEl.textContent = "";
      subEl.textContent = "";
      titleEl.classList.add("is-placeholder");
      subEl.classList.add("is-placeholder");

      const timer = setInterval(function () {
        currentStep += 1;

        // Keep dim grey during initial 'X' growth, switch to main color once '-' / text conversion starts
        if (currentStep <= targetTitle.length) {
          titleEl.classList.add("is-placeholder");
        } else {
          titleEl.classList.remove("is-placeholder");
        }

        if (currentStep <= targetSub.length) {
          subEl.classList.add("is-placeholder");
        } else {
          subEl.classList.remove("is-placeholder");
        }

        titleEl.textContent = getStepText(targetTitle, currentStep);
        subEl.textContent = getStepText(targetSub, currentStep);

        if (currentStep >= maxSteps) {
          clearInterval(timer);
          titleEl.classList.remove("is-placeholder");
          subEl.classList.remove("is-placeholder");
          titleEl.textContent = targetTitle;
          subEl.textContent = targetSub;
        }
      }, CHAR_INTERVAL_MS);
    }

    // Start the background video and top-left text movie animation once right after the bottom menu finishes appearing (~5.45s)
    const bgVideo = document.getElementById("swf-bg-video");
    if (bgVideo) {
      bgVideo.load();
    }

    if (textWrap && titleEl && subEl) {
      setTimeout(function () {
        if (bgVideo) {
          bgVideo.currentTime = 0;
          bgVideo.classList.add("is-active");
          const playPromise = bgVideo.play();
          if (playPromise !== undefined) {
            playPromise.catch(function () {});
          }
        }
        textWrap.classList.add("is-active");
        runSingleTextMovie(TEXT_ITEM);
      }, 5450);
    }
  })();
</script>
