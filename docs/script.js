// ==========================================================
// Luis Roldán Camacho — Portafolio (luisrc722.github.io)
// Archivo: script.js
// Descripción: scripts globales del sitio (inicio dinámico,
// accesibilidad, eventos de interfaz y utilidades generales).
// ==========================================================

/**
 * Ejecuta las funciones de inicialización cuando el DOM está listo.
 */
document.addEventListener("DOMContentLoaded", () => {
  setCurrentYear();
  enhanceAnchors();
  initSmoothScroll();
  console.log("✅ Portafolio cargado correctamente.");
});

/* ==========================================================
   🕓 Utilidad 1: Año dinámico en el footer
   ========================================================== */
function setCurrentYear() {
  const yearEl = document.getElementById("y");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}

/* ==========================================================
   🔗 Utilidad 2: Mejora de enlaces ancla
   - Evita el salto brusco al navegar por secciones (#id)
   - Ajusta desplazamiento según el header sticky
   ========================================================== */
function enhanceAnchors() {
  const anchors = document.querySelectorAll('a[href^="#"]:not([href="#"])');
  anchors.forEach(anchor => {
    anchor.addEventListener("click", (event) => {
      const targetId = anchor.getAttribute("href").substring(1);
      const target = document.getElementById(targetId);
      if (target) {
        event.preventDefault();
        const yOffset = -60; // Compensa el header
        const y = target.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    });
  });
}

/* ==========================================================
   🧭 Utilidad 3: Desplazamiento suave global
   ========================================================== */
function initSmoothScroll() {
  document.documentElement.style.scrollBehavior = "smooth";
}

/* ==========================================================
   🌙 Utilidad 4 (opcional): Modo claro/oscuro manual
   - Base lista, puedes activarla en el futuro
   ========================================================== */
function toggleTheme() {
  const root = document.documentElement;
  const isDark = root.classList.toggle("light-mode");
  localStorage.setItem("theme", isDark ? "light" : "dark");
}

// Cargar tema guardado
(function loadTheme() {
  const saved = localStorage.getItem("theme");
  if (saved === "light") {
    document.documentElement.classList.add("light-mode");
  }
})();
