//target the input slider
const rangeSlider = document.querySelector('input[type="range"]');
//cost value that shows the cost every month
const cost = document.getElementById("per-month");
//the current value that the slider is on
const rangeValue = document.getElementById("rangevalue");
const toggle = document.getElementById("bill-toggle");

//change initial value to $16 on page load
if (cost.innerText == "") {
  cost.innerText = "$16.00";
}

console.log(rangeValue.value);

rangeSlider.addEventListener("input", priceChange);
toggle.addEventListener("click", togglePressed);

//function to change slider background
function priceChange(e) {
  let target = e.target;

  //store the min, max, and current value attributes of the slider
  const minimum = target.min;
  const maximum = target.max;
  const val = target.value;

  //calculate the ratio of the slider that will be filled
  target.style.backgroundSize =
    ((val - minimum) * 100) / (maximum - minimum) + "% 100%";

  //check price range to show the proper prices
  if (val >= 0 && val < 25) {
    toggle.checked === true
      ? (cost.innerText = "$6.00")
      : (cost.innerText = "$8.00");
    rangeValue.innerText = "10k";
  } else if (val >= 25 && val < 50) {
    toggle.checked === true
      ? (cost.innerText = "$9.00")
      : (cost.innerText = "$12.00");
    rangeValue.innerText = "50k";
  } else if (val >= 50 && val < 75) {
    toggle.checked === true
      ? (cost.innerText = "$12.00")
      : (cost.innerText = "$16.00");
    rangeValue.innerText = "100k";
  } else if (val >= 75 && val < 100) {
    toggle.checked === true
      ? (cost.innerText = "$18.00")
      : (cost.innerText = "$24.00");
    rangeValue.innerText = "500k";
  } else if (val == 100) {
    toggle.checked === true
      ? (cost.innerText = "$27.00")
      : (cost.innerText = "$36.00");
    rangeValue.innerText = "1M";
  }
}

//function that runs every time the toggle is pressed
function togglePressed() {
  let priceExtract = "";
  //gets the current string that cost has
  let costString = cost.innerText;

  //need to extract the number since the string contains other characters
  if (costString.length == 5) {
    //extraction for single number
    priceExtract = costString.slice(1, 2);
  } else {
    //extract 2 digit number
    priceExtract = costString.slice(1, 3);
  }

  //different price conversion based on the checked boolean value
  if (toggle.checked == true) {
    switch (priceExtract) {
      case "8":
        cost.innerText = "$6.00";
        break;
      case "12":
        cost.innerText = "$9.00";
        break;
      case "16":
        cost.innerText = "$12.00";
        break;
      case "24":
        cost.innerText = "$18.00";
        break;
      case "36":
        cost.innerText = "$27.00";
        break;
    }
  } else {
    switch (priceExtract) {
      case "6":
        cost.innerText = "$8.00";
        break;
      case "9":
        cost.innerText = "$12.00";
        break;
      case "12":
        cost.innerText = "$16.00";
        break;
      case "18":
        cost.innerText = "$24.00";
        break;
      case "27":
        cost.innerText = "$36.00";
        break;
    }
  }
}
