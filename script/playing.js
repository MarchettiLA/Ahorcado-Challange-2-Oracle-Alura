const palabras = ["remate","chupar","suelo","harina","beso","humo","popular","parar", "politica", "cucaracha", "fango"];

const crearTablero = (palabra) => {
    for (let letter of palabra){
        div = document.createElement("div")
        div.classList.add("word-lines")
        main.appendChild(div);
        main.classList.add("playing")
    }
}
palabra = "camisa"
