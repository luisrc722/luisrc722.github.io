# 🌐 Portafolio Profesional — [luisrc722.github.io](https://luisrc722.github.io)

Sitio web personal y portafolio profesional de **Luis Roldán Camacho**, especializado en desarrollo web moderno, **e-commerce headless**, y diseño centrado en rendimiento, accesibilidad y arquitectura limpia.

El proyecto está construido íntegramente con **HTML5, CSS3 y JavaScript nativo**, sin dependencias externas, optimizado para **GitHub Pages** desde la carpeta `/docs/`.

---

## 📁 Estructura del proyecto

```bash
/
├── docs/
│   ├── index.html         # Página principal del portafolio
│   ├── styles.css         # Hoja de estilos principal
│   ├── script.js          # Scripts globales (utilidades y UI)
│   ├── /assets/           # Imágenes e íconos
│   │   ├── favicon.svg
│   │   ├── favicon.png
│   │   ├── og-cover.png
│   │   └── /projects/
│   │       ├── barbarian-cover.jpg
│   │       ├── python-utils.jpg
│   │       └── site-cover.jpg
│   └── /cv/
│       └── Luis_Roldan_CV.pdf
├── LICENSE                # Licencia MIT
└── README.md              # Documentación del repositorio
```

---

## 🧠 Descripción general

El portafolio presenta los proyectos, experiencia y stack de tecnologías utilizados por **Luis Roldán Camacho**, desarrollador enfocado en soluciones headless y experiencias interactivas fluidas.

El diseño combina una estética moderna con simplicidad funcional.
El código se estructura bajo **principios de mantenibilidad y validación W3C**, garantizando compatibilidad total con navegadores modernos.

---

## ⚙️ Tecnologías y estándares aplicados

| Área              | Descripción                                                                     |
| ----------------- | ------------------------------------------------------------------------------- |
| **Frontend**      | HTML5 semántico, CSS3 moderno (variables, grid, flexbox), JavaScript ES6 nativo |
| **Accesibilidad** | Contraste alto, scroll suave, foco visible y navegación por teclado             |
| **SEO**           | Metadatos Open Graph, Twitter Card y JSON-LD (Schema.org Person)                |
| **Diseño**        | Responsive, tipografía del sistema, glass minimal y dark mode automático        |
| **Hosting**       | GitHub Pages (build estático desde `/docs/`)                                    |
| **Optimización**  | Recursos locales, sin frameworks ni dependencias externas                       |

---

## 🧩 Contenido del sitio

| Sección                  | Descripción                                                         |
| ------------------------ | ------------------------------------------------------------------- |
| **Hero**                 | Presentación profesional y resumen técnico del enfoque de trabajo.  |
| **Proyectos destacados** | Selección de repositorios y trabajos (Barbarian, pythontest, etc.). |
| **Experiencia y stack**  | Detalle de tecnologías, metodologías y arquitectura utilizada.      |
| **Contacto**             | Enlaces a correo, LinkedIn y repositorio GitHub.                    |

---

## 🚀 Despliegue en GitHub Pages

1. **Verifica la fuente de publicación:**

   * Ir a **Settings → Pages**
   * En “Source”: selecciona
     **Branch:** `main`
     **Folder:** `/docs`

2. **Sube los archivos al repositorio:**

   ```bash
   git add .
   git commit -m "Publicación inicial del portafolio"
   git push origin main
   ```

3. GitHub generará el sitio automáticamente en:

   ```
   https://luisrc722.github.io/
   ```

---

## 🧰 Mantenimiento

| Tarea                         | Acción recomendada                                                                                  |
| ----------------------------- | --------------------------------------------------------------------------------------------------- |
| **Actualizar año del footer** | Automático (manejado por `script.js`).                                                              |
| **Actualizar CV**             | Sustituir el archivo `/docs/cv/Luis_Roldan_CV.pdf`.                                                 |
| **Agregar proyectos**         | Copiar una tarjeta `<article>` en `index.html` dentro de `#proyectos`.                              |
| **Optimizar imágenes**        | Usar `.jpg` o `.webp` comprimidas (< 250 KB).                                                       |
| **Validar HTML/CSS**          | [W3C Validator](https://validator.w3.org/) / [CSS Validator](https://jigsaw.w3.org/css-validator/). |
| **Analítica (opcional)**      | Integrar Google Analytics o Plausible con `<script async>`.                                         |

---

## 📈 Roadmap (Mejoras futuras)

* [ ] Implementar **modo claro/oscuro manual** con toggle.
* [ ] Agregar **bitácora técnica o blog** (`/docs/blog/`).
* [ ] Incluir **animaciones GSAP o Framer Motion**.
* [ ] Configurar **manifest.json** para compatibilidad PWA.
* [ ] Incorporar **métricas ligeras** (Plausible / GoatCounter).

---

## 🪪 Créditos y licencia

**Autor:** [Luis Roldán Camacho](https://www.linkedin.com/in/luis-roldan-camacho/)
**GitHub:** [@luisrc722](https://github.com/luisrc722)
**Licencia:** [MIT License](https://opensource.org/licenses/MIT) — libre uso con atribución.

---

> *“El código limpio no solo ejecuta instrucciones: comunica propósito.”*
> — **Luis Roldán Camacho**
