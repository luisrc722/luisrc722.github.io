/* ==========================================================
   ⚡ script.js — Portafolio Luis Roldán Camacho
   Versión con transiciones entre secciones (SPA-like)
   ========================================================== */

/* ----------------------------------------------------------
   🕒 1. Insertar año actual en el footer
   ---------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("y");
  if (year) year.textContent = new Date().getFullYear();
});

/* ----------------------------------------------------------
   🧭 2. Scroll suave y control de navegación
   ---------------------------------------------------------- */
const navLinks = document.querySelectorAll('a.nav-link[href^="#"]');
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href");
    const target = document.querySelector(targetId);
    if (!target) return;

    // Aplicar transición de salida
    const activeSection = document.querySelector("section.active");
    if (activeSection) activeSection.classList.remove("active", "fade-in-section");
    target.classList.add("fade-in-section");
    setTimeout(() => target.classList.add("active"), 100);

    // Scroll suave
    window.scrollTo({
      top: target.offsetTop - 80,
      behavior: "smooth",
    });

    // Actualiza la URL sin recargar
    history.pushState(null, "", targetId);

    // Cierra el menú móvil si está abierto
    const navbarCollapse = document.querySelector(".navbar-collapse");
    if (navbarCollapse.classList.contains("show")) {
      new bootstrap.Collapse(navbarCollapse).toggle();
    }
  });
});

/* ----------------------------------------------------------
   🧩 3. Animaciones por scroll (IntersectionObserver)
   ---------------------------------------------------------- */
const observerOptions = { threshold: 0.2 };
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll(".fade-up, .fade-left, .fade-right").forEach((el) => observer.observe(el));

/* ----------------------------------------------------------
   🔍 4. ScrollSpy simple (destaca la sección activa)
   ---------------------------------------------------------- */
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

/* ----------------------------------------------------------
   ✨ 5. Hover sutil en enlaces externos
   ---------------------------------------------------------- */
document.querySelectorAll('a[target="_blank"]').forEach((link) => {
  link.addEventListener("mouseenter", () => {
    link.style.transform = "translateY(-2px)";
    link.style.transition = "transform 0.15s ease-in-out";
  });
  link.addEventListener("mouseleave", () => {
    link.style.transform = "translateY(0)";
  });
});

/* ----------------------------------------------------------
   🎞️ 6. Transición general de secciones (SPA-like)
   ---------------------------------------------------------- */
// Detectar cambios del historial del navegador
window.addEventListener("popstate", () => {
  const hash = window.location.hash || "#inicio";
  const target = document.querySelector(hash);
  if (!target) return;

  document.querySelectorAll("section.active").forEach((s) =>
    s.classList.remove("active", "fade-in-section")
  );
  target.classList.add("fade-in-section");
  setTimeout(() => target.classList.add("active"), 100);
});

// Efecto de entrada inicial
window.addEventListener("load", () => {
  const hero = document.querySelector("#inicio");
  if (hero) {
    hero.classList.add("fade-in-section", "active");
  }
  console.log("✅ Animaciones SPA-like inicializadas correctamente.");
});
