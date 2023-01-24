import SodexoMenu from '../assets/sodexo.json';

const coursesEn = [];
const coursesFi = [];

/**
 * @param {string} menu
 */


const createMenus = (menu) => {
  const courses = Object.values(menu);
  for (const course of courses) {
    coursesFi.push(course.title_fi);
    coursesEn.push(course.title_en);
  }
};

createMenus(SodexoMenu.courses);
const SodexoData = {coursesEn, coursesFi};
export default SodexoData;
