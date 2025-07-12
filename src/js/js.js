 let contador = localStorage.getItem('contador') 
 ? parseInt(localStorage.getItem('contador')) 
 : 0;

const somMordida = document.getElementById('somMordida');        
const soundWin = document.getElementById('soundWin');
const container = document.querySelector('.container');

function contar() {
    const metaInput = document.getElementById('meta').value;
    const meta = parseInt(metaInput);
    
    if (!isNaN(meta)) {
        contador++;
        document.getElementById('indicador').innerHTML = contador;

        // calcular pontos com base no contador
        const pontos = Math.floor(contador / 3);
        document.querySelector('.pontos').textContent = pontos;
        localStorage.setItem('pontos', pontos);

        localStorage.setItem('contador', contador);  
        localStorage.setItem('meta', meta);

        somMordida.currentTime = 0;
        somMordida.play();
        addBarra();

        if (!isNaN(meta) && contador === meta) {
            const metaBatida = document.querySelector('.metaBatida');
            metaBatida.classList.add('ativo');

            window.addEventListener('click', (event) => {
                if (event.target === container) {
                    metaBatida.classList.remove('ativo');
                }
            });

            soundWin.currentTime = 0;
            soundWin.play();
        }   
    } else {
        alert("Para começar insira sua meta !!");
    }
}

function pegarQuantidade() {
    let valor = parseInt(localStorage.getItem('contador')) || 0;
    contador = valor;
    document.getElementById('indicador').innerHTML = contador;

    const metaSalva = parseInt(localStorage.getItem('meta'));
    const meta = document.getElementById('meta');
    meta.value = metaSalva;

    ajustarBarra();

    if (!isNaN(metaSalva) && valor >= metaSalva) {
        const metaBatida = document.querySelector('.metaBatida');
        metaBatida.classList.add('ativo');
        soundWin.currentTime = 0;
        soundWin.play();
        const vitoriaGif = document.getElementById('vitoriaGif');
        vitoriaGif.style.display = 'flex';

        window.addEventListener('click', (event) => {
            if (event.target === container) {
                metaBatida.classList.remove('ativo');
            }
        });

    }
}

function zerarQuantidade() {    
    contador = 0;
    document.getElementById('indicador').innerHTML = contador;
    localStorage.removeItem('contador');
    localStorage.removeItem('tamanhoBarra');
    const tamanhoBarraAtual = localStorage.getItem('tamanhoBarra')
    barra.style.width = tamanhoBarraAtual;

    const taca = document.querySelector('.taca');
    taca.classList.remove('ativo');

    document.getElementById('meta').value = '';

    const vitoriaGif = document.getElementById('vitoriaGif');
    vitoriaGif.style.display = 'none';

    const pontos = document.querySelector('.pontos');
    pontos.textContent = 0;

    localStorage.removeItem('meta');
    document.getElementById('meta').value = '';
}

function addBarra() {
    const meta = parseInt(document.getElementById('meta').value);
    if (!isNaN(meta) && meta > 0 && contador <= meta) {
        let barra = document.getElementById('barra');
        let porcentagem = (contador / meta) * 100;
        barra.style.width = porcentagem + '%';
        const tamanhoBarra = barra.style.width;
        
        localStorage.setItem('tamanhoBarra', tamanhoBarra);
    }
}

function ajustarBarra() {
    const tamanhoBarra = localStorage.getItem('tamanhoBarra');
    const barra = document.getElementById('barra');

    if (tamanhoBarra) {
        barra.style.width = tamanhoBarra;
    }
}

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./service-worker.js')
      .then(() => console.log("Service Worker registrado com sucesso!"))
      .catch((error) => console.log("Erro ao registrar o Service Worker:", error));
}
