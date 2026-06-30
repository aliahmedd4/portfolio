/* =============================================
   NAVBAR — scroll shadow + mobile toggle
   ============================================= */
(function () {
  const navbar = document.getElementById("navbar");
  const toggle = document.getElementById("navToggle");
  const links  = document.getElementById("navLinks");

  if (navbar) {
    window.addEventListener("scroll", () => {
      navbar.classList.toggle("scrolled", window.scrollY > 10);
    }, { passive: true });
  }

  if (toggle) {
    function resetSpans() {
      toggle.querySelectorAll("span").forEach(s => { s.style.transform = ""; s.style.opacity = ""; });
    }

    toggle.addEventListener("click", () => {
      const open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open);
      if (open) {
        const spans = toggle.querySelectorAll("span");
        if (spans[0]) spans[0].style.transform = "translateY(7px) rotate(45deg)";
        if (spans[1]) spans[1].style.opacity   = "0";
        if (spans[2]) spans[2].style.transform = "translateY(-7px) rotate(-45deg)";
      } else {
        resetSpans();
      }
    });

    links.querySelectorAll(".nav-link").forEach((a) => {
      a.addEventListener("click", () => {
        links.classList.remove("open");
        resetSpans();
      });
    });
  }
})();

/* =============================================
   INTERSECTION OBSERVER — reveal on scroll
   ============================================= */
(function () {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );

  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
})();

/* =============================================
   LANGUAGE BAR ANIMATION
   ============================================= */
(function () {
  const barObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const fill = entry.target.querySelector(".lang-fill");
          if (fill) {
            const target = fill.getAttribute("data-width");
            setTimeout(() => { fill.style.width = target + "%"; }, 200);
          }
          barObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  document.querySelectorAll(".lang-item, .lang-card").forEach((el) => barObserver.observe(el));
})();

/* =============================================
   TYPING ANIMATION — hero subtitle
   ============================================= */
(function () {
  const el = document.getElementById("typingText");
  if (!el) return;

  const roles = JSON.parse(el.dataset.roles || "[]");
  if (!roles.length) return;

  let roleIndex = 0;
  let charIndex  = 0;
  let deleting   = false;
  let pause      = false;

  function tick() {
    const current = roles[roleIndex];

    if (!deleting) {
      el.textContent = current.slice(0, charIndex + 1);
      charIndex++;
      if (charIndex === current.length) {
        pause = true;
        setTimeout(() => { pause = false; deleting = true; schedule(); }, 2200);
        return;
      }
    } else {
      el.textContent = current.slice(0, charIndex - 1);
      charIndex--;
      if (charIndex === 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
      }
    }

    schedule();
  }

  function schedule() {
    if (pause) return;
    const delay = deleting ? 55 : charIndex === 0 ? 500 : 95;
    setTimeout(tick, delay);
  }

  setTimeout(tick, 800);
})();

/* =============================================
   PROJECT FILTER
   ============================================= */
(function () {
  const btns  = document.querySelectorAll(".filter-btn");
  const cards = document.querySelectorAll("#projectsGrid .project-card");
  const noRes = document.getElementById("noResults");

  if (!btns.length) return;

  const filterMap = {
    all:         () => true,
    "ML":        (c) => /ML|Machine|Clustering|Classification|Scikit|Pandas|Unsupervised|Data/i.test(c.dataset.tags + c.dataset.category),
    "Full-Stack": (c) => /Full.Stack|Web Dev|Database|HR/i.test(c.dataset.tags + c.dataset.category),
    "Security":  (c) => /Security|Crypto|DES|RSA|Encr/i.test(c.dataset.tags + c.dataset.category),
    "Python":    (c) => /Python/i.test(c.dataset.tags),
    "Java":      (c) => /Java\b/i.test(c.dataset.tags),
    "Game":      (c) => /Game|Unity|C#/i.test(c.dataset.tags + c.dataset.category),
  };

  btns.forEach((btn) => {
    btn.addEventListener("click", () => {
      btns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const key  = btn.dataset.filter;
      const test = filterMap[key] || (() => true);
      let visible = 0;

      cards.forEach((card) => {
        const show = test(card);
        card.style.display = show ? "" : "none";
        if (show) visible++;
      });

      if (noRes) noRes.style.display = visible === 0 ? "block" : "none";
    });
  });
})();

/* =============================================
   CONTACT FORM — mailto builder
   ============================================= */
(function () {
  const form = document.getElementById("contactForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const to      = form.dataset.email;
    const name    = form.querySelector('[name="name"]').value.trim();
    const from    = form.querySelector('[name="email"]').value.trim();
    const subject = form.querySelector('[name="subject"]').value.trim();
    const body    = form.querySelector('[name="body"]').value.trim();
    const fullBody = `Name: ${name}\nEmail: ${from}\n\n${body}`;
    window.location.href =
      `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(fullBody)}`;
  });
})();
