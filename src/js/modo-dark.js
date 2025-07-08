const btn = document.querySelector('.btn-dark');
const cont = document.querySelector('.container');
const logo = document.querySelector('.logo');

btn.addEventListener('click', () => {
    cont.classList.toggle('mode-dark');
    
    const isDark = cont.classList.contains('mode-dark');

    logo.src = isDark ? 'src/img/logo-modo-dark.png' : 'src/img/logo.png';
});