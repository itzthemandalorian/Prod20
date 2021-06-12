twe_stop.addEventListener("click", (e) => {
  e.stopPropagation();
  localStorage.setItem("twe_stop", "true");
});

sed_stop.addEventListener("click", (e) => {
  e.stopPropagation();
  localStorage.setItem("sed_stop", "true");
});

pom_stop.addEventListener("click", (e) => {
  e.stopPropagation();
  localStorage.setItem("pom_stop", "true");
});
