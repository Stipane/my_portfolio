// Dynamic Date in footer section
document.getElementById('year').innerHTML = new Date().getFullYear();

// LANGUAGES ANIMATION
const skewElements = document.querySelectorAll('.skew');
skewElements.forEach((element) => {
  element.addEventListener('mouseover', (e) => {
    element.classList.add('unskew');
  });
  element.addEventListener('mouseout', (e) => {
    element.classList.remove('unskew');
  });
});

// PROJECT VIEWS
// const grow = document.querySelectorAll('.projectView');
// grow.forEach((element) => {
//   element.addEventListener('mouseover', () => {
//     element.style.width = '687px';
//     element.style.height = '528px';
//   });
// });

// const revert = document.querySelectorAll('.projectView');
// revert.forEach((element) => {
//   element.addEventListener('mouseout', () => {
//     element.style.width = '';
//     element.style.height = '';
//   });
// });

// const animate = document.querySelectorAll('.banner');
// animate.forEach(element => {
//   element.addEventListener('mouseover', () => {
//     element.style.width = '160px';
//     element.style.height = '60px';
//   });
// });

// const revert2 = document.querySelectorAll('.banner');
// revert2.forEach(element => {
//   element.addEventListener('mouseout', () => {
//     element.style.width = '';
//     element.style.height = '';
//   });
// });

