const botonempezar = document.getElementById("botoniniciar")
const contenedorletra = document.getElementById("contenedorletra")
const letraingresada = document.getElementById("inputletra")
const imgahorcado = document.getElementById("imgahorcado")

const inicializarjuego = () => {
    const palabrasadivinar = ["numerar", "contar", "restar", "sumar", "multiplicar", "dividir"]
    const palabraA = palabrasadivinar[Math.floor(Math.random *palabrasadivinar.length)]

    let palabraOculta=palabraA.split('')
    let letrasAdivinadas = palabraOculta.map(()=>"_")
    let intentosRestantes = 6
    let letrasIncorrectas = []
    const objetodeljuego ={
    palabraOculta : palabraOculta,
    letrasAdivinadas : letrasAdivinadas,
    intentosRestantes : intentosRestantes,
    letrasIncorrectas : letrasIncorrectas
    }

    return objetodeljuego
}

const imgsahorcado =(errores) =>{
    const rutaImagenes ={
        5: '02.jpeg',
        4: '03.jpeg',
        3: '04.jpeg',
        2: '05.jpeg',
        1: '06.jpeg',
        0: '07.jpeg',
    }

    if(rutaImagenes.hasOwnProperty(errores)) {
        imgahorcado.src = `./img/${rutaImagenes[errores]}`
    } else {
        console.error("Numero de errores no valido: ", errores)
    }
}
const actualizarletras = (ljuego) =>{
    document.getElementById('pAdivinar').innerHTML = `palabra: ${juego.letrasAdivinadas.join('')} `
    document.getElementById('nIntentos').innerHTML = `Intentos restantes : ${juego.intentosRestantes}`
    document.getElementById('errores').innerHTML = `Letras incorrectas: ${juego.letrasIncorrectas.join(`,`)}`
    imgAhorcado(juego.intentosRestantes)
    
}

const adivinarLetra = (juego, letra) => {
    letra = letra.toLowerCase()
    if(juego.palabraOculta.includes(letra)){
        for(let i=0; i <palabraOculta.length; i++){
            if(juego.palabraOculta[i]===letra){
                juego.letrasAdivinadas[i] = letra
                document.getElementById("inputLetra").value=""
            }
        }
    }else{
        juego.intentosRestantes--;
        juego.letrasIncorrectas.push(letra)
        imgahorcado(juego.intentosRestantes)
        document.getElementById("inputLetra").value="";
    }

    if(juego.intentosRestantes ==0){
        alert("Fin del juego, la palabra era: " + palabraOculta);
    } else if (!juego.letrasAdivinadas.includes("-")) {
        alert("Ganaste! Has adivinado la palabra correctamente")
    }

    actualizarinterfaz(juego);
};
const teclapresionada =(event) =>{
    if (event.key == "Enter") {
        const letraingresada = letraingresada.value.toLowerCase();
        if (letraingresada === nul || letraingresada ===""){
            alert("por favor ingresa una letra valida");
            return;
        }
        if (letraingresada.length !==1 || !(/a-zA-Z/).test(letraingresada)) {
            alert("Por favor ingresa una letra");
            return;
        }

        adivinarLetra(juego, letraingresada);
        letraingresada.value = "";
    }
};
function empezar (){
    botoniniciar.style.display = "none";
    contenedorletra.style.display = "block";
    imgahorcado.style.display = "block";
    juego = inicializarjuego();

    letraingresada.addEventListener(`keypress`, teclapresionada);
}

botoniniciar.addEventListener(`click`, empezar);
