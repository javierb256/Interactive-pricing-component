//target the input slider
const rangeSlider = document.querySelector('input[type="range"]');

//function to change slider background
function priceChange(e){
    let target = e.target;
  
    //store the min, max, and current value attributes of the slider
    const minimum = target.min;
    const maximum = target.max;
    const val = target.value;

    //calculate the ratio of the slider that will be filled
    target.style.backgroundSize = (val - minimum) * 100 / (maximum - minimum) + '% 100%';
}

rangeSlider.addEventListener('input', priceChange);