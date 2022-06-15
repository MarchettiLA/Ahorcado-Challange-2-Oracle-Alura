
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
 
      
     
