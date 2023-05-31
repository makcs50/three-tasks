
const body = document.body;
const container = document.createElement('div');
const header = document.createElement('h1');
const linkContainer = document.createElement('div');


header.textContent = 'lorem ipsum iz vaz izvaz iz vaz iz vaz chog text pal pal pal ';


const links = [
  { text: 'Google', url: 'https://www.google.com/' },
  { text: 'intocode', url: 'https://intocode.ru/' },
  { text: 'Instagram', url: 'https://www.instagram.com/' }
];

links.forEach(link => {
  const anchor = document.createElement('a');
  anchor.href = link.url;
  anchor.target = '_blank'; 
  anchor.textContent = link.text;
  anchor.style.margin = '0 10px';
  linkContainer.appendChild(anchor);
});



header.style.borderRadius = '10px';
header.style.padding = '20px'
header.style.fontSize = '26px'
header.style.width = '400px'
header.style.padding = '5px'
header.style.border = '3px solid red'
container.style.display = 'flex';
container.style.flexDirection = 'column';
container.style.alignItems = 'center';
linkContainer.style.display = 'flex';



container.append(header);
container.append(linkContainer);
body.append(container);
