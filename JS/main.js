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

// Input Number, eliminar negativo:

function evitarNegativo(e) {
    if (e.key === "-")
    e.preventDefault();
}