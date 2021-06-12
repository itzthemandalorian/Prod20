twenty_theme_img.addEventListener("click", (e) => {
  e.stopPropagation();
  localStorage.setItem("theme", "original.css");
  changeStyle.setAttribute("href", "original.css");
});

surfup_theme_img.addEventListener("click", (e) => {
  e.stopPropagation();
  localStorage.setItem("theme", "surfup.css");
  changeStyle.setAttribute("href", "surfup.css");
});

if (localStorage.getItem("theme")) {
  changeStyle.setAttribute("href", localStorage.getItem("theme"));
} else {
  changeStyle.setAttribute("href", "original.css");
}
