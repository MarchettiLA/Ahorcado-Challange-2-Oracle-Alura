

// FUNCION PARA CREAR TABLERO y HORCA


//FUNCION QUE ENGLOBA TODO !!!!!!!!!!!!!!!!!!!!!!!!

const comenzarJuego = () =>{
    jugando = true;
    crearHorca();
    randomWord();
    crearTablero(palabraElegida);
    wordSystem();
    
}



// FUNCION TODO EL SISTEMA DE LAS PALABRAS Y LOGICA DE GANAR - PERDER


const wordSystem = () =>{
    fillLines();
    setInterval(winLogic, 100);
}




