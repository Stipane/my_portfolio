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

