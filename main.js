const nombre = "Rodrigo Iván Dorantes Esquivel"

const experiencia = [
    {
        lugar: "Hi-Techdesign",
        periodo: "Mayo 2022 - Agosto 2022",
        descripción: "En el transcurso de 4 meses se realizo un e-commerce dirigida exclusivamente para adultos mayores. Una aplicación web y movil que cuenta con un Dashboard"
    },
    {
    lugar: "Hang teen",
    periodo: "Septiembre 2021 -  Enero 2021",
    descripción: "Mediante el uso de la palabra realizaba distintas maneras de convencer a los clientes de la compra de la mercancia."
    },
   
];

const estudios = [{
    lugar: "Colegio de bachilleres del estado de Morelos",
    periodo: "2016 - 2019",
    descripción: "Tengo una ficha tecnica como Informatico y una especialidad en fisico matematico."
    },
    {
    lugar: "UTEZ",
    periodo: "2019 - Actualidad",
    descripción: "Curso la carrera de Desarollo de Software Multiplataforma"  
    }
];

const lenguajesActuales = [
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg",
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg",
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg",
    "https://raw.githubusercontent.com/rodrigoremen/iconos/main/icons8-react.svg"
]


var nombreDOM = document.getElementById("name")
nombreDOM.innerText = nombre

for (i = 0; i < experiencia.length; i++){
    var item = document.createElement("div")
    item.innerHTML =
    `<div class="d-flex justify-content-between mt-3">
    <span class="card-title h6 exp-title">${experiencia[i].lugar}</span>
    <span class="exp-date">${experiencia[i].periodo}</span>
    </div>
    <p>${experiencia[i].descripción}</p>`
    document.getElementById("experiencia").appendChild(item)
}

for (i = 0; i < estudios.length; i++){
    var item = document.createElement("div")
    item.innerHTML =
    `<div class="d-flex justify-content-between">
    <span class="card-title h6 exp-title">${estudios[i].lugar}</span>
    <span class="exp-date">${estudios[i].periodo}</span>
    </div>
    <p>${estudios[i].descripción}</p>`
    document.getElementById("estudios").appendChild(item)
}

for (i = 0; i < lenguajesActuales.length; i++){
    var item = document.createElement("div")
    item.innerHTML = `<img class="languages" align="left" alt="JavaScript" width="40" src="${lenguajesActuales[i]}" />`
    document.getElementById("lenguajes_actuales").appendChild(item)
}

for (i = 0; i < lenguajesAprendiendo.length; i++){
    var item = document.createElement("div")
    item.innerHTML = `<img class="languages" align="left" alt="JavaScript" width="40" src="${lenguajesAprendiendo[i]}" />`
    document.getElementById("lenguajes_aprendiendo").appendChild(item)
}


// function printDiv(printable){
//     var printContents = document.getElementById(printable).innerHTML;
//     var originalContents = document.body.innerHTML;

//     document.body.innerHTML = printContents;

//     window.print();

//     document.body.innerHTML = originalContents;
// }
