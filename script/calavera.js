    //Variables Calavera y Ojos

    const skull = document.querySelector("#img1")
    const eyes1 = document.querySelector("#img2")
    const eyes2 = document.querySelector("#img3")
    const eyes3 = document.querySelector("#img4")
   
   //Funciones de dibujo
  
       const drawSkull = () => skull.style.opacity = "1"
       
       const drawEyes1 = () => {
           eyes1.style.opacity = "1"
           eyes1.style.transition = "opacity 0.5s"
        }

       const drawEyes2 = () => {
           eyes2.style.opacity = "1"
           eyes2.style.transition = "opacity 0.5s"
        }

       const drawEyes3 = () => {
           eyes3.style.opacity = "1";
           eyes3.style.transition = "opacity 0.5s"
       }
   
    // Función de borrado

   function eraseEyes(eyes){
        eyes.style.opacity = "0"
   }

   //Función de movimiento ojos

   function skullMoving(){
    setTimeout(drawEyes1,250)  
    setTimeout(eraseEyes,500, eyes1)
    
    setTimeout(drawEyes2,750) 
    setTimeout(eraseEyes,1000, eyes2)
      
    setTimeout(drawEyes3,1250)
    setTimeout(eraseEyes,1500, eyes3)
    
    setTimeout(drawEyes2,1750) 
    setTimeout(eraseEyes,2000, eyes2)
   }

   //Llamadas a función
  
   drawSkull()
   skullMoving()
   setInterval(skullMoving,2000)