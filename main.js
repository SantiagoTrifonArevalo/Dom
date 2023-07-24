//Nivel 1
// Ejercicio 1
// Crea un archivo index.html con cuatro elementos <p> como arriba:

<div>
    <p>First Paragraph</p>
    <p>Second Paragraph</p>
    <p>Third Paragraph</p>
    <p>Fourth Paragraph</p>
</div>

// Selecciona el primer párrafo con document.querySelector(tagname).

const FirstParagraph = document.querySelector('p');

// Selecciona todos los párrafos, uno a uno, usando document.querySelector('#id').

FirstParagraph = document.querySelector('#first-paragraph');
const SecondParagraph = document.querySelector('#second-paragraph'); const secondParagraph =
    document.querySelector('#second-paragraph');
const ThirdParagraph = document.querySelector('#third-paragraph');
const FourthParagraph = document.querySelector('#fourth-paragraph');

// Selecciona todos los párrafos como nodeList usando document.querySelectorAll(tagname).

const allParagraphs = document.querySelectorAll('p');

// Itera por cada párrafo y muyestra por consola el texto de cada uno de ellos.
// Cambia el contenido del cuarto párrafo a Forth Paragraph.

allParagraphs.forEach((paragraph) => {
    console.log(paragraph.textContent);
});

//Cambia el contenido del cuarto párrafo a Forth Paragraph//

const fourthParagraph = document.querySelector('#fourth-paragraph');
fourthParagraph.textContent = 'Fourth Paragraph';

// Nivel 2
//ejercicio.1:
//Cambia el estilo de cada párrafo usando en JavaScript uno de los siguientes en cada párrafo (color, backgroundColor,
const firstParagraph = document.querySelector('#first-paragraph');
firstParagraph.style.color = 'blue';
firstParagraph.style.backgroundColor = 'yellow';
firstParagraph.style.border = '1px solid black';
firstParagraph.style.fontSize = '20px';
firstParagraph.style.fontFamily = 'Arial';

//ejercicio.2:
//todos los párrafos, itera por cada uno de ellos y dale al 1º y 3º un color green, y al 2º y 4º red.//

allParagraphs = document.querySelectorAll('p');

allParagraphs.forEach((paragraph, index) => {
    if (index === 0 || index === 2) {
        paragraph.style.color = 'green';
    } else {
        paragraph.style.color = 'red';
    }
});

// Ejercicio 3
{/* <div class="wrapper">
        <h1>Joseph Dredd desafíos en 2023</h1>
        <h2>Reto detener a los que no sepan Javascript</h2>
        <ul id="challenges-list">
            <li class="done">Aprender civismo</li>
            <li class="ongoing">Aprender respeto</li>
            <li class="coming">Aprender comportamiento</li>
            <li class="coming">Aprender código de circulación</li>
            <li class="coming">Aprender Javascript</li>
            <li class="coming">Aprender React</li>
            <li class="coming">Aprender Proyectos</li>
        </ul>
    </div> */}
// Cambiar el color del texto con el año cada segundo
const yearText = document.querySelector('h1');
setInterval(() => {
    yearText.style.color = getRandomColor();
}, 1000);

// Cambiar la fecha y su color de fondo cada segundo
const dateElement = document.querySelector('h2');
setInterval(() => {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    dateElement.textContent = `Reto detener a los que no sepan Javascript - ${hours}:${minutes}:${seconds}`;
    dateElement.style.backgroundColor = getRandomColor();
}, 1000);

// Función para obtener un color aleatorio en formato hexadecimal
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Establecer colores de fondo para cada tipo de challenge
const challengeItems = document.querySelectorAll('#challenges-list li');
challengeItems.forEach(item => {
    const status = item.textContent.split(' ')[1];
    switch (status) {
        case 'Done':
            item.style.backgroundColor = 'green';
            break;
        case 'Ongoing':
            item.style.backgroundColor = 'yellow';
            break;
        case 'Coming':
            item.style.backgroundColor = 'red';
            break;
        default:
            break;
    }
});

// Ejercicio 4
// Función para crear los botones
function createButtons(num) {
    const section = document.getElementById('buttons-section');
    for (let i = 1; i <= num; i++) {
        const button = document.createElement('button');
        button.textContent = i;

        // Aplicar estilos
        if (i % 2 === 1) {
            button.style.backgroundColor = 'red';
        } else {
            button.style.backgroundColor = 'blue';
        }

        if (i % 5 === 0) {
            button.style.color = 'green';
        }

        section.appendChild(button);
    }
}

// Crear los 100 botones
createButtons(100);

//Ejercicio.5
// Ejercicio 5: Rainbow text
// Tienes el siguiente HTML:

// <div>
// 	<span>R</span>
// 	<span>A</span>
// 	<span>I</span>
// 	<span>N</span>
// 	<span>B</span>
// 	<span>O</span>
// 	<span>W</span>
// </div>
// En tu archivo .js tienes el siguiente array:

// const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// La tarea consiste en seleccionar todos los span, iterar sobre ellos y asignarle cada uno de los colores del array tal que las letras formen el arcoiris.

// script.js
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

// Obtener todos los elementos <span> dentro del div
const spans = document.querySelectorAll('div span');

// Asignar colores del array a cada uno de los spans
spans.forEach((span, index) => {
  span.style.color = colors[index % colors.length];
});