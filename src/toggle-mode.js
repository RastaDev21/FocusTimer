let darkMode = true;
const buttonToggle = document.getElementById("toggle-mode");

buttonToggle.addEventListener("click", event => {
  document.documentElement.classList.toggle("light");

  const mode = darkMode ? "light" : "dark";
  event.currentTarget.querySeletor(
    "span"
  ).textContent = `${mode} mode ativado!`;

  darkMode = !darkMode;
});
