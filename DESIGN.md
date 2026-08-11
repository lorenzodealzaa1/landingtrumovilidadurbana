# Sistema de diseño

## Dirección

- Sensación que debe transmitir: Urbana, dinámica, confiable y directa; foco absoluto en elegir una moto e iniciar una consulta.
- Referencias aprobadas: Landing de Tamburrino Motos provista por el usuario, con hero fotográfico de alto impacto, catálogo en cards, bloque institucional, financiación y CTA de WhatsApp.
- Elementos que se deben evitar: Precios sin validar, stock ficticio, exceso de animaciones, fondos que reduzcan la lectura del logo y bloques vacíos en mobile.

## Tokens

### Color

- Fondo principal: #FFFFFF
- Fondo secundario: #F4F7FA
- Texto principal: #0C2048
- Texto secundario: #526173
- Botón primario: #0C2048
- Acento: #4CADC4
- Estados de éxito, error y foco: #137A4B, #B42318 y #4CADC4

### Tipografía

- Familia para títulos: Delight Semi Bold (600), integrada como fuente local del proyecto.
- Familia para texto y subtextos: Delight Regular (400), integrada como fuente local del proyecto.
- Escala de títulos: Hero 44–88 px fluido; secciones 32–54 px; cards 22–28 px.
- Tamaño y altura de línea de cuerpo: 16–18 px, 1.55–1.7.

### Espaciado y forma

- Máximo ancho de contenido: 1180 px.
- Escala de espaciado: 4, 8, 12, 16, 24, 32, 48, 72 px.
- Radios: 8 px en botones; 18–24 px en cards e imágenes.
- Bordes y sombras: Bordes #DDE4EC y sombras suaves, sin elevación excesiva.

## Componentes

- Navegación: Fondo blanco, archivo original `C:\Users\loren\Downloads\LOGO TRU OK USAR2 - copia (3) (5) (1).png` centrado, compacto y con aire vertical arriba y abajo, sin botón adicional; el subtexto “MOVILIDAD URBANA” se muestra en negro mediante una superposición recortada del mismo PNG para conservar exactamente su composición.
- Hero multimedia: La fotografía original permanece como base a baja opacidad y el video provisto por el usuario se reproduce encima, en bucle, silenciado y sin controles. Usa encuadre panorámico en desktop y recorte vertical centrado en mobile; una capa azul y una textura sutil de grano aseguran profundidad y lectura.
- Transiciones de sección: Catálogo → bloque institucional y bloque institucional → ubicaciones usan un fundido vertical entre celeste claro y blanco para evitar cortes rectos. Las demás separaciones conservan su tratamiento original.
- Botón primario y secundario: Primario #0C2048 con texto blanco; los botones de acento #4CADC4 también usan texto blanco; secundario transparente con borde claro.
- Cards de motos: Fotografía específica del modelo en vista lateral y orientada hacia la derecha, contenedor cuadrado, fondo blanco, encuadre centrado y sin recorte. Las sombras originales se eliminan de los archivos para que todas compartan exclusivamente la misma sombra de piso generada por la interfaz; incluyen nombre, descripción breve de uso y dos CTAs de ancho completo, sin franjas de categoría.
- Popup de características: Modal accesible por modelo con cierre visible, fondo oscurecido, especificaciones en pares etiqueta/valor y CTA final de WhatsApp.
- Ubicaciones: Nombre centrado, valoración numérica, cinco estrellas amarillas y cantidad de reseñas verificadas. Cada punto usa un mapa claro y minimalista de CARTO/OpenStreetMap con marcador de marca, dentro de una tarjeta blanca y con un único acceso “Abrir en Google Maps”; grilla de dos columnas en desktop y una en mobile, sin divisores.
- Clientes felices: Galería de 22 entregas reales a ancho completo, sin cards, radios ni separación entre imágenes. Todas conservan la proporción vertical 3:4, priorizan el rostro con encuadre superior y avanzan continuamente de izquierda a derecha con repetición imperceptible.
- Bloque institucional: Foto compacta y cuadrada; titular y subtexto centrados tanto en desktop como en mobile, con CTA de ancho completo. No incluye lista de beneficios ni iconos.
- Bloque de conversión: Aviso de financiación centrado en una franja superior de ancho completo; debajo, titular y subtexto centrados y alineados verticalmente respecto del formulario en desktop.
- Formularios: Labels visibles, campos grandes y confirmación/error debajo del botón.
- Footer: Fondo #07142E, información comercial verificada, ubicaciones, navegación y CTA.

## Responsive

- Breakpoints relevantes: 640 px, 768 px y 1024 px.
- Cambios de layout en mobile: Hero compacto y centrado con titular bloqueado en tres renglones, panel derecho de la fotografía como fondo sutil, video recortado verticalmente y CTAs de ancho completo; cards en una columna, logo centrado en la cabecera, bloque institucional centrado con CTA de ancho completo y formulario en una columna.
- Reglas para imágenes y tipografía: Imágenes con `object-fit: cover`; titular hero limitado a 58 px en mobile y 88 px en desktop; evitar cortes de texto y bloques vacíos.

## Capturas aprobadas

## Movimiento

- Apariciones al hacer scroll: una sola vez por elemento, con desplazamientos breves, opacidad y desenfoque sutil; se alternan entradas verticales y laterales según la composición de cada sección.
- Secuencia: titulares, subtextos, botones y cards usan demoras escalonadas cortas para conservar jerarquía sin ralentizar la navegación.
- Accesibilidad: con `prefers-reduced-motion` el contenido aparece inmediatamente y se omiten las transiciones.

- `references/landing-tamburrino-reference.html`: HTML de la referencia.
- `references/color-primario-0C2048.png`: color de botones aprobado.
- `references/color-acento-4CADC4.png`: color de acento aprobado.
- `references/logo-original.png`: logo entregado por el usuario.
