# DESIGN DIRECTION — KARLA RODRÍGUEZ

---

## 1. PERSONALIDAD VISUAL

La web debe sentirse como una firma de dirección estratégica, no como una plataforma digital.

Adjetivos que deben guiar cada decisión visual:

- editorial: la composición manda, el espacio es intencional;
- estratégica: cada elemento tiene un propósito, nada es decorativo;
- sofisticada: contención, no exceso;
- contemporánea: referencias editoriales actuales, no tendencias de 2018;
- humana: el frío está controlado por el tono y la escala tipográfica;
- con criterio: se nota que alguien tomó decisiones, no que se siguió un template.

Referencia de sensación: publicación editorial europea de estrategia o arquitectura. No revista de tecnología. No landing de startup.

---

## 2. PRINCIPIOS DE COMPOSICIÓN

- El espacio en blanco es el principal elemento de diseño.
- La asimetría controlada genera movimiento sin perder orden.
- Cada sección tiene un eje dominante claro: texto o gráfico, nunca en competencia igual.
- La lectura fluye verticalmente sin obstáculos.
- Un elemento principal por pantalla. El ojo no debe dudar qué leer primero.
- La tensión visual viene de la tipografía y el espacio, no de los colores ni los efectos.

**Densidad como herramienta de ritmo:**
Las secciones no tienen densidad uniforme. Se alternan conscientemente:
- Secciones de densidad alta: texto más largo + posible elemento visual (Problema, Sistema, Servicios).
- Secciones de densidad mínima: una sola idea, espacio negativo dominante (Reframe, Tesis, CTA Final).

El ritmo de densidad es parte del diseño. No rellenar las secciones mínimas para que "se vean completas".

**Concepto visual director:**
Cada sección tiene una razón conceptual para su tratamiento visual, no solo un layout técnico.
La idea gobierna la forma. Antes de definir el layout de una sección, se define qué sensación debe producir.
Si no hay una razón conceptual para un elemento visual, ese elemento no debe estar.

---

## 3. JERARQUÍA VISUAL

Nivel 1 — Título de sección: gran escala, peso dominante, blanco o negro puro.
Nivel 2 — Subtítulo: escala media, peso regular o medium.
Nivel 3 — Cuerpo: escala de lectura cómoda, peso regular, interlineado generoso.
Nivel 4 — Metadata / etiquetas: escala pequeña, tracking amplio, todo en mayúsculas.
Nivel 5 — Notas / legales: mínima, gris claro.

La jerarquía se construye con tamaño y espacio. No con colores múltiples.

---

## 4. SISTEMA TIPOGRÁFICO

Usar máximo dos familias tipográficas. Una serif para títulos de peso editorial, una sans-serif para cuerpo y UI.

**TIPOGRAFÍA OFICIAL:**
Pendiente de archivos web y confirmación de licencia.

**TIPOGRAFÍA V1 — Fallback temporal:**
La arquitectura CSS debe declarar las fuentes en una sola variable o @font-face centralizada para permitir sustitución inmediata cuando lleguen los archivos oficiales. No hardcodear nombres de fuente en componentes individuales.

**Familia serif (títulos editoriales) — OFICIAL PENDIENTE:**
IvyPresto Display (tipografía oficial de Matiz).
Uso: títulos de sección H1, H2 con intención editorial. No para todo.
Variantes: IvyPresto Display Light y IvyPresto Display Light Italic.

Fallback V1: Playfair Display (Google Fonts, libre). Carga vía @import o `<link>` en el `<head>`.
Características buscadas: serif de alto contraste, elegante, con buena variante italic.
Playfair Display cubre estos requisitos con suficiente dignidad para la V1.

**Familia sans-serif (cuerpo y sistema) — OFICIAL PENDIENTE:**
Oakes Grotesk (tipografía oficial de Matiz).
Uso: subtítulos, cuerpo, etiquetas, botones, navegación, footer.

