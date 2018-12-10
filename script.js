window.onload = function () {
    const contenido = document.querySelector(".contenido");
    const opciones = document.querySelector(".menu-lateral");
    const velo = document.querySelector(".velo-total");
    const boton = document.querySelector("#desplegar-menu");
    const botonP = document.querySelector("#texto-menu");
    const botonI = document.querySelector("#left-boton");
    const opciones_lateral = document.querySelectorAll(".opcion");
    var estado = "abierto";

    boton.addEventListener("click", function () {
        pulsar();
    }, false);

    velo.addEventListener("click", function () {
        quitaVelo();
    }, false);

    function pulsar() {
        if (botonP.textContent == "Menú") {
            opciones.style.right = "0px";
            contenido.style.transform = "translate(-400px, 0px)";
            setTimeout(ponVelo, 600);
            botonP.textContent = "Cerrar";
            botonI.classList.remove("fa-caret-square-left");
            botonI.classList.add("fa-times-circle");
            transformacion(1);
        } else {
            quitaVelo();
        }
    }

    function ponVelo() {
        velo.style.left = "-400px";
        velo.style.display = "block";
    }

    function quitaVelo() {
        opciones.style.right = "-400px";
        contenido.style.transform = "translate(0px, 0px)";
        velo.style.display = "none";
        botonP.textContent = "";
        botonI.classList.remove("fa-times-circle");
        botonP.textContent = "Menú"
        botonI.classList.add("fa-caret-square-left");
        transformacion(0);
    }

    function transformacion(escala) {
        for (let item of opciones_lateral) {
            item.style.transform = `scaleY(${escala})`;
        }
    }

}