document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".contact-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault(); // Evita recargar la página

    // Ejemplo: limpiar campos después del envío simulado
    form.reset();

    // Sweet alert2 mensaje de éxito
    Swal.fire({
      title: "¡Mensaje enviado!",
      text: "Gracias por contactarme. Te responderé pronto.",
      icon: "success",
      confirmButtonColor: "#00bcd4",
      background: "#1a1a1a",
      color: "#f5f5f5"
    });
  });
});

//Modo oscuro
const toggle = document.getElementById("mod-osc");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
  const icon = toggle.querySelector("i");
  icon.classList.toggle("fa-moon");
  icon.classList.toggle("fa-sun");
});


// Animaciones con Intersection Observer
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.2 });

sections.forEach(sec => observer.observe(sec));


// notificacion portafolio

const proyectos = document.querySelectorAll(".project-card");
proyectos.forEach(p => {
  p.addEventListener("click", () => {
    Swal.fire({
      title: "Proyecto en construcción 🚧",
      text: "Pronto podrás ver la demo de este proyecto.",
      icon: "warning",
      confirmButtonColor: "#00bcd4",
      background: "#1a1a1a",
      color: "#fff"
    });
  });
});


//Descarga de CV
// === DESCARGA DE CV CON ALERTA ===
const downloadBtn = document.getElementById("descarga-cv");

if (downloadBtn) {
  downloadBtn.addEventListener("click", () => {
    Swal.fire({
      title: "Descargando CV...",
      text: "Tu archivo comenzará a descargarse en breve.",
      icon: "info",
      timer: 2000,
      showConfirmButton: false,
      background: "#1a1a1a",
      color: "#f5f5f5"
    });

    // Simular la descarga o redirigir al archivo real
    setTimeout(() => {
      window.open("docs/CV_Cristian_Valderrama.pdf", "_blank");
    }, 2000);
  });
}