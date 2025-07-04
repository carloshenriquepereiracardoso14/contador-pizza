const calcPontos = document.getElementById('calcPontos');

calcPontos.addEventListener('click', () => {
    const indicador = document.getElementById('indicador').textContent;
    const indicadorConvertido = parseInt(indicador);

    if (isNaN(indicadorConvertido)) {
        alert("Número inválido!");
        return;
    }

    const pontos = Math.floor(indicadorConvertido / 3);

    const placar = document.querySelector('.pontos');
    placar.textContent = pontos;

    const metaInput = document.getElementById('meta').value;
    const meta = parseInt(metaInput);
    const taca = document.querySelector('.taca');
    const vitoriaGif = document.getElementById('vitoriaGif');

    localStorage.setItem('contador', contador);  

    if (indicadorConvertido >= meta) {
        taca.classList.add('ativo');
        vitoriaGif.style.display = 'flex';
    } 
    
    else if(isNaN(meta)){
        taca.classList.remove('ativo');
        vitoriaGif.style.display = 'none';
    }
});

function pegarPonto() {
    const pontoSalvo = localStorage.getItem('pontos');

    document.querySelector('.pontos').innerHTML = pontoSalvo || '0';
}

function zerarPontos() {
    localStorage.removeItem('pontos');
}

const regras = document.querySelector('.containerRegras');

window.addEventListener('click', (event) => {
    if (event.target === container) {
        regras.classList.remove('ativo');
    }
})

function verRegras() {
    regras.classList.add('ativo');
}

function fecharRegras() {
    regras.classList.remove('ativo');
}

function fecharMeta() {
    const metaBatida = document.querySelector('.metaBatida');
    metaBatida.classList.remove('ativo');
}