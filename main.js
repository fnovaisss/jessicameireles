(function () {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const btn = document.getElementById("themeBtn");
  const key = "jessicameireles-theme";
  const saved = localStorage.getItem(key);
  if (saved) document.documentElement.setAttribute("data-theme", saved);

  function refreshIcon() {
    const theme = document.documentElement.getAttribute("data-theme");
    if (btn) btn.textContent = theme === "light" ? "☀" : "☾";
  }
  refreshIcon();

  btn?.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme");
    const next = current === "light" ? "" : "light";
    if (next) {
      document.documentElement.setAttribute("data-theme", next);
      localStorage.setItem(key, next);
    } else {
      document.documentElement.removeAttribute("data-theme");
      localStorage.setItem(key, "");
    }
    refreshIcon();
  });

  function setEmail(id) {
    const el = document.getElementById(id);
    if (!el) return;
    const user = "jessicasouzawe345";
    const domain = "gmail.com";
    el.addEventListener("click", (e) => {
      e.preventDefault();
      window.location.href = `mailto:${user}@${domain}`;
    });
  }
  setEmail("emailBtn");
  setEmail("emailBtn2");
})();
