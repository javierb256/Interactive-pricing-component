//target the input slider
const rangeSlider = document.querySelector('input[type="range"]');
const cost = document.getElementById("per-month");
const rangeValue = document.getElementById('rangevalue');
const toggle = document.getElementById('bill-toggle');

// cost.style.backgroundColor = 'red';
// document.body.style.backgroundColor = 'red';

if(cost.innerText == ''){
    cost.innerText = '$16.00';
}

//function to change slider background
function priceChange(e){
    let target = e.target;
  
    //store the min, max, and current value attributes of the slider
    const minimum = target.min;
    const maximum = target.max;
    const val = target.value;

    //calculate the ratio of the slider that will be filled
    target.style.backgroundSize = (val - minimum) * 100 / (maximum - minimum) + '% 100%';


    //check price range
    if(val >= 0 && val < 25){
        (toggle.checked === true) ? cost.innerHTML = '$6.00' : cost.innerHTML = '$8.00';
        rangeValue.innerText = '10k'
        // cost.innerHTML = '$8.00';
    } else if (val >= 25 && val < 50){
        (toggle.checked === true) ? cost.innerHTML = '$9.00' : cost.innerHTML = '$12.00';
        rangeValue.innerText = '50k'
        // cost.innerHTML = '$12.00';
    }
    else if (val >= 50 && val < 75){
        (toggle.checked === true) ? cost.innerHTML = '$12.00' : cost.innerHTML = '$16.00';
        rangeValue.innerText = '100k'
        // cost.innerHTML = '$16.00';
    }
    else if (val >= 75 && val < 100){
        (toggle.checked === true) ? cost.innerHTML = '$18.00' : cost.innerHTML = '$24.00';
        rangeValue.innerText = '500k'
        // cost.innerHTML = '$24.00';
    }
    else if(val == 100) {
        (toggle.checked === true) ? cost.innerHTML = '$27.00' : cost.innerHTML = '$36.00';
        rangeValue.innerText = '1M'
        // cost.innerHTML = '$36.00';
    }

    
}

rangeSlider.addEventListener('input', priceChange);
toggle.addEventListener('click',togglePressed)

function togglePressed(e){
    let target = e.target;
    let priceExtract = "";

    let costString = cost.innerText;

    if(costString.length == 5){
        priceExtract = costString.slice(1,2);
    } else{
        priceExtract = costString.slice(1,3);
    }

   if(toggle.checked == true){
       switch (priceExtract){
           case '8':
               cost.innerHTML = '$6.00';
               break;
            case '12':
                cost.innerHTML = '$9.00';
                break;
            case '16':
                cost.innerHTML = '$12.00';
                break;
           case '24':
               cost.innerHTML = '$18.00';
               break;
            case '36':
                cost.innerHTML = '$27.00'
                break;
       }
   } else {
    switch (priceExtract){
        case '6':
            cost.innerHTML = '$8.00';
            break;
         case '9':
             cost.innerHTML = '$12.00';
             break;
         case '12':
             cost.innerHTML = '$16.00';
             break;
        case '18':
            cost.innerHTML = '$24.00';
            break;
         case '27':
             cost.innerHTML = '$36.00'
             break;
    }
   }
    // if(toggle.checked === true){

    // }
    // if(val >= 0 && val < 25){
    //     (toggle.checked === true) ? cost.innerHTML = '$6.00' : cost.innerHTML = '$8.00';
    //     rangeValue.innerText = '10k'
    //     // cost.innerHTML = '$8.00';
    // } else if (val >= 25 && val < 50){
    //     (toggle.checked === true) ? cost.innerHTML = '$9.00' : cost.innerHTML = '$12.00';
    //     rangeValue.innerText = '50k'
    //     // cost.innerHTML = '$12.00';
    // }
    // else if (val >= 50 && val < 75){
    //     (toggle.checked === true) ? cost.innerHTML = '$12.00' : cost.innerHTML = '$16.00';
    //     rangeValue.innerText = '100k'
    //     // cost.innerHTML = '$16.00';
    // }
    // else if (val >= 75 && val < 100){
    //     (toggle.checked === true) ? cost.innerHTML = '$18.00' : cost.innerHTML = '$24.00';
    //     rangeValue.innerText = '500k'
    //     // cost.innerHTML = '$24.00';
    // }
    // else if(val == 100) {
    //     (toggle.checked === true) ? cost.innerHTML = '$27.00' : cost.innerHTML = '$36.00';
    //     rangeValue.innerText = '1M'
    //     // cost.innerHTML = '$36.00';
    // }
}