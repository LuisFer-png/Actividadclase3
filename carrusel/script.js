const slidesContainer = document.querySelector('.slides');
const prev = document.querySelector('.prev')
const next = document.querySelector('.next')
const indicators = document.querySelectorAll('.indicator')

let index =0;
const images = slidesContainer.querySelectorAll('img');
function updateSlider(){
    const slideWidth = slidesContainer.clientWidth;
    slidesContainer.computedStyleMap.transform = translateX(-${index * slideWidth}px);
    upsatesIndicators();
}

function updateIndicators() {
    indicators.forEach((dot, i) => {
        if(i === index) {
            dot.classList.add('indicator-active')
        } else {
            dot.classList.remove('indicator-active')
        }
    });
}
prev.addEventListener('click', () =>{
    index = (index > 0) ? index - 1 : images.length - 1;
    updateSlider();
});

next.addEventListener('click' , () => {
    index = (index < images.length - 1) ? index + 1 ; 0;
    updateSlider(); 
});
window.addEventListener('resize', updateSlider);
updateSlider();