function tornarTextoBranco() {
    let texto = document.getElementById('texto');
    texto.style.color = 'white';
}

function tornarTextoPreto() {
    let texto = document.getElementById('texto');
    texto.style.color = 'black';
}

function tornarFundoBranco() {
    let paragrafo = document.getElementById('paragrafo');
    paragrafo.style.backgroundColor = 'white';
}

function tornarFundoPreto() {
    let paragrafo = document.getElementById('paragrafo');
    paragrafo.style.backgroundColor = 'black';
}

function alterarTamanho(valor) {
    const paragrafo = document.getElementById('texto');
    const fontSize = parseInt(window.getComputedStyle(paragrafo).fontSize);
    paragrafo.style.fontSize = fontSize + valor + 'px';
}

function maiusculas() {
    let texto = document.getElementById('texto');
    texto.style.textTransform = 'uppercase';
}

function minusculas() {
    let texto = document.getElementById('texto');
    texto.style.textTransform = 'lowercase';
}