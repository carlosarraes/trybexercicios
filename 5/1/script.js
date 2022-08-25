const pElement = document.getElementsByTagName('p');
const mainElement = document.getElementsByClassName('main-content');
const centerElement = document.getElementsByClassName('center-content');
const titleElement = document.getElementsByClassName('title');

pElement[1].innerText = "Mais velho"
mainElement[0].style.backgroundColor = 'rgb(76,164,109)';
centerElement[0].style.backgroundColor = 'white';
titleElement[0].innerText = "Exercício 5.1 - JavaScripit";

for (let i = 0; i <pElement.length ; i++) {
    pElement[i].style.textTransform = "uppercase"
    console.log(pElement[i].innerText);
}