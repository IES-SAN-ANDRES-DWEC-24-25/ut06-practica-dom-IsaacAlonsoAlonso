let lista = document.getElementsByTagName('ul')[0];
let input = document.getElementsByClassName('AñadirElemento')[0];
let btn = document.getElementsByClassName('BotonAñadir')[0];

btn.addEventListener('click', () => {
    if(input.value != ""){
        const li = document.createElement('li');
        li.textContent=input.value;
        lista.appendChild(li);
        input.value="";
    }
});