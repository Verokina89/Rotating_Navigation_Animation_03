const open = document.getElementById('open');
const close = document.getElementById('close');
const bigContainer = document.getElementById('bigContainer');

open.addEventListener('click', () => {
    bigContainer.classList.toggle('showmenuNav')
    
})


close.addEventListener('click', () => {
    bigContainer.classList.toggle('showmenuNav')
})