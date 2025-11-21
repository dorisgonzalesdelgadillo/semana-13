// Mostrar mensaje al cargar
window.addEventListener("load", () => {
  console.log("Página de hobby de Doris cargada 🎶");

  // Botón de mensaje
  const boton = document.querySelector("#btnMensaje");
  boton.addEventListener("click", () => {
    alert("💛 Gracias por visitar mi página, sigue disfrutando de la música y el vóley!");
  });

  // Submenú principal (Mis hobbies)
  const hobbyBtn = document.querySelector("#hobbyBtn");
  const subHobby = document.querySelector("#subHobby");
  hobbyBtn.addEventListener("click", () => {
    subHobby.classList.toggle("show");
  });

  // Submenú de música
  const musicaBtn = document.querySelector("#musicaBtn");
  const subMusica = document.querySelector("#subMusica");
  musicaBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    subMusica.classList.toggle("show");
  });

  // Cerrar menús si haces clic afuera
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".menu-hobby")) {
      subHobby.classList.remove("show");
      subMusica.classList.remove("show");
    }
  });
});

// Desplazamiento suave
function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}
