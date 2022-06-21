// 1. Acesse o elemento elementoOndeVoceEsta.
const elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta')
/* console.log(elementoOndeVoceEsta); */

// 2. Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
const paiElementoOndeVoceEsta = elementoOndeVoceEsta.parentElement;
paiElementoOndeVoceEsta.style.color = 'green';

// 3. Acesse o primeiroFilhoDoFilho e adicione um texto a ele.
// Você se lembra dos vídeos da aula anterior, como fazer isso?
const primeiroFilhoDoFilho = elementoOndeVoceEsta.firstElementChild;
primeiroFilhoDoFilho.innerText = 'Este é o primeiroFilhoDoFilho'

// 4. Acesse o primeiroFilho a partir de pai.
primeiroFilho = paiElementoOndeVoceEsta.firstElementChild

// 5. Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.
primeiroFilho2 = elementoOndeVoceEsta.previousElementSibling

// 6. Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.
const textAten = elementoOndeVoceEsta.nextSibling
/* console.log(textAten); */


// 7. Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.
const terceiroFilho = elementoOndeVoceEsta.nextElementSibling


// 8. Agora acesse o terceiroFilho a partir de pai.
const terceiroFilho2 = paiElementoOndeVoceEsta.lastElementChild.previousElementSibling