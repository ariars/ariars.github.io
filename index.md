---
layout: default
title: ariars.com
permalink: /
hide_footer: true
---

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.cdnfonts.com/css/google-sans" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Google+Sans:wght@400;500&family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Spectral:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap" rel="stylesheet">
<link rel="preload" as="video" href="{{ '/assets/movie/movie1.mp4' | relative_url }}" type="video/mp4">

<style>
  /* Home Movie Stage: Fills remaining screen below header */
  .home-movie-stage {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: #202020;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  /* Background Videos (double-buffered smooth fade transition) */
  .home-movie-video {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    z-index: 1;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.85s ease;
    background-color: #202020;
  }

  .home-movie-video.is-active {
    opacity: 1;
  }

  /* Top-Left Text Movie Typing Animation */
  .home-movie-text-wrap {
    position: absolute;
    top: 36px;
    left: 48px;
    right: 48px;
    z-index: 5;
    max-width: calc(100vw - 96px);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.6s ease;
  }

  .home-movie-text-wrap.is-active {
    opacity: 1;
  }

  .home-movie-title {
    display: block;
    width: 100%;
    font-family: "Plus Jakarta Sans", "Malgun Gothic", "맑은 고딕", "Helvetica Neue", Arial, sans-serif;
    font-size: clamp(28px, 4.8vw, 56px);
    font-weight: 700;
    line-height: 1.25;
    letter-spacing: -0.01em;
    color: #ffffff;
    text-shadow: 0 3px 14px rgba(0, 0, 0, 0.92), 0 1px 4px rgba(0, 0, 0, 0.98);
    white-space: normal;
    word-break: keep-all;
    overflow-wrap: anywhere;
    min-height: 1.25em;
    margin: 0 0 10px 0;
  }

  .home-movie-title.is-placeholder {
    color: #8a8a8a;
  }

  .home-movie-sub {
    display: block;
    width: 100%;
    font-family: "Malgun Gothic", "맑은 고딕", "Dotum", "돋움", "Tahoma", "Verdana", Arial, sans-serif;
    font-size: clamp(13px, 1.25vw, 16px);
    font-weight: 500;
    line-height: 1.6;
    letter-spacing: 0.02em;
    color: #e2e2e2;
    text-shadow: 0 2px 8px rgba(0, 0, 0, 0.95), 0 1px 3px rgba(0, 0, 0, 1);
    white-space: normal;
    word-break: keep-all;
    overflow-wrap: anywhere;
    min-height: 1.6em;
    margin: 0;
    padding-left: 2px;
  }

  .home-movie-sub.is-placeholder {
    color: #7a7a7a;
  }

  /* Center Play/Pause Control Button (Icon-only without border/background) */
  .home-movie-control {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0.9);
    width: 80px;
    height: 80px;
    background: transparent !important;
    border: none !important;
    outline: none !important;
    box-shadow: none !important;
    backdrop-filter: none !important;
    -webkit-backdrop-filter: none !important;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;
    cursor: pointer;
    z-index: 10;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s ease, transform 0.3s cubic-bezier(0.25, 1, 0.5, 1);
    padding: 0;
    user-select: none;
    filter: drop-shadow(0 4px 18px rgba(0, 0, 0, 0.85)) drop-shadow(0 1px 4px rgba(0, 0, 0, 0.95));
  }

  .home-movie-control:hover {
    transform: translate(-50%, -50%) scale(1.12);
    filter: drop-shadow(0 6px 24px rgba(0, 0, 0, 0.95)) drop-shadow(0 2px 8px rgba(0, 0, 0, 1));
  }

  .home-movie-control.is-visible {
    opacity: 1;
    pointer-events: auto;
    transform: translate(-50%, -50%) scale(1);
  }

  .home-movie-control__icon {
    width: 52px;
    height: 52px;
    fill: #ffffff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: opacity 0.28s ease, transform 0.28s cubic-bezier(0.25, 1, 0.5, 1);
    pointer-events: none;
  }

  /* Play icon optical alignment */
  .home-movie-control__icon--play {
    left: calc(50% + 3px);
  }

  /* State: Showing Pause (II) */
  .home-movie-control.show-pause .home-movie-control__icon--pause {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
  .home-movie-control.show-pause .home-movie-control__icon--play {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.5);
  }

  /* State: Showing Play */
  .home-movie-control.show-play .home-movie-control__icon--pause {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.5);
  }
  .home-movie-control.show-play .home-movie-control__icon--play {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }

  @media (max-width: 768px) {
    .home-movie-text-wrap {
      top: 20px;
      left: 20px;
      right: 20px;
      max-width: calc(100vw - 40px);
    }
    .home-movie-title {
      font-size: clamp(22px, 6vw, 32px);
      margin-bottom: 8px;
    }
    .home-movie-sub {
      font-size: 13px;
    }
    .home-movie-control {
      width: 64px;
      height: 64px;
    }
    .home-movie-control__icon {
      width: 40px;
      height: 40px;
    }
  }</style>

