const color= document.getElementById('color')

let btn= document.getElementById('btn')
btn.addEventListener('click', function(){
    encavezado= document.getElementById('h1')
    encavezado.style.color=color.value
});