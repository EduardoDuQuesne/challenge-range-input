//Elements From DOM
var rangeInput = document.getElementById("range1");
var numericalInput = document.getElementById("number1");

//Event Listeners
rangeInput.addEventListener("change", rangeRead);
numericalInput.addEventListener("change", numericalRead);

//Range Value Function
var rangeValue = 0;
function rangeRead() {
    rangeValue = rangeInput.value;
    numericalInput.value = rangeValue;
}

//Numerical Value Function
function numericalRead() {
    numericalValue = numericalInput.value;
    rangeInput.value = numericalValue;
}