(() => {
  "use strict";

  const root = document.documentElement;
  const systemTheme = window.matchMedia("(prefers-color-scheme: dark)");
  const storageKey = "metribay-theme";
  let preference = null;

  try {
    const saved = localStorage.getItem(storageKey);
    if (saved === "light" || saved === "dark") preference = saved;
  } catch {
    // Theme controls still work when browser storage is unavailable.
  }

  const applyTheme = (theme) => {
    root.dataset.theme = theme;
    document.querySelector('meta[name="theme-color"]')?.setAttribute(
      "content", theme === "dark" ? "#101827" : "#fafaf7"
    );
    document.querySelectorAll("[data-theme-favicon]").forEach((icon) => {
      icon.href = `/assets/metribay-${theme}.svg`;
    });
    const label = document.querySelector("[data-theme-label]");
    if (label) label.textContent = theme === "dark" ? "Light theme" : "Dark theme";
  };

  const preferredTheme = () => preference ?? (systemTheme.matches ? "dark" : "light");

  // Run in the head before content is painted, avoiding a light-theme flash.
  applyTheme(preferredTheme());

  systemTheme.addEventListener("change", () => {
    if (preference === null) applyTheme(preferredTheme());
  });

  document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.querySelector("[data-theme-toggle]");
    if (!toggle) return;

    toggle.hidden = false;
    applyTheme(preferredTheme());
    toggle.addEventListener("click", () => {
      preference = root.dataset.theme === "dark" ? "light" : "dark";
      applyTheme(preference);
      try {
        localStorage.setItem(storageKey, preference);
      } catch {
        // A private browser or storage policy may disable persistence.
      }
    });
  });
})();
