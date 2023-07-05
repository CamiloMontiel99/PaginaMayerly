// Despliegue Pagina Web Suave:

$(document).ready(function(){
    let despliegue_a = $(".desplazar");

    despliegue_a.click(function(e){
        e.preventDefault();
        $("body, html").animate(
            {
                scrollTop: $(this.hash).offset().top,
            }, 1500
        );
    })
})


// sliderClientes:

// const sliderClientes = document.querySelector(".slide-items");

// let maxScrollLeft = sliderClientes.scrollWidth - sliderClientes.clientWidth;
// let intervalo = null;
// let step = 2;

// const start = () => {
//     intervalo = setInterval(function() {
//         sliderClientes.scrollLeft = sliderClientes.scrollLeft + step;
//         if (sliderClientes.scrollLeft === maxScrollLeft) {
//             step = step * -1;
//         } else if (sliderClientes.scrollLeft === 0) {
//             step = step * -1;
//         }
//     }, 10);
// }

// const stop = () => {
//     clearInterval(intervalo);
// };

// sliderClientes.addEventListener('mouseover', () => {
//     stop();
// })

// sliderClientes.addEventListener('mouseout', () => {
//     start();
// })

// start();


// Contact Us:

// let inputs = document.getElementsByClassName('formulario__input');
// for (let i = 0; i < inputs.length; i++) {
//     inputs[i].addEventListener('keyup', function(){
//     if(this.value.length>=1) {
//         this.nextElementSibling.classList.add('formulario__label');
//     } else {
//         this.nextElementSibling.classList.remove('formulario__label');
//         }
//     });
// }


function evitarNegativo(e) {
    if (e.key === "-")
    e.preventDefault();
}