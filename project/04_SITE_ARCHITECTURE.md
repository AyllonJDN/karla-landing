# SITE ARCHITECTURE — KARLA RODRÍGUEZ

---

## NAVEGACIÓN

**Elemento:** Logotipo wordmark Matiz (SVG, color burdeos sobre crema) alineado a la izquierda.
**Derecha:** Botón "Reservar espacio con el equipo" — botón principal CTA, fondo negro.
**Posición:** Fija en la parte superior. Sin fondo visible en scroll inicial (transparente sobre el hero). Fondo crema con borde inferior 1px (#E5E5E5) al hacer scroll.
**Mobile:** Wordmark a la izquierda. Hamburger a la derecha. Menú desplegable limpio sobre fondo crema.
**Sin links de sección en la navbar.** La landing se navega por scroll, no por anclas en la barra.

**Coordinación con Sticky CTA:**
El botón CTA de la navbar y el Sticky CTA bar no deben aparecer simultáneamente en pantalla.
Regla: mientras el Hero está visible en viewport, solo existe el CTA de la navbar. Cuando el Hero sale completamente del viewport, el botón CTA de la navbar se oculta (opacity 0, sin espacio) y aparece el Sticky CTA bar inferior. Si el usuario vuelve a subir y el Hero vuelve al viewport, se invierte: navbar CTA reaparece, Sticky CTA desaparece. Esto evita duplicación y mantiene siempre un solo CTA activo.

---

## 01 HERO

**OBJETIVO**
Declarar en los primeros segundos quién es Karla, qué problema resuelve y para quién. Instalar tensión que invite a seguir leyendo.

**COPY UTILIZADO**
Título: "Tu marca creció. / El negocio detrás todavía no."
Subtítulo: "Karla Rodríguez trabaja con creadores y marcas personales para dirigir lo que el contenido por sí solo no puede sostener."
CTA: "Reservar espacio con el equipo"

**COMPOSICIÓN**
Layout asimétrico. Título display en IvyPresto, ocupa la mayor parte de la pantalla. Alineado a la izquierda. El subtítulo debajo del título, en Oakes Grotesk, columna más estrecha (60% del ancho). El CTA debajo del subtítulo. El wordmark Matiz a gran escala y baja opacidad (8%) como elemento de fondo, posicionado a la derecha.

**JERARQUÍA**
1. Título display (IvyPresto 72–96px desktop).
2. Subtítulo (Oakes Grotesk 17–18px).
3. Botón CTA.
4. Wordmark de fondo (elemento gráfico, no texto funcional).

**ELEMENTO VISUAL**
Wordmark "Matiz" en script a gran escala, color burdeos al 8% de opacidad, posicionado en el cuadrante derecho. No compite con el texto.

**INTERACCIÓN**
El botón CTA tiene hover con transición de fondo (200ms).

**MOVIMIENTO**
Entrada: el título usa word-by-word reveal — cada palabra aparece con fade-in + translate Y +20px → 0, delay 60ms entre palabras, duración 300ms por palabra, easing ease-out. Esto da peso individual a cada palabra y especialmente a "todavía no." al final de la segunda línea, que llega sola después de las anteriores. Duración total del título: ≤1.5s. El subtítulo con fade-in de bloque completo, delay tras el fin del título (≈120ms). El CTA con delay 240ms tras el subtítulo. El wordmark de fondo aparece estático desde la carga, sin animación.

**CTA**
"Reservar espacio con el equipo" — botón principal, fondo negro, texto crema.

**TRANSICIÓN HACIA SIGUIENTE SECCIÓN**
Sin separador. El espacio en blanco generoso (120–160px) marca el fin del hero. La sección 02 comienza con su propio título que introduce inmediatamente la tensión.

**DESKTOP**
Altura: 90–100vh. Título en columnas 1–8 de 12. Wordmark de fondo en columnas 7–12, desbordando levemente el margen derecho.

**TABLET**
Altura: auto (contenido + padding generoso). Título reduce a 52–64px. Wordmark de fondo a menor escala, misma posición.

**MOBILE**
Altura: auto. Título 40–52px, apilado en dos líneas. Wordmark de fondo presente pero más pequeño y desplazado para no interferir con la lectura. CTA a ancho completo.

---

## 02 PROBLEMA

**OBJETIVO**
Generar reconocimiento. La persona debe leer esto y sentir que describe exactamente lo que le está ocurriendo.

**COPY UTILIZADO**
Título: "El crecimiento llega antes que la estructura."
Subtítulo: "Y en ese punto, todo empieza a depender de ti."
Cuerpo: "Más oportunidades. Más decisiones. Más personas. / Más campañas, marcas, negociaciones y proyectos. / Todo eso es bueno. / El problema es cuando toda esa complejidad sigue pasando por una sola persona: tú. / No porque no seas capaz. / Sino porque ningún creador debería ser también el director, el coordinador y el ejecutor de todo al mismo tiempo."

**COMPOSICIÓN**
Sección de texto puro. Columna estrecha (máximo 680px), alineada a la izquierda. El título en IvyPresto, el subtítulo en Oakes Medium, el cuerpo en Oakes Regular. Espacio generoso entre párrafos. Posible línea vertical de 1px en el margen izquierdo del bloque de cuerpo, como recurso gráfico sutil.

**JERARQUÍA**
1. Título H1 (IvyPresto 52–64px).
2. Subtítulo (Oakes Medium 20–22px).
3. Cuerpo (Oakes Regular 17–18px, interlineado 1.7).

**ELEMENTO VISUAL**
Línea vertical sutil (1px, #E5E5E5) en el margen izquierdo del bloque de cuerpo. Opcional. No obligatoria si la composición funciona sin ella.

**INTERACCIÓN**
Ninguna. Sección de lectura pura.

**MOVIMIENTO**
Fade-in + translate Y al entrar en viewport. Título primero, subtítulo con delay 80ms, cuerpo con delay 160ms.

**CTA**
Sin CTA en esta sección. El peso va a la lectura.

**TRANSICIÓN HACIA SIGUIENTE SECCIÓN**
Espacio en blanco. La sección 03 contrasta por su brevedad y contundencia.

**DESKTOP**
Columna de texto centrada en columnas 2–7 de 12. Espacio lateral derecho vacío e intencional.

**TABLET**
Mismo layout, texto al 85% del ancho.

**MOBILE**
Texto a ancho completo con padding lateral 20–24px.

---

## 03 REFRAME

**OBJETIVO**
Romper la creencia de que el problema se resuelve con más producción o más contrataciones. Instalar la categoría: el problema es de dirección.

**COPY UTILIZADO**
Título: "No es un problema de contenido. / Es un problema de dirección."
Cuerpo: "Producir más no resuelve el fondo. / Contratar a alguien tampoco, si no hay dirección clara detrás. / Lo que falta no es más ejecución. / Es alguien que dirija el negocio que tu marca personal ya es, o que está en camino de ser."

**COMPOSICIÓN**
Sección de espacio negativo extremo. Fondo crema base (#fffaf5), sin cambio de color respecto a las secciones anteriores — el contraste viene del silencio, no del fondo. Padding vertical 200–240px en desktop. El texto ocupa ≤20% del área visual. El título flota en el espacio. El cuerpo debajo del título, en columna estrecha (máximo 60% del ancho), con espacio generoso entre título y cuerpo. Esta sección es una pausa. No rellenar.

**JERARQUÍA**
1. Título en dos líneas, gran escala (IvyPresto H1 52–64px o mayor).
2. Cuerpo en columna estrecha (Oakes Regular 17–18px).

**ELEMENTO VISUAL**
El título en sí es el elemento visual. Sin adornos adicionales.

**INTERACCIÓN**
Ninguna.

**MOVIMIENTO**
Fade-in del título. Las dos líneas pueden entrar con stagger de 80ms entre ellas.

**CTA**
Sin CTA.

**TRANSICIÓN HACIA SIGUIENTE SECCIÓN**
Espacio en blanco. Sin separador. El espacio negativo es la transición.

**DESKTOP**
Padding vertical 200–240px. El título puede extenderse hasta 900–960px de ancho. El cuerpo en columna de 60%.

**TABLET**
Padding vertical 120–160px. Título reduce a 40–48px.

**MOBILE**
Padding vertical 80–100px. Título 32–40px. Puede quedar en 3 líneas. El espacio negativo se mantiene proporcionalmente.

---

## 04 TESIS

**OBJETIVO**
Presentar el modelo de pensamiento de Karla. Las tres frases deben quedar grabadas. Esta sección es la declaración intelectual del proyecto.

**COPY UTILIZADO**
Título: "Tres verdades sobre lo que construyes."
Cuerpo: "Contenido genera valor. / La estructura captura valor. / El sistema escala valor. / Puedes estar generando mucho valor y capturando poco. / Puedes tener audiencia y no tener negocio. / Puedes crecer en número y perder claridad sobre hacia dónde vas. / La dirección estratégica resuelve eso."

**COMPOSICIÓN**
Las tres frases de la tesis se presentan con tratamiento especial: cada una en su propia línea, con posible nodo (círculo 6–8px) a la izquierda como marcador, y separadas por espacio generoso o línea 1px entre ellas. El resto del cuerpo debajo, en columna de lectura.

**JERARQUÍA**
1. Título (IvyPresto H2 36–44px).
2. Las tres frases de la tesis (IvyPresto o Oakes Medium, 20–24px, espacio doble entre ellas).
3. Párrafo de cierre (Oakes Regular 17–18px).

**ELEMENTO VISUAL**
Nodos pequeños (6px, color #0A0A0A) a la izquierda de cada frase de la tesis, conectados por línea vertical de 1px. Representan el sistema de tres niveles. Simple y estructurado.

**INTERACCIÓN**
Ninguna.

**MOVIMIENTO**
Las tres frases de la tesis entran con stagger: primera frase → delay 0ms, segunda → delay 120ms, tercera → delay 240ms. Todos con fade-in + translate Y.

**CTA**
Sin CTA.

**TRANSICIÓN HACIA SIGUIENTE SECCIÓN**
Espacio en blanco. La sección 05 introduce a Karla directamente.

**DESKTOP**
Layout centrado. Las tres frases en columna de ~720px. Nodos alineados con margen izquierdo del bloque.

**TABLET**
Mismo layout, escala reducida.

**MOBILE**
Las tres frases apiladas, cada una con su nodo. Espacio entre ellas generoso.

---

## 05 DIRECCIÓN ESTRATÉGICA

**OBJETIVO**
Presentar a Karla y su rol con claridad y contundencia. Definir qué hace y qué no hace. Esta sección instala la categoría.

**COPY UTILIZADO**
Título: "Karla dirige el negocio detrás de tu marca personal."
Subtítulo: "No es una agencia. No es un manager. No es una consultora tradicional."
Cuerpo: "Karla trabaja contigo para ordenar visión, estrategia, negocio, operación, equipo y crecimiento. / No entra a administrar tu contenido. / No entra a darte consejos puntuales. / Entra a dirigir. / Eso significa pensar contigo a largo plazo, tomar decisiones con criterio, construir estructura que sostenga el crecimiento y liberar al creador de tener que llevar todo solo."

**COMPOSICIÓN**
Posible layout de dos columnas en desktop: columna izquierda con el título y subtítulo en grande, columna derecha con el cuerpo. Esto rompe la monotonía de secciones anteriores de columna única. O bien: sección de columna única con el título especialmente grande, casi como una declaración. Ambas opciones son válidas; la decisión final es de implementación.

**JERARQUÍA**
1. Título H1 (IvyPresto).
2. Subtítulo (Oakes Regular, tracking leve, color gris oscuro #555).
3. Cuerpo (Oakes Regular 17–18px).

**ELEMENTO VISUAL**
Ninguno adicional. El peso es del título.

**INTERACCIÓN**
Ninguna.

**MOVIMIENTO**
Fade-in estándar al entrar en viewport.

**CTA**
Sin CTA en esta sección. No interrumpir la lectura.

**TRANSICIÓN HACIA SIGUIENTE SECCIÓN**
Espacio en blanco. La sección 06 profundiza en el sistema.

**DESKTOP**
Opción A: 2 columnas (título en col 1–5, cuerpo en col 7–12).
Opción B: columna única centrada, título a 900px de ancho.

**TABLET**
1 columna, título reduce escala.

**MOBILE**
1 columna, apilado. Título 32–40px.

---

## 06 SISTEMA / CÓMO PENSAMOS

**OBJETIVO**
Demostrar el modelo de pensamiento. Hacer visible que detrás de una marca personal que funciona hay estructura, no solo talento. Esta sección puede tener el elemento gráfico más elaborado de la landing.

**COPY UTILIZADO**
Título: "Una marca personal es un sistema. / La mayoría la opera como si fuera solo una persona."
Cuerpo: "Detrás de cada marca personal que funciona bien hay algo más que talento y constancia. / Hay visión definida. / Hay decisiones alineadas. / Hay estructura que funciona sin que el creador esté presente en cada detalle. / Eso no ocurre solo. / Alguien lo tiene que dirigir."

**COMPOSICIÓN**
Sección con fondo negro (#0A0A0A) y texto crema (#fffaf5). Esto crea el primer momento de contraste fuerte en la landing. Layout: columna de texto a la izquierda (60%), mapa de nodos/sistema a la derecha (40%). El mapa es un diagrama SVG simple con nodos conectados: visión → estrategia → operación → equipo → crecimiento. Las líneas son curvas suaves.

**JERARQUÍA**
1. Título (IvyPresto, color crema).
2. Cuerpo (Oakes Regular, color crema, opacidad 80% para el cuerpo vs 100% para el título).
3. Diagrama SVG (elemento gráfico secundario, no compite con el texto).

**ELEMENTO VISUAL**
Mapa de nodos SVG: 5–6 nodos conectados por líneas curvas. Representa el sistema detrás de una marca personal. Nodos: círculos de 8–12px, color crema. Líneas: 1px, crema al 50% de opacidad. Etiquetas en Oakes Regular 12px.

**INTERACCIÓN**
Opcional: al entrar en viewport, las líneas del diagrama se dibujan de origen a destino (stroke-dashoffset animation, 600–800ms).

**MOVIMIENTO**
Fade-in del texto. Animación de dibujado de líneas en el diagrama al entrar en viewport.

**CTA**
Sin CTA.

**TRANSICIÓN HACIA SIGUIENTE SECCIÓN**
El fondo vuelve a crema en la sección 07. El cambio de fondo es la transición.

**DESKTOP**
Fondo negro a pantalla completa. Texto a la izquierda (col 1–6), diagrama a la derecha (col 7–12).

**TABLET**
Texto arriba, diagrama debajo (reducido en escala).

**MOBILE**
Texto completo apilado. Diagrama debajo, simplificado (menos nodos o solo representación lineal).

---

## 07 NIVEL DE INTERVENCIÓN

**OBJETIVO**
Preparar al lector para la sección de servicios. Instalar la idea de que hay diferentes profundidades de trabajo según el momento del creador.

**COPY UTILIZADO**
Título: "Diferentes momentos requieren diferente profundidad."
Subtítulo: "No todas las situaciones necesitan el mismo tipo de acompañamiento."
Cuerpo: "Hay momentos en que necesitas claridad sobre una decisión específica. / Hay momentos en que necesitas construir la base de lo que viene. / Hay momentos en que necesitas dirigir con mayor profundidad un negocio que ya tiene escala. / Trabajamos desde ahí."

**COMPOSICIÓN**
Sección de densidad mínima. Funciona como respiración entre la densidad de la sección 06 (negro, diagrama) y la densidad de la sección 08 (tres columnas de servicios). Texto alineado a la izquierda en columna estrecha. Sin elementos adicionales. Sin etiquetas. Solo el título, el subtítulo y el cuerpo breve.

**JERARQUÍA**
1. Título (IvyPresto H2).
2. Subtítulo (Oakes Regular, gris).
3. Cuerpo (Oakes Regular 17–18px).

**ELEMENTO VISUAL**
Ninguno. La ligereza es el elemento.

**INTERACCIÓN**
Ninguna.

**MOVIMIENTO**
Fade-in estándar.

**CTA**
Sin CTA.

**TRANSICIÓN HACIA SIGUIENTE SECCIÓN**
Espacio en blanco. La sección 08 entra con la estructura de tres columnas como contraste de densidad.

**DESKTOP**
Columna de texto en col 2–6 de 12. Espacio lateral derecho vacío e intencional.

**TABLET**
Mismo layout, texto al 70% del ancho.

**MOBILE**
Texto a ancho completo con padding lateral estándar.

---

## 08 CLARITY / BUILD / MAXIMIZE

**OBJETIVO**
Presentar los tres niveles de servicio de forma clara y no como un catálogo de precios. Cada nivel habla desde el momento del creador, no desde el formato del producto.

**COPY UTILIZADO**
CLARITY — Título: "Una sesión para ordenar lo que tienes en la cabeza." / Subtítulo: Creator Strategy Session / Cuerpo: "Dos horas de trabajo directo para resolver una decisión, ordenar una situación o definir hacia dónde va tu marca." / Detalle: 2 horas · USD 150
BUILD — Título: "Tres meses para construir la base estratégica de tu marca." / Subtítulo: Matiz Creator Strategy / Cuerpo: "Trabajamos juntos para construir claridad, posicionamiento, sistema y estructura alrededor de lo que estás creando." / Detalle: 3 meses · Precio a consultar
MAXIMIZE — Título: "Dirección integral para una marca que ya tiene escala." / Subtítulo: Creator Business Strategy / Cuerpo: "Para marcas personales con mayor complejidad: más audiencia, más líneas de negocio, más oportunidades. Dirección estratégica para convertir ese crecimiento en algo más sostenible." / Detalle: 4 meses · Precio a consultar

**COMPOSICIÓN**
Tres bloques. En desktop: layout de 3 columnas de igual ancho con separadores verticales de 1px entre ellas. Cada columna tiene: etiqueta (CLARITY/BUILD/MAXIMIZE) en uppercase pequeño arriba, título, subtítulo, cuerpo, detalle de duración/precio. No son cards con fondo. Son columnas de texto estructuradas.

**JERARQUÍA**
1. Etiqueta CLARITY / BUILD / MAXIMIZE (Oakes 11–12px, uppercase, tracking, #888).
2. Título de cada nivel (IvyPresto 24–28px o Oakes Medium).
3. Subtítulo del servicio (Oakes Regular, gris).
4. Cuerpo (Oakes Regular 15–16px).
5. Detalle (Oakes 12–13px, gris medio).

**ELEMENTO VISUAL**
Separadores verticales de 1px (#E5E5E5) entre las tres columnas. Posibles nodos en la parte superior de cada columna (6px) como indicadores de nivel.

**INTERACCIÓN**
Ninguna. No se necesitan tabs ni accordions.

**MOVIMIENTO**
Las tres columnas entran con stagger: CLARITY primero, BUILD con delay 100ms, MAXIMIZE con delay 200ms. Todos con fade-in + translate Y.

**CTA**
Sin CTA por bloque. Un único CTA debajo de los tres bloques: "Reservar espacio con el equipo" centrado.

**TRANSICIÓN HACIA SIGUIENTE SECCIÓN**
Espacio en blanco. El CTA debajo actúa como cierre de esta sección antes de la 09.

**DESKTOP**
3 columnas de igual ancho (col 1–4, 5–8, 9–12). Separadores entre ellas. Etiquetas arriba de cada columna.

**TABLET**
3 columnas reducidas o layout en 2+1 (CLARITY y BUILD en fila, MAXIMIZE debajo centrado).

**MOBILE**
Las tres columnas apilan verticalmente. Cada bloque con espacio generoso entre ellos y línea horizontal 1px (#E5E5E5) de separación. Sin scroll horizontal. El apilado vertical es la solución definitiva en mobile: más legible, más accesible, consistente con el resto de la landing.

---

## 09 COMPARADOR

**OBJETIVO**
Diferenciar la dirección estratégica de las alternativas conocidas. Resolver la pregunta implícita: ¿por qué no simplemente contratar a alguien más?

**COPY UTILIZADO**
Título: "¿Qué hace diferente la dirección estratégica?"
Cuerpo: "No es lo mismo que contratar a alguien para producir contenido. / No es lo mismo que tener un manager que negocia contratos. / No es lo mismo que recibir asesoría puntual. / La dirección estratégica trabaja en el nivel donde se toman las decisiones que definen hacia dónde va todo lo demás. / Eso incluye: qué construyes, cómo lo posicionas, qué estructura necesitas, qué oportunidades priorizas y cómo haces que el negocio funcione sin depender completamente de ti."

**COMPOSICIÓN**
Sección de texto con énfasis en las tres primeras frases negativas. Pueden presentarse tipográficamente más grandes o con tratamiento diferente (line-through sutil, o simplemente en IvyPresto italic) para generar contraste con el párrafo siguiente. Layout de columna estrecha.

**JERARQUÍA**
1. Título (IvyPresto H2).
2. Las tres frases "No es lo mismo..." (IvyPresto Light Italic, 20–22px). La diferenciación tipográfica serif italic vs. sans regular del párrafo siguiente es el único recurso de énfasis. Sin nodos, sin guiones, sin marcadores.
3. Párrafo de cierre (Oakes Regular 17–18px).

**ELEMENTO VISUAL**
Ninguno. El contraste tipográfico entre las tres frases (IvyPresto italic) y el párrafo final (Oakes Regular) encarna visualmente la diferencia conceptual: lo que no es vs. lo que sí hace.

**INTERACCIÓN**
Ninguna.

**MOVIMIENTO**
Fade-in estándar. Las tres frases con stagger entre ellas.

**CTA**
Sin CTA.

**TRANSICIÓN HACIA SIGUIENTE SECCIÓN**
Espacio en blanco generoso.

**DESKTOP**
Columna de texto col 2–7 de 12.

**TABLET / MOBILE**
Columna única.

---

## 10 EVIDENCIA / CASOS

**OBJETIVO**
Construir credibilidad desde el proceso. Esta sección queda en reserva hasta que exista material real aprobado.

**COPY UTILIZADO**
Título: "El trabajo habla desde el proceso, no desde los números."
Subtítulo: [Sección reservada para casos reales cuando estén disponibles.]

**COMPOSICIÓN**
En estado actual (sin material): la sección muestra solo el título y puede quedar como espacio intencionalmente limpio, sin placeholder. No inventar contenido. No usar testimoniales genéricos. Si se decide no mostrar esta sección hasta tener material, puede omitirse en la primera versión del build.

**JERARQUÍA**
1. Título (IvyPresto H2).
2. [Espacio reservado].

**ELEMENTO VISUAL**
Ninguno hasta tener material real.

**INTERACCIÓN**
Ninguna.

**MOVIMIENTO**
Fade-in del título.

**CTA**
Sin CTA.

**TRANSICIÓN HACIA SIGUIENTE SECCIÓN**
Espacio en blanco.

**NOTA DE IMPLEMENTACIÓN**
Esta sección debe construirse como componente vacío que se activa cuando exista contenido real. No renderizar un bloque vacío visible en producción. Omitir de la primera versión si no hay material.

**DESKTOP / TABLET / MOBILE**
Columna única centrada. Solo el título visible hasta que exista contenido.

---

## 11 KARLA

**OBJETIVO**
Humanizar. Mostrar quién es Karla como persona y directora, no como producto. Esta es la sección más personal de la landing.

**COPY UTILIZADO**
Título: "Karla Rodríguez"
Subtítulo: "Directora Estratégica de creadores y marcas personales."
Cuerpo: "Karla trabaja con creadores que ya tienen movimiento y necesitan mayor dirección. / Su trabajo no empieza en el contenido. / Empieza en la pregunta: ¿hacia dónde va esto realmente, y qué hace falta construir para llegar ahí? / Matiz es la estructura desde la cual esa dirección se convierte en sistemas, equipo, operación y crecimiento."

**COMPOSICIÓN**
Si hay fotografía disponible: layout asimétrico. La fotografía ocupa la mayor proporción de pantalla (columnas 5–12), con presencia dominante. El texto se sitúa a la izquierda (columnas 1–4), alineado al margen, sin intentar "llenar" su espacio. Texto y fotografía son paralelos: ninguno ilustra al otro. La fotografía es presencia, no imagen de perfil.
Si no hay fotografía: columna de texto única, alineada a la izquierda, col 1–6. El título "Karla Rodríguez" en IvyPresto a escala display. El diseño funciona sin imagen y no debe parecer incompleto.

**JERARQUÍA**
1. Título "Karla Rodríguez" (IvyPresto display — es un nombre propio pero en esta sección actúa como declaración de presencia).
2. Subtítulo (Oakes Regular, gris oscuro).
3. Cuerpo (Oakes Regular 17–18px).

**ELEMENTO VISUAL**
Fotografía editorial como presencia atmosférica (cuando esté disponible). Hasta entonces: solo tipografía. No usar placeholder.

**INTERACCIÓN**
Ninguna.

**MOVIMIENTO**
Fade-in del texto. Si hay fotografía: la imagen aparece con fade-in simultáneo al texto (no con delay — texto y presencia llegan juntos).

**CTA**
Sin CTA directo. La sección da paso natural a Creator Fit.

**TRANSICIÓN HACIA SIGUIENTE SECCIÓN**
Espacio en blanco. La sección 12 cambia de tono: entra en fondo oscuro.

**DESKTOP**
Con foto: texto en col 1–4, fotografía en col 5–12 (proporción dominante).
Sin foto: texto en col 1–6.

**TABLET**
Con foto: fotografía arriba a ancho completo, texto debajo.
Sin foto: columna única.

**MOBILE**
Con foto: fotografía a ancho completo con proporción 3:4, texto debajo.
Sin foto: columna única.

---

## 12 CREATOR FIT

**OBJETIVO**
Presentar el paso de conversión. Hacer que la persona entienda exactamente qué es Creator Fit y se sienta invitada, no presionada.

**COPY UTILIZADO**
Título: "¿Es este el momento adecuado para trabajar juntos?"
Subtítulo: "Creator Fit — 15 minutos"
Cuerpo: "Antes de cualquier propuesta, tenemos una conversación breve. / Queremos entender tu contexto, tu momento y lo que necesitas. / Y ser honestos sobre si existe un siguiente paso que tenga sentido para los dos. / No es una asesoría. / No es un diagnóstico. / Es una conversación de encaje."
CTA: "Reservar espacio con el equipo"

**COMPOSICIÓN**
Sección con fondo negro (#0A0A0A), texto crema (#fffaf5). Segundo momento de contraste en la landing. Composición centrada, columna estrecha (máximo 600px), mucho espacio en blanco vertical. El CTA debajo del cuerpo, con espacio generoso.

**JERARQUÍA**
1. Título (IvyPresto, crema).
2. Subtítulo "Creator Fit — 15 minutos" (Oakes uppercase o Regular, crema al 70%).
3. Cuerpo (Oakes Regular, crema al 80%).
4. Las tres frases "No es..." (Oakes Regular, crema, con espacio entre cada una).
5. CTA botón (fondo crema, texto negro — inversión del botón estándar para fondo oscuro).

**ELEMENTO VISUAL**
El contraste fondo negro es el elemento visual principal. Limpieza total. Sin adornos.

**INTERACCIÓN**
CTA hover: transición de fondo (crema → gris muy claro, 200ms).

**MOVIMIENTO**
Fade-in del título. Cuerpo con delay. CTA con delay adicional.

**CTA**
"Reservar espacio con el equipo" — botón invertido: fondo crema (#fffaf5), texto negro (#0A0A0A).

**TRANSICIÓN HACIA SIGUIENTE SECCIÓN**
El fondo vuelve a crema en la sección 13 (CTA Final). El cambio de fondo es la transición.

**DESKTOP**
Columna centrada col 4–9 de 12. Padding vertical muy generoso (160px+).

**TABLET**
Mismo centrado, padding reducido.

**MOBILE**
Columna única con padding lateral 20–24px. CTA a ancho completo.

---

## 13 CTA FINAL

**OBJETIVO**
Cierre. Último empuje hacia la conversión. Directo, sin sobrecargar.

**COPY UTILIZADO**
Título: "Si llegaste hasta aquí, probablemente ya sabes qué falta."
Subtítulo: "El primer paso es una conversación de 15 minutos."
CTA: "Reservar espacio con el equipo"

**COMPOSICIÓN**
Sección breve, fondo crema, columna centrada. El título es la pieza central. El subtítulo y el CTA debajo. Mucho espacio vertical. No es una sección larga.

**JERARQUÍA**
1. Título (IvyPresto, H1 o display, centrado o alineado a la izquierda).
2. Subtítulo (Oakes Regular, gris).
3. CTA botón.

**ELEMENTO VISUAL**
Ninguno. La austeridad es el elemento.

**INTERACCIÓN**
CTA hover estándar.

**MOVIMIENTO**
Fade-in simple.

**CTA**
"Reservar espacio con el equipo" — botón estándar, fondo negro, texto crema.

**TRANSICIÓN HACIA SIGUIENTE SECCIÓN**
Línea horizontal de separación 1px (#E5E5E5) antes del footer, o simplemente el cambio de padding.

**DESKTOP**
Centrado, col 3–10 de 12. Padding vertical 120–160px.

**TABLET / MOBILE**
Centrado. CTA a ancho completo en mobile.

---

## 14 FOOTER

**OBJETIVO**
Cierre institucional. Ligero. Sin información innecesaria.

**COPY UTILIZADO**
Línea principal: "Karla Rodríguez / Matiz"
Línea secundaria: "Dirección Estratégica para creadores y marcas personales."
Legal: [Aviso de privacidad · Términos — PENDIENTE]

**COMPOSICIÓN**
Footer minimalista. Dos columnas en desktop: izquierda con wordmark Matiz (SVG) + línea secundaria. Derecha con links legales y posibles íconos de redes sociales (cuando se confirmen). En mobile: todo apilado verticalmente.

**JERARQUÍA**
1. Wordmark Matiz (SVG, burdeos).
2. Línea secundaria (Oakes Regular 13–14px, gris).
3. Links legales (Oakes 12px, gris claro).
4. Íconos redes sociales (cuando estén confirmados).

**ELEMENTO VISUAL**
Línea horizontal 1px (#E5E5E5) en la parte superior del footer como separador.

**INTERACCIÓN**
Links con hover de opacidad.

**MOVIMIENTO**
Ninguno.

**CTA**
Sin CTA.

**DESKTOP**
2 columnas: wordmark + tagline a la izquierda / legal + redes a la derecha. Padding vertical 48–64px.

**TABLET**
Mismo layout o apilado si el espacio no alcanza.

**MOBILE**
Apilado verticalmente. Wordmark arriba, tagline, legal abajo.

---

## STICKY CTA — COMPONENTE DE CONVERSIÓN PERMANENTE

**OBJETIVO**
Mantener el CTA accesible en todo momento sin duplicarlo. El usuario nunca debe hacer scroll hacia atrás para encontrar cómo contactar.

**COMPOSICIÓN**
Barra fija en el borde inferior de la pantalla. Altura 56px. Fondo crema (#fffaf5). Borde superior 1px (#E5E5E5). Contenido: único botón "Reservar espacio con el equipo" centrado o alineado a la derecha dentro del contenedor máximo (1280px). Botón fondo negro, texto crema, tipografía Oakes Grotesk Medium 14px.

**COMPORTAMIENTO**
Trigger de aparición: cuando el Hero sale completamente del viewport (IntersectionObserver sobre el elemento Hero).
Trigger de ocultamiento: cuando cualquier CTA del contenido entra al viewport (secciones 08, 12 y 13 tienen CTA propio).
Coordinación con navbar: el botón CTA de la navbar desaparece (opacity 0, pointer-events none) mientras el Sticky CTA está activo. Se restablece si el Hero vuelve al viewport.

**MOVIMIENTO**
Aparición: translate Y +56px → 0 + fade-in, duración 200ms, ease-out.
Ocultamiento: translate Y 0 → +56px + fade-out, duración 200ms, ease-in.

**DESKTOP**
Barra a ancho completo. Contenido centrado dentro del contenedor 1280px.

**TABLET**
Mismo comportamiento.

**MOBILE**
Barra a ancho completo. Botón ocupa el 90% del ancho de la barra. Altura puede extenderse a 64px para mejor área táctil. Respetar safe-area-inset-bottom en dispositivos con notch inferior (padding-bottom: env(safe-area-inset-bottom)).

---

## NOTAS DE IMPLEMENTACIÓN

**Regla de los 20 segundos:**
Las secciones 01 y 02 deben ser suficientes para que una persona entienda:
- Quién es Karla (subtítulo del Hero).
- Qué problema resuelve (título del Problema).
- Para quién (subtítulo del Problema).
- Por qué es diferente (título del Reframe — visible al hacer el primer scroll).
- Cuál es el siguiente paso (CTA del Hero, visible desde el inicio).

**URL del CTA:**
El botón "Reservar espacio con el equipo" apunta a la URL del Creator Fit indicada en /project/05_SERVICES.md como PENDIENTE. Debe ser actualizada antes del deploy.

**Sección 10 (Evidencia):**
Omitir en la primera versión del build hasta que exista material real aprobado. El componente debe existir en el código pero no renderizarse en producción.

**Navegación por anclas:**
No implementar navegación secundaria por anclas de sección. El scroll es la única navegación. El único link de acción es el CTA en la navbar.

**Orden de prioridad de build:**
1. Navegación + Hero (01) + Sticky CTA
2. Problema (02) + Reframe (03) + Tesis (04)
3. Dirección Estratégica (05) + Sistema (06)
4. Nivel de Intervención (07) + CLARITY/BUILD/MAXIMIZE (08)
5. Comparador (09) + Karla (11)
6. Creator Fit (12) + CTA Final (13) + Footer (14)
7. Evidencia (10) — cuando exista material
