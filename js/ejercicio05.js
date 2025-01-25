const H3 = document.querySelectorAll("h3");

H3.forEach((h3) => {
  h3.addEventListener("click", function (evento) {
    const texto = evento.target.textContent.trim();
    const Div = evento.target.closest("div");
    const turno = Div.id;
    const Ul = Div.querySelectorAll("ul");
    let Grupos = [];

    Ul.forEach((ul) => {
      const Li = ul.querySelectorAll("li");
      Li.forEach((li) => {
        Grupos.push(li.textContent);
      });
    });

    const numero = Grupos.length;
    const nombresGrupos = Grupos.join(", ");

    const Resultado = `Has elegido ${texto} que se imparte en turno de ${turno}
Los nº de grupos que se imparten son ${numero}: ${nombresGrupos}`;

    const divResultado = document.createElement("div");
    divResultado.textContent = Resultado;
    document.body.appendChild(divResultado);
  });
});