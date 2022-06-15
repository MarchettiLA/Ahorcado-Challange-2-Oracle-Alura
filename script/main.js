const calavera = document.querySelector("#skull")
const dialog = document.querySelector("span")
let jugando = false;

// FUNCION QUE MUEVE LA CALAVERA 

const moverCalavera = () => {
    if(jugando == false){
        calavera.classList.add("visible") 
    } else {
        calaveraImg.classList.replace("hide-jugando","visible-jugando")
    }
    
}

    window.onload = moverCalavera

// FUNCION QUE MUESTRA O ESCONDE EL DIALOGO ON-CLICK
const dialogosCalavera = ["Bienvenido... Contendiente.", "Elije una opción... No tengo todo el día.", "Ya deja de molestarme!!!", "..."];
const dialogosCalaveraJugando = ["JAJAJA te has equivocado!", "Parece que no duraras mucho....", "Mala suerte... Contendiente.", "JAJAJA es en serio?", "No querras equivocarte otra vez...", "Tu hora ha llegado... Contendiente." ]
let dialogIndex = 0;
let visible = false


const handleCalavera = () => {
  
        calavera.addEventListener("click", (event) => {
            if(jugando == true){ 
                dialog.textContent = dialogosCalavera[3]
            } else {
                dialog.textContent = dialogosCalavera[dialogIndex];
            }
            
            
            if(dialogIndex >= dialogosCalavera.length){
                dialogIndex = 3;
            }
            if(visible == false){
                dialog.classList.add("visibleDialog")
                visible = true;
                                
            } else {
                dialog.classList.replace("visibleDialog", "hideDialog")
                visible = false;
                if(dialogIndex == dialogosCalavera.length - 1){
                    dialogIndex = 3
                } else{
                    dialogIndex += 1;  
                }
            }
        })
        }
    
    
   
      
handleCalavera();



    
       
      
    
            
        
    
    
