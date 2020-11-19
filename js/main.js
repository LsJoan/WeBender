
/* Agregando boostrap a mis experiencias */

let lista = document.getElementById('listaExperiencia');

let experiencia4 = document.createElement('li'),
    title4 = document.createElement('span'),
    progress4 = document.createElement('span'),
    curso4 = document.createElement('span'),
    number4 = document.createElement('span'),
    textTitle4 = document.createTextNode('Boostrap'),
    textNumber4 = document.createTextNode('25%');

    experiencia4.appendChild(title4);
    experiencia4.appendChild(progress4);
    title4.appendChild(textTitle4);
    progress4.appendChild(curso4);
    curso4.appendChild(number4);
    number4.appendChild(textNumber4);
    lista.appendChild(experiencia4);

    experiencia4.className = "list-group-item";
    title4.className = "label-list text-secondary";
    progress4.className = "progress";
    curso4.className = "curso boostrap";
    number4.className = "number";

    

/* -----FIN------ */