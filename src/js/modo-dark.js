const btn = document.querySelector('.btn-dark');
const cont = document.querySelector('.container');
const logo = document.querySelector('.logo');

btn.addEventListener('click', () => {
    cont.classList.toggle('mode-dark');
    
    // Verifica se está no modo dark agora
    const isDark = cont.classList.contains('mode-dark');

    // Altera a imagem com base nisso
    logo.src = isDark ? 'src/img/logo-modo-dark.png' : 'src/img/logo.png';
});