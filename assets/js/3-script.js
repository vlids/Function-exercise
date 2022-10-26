// // 3.1
ele = document.getElementById('ele1');
function pintar(){
     ele.style.backgroundColor = 'yellow'
}
ele.addEventListener('click', pintar);
// ele.addEventListener('click', function(){
//     ele.style.backgroundColor = 'yellow'
// })

// 3.2
ele = document.getElementById('ele1');
function pintar(color='green') {
   ele.style.backgroundColor = color;
}
ele.addEventListener('click', function() {
    pintar('yellow');
})