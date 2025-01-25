
let ul = document.getElementById('ul');
let boton = document.getElementById('boton');


boton.addEventListener('click', (event)=>{

    if(!event.target.classList.contains('inverso')){
        ul.classList.toggle('inverso');
    }
})