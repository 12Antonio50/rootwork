//Importaciones
fetch('navBar.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('header').innerHTML = data;

        // Agregar la clase 'active' al elemento correcto
        const navLinks = document.querySelectorAll(".nav-item a");
        const currentUrl = window.location.pathname;

        navLinks.forEach(link => {
            if (link.getAttribute("href") === currentUrl) {
                link.parentElement.classList.add("active");
            } else {
                link.parentElement.classList.remove("active");
            }
        });
    })

fetch('footer.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('main').innerHTML = data;

        const btnScroll = document.getElementById("btn-scroll");
        if (btnScroll) {
            btnScroll.onclick = function () {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            };
        }
    });

    
//Carousel
document.addEventListener('DOMContentLoaded', function () {
    const totalImages = 9; // Cantidad total de imágenes
    let currentIndex = 0;

    function changeImage() {
        // Seleccionar la imagen actual y la siguiente
        const currentImageContainer = document.getElementById(`imageContainer${currentIndex + 1}`);
        const nextIndex = (currentIndex + 1) % totalImages; // Calcular el índice de la siguiente imagen
        const nextImageContainer = document.getElementById(`imageContainer${nextIndex + 1}`);

        // Ocultar la imagen actual
        currentImageContainer.classList.remove('show', 'zoom');
        currentImageContainer.classList.add('hide');

        // Mostrar la siguiente imagen
        nextImageContainer.classList.remove('hide');
        nextImageContainer.classList.add('show', 'zoom');

        // Actualizar el índice actual
        currentIndex = nextIndex;
    }

    // Cambiar de imagen cada 5 segundos
    setInterval(changeImage, 5000);

    // Mostrar la primera imagen inicialmente
    changeImage();
});
