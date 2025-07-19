const botoniniciar = document.getElementById("botoniniciar");
const contenedorletra = document.getElementById("contenedorLetra");
const letraingresada = document.getElementById("inputLetra");
const imgahorcado = document.querySelector(".imagenahorcado");

let juego;

const inicializarjuego = () => {
    const palabrasadivinar = ["numerar", "contar", "restar", "sumar", "multiplicar", "dividir"];
    const palabraA = palabrasadivinar[Math.floor(Math.random() * palabrasadivinar.length)];

    const palabraOculta = palabraA.split('');
    const letrasAdivinadas = palabraOculta.map(() => "_");
    const intentosRestantes = 6;
    const letrasIncorrectas = [];

    return {
        palabraOculta,
        letrasAdivinadas,
        intentosRestantes,
        letrasIncorrectas
    };
};

const imgsahorcado = (errores) => {
    const rutaImagenes = {
        5: '02.jpeg',
        4: '03.jpeg',
        3: '04.jpeg',
        2: '05.jpeg',
        1: '06.jpeg',
        0: '07.jpeg',
    };

    if (rutaImagenes.hasOwnProperty(errores)) {
        imgahorcado.src = `./img/${rutaImagenes[errores]}`;
    } else {
        console.error("Número de errores no válido:", errores);
    }
};

const actualizarletras = (juego) => {
    document.getElementById('pAdivinar').innerHTML = `Palabra: ${juego.letrasAdivinadas.join(' ')}`;
    document.getElementById('nIntentos').innerHTML = `Intentos restantes: ${juego.intentosRestantes}`;
    document.getElementById('errores').innerHTML = `Letras incorrectas: ${juego.letrasIncorrectas.join(', ')}`;
    imgsahorcado(juego.intentosRestantes);
};

const adivinarLetra = (juego, letra) => {
    letra = letra.toLowerCase();

    if (juego.palabraOculta.includes(letra)) {
        for (let i = 0; i < juego.palabraOculta.length; i++) {
            if (juego.palabraOculta[i] === letra) {
                juego.letrasAdivinadas[i] = letra;
            }
        }
    } else {
        juego.intentosRestantes--;
        juego.letrasIncorrectas.push(letra);
    }

    if (juego.intentosRestantes === 0) {
        alert("Fin del juego. La palabra era: " + juego.palabraOculta.join(''));
    } else if (!juego.letrasAdivinadas.includes("_")) {
        alert("¡Ganaste! Has adivinado la palabra.");
    }

    actualizarletras(juego);
    letraingresada.value = "";
};

const teclapresionada = (event) => {
    if (event.key === "Enter") {
        const letra = letraingresada.value.toLowerCase();
        if (!letra || letra.length !== 1 || !/[a-zA-Z]/.test(letra)) {
            alert("Por favor, ingresa una letra válida.");
            return;
        }

        adivinarLetra(juego, letra);
    }
};

const empezar = () => {
    botoniniciar.style.display = "none";
    contenedorletra.style.display = "block";
    imgahorcado.style.display = "block";
    imgahorcado.src = "./img/01.jpeg";

    juego = inicializarjuego();
    actualizarletras(juego);

    letraingresada.addEventListener("keypress", teclapresionada);
};

botoniniciar.addEventListener("click", empezar);