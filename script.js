// script.js

// Espera a que el contenido del DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    // Selecciona todos los elementos de la galería
    const galleryItems = document.querySelectorAll('.gallery-item');

    // Añade un event listener a cada elemento de la galería
    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            // Alterna la visibilidad de la leyenda
            const caption = item.querySelector('.caption');
            if (caption.style.display === 'none' || caption.style.display === '') {
                caption.style.display = 'block';
            } else {
                caption.style.display = 'none';
            }
        });
    });

    // Opcional: Añadir una funcionalidad para filtrar por tipo (si se implementa)
    // Añadir más funcionalidades aquí según lo necesario
});
