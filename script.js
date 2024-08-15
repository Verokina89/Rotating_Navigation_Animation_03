const open = document.getElementById('open');
const close = document.getElementById('close');
const bigContainer = document.getElementById('bigContainer');

open.addEventListener('click', () => {
    bigContainer.classList.toggle('showmenuNav')
    // open.style.display = 'none';
    // close.style.display = 'block';
})


close.addEventListener('click', () => {
    bigContainer.classList.toggle('showmenuNav')
    // open.style.display = 'block';
    // close.style.display = 'none';
})