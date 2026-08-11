# Guia para Codex

## Fuente de verdad

- `BRIEF.md`: objetivo de negocio, audiencia y conversion.
- `DESIGN.md`: sistema visual y comportamiento responsive.
- `CONTENT.md`: textos y datos aprobados.
- `ACCEPTANCE.md`: criterios de terminado.

Si hay conflicto entre archivos, detenerse y marcarlo. Nunca inventar precios, testimonios, clientes, resultados, datos de contacto ni afirmaciones legales.

## Implementacion

- Mantener React, TypeScript, Vite y Tailwind salvo que el brief requiera otra cosa.
- Crear componentes pequenos y reutilizables; evitar duplicar estilos.
- Usar los assets provistos en `public/`. No incorporar imagenes externas sin aprobacion.
- Construir mobile-first. El trafico principal es mobile: los margenes y espaciados verticales deben ser contenidos en pantallas pequenas y solo crecer gradualmente en tablet y desktop. No usar grandes bloques vacios ni `padding` vertical excesivo en mobile.
- No usar etiquetas decorativas, eyebrow text, subtitulos en mayusculas ni nombres de seccion por encima de los titulares, salvo que `CONTENT.md` o `DESIGN.md` lo soliciten expresamente.
- Incluir siempre un boton flotante de WhatsApp, visible en mobile y desktop, con enlace, mensaje inicial y numero aprobados. Debe tener etiqueta accesible y no tapar CTAs, formularios ni contenido importante.
- Cada pagina debe tener un titulo de pestana y una meta descripcion unicos, claros y basados en el servicio, marca y ubicacion reales. Actualizar `index.html` antes de publicar.
- El footer es una pieza SEO y de conversion: debe incluir nombre comercial exacto, descripcion breve aprobada, datos de contacto y ubicacion/area de cobertura cuando apliquen, navegacion interna util y enlaces legales necesarios. No hacer keyword stuffing ni inventar datos.
- Conservar foco visible, contraste adecuado, labels y texto alternativo.
- No agregar dependencias salvo que sean necesarias para un requisito explicito.

## Antes de finalizar

1. Ejecutar `npm run typecheck` y `npm run build`.
2. Corregir enlaces rotos, errores de consola y contenido pendiente no marcado.
3. Revisar desktop y mobile contra `DESIGN.md`, priorizando primero mobile.
4. Confirmar cada punto de `ACCEPTANCE.md` o informar exactamente que falta.
