const btnRight = document.querySelector('.main-button-arrow.-right');
const btnLeft = document.querySelector('.main-button-arrow.-left');
const elements = document.querySelector('.elements');
let pixels = 150;

btnRight.addEventListener('click', function() {
    pixels = pixels + 150;
    elements.style = `transform: translateX(${pixels}px);`;
});

btnLeft.addEventListener('click', function() {
    pixels = pixels - 150;
    elements.style = `transform: translateX(${pixels}px);`;
});
