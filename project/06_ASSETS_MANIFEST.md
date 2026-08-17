# ASSETS MANIFEST — KARLA RODRÍGUEZ

---

## ASSETS EXISTENTES

---

### /references/visual/karla-portrait-01.jpg

**Formato:** JPG
**Contenido:** Slide tipo hero de la marca Matiz. Fondo burdeos (#470b24). Título en serif grande "Somos la *estrategia* detrás del talento" con mezcla de upright + italic. Cuerpo en sans-serif. Monograma Mz circular a la derecha. Líneas curvas sutiles de fondo.
**Posible uso:** Referencia visual de tono, jerarquía tipográfica y composición. No usar directamente en la web.
**Sección sugerida:** Referencia para secciones Hero y Dirección Estratégica.
**Listo para producción:** No. Es una imagen de referencia/presentación.
**Requiere optimización:** No aplica.
**Versión alternativa:** No.

---

### /references/visual/karla-portrait-02.jpg

**Formato:** JPG
**Contenido:** Propuesta de logotipo de Matiz. Muestra el wordmark "Matiz" en script caligráfico y el monograma "Mz" en óvalo. Business cards en versión oscura (burdeos) y versión clara (crema). Fondo con gradiente lavanda/rosado.
**Posible uso:** Referencia del logotipo y monograma para extraer los activos gráficos reales. No usar la imagen directamente.
**Sección sugerida:** Referencia para Navegación y Footer.
**Listo para producción:** No. Es una imagen de presentación de branding.
**Requiere optimización:** No aplica.
**Versión alternativa:** No. El logotipo necesita entregarse en SVG.

---

### /references/visual/karla-portrait-03.jpg

**Formato:** JPG
**Contenido:** Espécimen tipográfico de Matiz. Muestra IvyPresto Display (Light y Light Italic) y Oakes Grotesk. Título display con mezcla upright + italic. Un acento en coral. CTA button en burdeos.
**Posible uso:** Referencia tipográfica. Confirma las fuentes oficiales del proyecto.
**Sección sugerida:** Referencia para sistema tipográfico general.
**Listo para producción:** No. Es un documento de referencia.
**Requiere optimización:** No aplica.
**Versión alternativa:** No.

---

### /references/visual/karla-portrait-04.jpg

**Formato:** JPG
**Contenido:** Mockup de laptop sobre silla. Pantalla muestra el logotipo Matiz en gran escala como fondo con el hero superpuesto. Fondo de escena beige/arena cálido. Silla con tela natural y madera.
**Posible uso:** Referencia de estética ambiente y del recurso gráfico de logotipo a gran escala.
**Sección sugerida:** Referencia para sección Hero y tratamiento del logotipo como elemento gráfico.
**Listo para producción:** No. Es un mockup de presentación.
**Requiere optimización:** No aplica.
**Versión alternativa:** No.

---

### /references/visual/matiz-colors.jpg

**Formato:** JPG
**Contenido:** Paleta de colores oficial de Matiz. Incluye: #470b24 (burdeos primario), #3d1717 (chocolate oscuro), #fffaf5 (crema/off-white), #f47358 (coral), #c4d3f7 (lavanda), #857b4a (oliva).
**Posible uso:** Referencia de paleta. Solo #470b24 y #fffaf5 se usan en la landing. El resto descartado.
**Sección sugerida:** Referencia para todo el sistema de color.
**Listo para producción:** No. Es un documento de referencia.
**Requiere optimización:** No aplica.
**Versión alternativa:** No.

---

### /public/favicon.svg

**Formato:** SVG
**Contenido:** Ícono en forma de rayo/bolt con colores púrpura (#863bff, #7e14ff, #ede6ff) y azul (#47bfff). Múltiples filtros y elipses. Es el favicon genérico de la plantilla Vite. No tiene relación con Karla ni con Matiz.
**Posible uso:** Ninguno para este proyecto. Debe ser reemplazado.
**Sección sugerida:** No aplica.
**Listo para producción:** No. Es un asset de plantilla genérica.
**Requiere optimización:** No aplica.
**Versión alternativa:** No. Necesita ser creado desde cero basado en el monograma Mz.

---

### /public/icons.svg

**Formato:** SVG (sprite)
**Contenido:** Sprite con íconos de redes sociales y plataformas: Bluesky, Discord, Documentation, GitHub, Social (perfil de usuario), X (Twitter). Colores #08060d y #aa3bff. Son íconos de una plantilla de desarrollo genérica.
**Posible uso:** Parcialmente reutilizable si Karla usa X (Twitter) o Bluesky en el footer. Requiere confirmación de cuáles redes son relevantes para Matiz.
**Sección sugerida:** Footer (redes sociales), si se confirman las plataformas activas.
**Listo para producción:** Parcialmente. Los íconos técnicamente funcionan, pero el color #aa3bff no es de la paleta de Matiz y necesita ser adaptado.
**Requiere optimización:** Sí. Eliminar íconos no utilizados. Ajustar colores a la paleta de Matiz (#0A0A0A o #fffaf5 según fondo).
**Versión alternativa:** No.

---

## ASSETS — ESTADO ACTUALIZADO V1

---

### LOGO — Wordmark Matiz

**Asset disponible:** /public/logos/logo-matiz-provisional.jpg
**Origen:** /references/visual/Logo-Matiz-01.jpg (copiado)
**Calidad:** Buena resolución. Script burdeos (#470b24) sobre fondo crema con gradiente sutil.
**Limitación:** JPG con fondo no transparente. Usable únicamente sobre fondos crema/claros. NO usable sobre fondo negro sin SVG oficial.
**Uso en V1:** Navbar y footer (sobre crema). El elemento gráfico de fondo a gran escala (sección Hero) queda excluido hasta tener SVG.
**Estado:** PROVISIONAL — MANUAL REVIEW para versión SVG oficial con fondo transparente.

---

### LOGO — Monograma Mz en SVG

**Asset disponible:** No existe.
**Decisión V1:** Eliminado como dependencia obligatoria. Usar logo provisional cuando sea necesario.
**Estado:** MANUAL REVIEW — no impide construir la V1.

---

### FAVICON

**Asset actual:** /public/favicon.svg — genérico de Vite, sin relación con Matiz. No usar.
**Decisión V1:** El logo JPG provisional no es adecuado para favicon (fondo no transparente). Se mantiene favicon genérico temporalmente o se deja en blanco.
**Estado:** MANUAL REVIEW — no impide construir la V1. Resolver cuando llegue SVG oficial.

---

### TIPOGRAFÍAS WEB — IvyPresto Display

**Estado oficial:** Pendiente de archivos web y licencia.
**Fallback V1:** Playfair Display (Google Fonts). Carga vía `<link>` en el `<head>`. Variable CSS centralizada para sustitución inmediata.
**Estado:** MANUAL REVIEW — no impide construir la V1.

---

### TIPOGRAFÍAS WEB — Oakes Grotesk

**Estado oficial:** Pendiente de archivos web y licencia.
**Fallback V1:** DM Sans (Google Fonts). Carga vía `<link>` en el `<head>`. Variable CSS centralizada.
**Estado:** MANUAL REVIEW — no impide construir la V1.

---

### CTA — URL CREATOR FIT

**URL confirmada:** https://calendar.app.google/fjyn6SfoawjVWtfW7
**Comportamiento:** target="_blank" rel="noopener noreferrer"
**Aplica a:** Todos los elementos con texto "Reservar espacio con el equipo".
**Estado:** RESUELTO.

---

### FOTOGRAFÍA EDITORIAL — Karla Rodríguez

**Por qué es necesario:** La sección 11 (Karla) requiere una fotografía real. Sin ella, la sección debe diseñarse sin imagen hasta que esté disponible.
**Formato requerido:** JPG o WebP de alta resolución. Mínimo 1200px de ancho. Proporción sugerida: vertical (3:4) para composición editorial.
**Criterio de fotografía:** Aplicar las directrices de la sección 9 del Design Direction. Editorial, desaturada o en blanco y negro, con presencia y dirección, no corporativa.
**Fuente:** Karla o sesión fotográfica pendiente.

---

### OG IMAGE — Open Graph para compartir en redes

**Por qué es necesario:** Para controlar cómo se ve el enlace al compartirse en redes sociales o mensajería.
**Formato requerido:** JPG o PNG, 1200×630px.
**Contenido:** Nombre de Karla, tagline o frase de posicionamiento, logotipo de Matiz. Fondo crema o negro.
**Fuente:** Crear durante la fase de QA, una vez que el diseño final esté aprobado.

---

### ÍCONOS DE REDES SOCIALES — Versión Matiz

**Por qué es necesario:** Si el footer incluye enlaces a redes sociales de Karla/Matiz, los íconos actuales necesitan ser adaptados a la paleta del proyecto.
**Pendiente:** Confirmar qué redes sociales deben aparecer en la landing y cuáles son los links reales.
**Formato requerido:** SVG inline o sprite SVG limpio, sin colores hardcodeados que no sean de la paleta.
