const divMain = document.createElement('div');

const ulMain = document.createElement('ul');

const liOne = document.createElement('li');
const liTwo = document.createElement('li');

const aOne = document.createElement('a');
aOne.href = 'https://instagram.com/;'
aOne.textContent = 'наш инстаграм'


const aTwo = document.createElement('a');
aOne.href = 'https://intocode.ru;';
aOne.textContent = 'наш сайт'


divMain.append(ulMain);
ulMain.append(liOne, liTwo);
liOne.append(aOne);
liTwo.append(aTwo);

document.body.appendChild(divMain);

console.log(divMain);

