import sodexoLunchMenu from './assets/sodexo-day-example.json';

//console.log('lunch menu object', sodexoLunchMenu);

const coursesEn = [];
const coursesFi = [];
let language = 'fi';
let currentMenu = coursesFi;

/**
 * Extract course title from Sodexo menu JSON object
 *
 * @param {string} menu - JSON Menu to be parsed
 */
const parseSodexoMenu = (menu) => {
  const courses = Object.values(menu);
  for (const course of courses){
    coursesEn.push(course.title_en);
    coursesFi.push(course.title_fi);
  }
};

/**
 * Renders menu courses on page
 */
const renderMenu = () => {
  const ulElement = document.querySelector('#sodexo');
  ulElement.innerHTML = '';
  for (const item of currentMenu) {
    const listElement = document.createElement('li');
    listElement.textContent = item;
    ulElement.appendChild(listElement);
  }
};

/**
 * Toggle between fi/en
 */
const switchLanguage = () => {
  if (language === 'fi') {
    language = 'en';
    currentMenu = coursesEn;
  } else {
    language ='fi';
    currentMenu = coursesFi;
  }
};

/**
 *  Sort courses alphabetically
 *
 * @param {Array} courses menu array
 * @param {String} order  'asc'/'desc'
 * @returns sorted menu
 */
const sortCourses = (courses, order = 'asc') => {
  const sortedCourses = courses.sort();
  if (order === 'desc'){
    sortedCourses.reverse();
  }
    return sortedCourses;
};

/**
 *  Picks a random dish
 * @param {Array} courses
 * @returns {String} random dish
 */
const pickARandomCourse = courses => {
  const randomIndex = Math.floor(Math.random() * courses.length);
  return courses[randomIndex];
};

/**
 *
 *Initialize application
 */
const init = () => {
parseSodexoMenu(sodexoLunchMenu.courses);
renderMenu();
// Event listeners for buttons
document.querySelector('#switch-lang').addEventListener('click', () => {
  // call switch language function
  switchLanguage();
  renderMenu();
});
document.querySelector('#sort-menu').addEventListener('click', () => {
 //to do
  currentMenu = sortCourses(currentMenu, 'desc');
  renderMenu();
});
document.querySelector('#pick-random').addEventListener('click', () => {
// choose random dish & display it
alert(pickARandomCourse(currentMenu));

});
};
init();
