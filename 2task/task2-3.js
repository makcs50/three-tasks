const Arr = [
    {
      name: 'Google',
      url: 'https://google.com'
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com'
    },
    {
      name: 'intocode',
      url: 'https://intocode.ru'
    },
  ]

  function render(Arr){
    const ulMain = document.createElement('ul');

    for(let i = 0; i < Arr.length; i++){
    const li = document.createElement('li');
    const a = document.createElement('a');
    li.append(a);
    a.href = Arr[i].url;
    a.textContent = Arr[i].name;
    ulMain.appendChild(li)
  }
  return document.body.appendChild(ulMain)
}

console.log(render(Arr))