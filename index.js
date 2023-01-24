const d = document;
const displayValuePrev = d.getElementById("previous-value");
const displayValueCurrent = d.getElementById("current-value");
const operationsButtons = d.querySelectorAll(".operation-buttons");
const numberButtons = d.querySelectorAll(".number-buttons");

class Calculator {
  add(number, number2) {
    return number + number2;
  }

  subtract(number, number2) {
    return number - number2;
  }

  divide(number, number2) {
    return number / number2;
  }

  multiply(number, number2) {
    return number * number2;
  }

  module(number, number2) {
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
    this.typeOperation = undefined;
    this.signs = {
      add: '+',
      divide: '/',
      subtract: '-',
      multiply: 'x'
    }
  }

  compute(typeOperation){
    this.typeOperation !== 'equal' && this.calculate();
    console.log(this.typeOperation);
    this.typeOperation = typeOperation;
    this.previousValue = this.currentValue || this.previousValue;
    this.currentValue = '';
    this.printValues();

  }

  delete() {
    this.currentValue = this.currentValue.toString().slice(0, -1);
    this.printValues();
  }

  deleteAll(){
    this.currentValue = '';
    this.previousValue = '';
    this.typeOperation = undefined;
    this.printValues();
  }

  addNumber(number) {
    if (number === "." && this.currentValue.includes(".")) return;
    this.currentValue = this.currentValue.toString() + number.toString();
    this.printValues();
  }

  printValues() {
    this.displayValueCurrent.textContent = this.currentValue;
    this.displayValuePrev.textContent = `${this.previousValue} ${this.signs[this.typeOperation] || ''}`;
  }

  calculate(){
    const previousValue = parseFloat(this.previousValue);
    const currentValue = parseFloat(this.currentValue);

    if(isNaN(currentValue) || isNaN(previousValue)) return 

    this.currentValue = this.calculator[this.typeOperation](previousValue, currentValue);

  }
}

const display = new Display(displayValuePrev, displayValueCurrent);

// Know the type of button we are pressing.

numberButtons.forEach((button) => {
  button.addEventListener("click", () => display.addNumber(button.innerHTML));
});

operationsButtons.forEach((button) => {
  button.addEventListener("click", () => display.compute(button.value));
});
