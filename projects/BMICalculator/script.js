var heightInput = document.querySelector(".height-input-field");
var weightInput = document.querySelector(".weight-input-field");
var calculateButton = document.querySelector(".calculate");
var result = document.querySelector(".result");
var statement = document.querySelector(".result-statement");
var BMI, height, weight;

calculateButton.addEventListener("click", () => {

    height = heightInput.value;
    weight = weightInput.value;
    BMI = (weight / (height ** 2)) * 10000;
    result.innerText = "BMI : " + BMI.toFixed(2);

    if (height == "" || weight == "") {
        statement.innerText = "Enter your height and weight";
    }
    else if (BMI < 18.5) {
        statement.innerText = "You are underweight !";
    } else if ((BMI > 18.5) && (BMI < 24.9)) {
        statement.innerText = "You are normal :)";
    } else if ((BMI > 25) && (BMI < 29.9)) {
        statement.innerText = "You are overweight !";
    } else {
        statement.innerText = "You are obese !";
    }
});