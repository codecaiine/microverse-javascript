const store = {

  detail1: {
    name: 'Tonic',
    img: 'https://codecaiine.github.io/microverse-javascript/image/portfolio1.png',
    companyName: 'CANOPY',
    job: 'Back End Dev',
    year: 2015,
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    tags: ['html', 'css', 'javaScript'],
  },

  detail2: {
    name: 'Multi-Post Stories',
    img: 'https://codecaiine.github.io/microverse-javascript/image/portfolio2.png',
    companyName: 'FACEBOOK',
    job: 'Full Stack Dev',
    year: 2015,
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing.',
    tags: ['html', 'Ruby on rails', 'css', 'javaScript'],
  },

  detail3: {
    name: 'Facebook 360',
    img: 'https://codecaiine.github.io/microverse-javascript/image/portfolio3.png',
    companyName: 'FACEBOOK',
    job: 'Full Stack Dev',
    year: 2015,
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing.',
    tags: ['html', 'Ruby on rails', 'css', 'javaScript'],
  },

  detail4: {
    name: 'Uber Navigation',
    img: 'https://codecaiine.github.io/microverse-javascript/image/portfolio4.png',
    companyName: 'Uber',
    job: 'Lead Developer',
    year: 2018,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate. ',
    tags: ['html', 'Ruby on rails', 'css', 'javaScript'],
  },

};

const myName = document.getElementById('name');
const img = document.getElementById('img');
const companyName = document.getElementById('companyName');
const job = document.getElementById('job');
const year = document.getElementById('year');
const description = document.getElementById('description');
const tags = document.getElementById('tags');
const btn1 = document.querySelector('#btn-1');
const btn2 = document.querySelector('#btn-2');
const btn3 = document.querySelector('#btn-3');
const btn4 = document.querySelector('#btn-4');
const modal = document.getElementById('myModal');
const span = document.getElementsByClassName('close')[0];

function changePopup(order) {
  tags.innerHTML = '';
  const detail = store[`detail${order}`];
  myName.innerHTML = detail.name;
  img.src = detail.img;
  companyName.innerHTML = detail.companyName;
  job.innerHTML = detail.job;
  year.innerHTML = detail.year;
  description.innerHTML = detail.description;
  const tagsLength = detail.tags.length;
  const tagDiv = document.getElementById('list');

  for (let i = 0; i < tagsLength; i += 1) {
    const element = document.createElement('li');
    element.innerHTML = `${detail.tags[i]}`;
    tagDiv.appendChild(element);
    element.style.display = 'inline';
    element.style.alignItems = 'center';
    element.style.borderRadius = '8px';
    element.style.color = '#6070ff';
    element.style.padding = '8px 12px';
    element.style.fontSize = '12px';
    element.style.listStyleType = 'none';
    element.style.fontWeight = '500';
    element.style.margin = '5px';
    element.style.background = '#ebebff';
  }
}

span.onclick = function bar() {
  modal.style.display = 'none';
};

window.onclick = function bar(event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};

btn1.onclick = function bar() {
  modal.style.display = 'block';
  changePopup(1);
};

btn2.onclick = function bar() {
  modal.style.display = 'block';
  changePopup(2);
};

btn3.onclick = function bar() {
  modal.style.display = 'block';
  changePopup(3);
};

btn4.onclick = function bar() {
  modal.style.display = 'block';
  changePopup(4);
};