const d = document;
const displayValuePrev = d.getElementById("previous-value");
const displayValueCurrent = d.getElementById("current-value");
const calculatorContent = d.querySelector(".calculator-content");
const buttons = calculatorContent.querySelector(".calculator-buttons");

class Calculator {
  add(number, number2){
    return number + number2;
  }

  subtract(number, number2){
    return number - number2;
  }

  divide(number, number2){
    return number / number2;
  }

  multiply(number, number2){
    return number * number2;
  }
  
  module(number, number2){
    return number % number2;
  }

}

class Display {
  constructor(displayValuePrev, displayValueCurrent) {
    this.displayValuePrev = displayValuePrev;
    this.displayValueCurrent = displayValueCurrent;
    this.calculator = new Calculator();
    this.currentValue = "";
    this.previousValue = "";
  }

  delete(){
    this.currentValue = this.currentValue.toString().slice(0,-1);
    this.printValues();
  }

  addNumber(number){
    if(number === '.' && this.currentValue.includes('.')) return
    this.currentValue = this.currentValue.toString() + number.toString();
    this.printValues();
  }

  printValues(){
    this.displayValueCurrent.textContent = this.currentValue;
    this.displayValuePrev.textContent = this.previousValue;
  }

}

const display = new Display(displayValuePrev, displayValueCurrent);

// Know the type of button we are pressing.

buttons.addEventListener("click", buttonPressed);

function buttonPressed(e){
  const button = e.target;
  const action = button.dataset.action;
  const buttonContent = button.textContent;
  console.log(button);
  console.log(buttonContent);

  display.addNumber(buttonContent);
}





