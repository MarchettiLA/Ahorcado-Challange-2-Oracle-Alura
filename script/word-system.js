// CREANDO EVENTOS TECLADO

//VARIABLES PARA FUNCION EVENTO TECLADO Y RELLENADO DE LETRAS

const char = document.getElementsByClassName("chars-word")
let gameReady = false
let visibleLetters = 0

// FUNCION QUE SE OCUPA DE ESCUCHAR EL TECLADO Y HACER VISIBLES LAS LETRAS EN PANTALLA

let errores = 0;
const discartedLettersContainer = document.createElement("div");
discartedLettersContainer.classList.add("discarted-letters-div")
const discartedLettersSpan = document.createElement("span");
discartedLettersSpan.classList.add("discarted-letters");





const discartedLetters = new Set();

const fillLines = () =>{
    main.appendChild(discartedLettersContainer)
    window.addEventListener("keydown", (event) => {
        gameReady = true;
        for(let i=0; i < palabraElegida.length; i++){
            if(event.key.toUpperCase() == char[i].textContent && char[i].style.opacity == 0){
                char[i].style.opacity = 1;     
                visibleLetters += 1;        
            } else if (!palabraElegida.includes(event.key)) {
                errores += 1;
                discartedLetters.add(event.key.toUpperCase());
                console.log(discartedLetters)
                discartedLettersContainer.appendChild(discartedLettersSpan)
                discartedLettersSpan.innerHTML = discartedLetters[event.key]
                dialog.classList.add("visibleDialog");
                dialog.innerHTML = dialogosCalaveraJugando[errores - 1];
                discartedLettersSpan.innerHTML = Array.from(discartedLetters);
                discartedLettersSpan.textContent.toUpperCase();
                dibujarAhorcado();
                break
            }

        }
})
}

let indice = 1;
const dibujarAhorcado = () => {
    
    while (indice <= 6){
            hanged[indice] = document.createElement("img");
            hanged[indice].src = `img/hanged${indice}.png`;
            hanged[indice].classList.add(`hanged-${indice}`, "hanged")
            horcaContenedor.appendChild(hanged[indice])
            indice++;
            if(indice == 7){
                deadHanged = document.createElement("img");
                deadHanged.src = `img/hanged-dead.png`;
                deadHanged.classList.add(`hanged-dead`, "hanged")
                horcaContenedor.appendChild(deadHanged)
            }
            break
            
        }
      
    }



// FUNCION PARA LA LOGICA AL GANAR






const dialogSkullPlaying = document.querySelector("span")
const youLose = document.createElement("span");
youLose.classList.add("result");
youLose.innerHTML = "Has perdido...Contendiente."
const youWin = document.createElement("span")
youWin.classList.add("result");
youWin.innerHTML = "Felicitaciones...Contendiente, te has salvado...";
const btnPrincJugando = document.createElement("button")
btnPrincJugando.classList.add("boton-playing")
btnPrincJugando.innerHTML = "Nuevo Juego";



const winLogic = () =>{
    if (errores == 6 && gameReady == true){
        gameReady = false;
        jugando = false;
        main.appendChild(youLose);
        showRemainingLetters();
        main.appendChild(btnPrincJugando)
        setTimeout("btnPrincJugando.style.opacity = 1", 500);
        setTimeout('youLose.style.color = "red"', 500)
        
        
    }

    if(visibleLetters == char.length && gameReady == true && jugando == true){
        gameReady = false;
        jugando = false
        main.appendChild(youWin);
        showRemainingLetters();
        main.appendChild(btnPrincJugando)
        setTimeout("btnPrincJugando.style.opacity = 1", 500);
        setTimeout('youWin.style.color = "green"', 500)
       
        
    }
}

const showRemainingLetters = () => {
    for (let element of char){
        element.style.opacity = 1
    }
}

btnPrincJugando.addEventListener("click", ()=>{
    location.reload()
})