const buttonCriptografar = document.getElementById('criptografar');
const imagemResultado = document.querySelector('.resultado__imagem');
const buttonDescriptografar = document.getElementById('descriptografar');
const resultadoTitle = document.getElementById('resultadoTittle');
const resultadoMessage = document.getElementById('resultadoMessage');
const buttonCopiar = document.getElementById('button__copiar');

buttonCriptografar.addEventListener('click', function () {
    const texto = document.querySelector('textarea').value.toLowerCase();
    const textoCriptografado = criptografarTexto(texto);
    resultadoTitle.textContent = 'Texto Criptografado:';
    resultadoMessage.style.fontFamily = "Inter";
    resultadoMessage.style.fontSize = "24px";
    resultadoMessage.style.color = "#0A3871";
    resultadoMessage.textContent = textoCriptografado;
    imagemResultado.style.display = 'none';
});

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
    const textoDescriptografado = descriptografarTexto(texto);
    resultadoTitle.textContent = 'Texto Criptografado:';
    resultadoMessage.style.fontFamily = "Inter";
    resultadoMessage.style.fontSize = "24px";
    resultadoMessage.style.color = "#0A3871";
    resultadoMessage.textContent = textoDescriptografado;
    imagemResultado.style.display = 'none';
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