Fallback V1: DM Sans (Google Fonts, libre). Carga vía @import o `<link>` en el `<head>`.
Características buscadas: grotesca neutra, legible, con peso regular y medium disponible.
DM Sans cubre estos requisitos de forma sólida para la V1.

**Logotipo script de Matiz:**
El logotipo "Matiz" en script caligráfico es un activo de marca, no una tipografía de uso general.
Aparece únicamente como wordmark en navegación, footer, y opcionalmente como elemento gráfico a gran escala.
No se sustituye por tipografía ordinary. No se replica manualmente con ninguna fuente.

**Regla de mezcla:**
La serif aparece en momentos de declaración. La sans lleva todo lo funcional.
En títulos display se permite mezclar IvyPresto upright + IvyPresto italic en la misma frase para dar énfasis a una palabra clave. Usarlo con economía: máximo una vez por sección.

---

## 5. ESCALAS DE TÍTULOS

Escala proporcional. Base: 16px.

| Nivel | Tamaño desktop | Tamaño mobile | Peso | Familia |
|-------|---------------|--------------|------|---------|
| Display / Hero | 72–96px | 40–52px | Light o Regular | Serif |
| H1 | 52–64px | 32–40px | Regular | Serif |
| H2 | 36–44px | 24–30px | Regular | Serif o Sans |
| H3 | 24–28px | 20–24px | Medium | Sans |
| H4 | 18–20px | 16–18px | Medium | Sans |

Los títulos display llevan interlineado ajustado (line-height 1.0–1.1).
Los H2 y H3 llevan interlineado moderado (1.2–1.3).

---

## 6. ESCALAS DE TEXTO

| Nivel | Tamaño | Interlineado | Uso |
|-------|--------|-------------|-----|
| Cuerpo principal | 17–18px | 1.6–1.7 | Párrafos de sección |
| Cuerpo secundario | 15–16px | 1.5–1.6 | Descripciones, detalles |
| Etiqueta | 11–12px | 1.2 | Categorías, tracking +0.1em, uppercase |
| Legal / footer | 12–13px | 1.4 | Texto menor |

El cuerpo principal debe ser cómodo de leer en columna estrecha. No extender el texto a ancho completo.

---

## 7. USO DEL BLANCO Y NEGRO

