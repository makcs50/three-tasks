const ulNode = document.createElement('ul');
ulNode.classList.add('list');


const liNode = document.createElement('li');
liNode.textContent = 'привет, мир';
ulNode.appendChild(liNode);


console.log(ulNode);
console.log(liNode);