<div class="home-movie-stage" id="home-movie-stage">
  <!-- Double buffered background videos for 1 -> 2 -> 3 -> 4 -> 5 -->
  <video class="home-movie-video" id="home-bg-video-a" muted playsinline preload="auto" aria-hidden="true"></video>
  <video class="home-movie-video" id="home-bg-video-b" muted playsinline preload="none" aria-hidden="true"></video>

  <!-- Top-Left Text Movie Typing Animation -->
  <div class="home-movie-text-wrap" id="home-movie-text-wrap" aria-live="polite">
    <div class="home-movie-title" id="home-movie-title"></div>
    <div class="home-movie-sub" id="home-movie-sub"></div>
  </div>

  <!-- Center Play/Pause Control Button -->
  <button class="home-movie-control" id="home-movie-control" type="button" aria-label="재생 / 일시정지">
    <!-- Pause Icon (II) -->
    <svg class="home-movie-control__icon home-movie-control__icon--pause" viewBox="0 0 24 24" fill="currentColor">
      <rect x="5" y="3" width="4.5" height="18" rx="2" />
      <rect x="14.5" y="3" width="4.5" height="18" rx="2" />
    </svg>
    <!-- Play Icon -->
    <svg class="home-movie-control__icon home-movie-control__icon--play" viewBox="0 0 24 24" fill="currentColor">
      <path d="M7 4.5v15c0 .85.92 1.38 1.66.95l12-7.5c.74-.46.74-1.54 0-2l-12-7.5c-.74-.43-1.66.1-1.66.95z" />
    </svg>
  </button>
</div>

