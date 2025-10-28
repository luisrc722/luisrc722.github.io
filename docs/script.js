/* ==========================================================
   🎬 script.js — Portafolio Luis Roldán Camacho (versión animada)
   Animaciones cliente-side con IntersectionObserver + transiciones GPU
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
// 🧭 2. Scroll suave entre secciones (navbar)
// ----------------------------------------------------------
document.querySelectorAll('a.nav-link[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: "smooth",
      });
    }

    const navbarCollapse = document.querySelector(".navbar-collapse");
    if (navbarCollapse.classList.contains("show")) {
      new bootstrap.Collapse(navbarCollapse).toggle();
    }
  });
});

// ----------------------------------------------------------
// 🔍 3. Resaltado dinámico de sección activa (ScrollSpy personalizado)
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
// ✨ 4. Microefecto hover en enlaces externos
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
// 🪄 5. Animaciones cliente-side (IntersectionObserver)
// ----------------------------------------------------------

// Configuración de las animaciones (duración y umbral)
const observerOptions = {
  threshold: 0.2,
  rootMargin: "0px 0px -50px 0px",
};

// Función para aplicar clases de animación al entrar en viewport
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target); // deja de observar para mejorar rendimiento
    }
  });
}, observerOptions);

// Selecciona todos los elementos animables
const animatedElements = document.querySelectorAll(
  ".fade-up, .fade-left, .fade-right"
);

animatedElements.forEach((el) => observer.observe(el));

// ----------------------------------------------------------
// ⚡ 6. Efecto inicial de carga (Hero + Navbar)
// ----------------------------------------------------------
window.addEventListener("load", () => {
  const hero = document.querySelector("#inicio");
  const navbar = document.querySelector("nav.navbar");

  if (hero) {
    hero.classList.add("fade-in");
  }
  if (navbar) {
    navbar.classList.add("fade-down");
  }

  console.log("✅ Animaciones inicializadas correctamente (cliente-side).");
});
