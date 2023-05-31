const Arr = ["html", "css", "js"];

const ulMain = document.createElement('ul');


for(let i = 0; i < Arr.length; i++){
    const li = document.createElement(li);
    li.textContent = Arr[i];
    ulMain.appendChild(li)
}


document.body.appendChild(ulMain)

