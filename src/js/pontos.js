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

    if (indicadorConvertido >= meta) {
        taca.classList.add('ativo');
        vitoriaGif.style.display = 'flex';
    } 
    
    else if(isNaN(meta)){
        taca.classList.remove('ativo');
        vitoriaGif.style.display = 'none';
    }
});