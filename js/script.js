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
    const images = [
        "/picture/img_1.jpg",
        "/picture/img_2.jpg",
        "/picture/img_3.jpg",
        "/picture/img_4.jpeg",
        "/picture/img_5.jpg",
        "/picture/img_6.jpg",
        "/picture/img_7.jpg",
        "/picture/img_8.jpg",
        "/picture/img_9.jpeg"
    ];

    let currentIndex = 0;
    let totalImages = images.length;

    function changeImage() {
        const currentImageContainer = document.getElementById(`imageContainer${currentIndex + 1}`);
        const nextIndex = (currentIndex + 1) % totalImages;
        const nextImageContainer = document.getElementById(`imageContainer${nextIndex + 1}`);

        const imgElement = nextImageContainer.querySelector('img');
        imgElement.src = images[nextIndex];

        currentImageContainer.classList.remove('show', 'zoom');
        currentImageContainer.classList.add('hide');

        nextImageContainer.classList.remove('hide');
        nextImageContainer.classList.add('show', 'zoom');
        currentIndex = nextIndex;
    }

    setInterval(changeImage, 5000);
    changeImage();
});
