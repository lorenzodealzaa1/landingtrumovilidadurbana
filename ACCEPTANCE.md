# Criterios de aceptación

## Negocio y contenido

- [x] La acción principal es visible en todas las secciones relevantes.
- [x] El contenido coincide con `CONTENT.md`.
- [x] No hay textos ficticios ni datos comerciales inventados.

## Diseño y experiencia

- [x] La implementación respeta `DESIGN.md`.
- [x] Se revisaron desktop y mobile; el layout intermedio usa los mismos breakpoints fluidos.
- [x] En mobile, los márgenes y espaciados verticales son compactos y no hay grandes bloques vacíos.
- [x] No hay etiquetas decorativas por encima de titulares, excepto la identificación de marca aprobada para replicar el hero de referencia.
- [x] Navegación, formulario, enlaces y CTAs funcionan en el preview local.
- [x] El formulario tiene estados de confirmación y error cuando corresponden.
- [x] El botón flotante de WhatsApp funciona, es accesible y en mobile se reduce a un botón compacto para no bloquear CTAs ni formulario.

## Calidad y accesibilidad

- [x] Los controles se pueden usar con teclado.
- [x] El foco es visible y el formulario tiene labels asociados.
- [x] Las imágenes con significado tienen texto alternativo.
- [x] No hay errores visibles ni advertencias en consola durante la revisión local.

## Publicación

- [ ] Title, meta descripción, favicon, Open Graph, manifest y robots están resueltos; sitemap y URL absoluta de Open Graph quedan pendientes del dominio final.
- [x] El footer incluye información comercial aprobada, contacto, navegación y puntos de venta.
- [ ] El preview de Vercel debe ser creado y aprobado antes de publicar.
- [ ] Variables de entorno para Preview y Production: no se usan actualmente; revisar al incorporar analítica.
- [ ] Dominio, WhatsApp, formulario y analítica deben probarse nuevamente sobre el preview antes de comunicar el lanzamiento.
