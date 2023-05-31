const divRed = document.createElement('div');
divRed.className = 'red';
// divRed.textContent = "jkjjk"

const divGreen = document.createElement('div');
divGreen.className = 'green';

const divBlue = document.createElement('div');
divBlue.className = 'blue';


divBlue.textContent = 'я вложен';


divRed.append(divGreen);
divGreen.append(divBlue);


document.body.append(divRed)
console.log(divRed);

