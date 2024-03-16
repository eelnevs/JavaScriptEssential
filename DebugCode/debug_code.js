function performOperation() {
    // Get user input from input fields
    let num1 = parseInt(document.getElementById('input1').value);
    let num2 = parseInt(document.getElementById('input2').value);
    // Check if inputs are valid numbers
    if (!isNaN(num1) && !isNaN(num2)) {
        // Perform the operation
        let result = multiply(num1, num2);
        let resulta = addition(num1, num2);
        let resultd = division(num1, num2);
        // Display the result
        displayResult(`Addition: ${resulta}\nMultiplication: ${result}\nDivision: ${resultd}`);
    } else {
        displayResult('Please enter valid numbers');
    }
}

function multiply(a, b) {
    // Introduce a debugger statement to pause execution
    debugger;
    // Multiply the numbers
    return a * b;
}

function addition(a, b) {
    debugger;
    return a + b;
}

function division(a, b) {
    debugger;
    return a / b;
}

function displayResult(result) {
    // Display the result in the paragraph element
    const resultElement = document.getElementById('result');
    resultElement.textContent = `The result is: ${result}`;
}