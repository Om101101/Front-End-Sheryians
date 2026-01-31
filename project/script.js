// Theme Prefrence baiscaly making of dar and light mode
const body = document.body;
const btn = document.querySelector("button");
const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

function applyTheme(theme) {
  body.classList.remove("dark", "light");
  body.classList.add(theme);
}

function getSystemTheme() {
  return mediaQuery.matches ? "dark" : "light";
}

// Initial theme setup
const savedTheme = localStorage.getItem("theme");
applyTheme(savedTheme || getSystemTheme());

mediaQuery.addEventListener("change", () => {
  if (!localStorage.getItem("theme")) {
    applyTheme(getSystemTheme());
  }
});

// Toggle button
btn.addEventListener("click", () => {
  const newTheme = body.classList.contains("dark") ? "light" : "dark";
  applyTheme(newTheme);
  localStorage.setItem("theme", newTheme);
});
