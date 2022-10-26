
let colorDeFondo = '';
    document.addEventListener('keydown', function (teclado) {
        if (teclado.key === 'a' || teclado.key === 'A'){
            colorDeFondo = 'lightpink'
        } else if (teclado.key === 's' || teclado.key === 'S'){
            colorDeFondo = 'lightgreen'
        } else if (teclado.key === 'd' || teclado.key === 'D'){
            colorDeFondo = 'lightgray'
        } else if (teclado.key === 'f' || teclado.key === 'F'){
        colorDeFondo = 'tomato'
        } else{
            colorDeFondo = 'white'
        }
    })  

let fondo1 = document.querySelector('#sec1')
let fondo2 = document.querySelector('#sec2')
let fondo3 = document.querySelector('#sec3')
let fondo4 = document.querySelector('#sec4')

fondo1.addEventListener("click", function () { fondo1.style.backgroundColor = colorDeFondo});
fondo2.addEventListener("click", function () { fondo2.style.backgroundColor = colorDeFondo});
fondo3.addEventListener("click", function () { fondo3.style.backgroundColor = colorDeFondo});
fondo4.addEventListener("click", function () { fondo4.style.backgroundColor = colorDeFondo});