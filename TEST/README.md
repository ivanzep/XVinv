# Kyara · Replica HTML del diseño marfil

Abre `index.html` en un navegador o publícalo en cualquier servidor estático (por ejemplo, GitHub Pages).

## Dos capas visuales

1. `assets/kyara-invitation-design.webp`: **maqueta visual exacta**, incluyendo los adornos invernales, las tipografías y los iconos como píxeles del diseño. Es el método que preserva fielmente la imagen.
2. `index.html`: áreas interactivas HTML sobre la imagen (navegación, botones, ubicación), cuenta regresiva en vivo, textos corregidos y secciones adicionales en HTML semántico más abajo para accesibilidad/legibilidad en móviles.

Las figuras invernales, letras estilizadas e iconografía del arte principal **no son objetos HTML/SVG independientes**. Una reconstrucción completa vectorial/componentizada permitiría editarlos por separado, pero no sería idéntica pixel por pixel al diseño generado.

La imagen original del concepto contenía horas ilustrativas e indicaba «Salón de Eventos». Por eso hay superposiciones HTML con los datos reales de la invitación: recepción 7:00 PM, cena 8:00 PM, fiesta 7:00 PM–1:00 AM, Jardín Blanc en Zona Río, Tijuana. El contador ahora es en vivo.

## RSVP

El botón RSVP apunta a `https://ivanzep.github.io/XVinv/confirmar.html`, la página funcional existente. No se han realizado cambios en el repositorio original ni en su backend. El enlace de mapas usa Google Maps.

## Archivos

- `index.html`: réplica visual y experiencia HTML interactiva.
- `assets/kyara-invitation-design.webp`: arte original con mensaje centrado.

**Nota:** El calendario genera un evento para la recepción del 19 dic 2026 7pm hasta el 20 dic 2026 1am en la zona horaria de Tijuana.


## Vista de prueba en GitHub Pages

Publicar solo bajo `TEST/` en la rama `main` para acceder a `https://ivanzep.github.io/XVinv/TEST/` sin modificar la página principal ni el formulario RSVP.

La imagen está en WebP de alta calidad para reducir el tiempo de carga y conservar el diseño.