const btnSec = document.querySelector(".boton2");
const inputWordContainer = document.createElement("div");
inputWordContainer.classList.add("inputWord-container");
const inputWordTitle = document.createElement("h3");
inputWordTitle.classList.add("titulo-addWord")
inputWordTitle.innerHTML = "Escribe la palabra que quieras usar";
const inputWord = document.createElement("input");
const inputOK = document.createElement ("button");
inputOK.innerHTML = "Aceptar";
inputWordContainer.appendChild(inputWordTitle)
inputWordContainer.appendChild(inputWord)
inputWordContainer.appendChild(inputOK)

const agregarPalabra = () => {
  main.style.opacity = 0
  main.innerHTML = "";
  main.style.opacity = 1;
  setTimeout("main.appendChild(inputWordContainer)",500)
           
}

btnSec.onclick = agregarPalabra

inputOK.addEventListener("click", () => {
    if(inputWord.value.length > 3){
    jugando = true;
    crearHorca();
    crearTablero(inputWord.value);
    palabraElegida = inputWord.value.toLowerCase();
    wordSystem();
    inputWordContainer.remove()
    } else {
        console.log("se necesitan al menos 4 caracteres")
    }


})