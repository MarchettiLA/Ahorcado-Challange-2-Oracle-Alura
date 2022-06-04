// DICCIONARIO DE PALABRAS

const palabras = ["remate","chupar","suelo","harina","beso","humo","popular","parar", "politica", "cucaracha", "fango"];
let palabraElegida = ""
const sectionFlex = document.createElement("section");
sectionFlex.classList.add("row","flex-section");


//FUNCION PARA CREAR LOS GUIONES Y LAS LETRAS

const crearTablero = (palabra) => {
    main.appendChild(sectionFlex)
    const contenedorWord = document.createElement("div");
    contenedorWord.classList.add("word", "col-md-6");
    sectionFlex.appendChild(contenedorWord);
    for (let letter of palabra){        
        const wordLines = document.createElement("div");
        wordLines.classList.add("word-lines");
        contenedorWord.appendChild(wordLines);
        const chars = document.createElement("span");
        chars.innerHTML = letter.toUpperCase();
        chars.classList.add("chars-word")
        wordLines.appendChild(chars)
        main.classList.add("playing");
    }
    return palabra
}

//FUNCION PARA CREAR LA HORCA

const crearHorca = () => {
        const horcaContenedor = document.createElement("div");
        horcaContenedor.classList.add("contenedor-horca", "col-md-6");
        sectionFlex.appendChild(horcaContenedor);
        const horcaImg = document.createElement("img")
        horcaImg.classList.add("horca")
        horcaImg.src = "img/horca.png";
        horcaContenedor.appendChild(horcaImg)
}

//FUNCION PALABRA AL AZAR

const randomWord = () => {
    randomN = Math.round(Math.random() * (palabras.length - 1));
    palabraElegida = palabras[randomN];
}
