const buttonCriptografar = document.getElementById('criptografar');
const imagemResultado = document.querySelector('.resultado__imagem');
const buttonDescriptografar = document.getElementById('descriptografar');
const resultadoTitle = document.getElementById('resultadoTittle');
const resultadoMessage = document.getElementById('resultadoMessage');
const buttonCopiar = document.getElementById('button__copiar');

buttonCriptografar.addEventListener('click', function () {
    const texto = document.querySelector('textarea').value.toLowerCase();
    imagemResultado.style.display = 'none';
    resultadoMessage.style.fontFamily = "Inter";
    resultadoMessage.style.fontSize = "24px";
    resultadoMessage.style.color = "#343A40";
    if (verificarTexto(texto)) {
        resultadoTitle.style.display = 'none';
        return resultadoMessage.textContent = "O texto não pode conter caracter especial ou acentos";
    }
    const textoCriptografado = criptografarTexto(texto);
    resultadoTitle.textContent = 'Texto Criptografado:';
    resultadoMessage.textContent = textoCriptografado;

});

function verificarTexto(texto) {
    const regex = /[\u0300-\u036f\u00b4\u0060\u005e\u007e\u00a8\u00b8\u00b0\u00a8\u00b4\u00c2-\u00cf\u00d4-\u00db\u00e2-\u00ef\u00f4-\u00fb\u00fd\u00ff]/g;
    return regex.test(texto);
}

function criptografarTexto(texto) {
    return texto.trim()
        .replace(/a/g, 'ai')
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
}

buttonDescriptografar.addEventListener('click', function () {
    const texto = document.querySelector('textarea').value.toLowerCase();
    imagemResultado.style.display = 'none';
    resultadoMessage.style.fontFamily = "Inter";
    resultadoMessage.style.fontSize = "24px";
    resultadoMessage.style.color = "#343A40";
    if (verificarTexto(texto)) {
        resultadoTitle.style.display = 'none';
        return resultadoMessage.textContent = "O texto não pode conter caracter especial ou acentos";
    }
    const textoDescriptografado = descriptografarTexto(texto);
    resultadoTitle.textContent = 'Texto Criptografado:';
    resultadoMessage.textContent = textoDescriptografado;
});

function descriptografarTexto(texto) {
    return texto.trim()
        .replace(/ai/g, 'a')
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
}

buttonCopiar.addEventListener('click', function () {
    const textoCriptografado = resultadoMessage.textContent;
    navigator.clipboard.writeText(textoCriptografado)
        .then(() => {
            alert('Texto copiado com sucesso!');
        })
        .catch(err => {
            console.error('Erro ao copiar texto: ', err);
        });
});