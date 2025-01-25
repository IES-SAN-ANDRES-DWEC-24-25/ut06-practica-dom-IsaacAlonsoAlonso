let listDiv = "";
let listUl = "";
let lis = "";
let toggleList = "";
let descriptionInput = "";
let descriptionP = "";
let descriptionButton = "";
let addItemInput = "";
let addItemButton = "";


 window.addEventListener("load",iniciar);
 function iniciar(){
  listDiv = document.querySelector('.list');
  listUl = listDiv.querySelector('ul');
  lis = listUl.children;
  toggleList = document.getElementById('toggleList');
  descriptionInput = document.querySelector('input.description');
  descriptionP = document.querySelector('p.description');
  descriptionButton = document.querySelector('button.description');
  addItemInput = document.querySelector('input.addItemInput');
  addItemButton = document.querySelector('button.addItemButton');

  for (let i = 0; i < lis.length; i += 1) {
     attachListItemButtons(lis[i]);
    }
  listUl.addEventListener('click', crearbotones); 
  toggleList.addEventListener('click', MostrarOcultarLista);
  descriptionButton.addEventListener('click', CambiarTextoLista); 
  addItemButton.addEventListener('click', AñadirElemento); 
}
 
 function attachListItemButtons(li) {
   let subir = document.createElement('button');
   subir.className = 'subir';
   subir.textContent = 'subir';
   li.appendChild(subir);

   let bajar = document.createElement('button');
   bajar.className = 'bajar';
   bajar.textContent = 'bajar';
   li.appendChild(bajar);  

   let borrar = document.createElement('button');
   borrar.className = 'borrar';
   borrar.textContent = 'borrar';
   li.appendChild(borrar);
 }

 function crearbotones(event) {
  if (event.target.tagName === "BUTTON") {

    const btn = event.target;
    const li = btn.parentNode;
    const ul = li.parentNode;

    if (btn.className === "borrar") {
      ul.removeChild(li);

    } else if (btn.className === "subir") {

      const liAnt = li.previousElementSibling;
      if (liAnt) {
        ul.insertBefore(li, liAnt);
      }
    } else if (btn.className === "bajar") {

      const liPost = li.nextElementSibling;
      if (liPost) {

        ul.insertBefore(liPost, li);

      }
    }
  }
 }

 function MostrarOcultarLista(){
  if (listDiv.style.display === "none") {

    listDiv.style.display = "block";
    toggleList.textContent = "Ocultar lista";

  } else {

    listDiv.style.display = "none";
    toggleList.textContent = "Mostrar lista";

  }
 }
 function CambiarTextoLista(){
  descriptionP.textContent = descriptionInput.value; 
  descriptionInput.value = ''; 
 }
 function AñadirElemento(){
  let newText = addItemInput.value;
  if (newText.trim() === '') {
    return; 
  }

  
  let li = document.createElement('li');
  li.textContent = newText;

  
  attachListItemButtons(li);

  
  listUl.appendChild(li);

 
  addItemInput.value = '';
  
 }


