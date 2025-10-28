/* ==========================================================
   📜 script.js — Portafolio Luis Roldán Camacho
   Bootstrap 5.3.8 + funciones utilitarias
   ========================================================== */

// ----------------------------------------------------------
// 🕒 1. Insertar año actual automáticamente en el footer
// ----------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  const yearElement = document.getElementById("y");
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
});

// ----------------------------------------------------------
// 🧭 2. Scroll suave para los enlaces del navbar
// ----------------------------------------------------------
document.querySelectorAll('a.nav-link[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80, // ajuste por navbar fija
        behavior: "smooth",
      });
    }

    // Cerrar menú en versión móvil tras hacer clic
    const navbarCollapse = document.querySelector(".navbar-collapse");
    if (navbarCollapse.classList.contains("show")) {
      new bootstrap.Collapse(navbarCollapse).toggle();
    }
  });
});

// ----------------------------------------------------------
// 🔍 3. Resaltado dinámico de sección activa (ScrollSpy custom)
// ----------------------------------------------------------
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section[id]");
  const scrollPos = window.scrollY + 100;

  sections.forEach((section) => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute("id");

    const link = document.querySelector(`.nav-link[href="#${id}"]`);
    if (scrollPos >= top && scrollPos < top + height) {
      link?.classList.add("active");
    } else {
      link?.classList.remove("active");
    }
  });
});

// ----------------------------------------------------------
// ✨ 4. Microefecto en enlaces externos
// ----------------------------------------------------------
document.querySelectorAll('a[target="_blank"]').forEach((link) => {
  link.addEventListener("mouseenter", () => {
    link.style.transform = "translateY(-2px)";
    link.style.transition = "transform 0.15s ease-in-out";
  });
  link.addEventListener("mouseleave", () => {
    link.style.transform = "translateY(0)";
  });
});

// ----------------------------------------------------------
// 📢 5. Log de diagnóstico (opcional)
// ----------------------------------------------------------
console.log("✅ Portafolio cargado correctamente — Bootstrap 5.3.8 activo.");
