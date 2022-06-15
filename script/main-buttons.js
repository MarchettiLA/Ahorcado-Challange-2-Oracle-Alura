
        // Funciones botones

        const btnPrinc = document.querySelector(".boton1");
        const main = document.querySelector("main")
        const removeMain = () => {
         main.innerHTML = "";
        }
        const mostrar = () => {
         main.style.opacity = 1;
        }
        
        const iniciarJuego = () => {
             main.style.opacity = 0
             setTimeout(removeMain, 500);
             setTimeout(comenzarJuego,1000)
             setTimeout(mostrar, 1000)
        }
        
        btnPrinc.onclick = iniciarJuego;
 
       const btnSec = document.querySelector(".boton2");
       const inputWordContainer = document.createElement("div");
       inputWordContainer.classList.add("inputWord-container")
       const inputWord = document.createElement("input");
       const inputOK = document.createElement ("button");
       inputOK.innerHTML = "Aceptar"
       inputWordContainer.appendChild(inputWord)
       inputWordContainer.appendChild(inputOK)

       const agregarPalabra = () => {
         main.style.opacity = 0
         main.innerHTML = "";
         main.style.opacity = 1;
         setTimeout("main.appendChild(inputWordContainer)",500)
                  
       }

       btnSec.onclick = agregarPalabra
        