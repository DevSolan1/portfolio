(function () {
  "use strict";
  var S = window.SITE || {};
  var doc = document;
  function $(s) { return doc.querySelector(s); }
  function $$(s) { return Array.prototype.slice.call(doc.querySelectorAll(s)); }
  function esc(v) {
    return String(v == null ? "" : v).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function safe(fn) { try { fn(); } catch (e) { if (window.console) console.error(e); } }

  doc.documentElement.classList.add("js");

  safe(function () {
    $$("[data-site]").forEach(function (el) {
      var k = el.getAttribute("data-site");
      if (S[k]) el.textContent = S[k];
    });
    $$("[data-link]").forEach(function (el) {
      var v = S[el.getAttribute("data-link")];
      if (v) el.setAttribute("href", v); else el.hidden = true;
    });
    $$("[data-mail]").forEach(function (el) {
      if (S.email) el.setAttribute("href", "mailto:" + S.email); else el.hidden = true;
    });
  });

  safe(function () {
    var g = $("#skills-grid");
    if (!g || !S.skills) return;
    g.innerHTML = Object.keys(S.skills).map(function (cat) {
      return '<div class="card reveal"><h3 class="font-semibold mb-3">' + esc(cat) + '</h3><div>' +
        (S.skills[cat] || []).map(function (s) { return '<span class="chip">' + esc(s) + "</span>"; }).join("") +
        "</div></div>";
    }).join("");
  });

  safe(function () {
    var g = $("#projects-grid");
    if (!g || !S.projects) return;
    g.innerHTML = S.projects.map(function (p) {
      var links = "";
      if (p.repo) links += '<a class="btn" href="' + esc(p.repo) + '" target="_blank" rel="noopener">Repository</a>';
      if (p.demo) links += '<a class="btn btn-primary" href="' + esc(p.demo) + '" target="_blank" rel="noopener">Live demo</a>';
      if (!links) links = '<p class="muted text-sm">Links will be added when the project is published</p>';
      var img = p.image ? '<img src="' + esc(p.image) + '" alt="' + esc(p.title) + ' screenshot" class="project-screenshot rounded-lg mb-4 w-full" loading="lazy">' : "";
      return '<article class="card reveal flex flex-col">' + img +
        '<div class="flex flex-wrap items-center justify-between gap-2 mb-2"><h3 class="text-lg font-bold">' + esc(p.title) + '</h3><span class="badge">' + esc(p.status) + "</span></div>" +
        '<p class="muted mb-3">' + esc(p.description) + "</p>" +
        (p.problem ? '<p class="text-sm mb-3"><strong>Problem:</strong> <span class="muted">' + esc(p.problem) + "</span></p>" : "") +
        '<ul class="text-sm muted list-disc pl-5 mb-4 space-y-1">' + (p.features || []).map(function (f) { return "<li>" + esc(f) + "</li>"; }).join("") + "</ul>" +
        '<div class="mb-4">' + (p.tech || []).map(function (t) { return '<span class="chip">' + esc(t) + "</span>"; }).join("") + "</div>" +
        '<div class="mt-auto flex flex-wrap gap-2">' + links + "</div></article>";
    }).join("");
  });

  safe(function () {
    var btn = $("#theme-toggle");
    if (!btn) return;
    function label() {
      var dark = doc.documentElement.classList.contains("dark");
      btn.textContent = dark ? "Light" : "Dark";
      btn.setAttribute("aria-label", dark ? "Switch to light theme" : "Switch to dark theme");
    }
    label();
    btn.addEventListener("click", function () {
      var dark = doc.documentElement.classList.toggle("dark");
      try { localStorage.setItem("theme", dark ? "dark" : "light"); } catch (e) {}
      label();
    });
  });

  safe(function () {
    var btn = $("#menu-toggle"), nav = $("#site-nav");
    if (!btn || !nav) return;
    btn.addEventListener("click", function () {
      var open = btn.getAttribute("aria-expanded") === "true";
      btn.setAttribute("aria-expanded", String(!open));
      nav.classList.toggle("hidden", open);
      nav.classList.toggle("flex", !open);
    });
    $$("#site-nav a").forEach(function (a) {
      a.addEventListener("click", function () {
        if (window.innerWidth < 768) {
          btn.setAttribute("aria-expanded", "false");
          nav.classList.add("hidden"); nav.classList.remove("flex");
        }
      });
    });
  });

  safe(function () {
    var form = $("#contact-form"), msg = $("#form-msg");
    if (!form) return;
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = $("#cf-name").value.trim();
      var email = $("#cf-email").value.trim();
      var message = $("#cf-message").value.trim();
      if (!name || !email || !message) {
        if (msg) { msg.textContent = "Please fill in your name, email and message."; }
        return;
      }
      var subject = encodeURIComponent($("#cf-subject").value.trim() || "Portfolio contact");
      var body = encodeURIComponent("Hi Solan,\n\n" + message + "\n\n\u2014 " + name + "\n" + email);
      window.location.href = "mailto:" + (S.email || "") + "?subject=" + subject + "&body=" + body;
      if (msg) { msg.textContent = "Opening your email client..."; }
    });
  });

  safe(function () { var y = $("#year"); if (y) y.textContent = String(new Date().getFullYear()); });

  safe(function () {
    var g = $("#edu-projects");
    if (!g || !S.projects) return;
    g.innerHTML = S.projects.map(function (p) {
      var techHtml = (p.tech || []).map(function (t) { return '<span class="chip">' + esc(t) + "</span>"; }).join("");
      var linkHtml = "";
      if (p.repo) linkHtml += '<a class="btn" style="font-size:.8rem;padding:.35rem .7rem" href="' + esc(p.repo) + '" target="_blank" rel="noopener">Repo</a>';
      if (p.demo) linkHtml += '<a class="btn btn-primary" style="font-size:.8rem;padding:.35rem .7rem" href="' + esc(p.demo) + '" target="_blank" rel="noopener">Demo</a>';
      return '<div class="card edu-proj-card">' +
        '<div class="flex items-center justify-between gap-2 mb-1"><p class="font-semibold text-sm">' + esc(p.title) + '</p><span class="badge">' + esc(p.status) + "</span></div>" +
        '<p class="muted text-xs mb-2">' + esc(p.description) + "</p>" +
        '<div class="mb-2">' + techHtml + "</div>" +
        (linkHtml ? '<div class="flex gap-2">' + linkHtml + "</div>" : "") +
        "</div>";
    }).join("");
  });

  safe(function () {
    var els = $$(".reveal");
    if (!("IntersectionObserver" in window)) { els.forEach(function (e) { e.classList.add("in"); }); return; }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
    }, { threshold: 0.1 });
    els.forEach(function (e) { io.observe(e); });
  });

  safe(function () {
    var links = $$(".nav-link");
    if (!links.length || !("IntersectionObserver" in window)) return;
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        links.forEach(function (l) {
          var on = l.getAttribute("href") === "#" + en.target.id;
          l.classList.toggle("active", on);
          if (on) l.setAttribute("aria-current", "true"); else l.removeAttribute("aria-current");
        });
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    links.forEach(function (l) { var s = $(l.getAttribute("href")); if (s) io.observe(s); });
  });

  safe(function () {
    var img = $("#gh-graph");
    if (!img || !S.github) return;
    var user = S.github.replace(/\/+$/, "").split("/").pop();
    if (!user) return;
    img.addEventListener("load", function () { img.hidden = false; });
    img.src = "https://ghchart.rshah.org/f97316/" + encodeURIComponent(user);
  });
})();
