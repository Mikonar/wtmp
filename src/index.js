const coursesEn = ["Hamburger, cream sauce and poiled potates",
  "Goan style fish curry and whole grain rice",
  "Vegan Chili sin carne and whole grain rice",
  "Broccoli puree soup, side salad with two napas",
  "Lunch baguette with BBQ-turkey filling",
  "Cheese / Chicken / Vege / Halloum burger and french fries"];
const coursesFi = ["Jauhelihapihvi, ruskeaa kermakastiketta ja keitettyä perunaa",
  "Goalaista kalacurrya ja täysjyväriisiä",
  "vegaani Chili sin carne ja täysjyväriisi",
  "Parsakeittoa,lisäkesalaatti kahdella napaksella",
  "Lunch baguette with BBQ-turkey filling",
  "Juusto / Kana / Kasvis / Halloumi burgeri ja ranskalaiset"];

let lang = 'fi';
let activeMenu = coursesFi;

const menu = document.querySelector('#menu');
let menuOrder = 'asc';


const renderMenu = () => {
  menu.innerHTML = '';
  for (const item of activeMenu) {
    const li = document.createElement('li');
    li.textContent = item;
    menu.appendChild(li);
  }
};

const changeLanguage = () => {
  if (lang === 'fi') {
    lang = 'en';
    activeMenu = coursesEn;
  } else {
    lang = 'fi';
    activeMenu = coursesFi;
  }
};

const sortCourses = (courses, order) => {
  let sortedCourses = courses.sort();
  if (order === 'asc') {
    menuOrder = 'desc';
  } else {
    menuOrder = 'asc';
    sortedCourses = courses.reverse();
  }
  return sortedCourses;
};
const getRandomDish = (menu) => {
  const randomIndex = Math.floor(Math.random() * activeMenu.length);
  alert(activeMenu[randomIndex]);
};

renderMenu();

document.querySelector('#sort').addEventListener('click', () => {
  sortCourses(activeMenu, menuOrder);
  renderMenu();
});
document.querySelector('#random').addEventListener('click', () => {
  getRandomDish();
});

document.querySelector('#changeLang').addEventListener('click', () => {
  changeLanguage ();
  renderMenu();
});
