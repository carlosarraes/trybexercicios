const title = document.createElement('h1');
const body = document.body;
const mainSec = document.createElement('main');
const sectionSec = document.createElement('section');
const leftSectionSec = document.createElement('section');
const rightSectionSec = document.createElement('section');
const pSectionSec = document.createElement('p');
const imgLeftSection = document.createElement('img');
const ulRightSection = document.createElement('ul');
const arrayRightSection = ['um', 'dois', 'tres', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez'];
const arrayMainSection = ['um', 'dois', 'tres'];

for (let key of arrayRightSection){
    const liRightSection = document.createElement('li');
    liRightSection.innerText = key;
    ulRightSection.appendChild(liRightSection);
}

title.innerText = 'Exercício 5.2 - JavaScript'
title.classList.toggle('title');
mainSec.classList.toggle('main-content')
sectionSec.classList.toggle('center-content')
leftSectionSec.classList.toggle('left-content')
imgLeftSection.src = 'https://picsum.photos/200'
imgLeftSection.classList.toggle('small-image')
rightSectionSec.classList.toggle('right-content')
pSectionSec.innerText = 'Segura peao'

body.appendChild(title)
body.appendChild(mainSec)

mainSec.appendChild(sectionSec)
sectionSec.appendChild(pSectionSec)
for (let key of arrayMainSection){
    const h3MainSection = document.createElement('h3');
    h3MainSection.innerText = key;
    h3MainSection.classList.toggle('description');
    mainSec.appendChild(h3MainSection)
}

mainSec.appendChild(leftSectionSec)
leftSectionSec.appendChild(imgLeftSection)

mainSec.appendChild(rightSectionSec)
rightSectionSec.appendChild(ulRightSection)

mainSec.removeChild(leftSectionSec)
rightSectionSec.style.marginRight = 'auto';
sectionSec.style.backgroundColor = 'green';

ulRightSection.removeChild(ulRightSection.lastElementChild);
ulRightSection.removeChild(ulRightSection.lastElementChild);