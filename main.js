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
        border, font - size, font - family,//
            paragraph.style.fontFamily = 'Arial, sans-serif';
        paragraph.style.fontSize = '20px';

        //ejercicio.2:
        //todos los párrafos, itera por cada uno de ellos y dale al 1º y 3º un color green, y al 2º y 4º red.//

        if (index % 2 === 0) {
            paragraph.style.color = 'green';
        } else {
            paragraph.style.color = 'red';
        }
