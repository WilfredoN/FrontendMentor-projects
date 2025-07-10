const themeSelector = document.getElementById("themeSelector");
const calcBut = document.getElementsByClassName("num");
const output = document.querySelector("h1");
const operationsList = document.querySelector("h2");
const operationSymbol = document.getElementsByClassName("operate");
var number = "";

//function that detect color scheme
document.addEventListener("DOMContentLoaded", function () {
	console.log("DOM fully loaded and parsed");
	if (
		window.matchMedia &&
		window.matchMedia("(prefers-color-scheme: dark)").matches
	) {
		themeSelector.value = 2;
	}
	if (
		window.matchMedia &&
		window.matchMedia("(prefers-color-scheme: light)").matches
	) {
		themeSelector.value = 3;
	}
});

let isHaveDot = false;

//function that allow to enter number in the output
function enteringNumber() {
	for (let i = 0; i < calcBut.length; i++) {
		calcBut[i].addEventListener("click", function () {
			if (!number) {
				output.innerHTML = "";
			}
			if (calcBut[i].innerText === '.' && !isHaveDot) {
				isHaveDot = true;
			}
			else if (calcBut[i].innerHTML === "." && isHaveDot) {
				return;
			}
			output.innerHTML += calcBut[i].innerHTML;
			number += calcBut[i].innerHTML;
			operationsList.innerHTML = number;
			console.log(number);
		});
	}
}

//function that delete one number from the output
function deleteNum() {
	output.innerHTML = output.textContent.substr(
		0,
		output.textContent.length - 1
	);
	let numberC = number.slice(0, number.length - 1);
	number = numberC;
	operationsList.innerHTML = number;
	console.log(number);
}

//variable for first number
function reset() {
	output.innerHTML = "";
	number = "";
	console.clear();
	operationsList.innerHTML = "";
}

//function that allow to enter next number
function operation(op) {
	isHaveDot = false;
	number += op;
	console.log(number);
	output.innerHTML = "";
	operationsList.innerHTML = "";
}

//result function
function result() {

	try {
		if (number.includes("/0")) {
			throw new Error("Zero division error!");
		}
		if (number.length > 1) {
			let result = eval(number);
			operationsList.innerHTML = number;
			console.log(`result of ${number} is ${result}`);
			output.innerHTML = Number.isInteger(result)
				? result
				: result.toFixed(2);
		} else {
			console.log("0 operations found");
			alert("0 operations found");
		}
	}
	catch (error) {
		alert(error.message);
		reset();
	}
}
enteringNumber();

//TODO:
//theme select manually 🤔
