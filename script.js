const hamburguer = document.querySelector(".sesso .nav-bar .hamburguer");
const nav = document.querySelector(".sesso .nav-bar");

hamburguer.addEventListener("click", () => nav.classList.toggle("active"));
