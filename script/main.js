const calavera = document.querySelector("#skull")
const dialog = document.querySelector("span")

// FUNCION QUE MUEVE LA CALAVERA 

const moverCalavera = () => {
    calavera.classList.add("visible") 
}

    window.onload = moverCalavera

// FUNCION QUE MUESTRA O ESCONDE EL DIALOGO ON-CLICK

let visible = false

        calavera.addEventListener("click", (event) => {
            
            if(visible == false){
                dialog.classList.add("visibleDialog")
                visible = true;
                                
            } else {
                console.log("hola")
                dialog.classList.replace("visibleDialog", "hideDialog")
                visible = false
            }
        });
       
      
    
            
        
    
    