**Fondo base:** Crema cálido #fffaf5 (paleta oficial Matiz). Más humano que el blanco puro. No usar #FFFFFF como fondo de página.
**Texto principal:** Negro (#0A0A0A o #111111). Nunca negro puro #000000.
**Texto secundario:** Gris oscuro (#444444–#555555).
**Texto terciario / metadata:** Gris medio (#888888–#999999).
**Separadores / líneas:** Gris muy claro (#E5E5E5).

Secciones de contraste: fondo negro (#0A0A0A) con texto crema (#fffaf5). Usar con economía, máximo en 1–2 secciones para generar pausa y énfasis. No alternar constantemente.

El contraste crema/negro es el recurso principal de impacto. No necesita color para comunicar jerarquía.

---

## 8. COLORES SECUNDARIOS

**Color de acento de marca — CONFIRMADO:**
Burdeos #470b24 (color primario oficial de Matiz).

Reglas de uso del burdeos en la landing:
- Aparece en el logotipo/wordmark de Matiz (no se puede evitar).
- Puede usarse como acento en nodos o líneas del sistema gráfico: máximo en 1 sección.
- No usar como fondo de sección.
- No usar como fondo de botón CTA.
- No usar para texto de cuerpo.
- Si se usa: una sola instancia controlada, no como patrón repetido.

**Otros colores de la paleta Matiz — NO USAR EN LA LANDING:**
- Coral #f47358: demasiado activo para dirección editorial. Descartado.
- Lavanda #c4d3f7: look de presentación corporativa. Descartado.
- Oliva #857b4a: no aporta a la dirección blanco/negro. Descartado.
- Chocolate oscuro #3d1717: innecesario con el negro disponible. Descartado.

**Fondos alternativos de sección permitidos:**
- Crema base: #fffaf5.
- Gris muy claro cálido: #f5f3f0 (máximo en 1 sección alternada).
- Negro: #0A0A0A (máximo en 1–2 secciones de contraste).

No usar gradientes de ningún tipo. No usar colores de marca digital genérica.

---

## 9. TRATAMIENTO DE FOTOGRAFÍA

Si se incorpora fotografía de Karla:

- Fotografía editorial. Encuadre con criterio. Luz natural o controlada de estudio.
- Preferir blanco y negro o tono desaturado.
- No fotografía corporativa estándar (fondo blanco, sonrisa forzada).
- No stock photography de ningún tipo.
- No fotografía de equipos de trabajo genéricos.
- El sujeto debe comunicar presencia y dirección, no amabilidad de agencia.

Si no hay fotografía disponible en el momento del desarrollo: diseñar la sección sin fotografía. No usar placeholder genérico.

---

## 10. ESPACIOS

El espaciado entre secciones es parte del diseño, no del relleno.

**Escala de espaciado base:** múltiplos de 8px.

| Uso | Valor desktop | Valor mobile |
|-----|--------------|-------------|
| Padding interno de sección | 120–160px vertical | 64–80px vertical |
| Separación entre bloques internos | 48–64px | 32–40px |
| Separación entre párrafos | 24–32px | 20–24px |
| Padding horizontal de contenedor | — | 20–24px |

El espacio en blanco entre secciones es intencional. No rellenarlo.

**Espacio negativo extremo:**
Ciertas secciones de densidad mínima pueden usar un ratio texto/área de ≤20%.
El texto flota en el espacio. La sensación es de pausa y peso, no de vacío.
Secciones candidatas: REFRAME (03) y TESIS (04).
En estas secciones el padding vertical puede extenderse a 200–240px en desktop.
No aplicar a secciones de densidad alta. No usar como recurso estético indiscriminado.

---

## 11. GRID

**Desktop (1440px base):**
- 12 columnas
- Gutter: 24px
- Contenido centrado

**Tablet (768–1024px):**
- 8 columnas
- Gutter: 20px

**Mobile (375–430px):**
- 4 columnas
- Gutter: 16px
- Padding lateral: 20–24px

El grid no necesita ser visible. Es la estructura invisible que da coherencia.
No todas las secciones deben usar las 12 columnas. La variación de columnas usadas genera ritmo.

---

## 12. ANCHO MÁXIMO DE CONTENIDO

**Ancho máximo del layout:** 1280px, centrado.
**Ancho máximo del bloque de texto:** 680–720px para cuerpo de lectura.
**Títulos grandes:** pueden extenderse hasta 900–960px si el diseño lo requiere.

No dejar texto a ancho completo en desktop. El texto necesita columna.

---

## 13. TRATAMIENTO DE BORDES

Bordes usados con economía extrema.

- No usar bordes en todos los elementos.
- Si se usa un borde: 1px, color gris claro (#E5E5E5), sin border-radius o con border-radius mínimo (2–4px).
- Las cards, si existen, se diferencian por espacio y fondo sutil, no por borde y sombra.
- No usar box-shadow decorativo.
- No usar border-radius grande (8px o más) salvo en botones.

---

## 14. BOTONES

**CTA principal:**
- Fondo negro, texto blanco.
- Padding: 14–16px vertical, 28–32px horizontal.
- Border-radius: 2–4px (casi cuadrado, no pill).
- Tipografía: sans-serif, 14–15px, weight medium, tracking leve.
- Sin íconos salvo que aporten información.
- Hover: fondo ligeramente más claro (#222222) o con transición de opacidad suave.

**CTA secundario / link:**
- Sin fondo. Texto con subrayado o flecha.
- Nunca button outline con borde completo salvo necesidad funcional.

**Regla general:**
Un solo botón CTA visible por sección. No acumular CTAs.

---

## 15. LINKS

- Color: negro o gris oscuro. No azul.
- Subrayado: solo al hover, o subrayado sutil siempre presente (1px, gris claro).
- En navegación: sin subrayado, con transición de opacidad al hover.
- No usar colores de link estándar de browser.

---

## 16. CARDS

Las cards deben usarse únicamente donde la estructura de comparación lo justifique (sección CLARITY / BUILD / MAXIMIZE).

Si se usan:
- Sin sombra.
- Sin borde visible o borde 1px gris muy claro.
- Fondo ligeramente diferente al fondo de página (gris #F5F5F5 o #F8F8F7).
- Espaciado interno generoso.
- Tipografía y jerarquía idéntica al sistema general.
- No usar íconos decorativos.
- No usar imágenes dentro de las cards.

Fuera de esa sección: evitar cards como patrón de layout.

---

## 17. MOVIMIENTO

El movimiento debe ser funcional y sutil. No decorativo.

**Principios:**
- Fade-in al entrar en viewport: opacidad 0 → 1, duración 400–600ms, easing ease-out.
- Translate sutil: Y +20px → 0px al mismo tiempo que el fade. No más.
- Stagger entre elementos de una misma sección: delay 80–120ms entre items.
- No usar scroll paralax agresivo.
- No usar animaciones de entrada múltiples complejas.
- No animar elementos que el usuario no ve.

**Animación de entrada del título hero — variante word-by-word:**
El título del Hero puede usar un reveal secuencial por palabra en lugar de un block fade.
Cada palabra aparece con fade-in + translate Y, delay 60ms entre palabras.
Esto da peso individual a cada palabra, especialmente a "todavía no." al final de la segunda línea.
Esta variante aplica exclusivamente al título del Hero. No replicar en otras secciones.
Si se implementa: duración por palabra 300ms, easing ease-out. Total de la animación: ≤1.5s.

**Reducción de movimiento:**
Respetar `prefers-reduced-motion`. Si el usuario lo tiene activo, eliminar todas las transiciones, incluyendo el word-by-word reveal.

---

## 18. MICROINTERACCIONES

- Hover en botón CTA: transición de fondo, 200ms ease.
- Hover en link de navegación: transición de opacidad, 150ms.
- Hover en elementos de lista de servicios: puede subrayarse o desplazarse levemente (2–4px), no más.
- Focus visible en todos los elementos interactivos (accesibilidad).
- No usar microinteracciones que requieran JavaScript complejo para efectos decorativos.

---

## 19. USO DE NODOS

Los nodos son elementos gráficos que representan puntos de conexión dentro de un sistema.

**Uso:**
- Círculos pequeños (4–8px de diámetro), color negro o gris oscuro.
- Aparecen en los extremos o intersecciones de líneas.
- Pueden usarse como separadores temáticos, indicadores de paso o conectores entre bloques de contenido.
- No usarlos como decoración aleatoria.

**Escala:**
- Nodo pequeño: 4px — marcador de posición o inicio de línea.
- Nodo medio: 8px — punto de énfasis dentro de un diagrama.
- Nodo grande: 12–16px — hub o elemento central de un mapa de conexiones.

---

## 20. LÍNEAS

Las líneas son el recurso gráfico principal del sistema visual.

**Tipos:**
- Línea base: 1px, gris oscuro (#333) o negro, horizontal o vertical.
- Línea de separación: 1px, gris claro (#E5E5E5), para dividir secciones dentro de un bloque.
- Línea de conexión: 1px, puede ser diagonal o curva suave, usada en elementos de diagrama.

**Reglas:**
- No usar líneas como decoración sin propósito estructural.
- Las líneas no deben dominar la composición. Son guías, no protagonistas.
- Grosor máximo: 1.5px. No más.

---

## 21. MAPAS

Los mapas visuales representan la complejidad de una marca personal como sistema.

**Uso:**
- Posibles en la sección de sistema / cómo pensamos (06).
- Representan nodos conectados: visión, estrategia, operación, equipo, crecimiento.
- Deben verse limpios, no saturados.
- El mapa no necesita ser interactivo. Puede ser SVG estático o animado con entrada suave.
- Fondo: blanco o negro según la sección.
- Color de nodos y líneas: contraste suficiente sobre el fondo.

**Estética de referencia:**
Diagramas de arquitectura de información bien diseñados. No infografías de marketing.

---

## 22. CONEXIONES

Las conexiones son las líneas que unen nodos en un diagrama.

**Reglas:**
- Curvas suaves (cubic-bezier) preferidas sobre líneas rectas, para dar sensación orgánica.
- Opacidad reducida (50–70%) para no competir con el texto.
- Animación de entrada: las líneas se dibujan de origen a destino, duración 600–800ms.
- No usar flechas salvo que la dirección sea crítica para entender el contenido.

---

## 23. SISTEMAS GRÁFICOS

El sistema gráfico completo se compone de:

1. Tipografía como elemento visual primario.
2. Espacio en blanco como estructura.
3. Líneas como sistema de conexión.
4. Nodos como puntos de énfasis.
5. Mapas como representación de complejidad.
6. Logotipo script a gran escala como recurso gráfico de identidad.

Estos elementos deben coexistir con coherencia. No mezclar aleatoriamente.

**Logotipo a gran escala:**
El wordmark "Matiz" en script puede aparecer a escala grande como elemento de fondo en secciones puntuales.
Si se usa: opacidad reducida (5–10%), sin interferir con la lectura del texto superpuesto.
No usarlo en más de una sección. No animarlo.

**Uso por sección:**
- Hero: tipografía dominante. Posible logotipo script a gran escala como elemento de fondo a baja opacidad.
- Problema: tipografía dominante con posible línea vertical lateral.
- Tesis: tipografía, posible separación con nodos entre las tres frases.
- Sistema: mapa de nodos y conexiones.
- Niveles / servicios: layout estructurado, posibles líneas de separación.
- Karla: fotografía editorial (cuando exista) + tipografía.
- Creator Fit / CTA: sección de contraste, fondo negro, tipografía crema.

---

## 24. COMPORTAMIENTO DESKTOP

- Layout centrado, máximo 1280px.
- Las secciones de texto usan columna de 60–65% del ancho.
- Las secciones de diagrama pueden expandirse hasta el ancho completo del contenedor.
- Navegación fija en la parte superior, peso mínimo.
- El scroll es la navegación principal. No usar tabs ni accordions salvo necesidad.
- Los títulos grandes tienen presencia horizontal dominante.

---

## 25. COMPORTAMIENTO TABLET

- Layout de 8 columnas, contenido al 85% del ancho.
- Los títulos reducen escala de forma proporcional.
- Las columnas de dos en desktop pasan a una en tablet.
- Los diagramas se simplifican o se muestran a menor escala manteniendo legibilidad.
- Navegación: menú compacto o hamburger si el espacio no alcanza.

---

## 26. COMPORTAMIENTO MOBILE

Mobile no es adaptación posterior. Es diseño paralelo.

- Layout de 4 columnas, padding lateral 20–24px.
- Un elemento por fila. No columnas en mobile salvo CLARITY/BUILD/MAXIMIZE en formato horizontal con scroll.
- Títulos: escala reducida pero manteniendo impacto.
- Cuerpo: mínimo 16px, interlineado 1.6.
- Botón CTA: ancho completo o próximo al completo.
- Los mapas y diagramas: versión simplificada o animación reducida.
- Navegación: hamburger con menú limpio, fondo blanco o negro según contexto.
- El orden del contenido en mobile debe ser idéntico al de desktop.

---

## 27. QUÉ NO DEBEMOS HACER

**Tipografía:**
- No usar más de dos familias tipográficas.
- No usar tipografías display en cuerpo de texto.
- No usar tipografías sans condensadas de impacto (estética deportiva).
- No escalar títulos sin revisar el resultado en mobile.

**Color:**
- No usar gradientes.
- No usar más de un color de acento si se define alguno.
- No usar colores de interfaz tecnológica (azules, verdes neón, morados).
- No usar color para dar jerarquía donde el tamaño puede hacerlo.

**Layout:**
- No centrar todo el texto en desktop (solo en secciones de declaración puntual).
- No usar tarjetas para todo.
- No llenar el espacio porque "se ve vacío".
- No acumular elementos visuales sin propósito.

**Movimiento:**
- No usar animaciones de entrada complejas en todos los elementos.
- No usar parallax agresivo.
- No animar el logo ni el texto de navegación.
- No usar loaders o splash screens.

**Gráficos:**
- No usar íconos de librería genérica (Flaticon, Font Awesome decorativo).
- No usar ilustraciones de stock o de estilo startup.
- No usar fotografía genérica de banco de imágenes.
- No usar mockups de dispositivos como elemento de diseño.

**General:**
- No imitar el estilo visual de agencias de marketing digital.
- No imitar el estilo de plataformas SaaS (pricing cards, checkmarks en listas, testimoniales con avatar circular).
- No priorizar "que se vea moderno" sobre "que comunique con criterio".
- No sacrificar legibilidad por estética.

---

## 28. IDENTIDAD DE MARCA — ACTIVOS CONFIRMADOS

Activos encontrados en /references/visual y clasificados para uso en la landing:

**Logotipo wordmark:**
"Matiz" en script caligráfico. Color burdeos #470b24 sobre fondos claros. Color crema #fffaf5 sobre fondos oscuros.
Uso: navegación, footer, y opcionalmente como elemento gráfico de fondo a gran escala con baja opacidad.

**Monograma:**
"Mz" en óvalo/círculo. Mismo color que el wordmark según fondo.
Uso: elemento de marca en mobile (donde el wordmark puede resultar pequeño) o como detalle gráfico puntual.

**Tipografías oficiales:**
- IvyPresto Display (serif editorial) — títulos.
- Oakes Grotesk (sans limpia) — cuerpo y UI.

**Paleta activa en la landing:**
- Crema base: #fffaf5
- Negro texto: #0A0A0A
- Acento de marca: #470b24 (uso muy controlado)
- Fondo contraste: #0A0A0A
- Separadores: #E5E5E5
- Fondos alternados: #f5f3f0

**Paleta descartada para la landing:**
- Coral #f47358
- Lavanda #c4d3f7
- Oliva #857b4a
- Gradientes de cualquier tipo

**Fotografía disponible:**
Pendiente. Las referencias visuales contienen mockups de marca, no fotografías reales de Karla.
Cuando se entregue fotografía: aplicar criterio editorial definido en sección 9.

**Fotografía como presencia atmosférica:**
Cuando haya fotografía de Karla, esta funciona como presencia, no como ilustración del texto.
El texto y la fotografía son paralelos: ninguno explica al otro.
Si se quita la foto, el texto debe funcionar igual de bien.
Si se quita el texto, la foto debe comunicar carácter por sí sola.

---

## 29. STICKY CTA — COMPONENTE DE CONVERSIÓN PERMANENTE

Una barra CTA flotante aparece en el borde inferior de la pantalla una vez que el usuario ha salido del viewport del Hero.

**Especificaciones:**
- Posición: fixed bottom, z-index alto.
- Altura: 56px.
- Contenido: únicamente el botón "Reservar espacio con el equipo".
- Fondo: crema (#fffaf5). Borde superior: 1px sólido (#E5E5E5).
- Tipografía del botón: Oakes Grotesk Medium, 14px. Botón fondo negro, texto crema.
- Padding horizontal del contenedor: centrado, máximo 1280px.

**Comportamiento:**
- Aparece: cuando el Hero sale completamente del viewport (IntersectionObserver).
- Se oculta: cuando cualquier otro CTA del contenido es visible en viewport (secciones 08, 12, 13).
- Animación de entrada: fade-in 200ms. Animación de salida: fade-out 200ms.
- En mobile: aparece solo después del Hero y se oculta en las mismas condiciones. Botón a ancho completo dentro del contenedor.

**Principio:**
El usuario nunca debe tener que hacer scroll hacia atrás para encontrar el CTA. La barra lo mantiene disponible sin interrumpir la lectura, porque se oculta cuando ya hay un CTA visible.
