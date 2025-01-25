const btnA = document.getElementById('btnA');
const btnDU = document.getElementById('btnDU');
const btnDP = document.getElementById('btnDP');
const lista = document.getElementsByTagName('ul')[0];
const añadir = document.getElementsByClassName('AñadirElemento')[0];

btnA.addEventListener('click', () => {
    if(añadir.value != ""){
        const li = document.createElement('li');
        li.textContent=añadir.value;
        lista.appendChild(li);
        añadir.value="";
    }
});

btnDP.addEventListener('click', () => {
    lista.removeChild(lista.firstChild);
});

btnDU.addEventListener('click', () => {
    lista.removeChild(lista.lastChild);
});