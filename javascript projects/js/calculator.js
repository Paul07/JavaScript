//creates an object to keep track of the files
const Calculator = {
	//this will display the "0" on the calculator
	Display_Value: '0',
	//this holds the first operand of any expression
	First_Operand: null,
	//checks for a second operand
	Wait_Second_Operand: false, 
	//holds the operator
	operator: null,
};

//changes the value on each button click
function Input_Digit(digit) {
	const {Display_Value, Wait_Second_Operand} = Calculator;
	//checks if second operand is true and sets the value to 
	//the key that was clicked
	if (Wait_Second_Operand === true) {
		Calculator.Display_Value = digit;
		Calculator.Wait_Second_Operand = false;
	} else {
		//overwrites the display value if the current value is 0
		//otherwise it adds to it
		Calculator.Display_Value = Display_Value === '0' ? digit: Display_Value	+ digit;
	}
}

//this section handles decimals
function Input_Decimal(dot) {
	//makes sure accidental clicks of the decimal don't cause bugs
	//in the operation
	if (Calculator.Wait_Second_Operand === true) return;
	if (!Calculator.Display_Value.includes(dot)) {
		//if the display value does not include a decimal point we 
		//want to add one
		Calculator.Display_Value += dot;
	}
}

//this section handles operators
function Handle_Operator(Next_Operator) {
	const {First_Operand, Display_Value, operator} = Calculator;
	//When the first number is pressed we convert the current number
	//displayed to a number and then store the result in 
	//Calculator.First_Operand if it doesnt already exist
	const Value_of_Input = parseFloat(Display_Value);
	//checks if an operator already exists and if Wait_Second_Operand
	//is true. Then updates the operator and exits the function
	if (operator && Calculator.Wait_Second_Operand) {
		Calculator.operator = Next_Operator;
		return;
	}
	if (First_Operand == null) {
		Calculator.First_Operand = Value_of_Input;
	} else if (operator) {//checks if operator already exists
		const Value_Now = First_Operand || 0;
		//if operator exists, property lookup is performed for
		//the operator in the perform_calculation object and the 
		//function that matches the operator is executed
		let result = Perform_Calculation[operator](Value_Now, Value_of_Input);
		//we add a fixed amount of numbers after the decimal
		result = Number(result).toFixed (9);
		//this will remove any trailing 0's
		result = (result *1).toString();
		Calculator.Display_Value = parseFloat(result);
		Calculator.First_Operand = parseFloat(result);
	}
	Calculator.Wait_Second_Operand = true;
	Calculator.operator = Next_Operator;
}
const Perform_Calculation = {
	'/': (First_Operand, Second_Operand) =>First_Operand / Second_Operand,
	'*': (First_Operand, Second_Operand) =>First_Operand * Second_Operand,
	'+': (First_Operand, Second_Operand) =>First_Operand + Second_Operand,
	'-': (First_Operand, Second_Operand) =>First_Operand - Second_Operand,
	'=': (First_Operand, Second_Operand) =>Second_Operand,
};
function Calculator_Reset() {
	Calculator.Display_Value = '0';
	Calculator.First_Operand = null;
	Calculator.Wait_Second_Operand = false;
	Calculator.operator = null;
}
//this function updates the calculator screen with the contents of Display_Value
function Update_Display() {
	//uses the calculator screen tag to target the 
	//input tag in the html doc.
	const display = document.querySelector('.calculator-screen');
	display.value = Calculator.Display_Value;
}

Update_Display();
//this section monitors button clicks
const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click', (event)=> {
	//the target variable is an object that represents the element
	//that was clicked
	const {target} = event;
	//if the element that was clicked on is not a button, exit function
	if (!target.matches('button')) {
		return;
	}
	if (target.classList.contains('operator')) {
		Handle_Operator(target.value);
		Update_Display();
		return
	}
	if (target.classList.contains('decimal')) {
		Input_Decimal(target.value);
		Update_Display();
		return;
	}
	//ensures that AC clears all inputs from the Calculator screen
	if (target.classList.contains('all-clear')) {
		Calculator_Reset();
		Update_Display();
		return;
	}
	Input_Digit(target.value);
	Update_Display();
})
