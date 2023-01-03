let operation;
let storedNum1;

function add(number1, number2) {
	return number1 + number2;
}

function subtract(number1, number2) {
	return number1 - number2;
}

function multiply(number1, number2) {
	return number1 * number2;
}

function divide(number1, number2) {
	return number1 / number2;
}

function operate(operator, number1, number2) {
	switch (operator) {
		case "+":
			return add(number1, number2);
			break;
		case "-":
			return subtract(number1, number2);
			break;
		case "x":
			return multiply(number1, number2);
			break;
		case "/":
			return divide(number1, number2);
		default:
			console.log("invalid operator");
			break;
	}
}

const screen = document.querySelector("#screen");

const buttons = document.querySelectorAll(".number");
buttons.forEach((b) => {
	b.addEventListener("click", (e) => {
		screen.textContent += e.target.textContent;
	});
});

const operators = document.querySelectorAll(".operator");

operators.forEach((operator) => {
	operator.addEventListener("click", (e) => {});
});

const clearButton = document.querySelector("#clear");

clearButton.addEventListener("click", (e) => {
	screen.textContent = "";
	operation = undefined;
	storedNum1 = undefined;
	storedNum2 = undefined;
});

const undoButton = document.querySelector("#undo");

undoButton.addEventListener("click", (e) => {
	let newText = screen.textContent.split("");
	newText.pop();
	screen.textContent = newText.join("");
});

const operatorButtons = document.querySelectorAll(".operator");

operatorButtons.forEach((operator) => {
	if (operator.textContent === '-') {
		operator.addEventListener("click", () => {
			if (screen.textContent == "") {
				screen.textContent += operator.textContent;
			} else {
				if (storedNum1 !== undefined && operation !== undefined) {
					storedNum1 = operate(operation, storedNum1, +screen.textContent);
				} else {
					storedNum1 = +screen.textContent;
				}
				operation = operator.textContent;
				screen.textContent = '';
			}
		});
	} else {
		operator.addEventListener("click", () => {
			if (storedNum1 !== undefined && operation !== undefined) {
				storedNum1 = operate(operation, storedNum1, +screen.textContent);
			} else {
				storedNum1 = +screen.textContent;
			}
			operation = operator.textContent;
			screen.textContent = '';
		});
	}
});

const equalButton = document.querySelector('.equal');

equalButton.addEventListener('click', e=>{
	if(storedNum1 !== undefined && operation !== undefined){
		storedNum1 = operate(operation, storedNum1, +screen.textContent);
		screen.textContent = storedNum1;
		storedNum1 = undefined;
		operation = undefined;
	}
});
