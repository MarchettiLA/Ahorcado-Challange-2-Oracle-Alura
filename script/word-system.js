// CREANDO EVENTOS TECLADO

//VARIABLES PARA FUNCION EVENTO TECLADO Y RELLENADO DE LETRAS

const char = document.getElementsByClassName("chars-word")
let gameReady = false
let visibleLetters = 0

// FUNCION QUE SE OCUPA DE ESCUCHAR EL TECLADO Y HACER VISIBLES LAS LETRAS EN PANTALLA

let intentos = 0;

const fillLines = () =>{
    window.addEventListener("keydown", (event) => {
        let visiblesArr = [];
        intentos += 1;
        gameReady = true;
        for(let i=0; i < palabraElegida.length; i++){
            if(event.key.toUpperCase() == char[i].textContent && char[i].style.opacity == 0){
                char[i].style.opacity = 1;     
                visibleLetters += 1;
                           
            }
        }
})
}

// FUNCION PARA LA LOGICA AL GANAR

let jugando = false;


const calaveraImg = document.createElement("img");
calaveraImg.src = "img/calavera.gif";
calaveraImg.classList.add("hide-jugando")


const winLogic = () =>{
    if (intentos == 6 && gameReady == true){
        gameReady = false;
        main.appendChild(calaveraImg)
        setTimeout(moverCalavera,1000);
        alert("you lose")
        
    }

    if(visibleLetters == char.length && gameReady == true && jugando == true){
        gameReady = false;
        main.appendChild(calaveraImg)
        setTimeout(moverCalavera,1000);
        alert("you win");
        
    }
}