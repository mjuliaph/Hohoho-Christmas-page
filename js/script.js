document.addEventListener('DOMContentLoaded', function () {
    let images = [
        { img: './assets/receta1.jpg' },
        { img: './assets/receta2.jpg' },
        { img: './assets/receta3.jpg' },
        { img: './assets/receta4.jpg' },
        { img: './assets/receta5.jpg' },
        { img: './assets/receta6.jpg' },
        { img: './assets/receta7.jpg' },
        { img: './assets/receta8.jpg' },
        { img: './assets/receta9.jpg' }
    ];
    let cont = 0;
    const contenedor = document.querySelector('.slideshow');
    const overlay = document.querySelector('.overlay');
    const galery_images = document.querySelectorAll('.recipe-gallery img');
    const img_slideshow = document.querySelector('.slideshow img');

    contenedor.addEventListener('click', function (event) {
        let atras = contenedor.querySelector('.back'),
            adelante = contenedor.querySelector('.next'),
            img = contenedor.querySelector('img'),
            tgt = event.target;
        if (tgt == atras) {
            if (cont > 0) {
                img.src = images[cont - 1].img;
                cont--
            } else {
                img.src = images[images.length - 1].img;
                cont = images.length - 1
            }
        } else if (tgt == adelante) {
            if (cont < images.length - 1) {
                img.src = images[cont + 1].img;
                cont++
            } else {
                img.src = images[0].img
                cont = 0
            }
        }
    }),
        console.log("hola, llegamos hasta acá! 💕");

    Array.from(galery_images).forEach(img => {
        img.addEventListener('click', event => {
            const imagen_seleccionada = +event.target.dataset.imgMostrar;
            img_slideshow.src = images[imagen_seleccionada].img;
            cont = imagen_seleccionada;
            overlay.style.opacity = 1;
            overlay.style.visibility = 'visible';
        })
    })
    document.querySelector('.btn-close').addEventListener('click', () => {
        overlay.style.opacity = 0;
        overlay.style.visibility = 'hidden';
    })
})

