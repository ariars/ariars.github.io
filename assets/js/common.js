document.addEventListener("DOMContentLoaded", function() {
  'use strict';

  const html = document.querySelector('html'),
    globalWrap = document.querySelector('.global-wrap'),
    body = document.querySelector('body'),
    menuToggle = document.querySelector(".hamburger"),
    menuList = document.querySelector(".main-nav"),
    searchOpenButton = document.querySelectorAll(".search-button, .search-blog"),
    searchCloseIcon = document.querySelector(".search__close"),
    searchOverlay = document.querySelector(".search__overlay"),
    searchInput = document.querySelector(".search__text"),
    search = document.querySelector(".search"),
    toggleTheme = document.querySelector(".toggle-theme"),
    imagesOverlay = document.querySelector('.images-overlay'),
    btnScrollToTop = document.querySelector(".top");


  /* =======================================================
  // Menu + Search + Theme Switcher
  ======================================================= */
  menuToggle.addEventListener("click", () => {
    menu();
  });

  searchOpenButton.forEach(button => {
    button.addEventListener("click", searchOpen);
  });

  searchCloseIcon.addEventListener("click", () => {
    searchClose();
  });

  searchOverlay.addEventListener("click", () => {
    searchClose();
  });


  // Menu
  function menu() {
    menuToggle.classList.toggle("is-open");
    menuList.classList.toggle("is-visible");
  }

  // Dropdown Menu
  document.querySelectorAll('.dropdown-toggle').forEach(function(toggle) {
    toggle.addEventListener('click', function(e) {
      e.preventDefault();

      document.querySelectorAll('.dropdown-menu').forEach(function(menu) {
        if (menu !== toggle.nextElementSibling) {
          menu.classList.remove('is-visible');
        }
      });

      this.nextElementSibling.classList.toggle('is-visible');
    });
  });

  document.addEventListener('click', function(e) {
    if (!e.target.closest('.nav__item')) {
      document.querySelectorAll('.dropdown-menu').forEach(function(menu) {
        menu.classList.remove('is-visible');
      });
    }
  });


  // Search
  function searchOpen() {
    search.classList.add("is-visible");
    body.classList.add("is-hidden");
    globalWrap.classList.add("is-active");
    menuToggle.classList.remove("is-open");
    menuList.classList.remove("is-visible");
    setTimeout(function () {
      searchInput.focus();
    }, 250);
  }

  function searchClose() {
    search.classList.remove("is-visible");
    body.classList.remove("is-hidden");
    globalWrap.classList.remove("is-active");
  }

  document.addEventListener('keydown', function(e){
    if (e.key == 'Escape') {
      searchClose();
    }
  });


  // Theme Switcher
  if (toggleTheme && isToggleEnabled) {
    toggleTheme.addEventListener("click", () => {
      const isDarkMode = html.classList.contains("dark-mode");
      if (isDarkMode) {
        setTheme("light");
        localStorage.setItem("theme", "light");
      } else {
        setTheme("dark");
        localStorage.setItem("theme", "dark");
      }
    });
  }


  // =====================
  // Reading Progress
  // =====================
  !function(){"use strict";const e=document.querySelector(".post"),t=document.querySelector(".r-progress"),o=document.querySelector(".header");if(!e||!t)return;let n=!1;const s=()=>{const s=o?o.offsetHeight:0,i=window.innerHeight,r=e.offsetTop,a=r-s,c=r+e.offsetHeight-i,d=window.scrollY;if(d>=a&&d<=c){const e=c-a;let o=0;e>0&&(o=(d-a)/e*100),t.value=Math.min(100,Math.max(0,o)),t.style.opacity="1"}else d>c?(t.value=100,t.style.opacity="0"):t.style.opacity="0";n=!1};window.addEventListener("scroll",()=>{n||(requestAnimationFrame(s),n=!0)},{passive:!0}),window.addEventListener("resize",s,{passive:!0}),window.addEventListener("load",s),s()}();


  /* ============================
  // Testimonials Slider
  ============================ */
  if (document.querySelector(".t-slider")) {
    var slider = tns({
      container: ".t-slider",
      items: 3,
      slideBy: 1,
      gutter: 32,
      nav: true,
      mouseDrag: true,
      autoplay: false,
      controlsContainer: "#customize-controls",
      speed: 500,
      responsive: {
        1024: {
          items: 3,
        },
        768: {
          items: 2,
        },
        0: {
          items: 1,
        }
      }
    });
  }


  /* ================================================================
  // Stop Animations During Window Resizing and Switching Theme Modes
  ================================================================ */
  let disableTransition;

  if (toggleTheme) {
    toggleTheme.addEventListener("click", () => {
      stopAnimation();
    });
  }

  window.addEventListener("resize", () => {
    stopAnimation();
  });

  function stopAnimation() {
    document.body.classList.add("disable-animation");
    clearTimeout(disableTransition);
    disableTransition = setTimeout(() => {
      document.body.classList.remove("disable-animation");
    }, 100);
  };


  // =====================
  // Simple Jekyll Search
  // =====================
  SimpleJekyllSearch({
    searchInput: document.getElementById("js-search-input"),
    resultsContainer: document.getElementById("js-results-container"),
    json: "/search.json",
    searchResultTemplate: '<div class="search-results__item"><a class="search-results__image" href="{url}" style="background-image: url({image})"><a class="search-results__link" href="{url}"><div class="search-results-title">{title}</div><div class="search-results-description">{content}</div><time class="search-results-date" datetime="{date}">{date}</time></a></div>',
    noResultsText: '<div class="no-results">No results found...</div>'
  });


  /* =======================
  // Responsive Videos
  ======================= */
  reframe(".post__content iframe:not(.reframe-off), .page__content iframe:not(.reframe-off)");


  /* =======================
  // LazyLoad Images
  ======================= */
  function createLazyLoad() {
    return new LazyLoad({
      elements_selector: ".lazy",
      callback_loaded: function(el) {
        el.closest('.img-wrap')?.classList.add('loaded');
      }
    });
  }

  var lazyLoadInstance = createLazyLoad();


  /* =======================
  // Zoom Image
  ======================= */
  if (imagesOverlay) {
    const images = document.querySelectorAll('.post__content img, .page__content img, .gallery__image img');

    const clearOverlay = () => {
      body.classList.remove("is-hidden");
      globalWrap.classList.remove("is-active");
      imagesOverlay.classList.remove('active');
      imagesOverlay.innerHTML = '';
    };

    const createImageElement = (src) => {
      const img = document.createElement('img');
      img.src = src;
      return img;
    };

    const createDescriptionElement = (description) => {
      const descriptionElem = document.createElement('p');
      descriptionElem.textContent = description;
      descriptionElem.classList.add('image-overlay__description');
      return descriptionElem;
    };

    images.forEach(image => {
      image.addEventListener('click', () => {
        const galleryImage = image.closest('.gallery__image');
        const description = galleryImage?.querySelector('.gallery__image__caption')?.textContent || '';
        imagesOverlay.classList.add('active');

        body.classList.add("is-hidden");
        globalWrap.classList.add("is-active");

        imagesOverlay.innerHTML = '';
        imagesOverlay.appendChild(createImageElement(image.dataset.src || image.src));

        if (description) {
          imagesOverlay.appendChild(createDescriptionElement(description));
        }
      });
    });

    imagesOverlay.addEventListener('click', clearOverlay);
  }


  // =====================
  // Copy Code Button
  // =====================
  document.querySelectorAll('.post__content pre.highlight, .page__content pre.highlight')
  .forEach(function (pre) {
    const button = document.createElement('button');
    const copyText = 'Copy';
    button.type = 'button';
    button.ariaLabel = 'Copy code to clipboard';
    button.innerText = copyText;
    button.addEventListener('click', function () {
      let code = pre.querySelector('code').innerText;
      try {
        code = code.trimEnd();
      } catch (e) {
        code = code.trim();
      }
      navigator.clipboard.writeText(code);
      button.innerText = 'Copied!';
      setTimeout(function () {
        button.blur();
        button.innerText = copyText;
      }, 2e3);
    });
    pre.appendChild(button);
  });



  // =====================
  // Bookmarks
  // =====================
  function applyImgWrap(container) {
    const img = container.querySelector('img');
    if (!img) return;
    img.classList.add('lazy');
    const onLoad = function() {
      img.classList.add('loaded');
      img.closest('.img-wrap')?.classList.add('loaded');
    };
    if (img.complete) {
      onLoad();
    } else {
      img.addEventListener('load', onLoad, { once: true });
    }
  }

  function getBookmarks() {
    return JSON.parse(localStorage.getItem("bookmarks")) || [];
  }

  function saveBookmarks(bookmarks) {
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  }

  function updateBookmarkCount() {
    const count = document.getElementById("bookmark-count");
    if (!count) return;

    const bookmarks = getBookmarks();
    const countValue = bookmarks.length;

    if (countValue > 0) {
      count.textContent = countValue;
      count.classList.add("has-bookmarks");
    } else {
      count.textContent = "";
      count.classList.remove("has-bookmarks");
      count.classList.remove("wiggle-animation");
    }
  }

  function triggerCountAnimation() {
    const countBadge = document.getElementById("bookmark-count");
    if (countBadge && countBadge.classList.contains("has-bookmarks")) {
      countBadge.classList.remove("wiggle-animation");
      void countBadge.offsetWidth;
      countBadge.classList.add("wiggle-animation");
    }
  }

  function updateBookmarkButtons() {
    const bookmarks = getBookmarks();
    document.querySelectorAll(".bookmark-btn").forEach(btn => {
      const id = btn.dataset.id;
      const icon = btn.querySelector("i");
      if (bookmarks.find(b => b.id === id)) {
        if (icon) {
          icon.classList.remove("fa-regular");
          icon.classList.add("fa-solid");
        }
        btn.classList.add("is-bookmarked");
      } else {
        if (icon) {
          icon.classList.remove("fa-solid");
          icon.classList.add("fa-regular");
        }
        btn.classList.remove("is-bookmarked");
      }
    });
  }

  function renderSidebarWidget() {
    const widget = document.getElementById("bookmarks-widget");
    if (!widget) return;

    const bookmarks = getBookmarks();
    const list = widget.querySelector(".widget-bookmarks__list");
    const empty = widget.querySelector(".widget-bookmarks__empty");
    const footer = widget.querySelector(".widget-bookmarks__footer");
    const viewAllLink = widget.querySelector(".widget-bookmarks__view-all");
    const clearBtn = widget.querySelector(".widget-bookmarks__clear");

    if (!list) return;

    if (empty) empty.style.display = bookmarks.length === 0 ? "block" : "none";
    if (footer) footer.style.display = bookmarks.length > 0 ? "flex" : "none";

    if (viewAllLink) {
      viewAllLink.style.display = bookmarks.length > 3 ? "inline-flex" : "none";
    }

    list.innerHTML = "";
    const last3 = [...bookmarks].slice(-3).reverse();
    last3.forEach(item => {
      const li = document.createElement("li");
      li.className = "widget-bookmarks__item";
      li.setAttribute("data-id", item.id);
      li.innerHTML = `
        <a href="${item.id}" class="widget-bookmarks__link">
          ${item.image ? `
            <div class="widget-bookmarks__head">
              <div class="widget-bookmarks__remove" data-id="${item.id}" title="Remove bookmark">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              </div>
              <div class="widget-bookmarks__image img-wrap"><img src="${item.image}" alt="${item.title}" class="widget-bookmarks__thumb lazy"></div>
            </div>
          ` : ""}
            <div class="widget-bookmarks__info">
              <h3 class="widget-bookmarks__title">${item.title}</h3>
              <span class="widget-bookmarks__date">${item.date}</span>
            </div>
        </a>
      `;
      applyImgWrap(li);
      list.appendChild(li);
    });
  }

  function renderBookmarksPage() {
    const pageList = document.getElementById("bookmarks-page-list");
    if (!pageList) return;

    const bookmarks = getBookmarks();
    const emptyState = document.getElementById("bookmarks-page-empty");
    const clearBtn = document.getElementById("bookmarks-page-clear");

    if (bookmarks.length === 0) {
      pageList.innerHTML = "";
      if (emptyState) emptyState.style.display = "block";
      if (clearBtn) {
        clearBtn.classList.add("disabled");
        clearBtn.setAttribute("disabled", "true");
      }
      return;
    }

    if (emptyState) emptyState.style.display = "none";
    if (clearBtn) {
      clearBtn.classList.remove("disabled");
      clearBtn.removeAttribute("disabled");
    }

    pageList.innerHTML = "";
    [...bookmarks].reverse().forEach(item => {
      const li = document.createElement("li");
      li.className = "bookmarks-item";
      li.setAttribute("data-id", item.id);
      li.innerHTML = `
        <a href="${item.id}" class="bookmarks-item__link">
          ${item.image ? `
            <div class="bookmarks-item__head">
            <div class="bookmarks-item__remove" data-id="${item.id}" title="Remove bookmark">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </div>
            <div class="bookmarks-item__image img-wrap"><img src="${item.image}" alt="${item.title}" class="bookmarks-item__thumb lazy"></div>
            </div>
            ` : ""}
            <div class="bookmarks-item__info">
              <h3 class="bookmarks-item__title">${item.title}</h3>
              <span class="bookmarks-item__date">Posted: ${item.date}</span>
              ${item.desc ? `<p class="bookmarks-item__desc">${item.desc}</p>` : ""}
            </div>
        </a>
      `;
      applyImgWrap(li);
      pageList.appendChild(li);
    });
  }

  function updateBookmarkUI() {
    updateBookmarkCount();
    updateBookmarkButtons();
    renderSidebarWidget();
    renderBookmarksPage();
  }

  document.addEventListener("click", (e) => {
  if (e.target.closest(".bookmark-btn")) {
    const btn = e.target.closest(".bookmark-btn");
    const id = btn.dataset.id;
    const title = btn.dataset.title;
    const desc = btn.dataset.desc;
    const date = btn.dataset.date;
    const image = btn.dataset.image || "";

    let bookmarks = getBookmarks();
    const index = bookmarks.findIndex(b => b.id === id);

    if (index === -1) {
      bookmarks.push({ id, title, desc, date, image });
    } else {
      bookmarks.splice(index, 1);
    }

    saveBookmarks(bookmarks);
    updateBookmarkUI();
    triggerCountAnimation();

    const countBadge = document.getElementById("bookmark-count");
    if (countBadge && bookmarks.length > 0) {
      countBadge.classList.remove("wiggle-animation");
      void countBadge.offsetWidth;
      countBadge.classList.add("wiggle-animation");
    }
  }

    if (e.target.closest(".bookmarks-item__remove, .widget-bookmarks__remove")) {
      e.preventDefault();
      const id = e.target.closest(".bookmarks-item__remove, .widget-bookmarks__remove").dataset.id;
      saveBookmarks(getBookmarks().filter(b => b.id !== id));
      updateBookmarkUI();
      triggerCountAnimation();
    }

    if (e.target.closest(".widget-bookmarks__clear")) {
      e.preventDefault();
      localStorage.removeItem("bookmarks");
      updateBookmarkUI();
    }

    if (e.target.closest(".bookmarks-page__remove")) {
      e.preventDefault();
      const id = e.target.closest(".bookmarks-page__remove").dataset.id;
      const item = document.querySelector(`.bookmarks-page__item[data-id="${CSS.escape(id)}"]`);
      saveBookmarks(getBookmarks().filter(b => b.id !== id));
      if (item) {
        item.style.opacity = "0";
        item.style.transform = "translateX(20px)";
        setTimeout(() => {
          item.remove();
          updateBookmarkUI();
        }, 250);
      } else {
        updateBookmarkUI();
      }
    }

    if (e.target.closest("#bookmarks-page-clear")) {
      e.preventDefault();
      localStorage.removeItem("bookmarks");
      updateBookmarkUI();
    }
  });

  updateBookmarkUI();


  // =====================
  // Load More Posts
  // =====================
  var load_posts_button = document.querySelector(".load-more-posts");

  load_posts_button&&load_posts_button.addEventListener("click",function(e){e.preventDefault();var t=load_posts_button.textContent;load_posts_button.classList.add("button--loading"),load_posts_button.textContent="Loading";var o=document.querySelector(".pagination"),n=pagination_next_url.split("/page")[0]+"/page/"+pagination_next_page_number+"/";fetch(n).then(function(e){if(e.ok)return e.text()}).then(function(e){var n=document.createElement("div");n.innerHTML=e;for(var a=document.querySelector(".grid"),i=n.querySelectorAll(".grid__post"),l=0;l<i.length;l++)a.appendChild(i.item(l));createLazyLoad();pagination_next_page_number++,pagination_next_page_number>pagination_available_pages_number&&(o.style.display="none")}).finally(function(){load_posts_button.classList.remove("button--loading"),load_posts_button.textContent=t})});


  /* =======================
  // Scroll Top Button
  ======================= */
  window.addEventListener("scroll", function () {
  window.scrollY > window.innerHeight ? btnScrollToTop.classList.add("is-active") : btnScrollToTop.classList.remove("is-active");
  });

  btnScrollToTop.addEventListener("click", function () {
    if (window.scrollY != 0) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
      })
    }
  });

});