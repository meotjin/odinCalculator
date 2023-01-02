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

const screen = document.querySelector('#screen');

const buttons = document.querySelectorAll('.number');
buttons.forEach((b)=>{
    b.addEventListener('click',(e)=>{
        screen.textContent += e.target.textContent;
    })
})