// CREANDO EVENTOS TECLADO

//VARIABLES PARA FUNCION EVENTO TECLADO Y RELLENADO DE LETRAS

const char = document.getElementsByClassName("chars-word")
let gameReady = false
let visibleLetters = 0

// FUNCION QUE SE OCUPA DE ESCUCHAR EL TECLADO Y HACER VISIBLES LAS LETRAS EN PANTALLA

let errores = 0;

const fillLines = () =>{
    window.addEventListener("keydown", (event) => {
        gameReady = true;
        for(let i=0; i < palabraElegida.length; i++){
            if(event.key.toUpperCase() == char[i].textContent && char[i].style.opacity == 0){
                char[i].style.opacity = 1;     
                visibleLetters += 1;        
            } else if (!palabraElegida.includes(event.key)) {
                errores += 1;
                break
            }

        }
})
}

const dibujarAhorcado = () => {
    for (let i=1; i<6;i++){
        if(errores == i){
            hanged[i] = document.createElement("img");
            hanged[i].classList.add(`hanged-${i}`)
            horcaContenedor.appendChild(hanged[i])
        }
      
    }
}



// FUNCION PARA LA LOGICA AL GANAR

let jugando = false;




const dialogSkullPlaying = document.querySelector("span")
const youLose = document.createElement("span");
youLose.classList.add("result");
youLose.innerHTML = "Has perdido...Contendiente."
const youWin = document.createElement("span")
youWin.classList.add("result");
youWin.innerHTML = "Felicitaciones...Contendiente, te has salvado..."


const winLogic = () =>{
    if (errores == 6 && gameReady == true){
        gameReady = false;
        jugando = false;
        alert("you lose");
        main.appendChild(youLose);
        showRemainingLetters();
        setTimeout('youLose.style.color = "red"', 500)
        
        
    }

    if(visibleLetters == char.length && gameReady == true && jugando == true){
        gameReady = false;
        jugando = false
        alert("you win");
        main.appendChild(youWin);
        showRemainingLetters();
        setTimeout('youWin.style.color = "green"', 500)
        
    }
}

const showRemainingLetters = () => {
    for (let element of char){
        element.style.opacity = 1
    }
}