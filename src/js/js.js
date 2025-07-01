 let contador = localStorage.getItem('contador') 
 ? parseInt(localStorage.getItem('contador')) 
 : 0;

const somMordida = document.getElementById('somMordida');        
const soundWin = document.getElementById('soundWin');

function contar() {
    contador++;
    document.getElementById('indicador').innerHTML = contador;
    localStorage.setItem('contador', contador);  
    somMordida.currentTime = 0;
    somMordida.play();
    addBarra();

    const metaInput = document.getElementById('meta').value;
    const meta = parseInt(metaInput);
 
    if (!isNaN(meta) && contador === meta) {
        const metaBatida = document.querySelector('.metaBatida');
        metaBatida.classList.add('ativo');

        soundWin.currentTime = 0;
        soundWin.play();
    }
}

function pegarQuantidade() {
    let valor = parseInt(localStorage.getItem('contador')) || 0;
    contador = valor;
    document.getElementById('indicador').innerHTML = contador;
}

function zerarQuantidade() {    
    contador = 0;
    document.getElementById('indicador').innerHTML = contador;
    localStorage.removeItem('contador');
    barra.style.width = 0 + 'px'
}

function addBarra() {
    const meta = parseInt(document.getElementById('meta').value);
    if (!isNaN(meta) && meta > 0 && contador <= meta) {
        let barra = document.getElementById('barra');
        let porcentagem = (contador / meta) * 100;
        barra.style.width = porcentagem + '%';
    }
}

const regras = document.querySelector('.containerRegras');

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