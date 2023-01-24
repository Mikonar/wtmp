import SodexoData from './modules/sodexodata.js';
import FazerData from './modules/fazerdata';

let language = 'fi';
let currentsodexoMenu = SodexoData.coursesFi;
let currentFazermenu = FazerData.coursesFi;
const sodexoMenu = document.querySelector('#sodexoMenu');
const fazerMenu = document.querySelector('#fazerMenu');
let menuOrder = 'asc';

const MenuSodexo = () => {
  sodexoMenu.innerHTML = '';
  for (const item of currentsodexoMenu) {
    const li = document.createElement('li');
    li.textContent = item;
    sodexoMenu.appendChild(li);
  }
};

const MenuFazer = () => {
  fazerMenu.innerHTML = '';
  for (const item of currentsodexoMenu) {
    const li = document.createElement('li');
    li.textContent = item;
    fazerMenu.appendChild(li);
  }
};
const changeLanguage = () => {
  if (language === 'fi') {
    language = 'en';
    currentsodexoMenu = SodexoData.coursesEn;
    currentFazermenu = FazerData.coursesEn;
  }
  else if (language === 'en') {
    language = 'fi';
    currentsodexoMenu = SodexoData.coursesFi;
    currentFazermenu = FazerData.coursesFi;
}};


/**
 * @param {Array} courses
 * @param {string} order
 * @returns {Array}
 */
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

/**
 @param {array} courses
 */
const getRandom = (courses) => {
  const randomIndex = Math.floor(Math.random() * currentsodexoMenu.length);
  const randomIndexF = Math.floor(Math.random() * currentFazermenu.length);
  alert('Sodexo: ' + currentsodexoMenu[randomIndex] + ' \nFazer: ' + currentFazermenu[randomIndexF]);
};

MenuSodexo();
MenuFazer();

document.querySelector('#changeLang').addEventListener('click', () => {
  changeLanguage();
  MenuSodexo();
  MenuFazer();
});

document.querySelector('#sort').addEventListener('click', () => {
  sortCourses(currentsodexoMenu, menuOrder);
  MenuFazer();
});

document.querySelector('#random').addEventListener('click', () => {
  getRandom();
});
