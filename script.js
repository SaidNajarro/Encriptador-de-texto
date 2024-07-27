let texto_encriptado = '';
let texto_desencriptado = '';

//REGEX se puede usar sin librería
const regex = /^[a-z! ]+$/;

function encriptar() {
    let texto_ingresado = document.getElementById('texto_ingresado').value;
    texto_encriptado = '';

    if (texto_ingresado === '') {
        errorCaja();
        errorVacio();
        return '';
    }
    if (!regex.test(texto_ingresado)) {
        errorCaja();
        errorMayusEsp();
        return '';
    }

    for (let i = 0; i < texto_ingresado.length; i++) {
        let caracter = texto_ingresado[i];
        texto_encriptado += encriptarVocal(caracter);
    }

    return texto_encriptado;
}

function desencriptar() {
    let texto_ingresado = document.getElementById('texto_ingresado').value;
    texto_desencriptado = '';

    if (texto_ingresado === '') {
        errorCaja();
        errorVacio();
        return '';
    }
    if (!regex.test(texto_ingresado)) {
        errorCaja();
        errorMayusEsp();
        return '';
    }

    for (let i = 0; i < texto_ingresado.length; i++) {
        let caracter = texto_ingresado[i];
        i = desencriptarVocal(caracter, i);
        texto_desencriptado += caracter;
    }

    return texto_desencriptado;
}

function encriptarVocal(caracter) {
    caracter = String(caracter);
    switch (caracter) {
        case 'a':
            return 'ai';
        case 'e':
            return 'enter';
        case 'i':
            return 'imes';
        case 'o':
            return 'ober';
        case 'u':
            return 'ufat';
        default:
            return caracter;
    }
}

function desencriptarVocal(vocal, i) {
    vocal = String(vocal);
    switch (vocal) {
        case 'a':
            return i + 1;
        case 'e':
            return i + 4;
        case 'i':
            return i + 3;
        case 'o':
            return i + 3;
        case 'u':
            return i + 3;
        default:
            return i;
    }
}

function errorCaja() {
    const resultadoSeccion = document.getElementById('cajaResultado');
    resultadoSeccion.innerHTML = `
    <img src="assets/Muñeco.png">
    <p id="resultado_subtitulo">texto</p>
    <p id="resultado_descripcion">texto</p>
`;
}

function errorMayusEsp() {
    const subtitulo = document.getElementById('resultado_subtitulo');
    const descripcion = document.getElementById('resultado_descripcion');
    subtitulo.innerText = "Ingrese un elemento correcto";
    descripcion.innerText = "Está ingresando un carácter especial o en mayúscula";
}

function errorVacio() {
    const subtitulo = document.getElementById('resultado_subtitulo');
    const descripcion = document.getElementById('resultado_descripcion');
    subtitulo.innerText = "Ningún mensaje fue encontrado";
    descripcion.innerText = "Ingrese el mensaje que desea encriptar o desencriptar";
}

function mostrarResultadoE() {
    let resultado = encriptar();
    const resultadoSeccion = document.getElementById('cajaResultado');
    if (resultado !== '') {
        resultadoSeccion.innerHTML = `<p>${resultado}</p>`;
    }
}

function mostrarResultadoD() {
    let resultado = desencriptar();
    const resultadoSeccion = document.getElementById('cajaResultado');
    if (resultado !== '') {
        resultadoSeccion.innerHTML = `<p>${resultado}</p>`;
    }
}