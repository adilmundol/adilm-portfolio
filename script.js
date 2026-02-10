function toggleTheme() {
  document.body.classList.toggle("light");
  document.querySelector(".theme-toggle").textContent =
    document.body.classList.contains("light") ? "☀️" : "🌙";
}

function openModal(id) {
  document.getElementById(id).style.display = "flex";
}

function closeModal(id) {
  document.getElementById(id).style.display = "none";
}

function outsideClose(e, id) {
  if (e.target.id === id) closeModal(id);
}
