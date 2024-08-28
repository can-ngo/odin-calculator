const screen = document.querySelector('#screen');
const numBtns = document.querySelectorAll('.number');
screen.textContent = 'abc'

numBtns.forEach( btn => {
    console.log(btn.value)
})