<script>
  (function () {
    const stage = document.getElementById("home-movie-stage");
    const controlBtn = document.getElementById("home-movie-control");
    const textWrap = document.getElementById("home-movie-text-wrap");
    const titleEl = document.getElementById("home-movie-title");
    const subEl = document.getElementById("home-movie-sub");
    const videoA = document.getElementById("home-bg-video-a");
    const videoB = document.getElementById("home-bg-video-b");
    const players = [videoA, videoB];

    const SCENES = [
      {
        src: "{{ '/assets/movie/movie1.mp4' | relative_url }}",
        title: "달이 아름답네요. (月が綺麗ですね).",
        sub: "'달이 아름답네요.'라고 상대에게 표현해도 마음은 전해지는 것이라고 생각했다. - 나쓰메 소세키"
      },
      {
        src: "{{ '/assets/movie/movie2.mp4' | relative_url }}",
        title: "아사코와 나는 세 번 만났다.",
        sub: "그리워하는 데도 한 번 만나고는 못 만나게 되기도 하고, 일생을 못 잊으면서도 아니 만나고 살기도 한다. - 피천득 인연"
      },
      {
        src: "{{ '/assets/movie/movie3.mp4' | relative_url }}",
        title: "대책없는 희망, 무책임한 위로",
        sub: "'현실'을 바꿀 수 없는 무력함을 이야기 했다. 노력하며 버틴다는 개인적인 해결책이 얼마나 한계가 있는지를 생각하게 한다. - tvN 미생"
      },
      {
        src: "{{ '/assets/movie/movie4.mp4' | relative_url }}",
        title: "너 뭘 태우고 있는 거니!? - 내 청춘.",
        sub: "엄마가 보기엔. 그런 것보다 네 침대 밑에 있는 맥심 책이나 태우면 어떻겠니? - 그건... 내 목숨이야. - 아다치 미츠루 H2"
      },
      {
        src: "{{ '/assets/movie/movie5.mp4' | relative_url }}",
        title: "삶, 우주, 그리고 모든 것",
        sub: "질문의 궁극적인 해답을 찾기 위해 전 우주에서 최고의 컴퓨터 'Deep Thought'가 750만 년 동안 계산한 결과 나온 답변은 42이다. - 더글러스 애덤스 H2G2"
      }
    ];

    const CHAR_INTERVAL_MS = 30;
    let activeTextTimer = null;

    function getStepText(target, stepIndex) {
      const len = target.length;
      if (stepIndex <= 0) {
        return "";
      }
      // 1. Sequentially grow 'X' up to target.length
      if (stepIndex <= len) {
        return "X".repeat(stepIndex);
      }
      // 2. Sequentially replace each 'X' with '-'
      if (stepIndex <= len * 2) {
        const dashCount = stepIndex - len;
        return "-".repeat(dashCount) + "X".repeat(len - dashCount);
      }
      // 3. Sequentially replace each '-' with the actual character
      if (stepIndex <= len * 3) {
        const charCount = stepIndex - len * 2;
        return target.slice(0, charCount) + "-".repeat(len - charCount);
      }
      // 4. Completed
      return target;
    }

    function runSingleTextMovie(item) {
      if (activeTextTimer) {
        clearInterval(activeTextTimer);
        activeTextTimer = null;
      }

      const targetTitle = item.title;
      const targetSub = item.sub;
      const maxSteps = Math.max(targetTitle.length, targetSub.length) * 3;
      let currentStep = 0;

      titleEl.textContent = "";
      subEl.textContent = "";
      titleEl.classList.add("is-placeholder");
      subEl.classList.add("is-placeholder");

      activeTextTimer = setInterval(function () {
        currentStep += 1;

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
          clearInterval(activeTextTimer);
          activeTextTimer = null;
          titleEl.classList.remove("is-placeholder");
          subEl.classList.remove("is-placeholder");
          titleEl.textContent = targetTitle;
          subEl.textContent = targetSub;
        }
      }, CHAR_INTERVAL_MS);
    }

    if (textWrap && titleEl && subEl && videoA && videoB) {
      let currentSceneIdx = 0;
      let activePlayerIdx = 0;
      let isTransitioning = false;
      let preloadedNextIdx = -1;
      let iconMorphTimer = null;

      function getActiveVideo() {
        return players[activePlayerIdx];
      }

      // Preload Scene 1
      videoA.src = SCENES[0].src;
      videoA.load();

      function preloadStandbyPlayer(nextSceneIdx) {
        if (preloadedNextIdx === nextSceneIdx) return;
        preloadedNextIdx = nextSceneIdx;
        const standbyVid = players[1 - activePlayerIdx];
        standbyVid.pause();
        standbyVid.src = SCENES[nextSceneIdx].src;
        standbyVid.preload = "auto";
        standbyVid.load();
      }

      function playScene(idx) {
        currentSceneIdx = idx;
        isTransitioning = false;

        const scene = SCENES[idx];
        const vid = players[activePlayerIdx];

        if (!vid.getAttribute("src") || vid.getAttribute("src") !== scene.src || vid.error) {
          vid.src = scene.src;
          vid.load();
        } else {
          try {
            if (vid.readyState > 0) {
              vid.currentTime = 0;
            }
          } catch (e) {}
        }

        vid.muted = true;
        vid.defaultMuted = true;
        vid.classList.add("is-active");

        function tryPlay() {
          const playPromise = vid.play();
          if (playPromise !== undefined) {
            playPromise.catch(function () {
              vid.muted = true;
              vid.play().catch(function () {});
            });
          }
        }

        if (vid.readyState >= 2) {
          tryPlay();
        } else {
          const onReady = function () {
            vid.removeEventListener("canplay", onReady);
            vid.removeEventListener("loadeddata", onReady);
            if (currentSceneIdx === idx) {
              tryPlay();
            }
          };
          vid.addEventListener("canplay", onReady);
          vid.addEventListener("loadeddata", onReady);
          tryPlay();
        }

        vid.onerror = function () {
          if (currentSceneIdx === idx) {
            setTimeout(function () {
              vid.src = scene.src + (scene.src.includes("?") ? "&" : "?") + "r=" + Date.now();
              vid.load();
              vid.play().catch(function () {});
            }, 200);
          }
        };

        textWrap.classList.add("is-active");
        runSingleTextMovie(scene);
      }

      function transitionToNextScene() {
        if (isTransitioning) return;
        isTransitioning = true;

        const currentVid = players[activePlayerIdx];
        const nextSceneIdx = (currentSceneIdx + 1) % SCENES.length;

        // Ensure standby player has the next scene ready
        preloadStandbyPlayer(nextSceneIdx);

        // 1. Fade out current video & text
        currentVid.classList.remove("is-active");
        textWrap.classList.remove("is-active");

        // 2. Pause old, swap active player, fade in next scene
        setTimeout(function () {
          currentVid.pause();
          titleEl.textContent = "";
          subEl.textContent = "";
          activePlayerIdx = 1 - activePlayerIdx;
          playScene(nextSceneIdx);
        }, 850);
      }

      // Attach timeupdate & ended fallback to both players
      players.forEach(function (vid, pIdx) {
        if (!vid) return;

        vid.addEventListener("timeupdate", function () {
          if (activePlayerIdx !== pIdx || isTransitioning || !(vid.duration > 0)) return;

          const remaining = vid.duration - vid.currentTime;
          if (vid.currentTime >= 2.0 || remaining <= 5.0) {
            preloadStandbyPlayer((currentSceneIdx + 1) % SCENES.length);
          }

          if (remaining <= 0.85) {
            transitionToNextScene();
          }
        });

        vid.addEventListener("ended", function () {
          if (activePlayerIdx === pIdx && !isTransitioning) {
            transitionToNextScene();
          }
        });
      });

      // =========================================================================
      // Rollover & Click Play / Pause Interaction
      // 1) 濡ㅼ삤踰??? ?곸긽? ?좎???梨??꾩옱 ?곹깭??留욌뒗 ?꾩씠肄?II ?먮뒗 ?? ?쒖떆
      // 2) ?대┃ ?? ?ъ깮 以묒씠硫?以묒? ????蹂寃?/ 以묒? 以묒씠硫??ъ깮 ?쒖옉 ??II 蹂寃?      // 3) 濡ㅼ븘???? ?꾩씠肄??섏씠?쒖븘??(?ъ깮/以묒? ?곹깭??洹몃?濡??좎?)
      // =========================================================================
      function syncControlIcon() {
        const vid = getActiveVideo();
        if (!vid) return;

        if (vid.paused) {
          controlBtn.classList.remove("show-pause");
          controlBtn.classList.add("show-play");
        } else {
          controlBtn.classList.remove("show-play");
          controlBtn.classList.add("show-pause");
        }
      }

      function togglePlayPause() {
        const vid = getActiveVideo();
        if (!vid) return;

        if (vid.paused) {
          vid.play().catch(function () {});
          controlBtn.classList.remove("show-play");
          controlBtn.classList.add("show-pause");
        } else {
          vid.pause();
          controlBtn.classList.remove("show-pause");
          controlBtn.classList.add("show-play");
        }
      }

      if (stage && controlBtn) {
        // ?곸긽 ?곸뿭 濡ㅼ삤踰??? ?곹깭??留욌뒗 ?꾩씠肄섎쭔 ?쒖떆 (?곸긽? 以묒??섏? ?딆쓬)
        stage.addEventListener("mouseenter", function () {
          syncControlIcon();
          controlBtn.classList.add("is-visible");
        });

        // ?곸긽 ?곸뿭 濡ㅼ븘???? ?꾩씠肄??④? (?ъ깮/以묒? ?곹깭 ?좎?)
        stage.addEventListener("mouseleave", function () {
          controlBtn.classList.remove("is-visible");
        });

        // 以묒븰 而⑦듃濡??꾩씠肄??대┃ ?? ?ъ깮/?쇱떆?뺤? ?좉?
        controlBtn.addEventListener("click", function (e) {
          e.stopPropagation();
          togglePlayPause();
        });

        // ?곸긽 諛곌꼍 ?대┃ ?쒖뿉???쇱떆?뺤?/?ъ깮 ?좉?
        stage.addEventListener("click", function () {
          togglePlayPause();
        });
      }

      // Start Scene 1 smoothly once header intro has unfolded (~1.0s)
      setTimeout(function () {
        playScene(0);
      }, 1000);
    }
  })();
</script>
