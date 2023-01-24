import FazerFi from '../assets/fazersuomi.json';
import FazerEn from '../assets/fazereng.json';

/**
 *
 * @param lunchMenus
 * @param day
 * @returns {*}
 */
const createMenu = (lunchMenus, day) => {
  const dayMenu = lunchMenus[day].SetMenus.map(setMenu => {
    const mealName = setMenu.Name;
    let meals = '';
    for (const meal of setMenu.Meals) {
     meals += meal.Name + ', ';
    }
    return mealName ? setMenu.Name + ': ' + meals: meals;
  });
  return dayMenu;
};

const coursesEn = createMenu(FazerEn.LunchMenus, 0);
const coursesFi = createMenu(FazerFi.LunchMenus, 0);

console.log(coursesEn);
console.log(coursesFi);

const FazerData = {coursesEn, coursesFi};
export default FazerData;
