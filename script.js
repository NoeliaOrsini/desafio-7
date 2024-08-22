function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    return a / b;
}

function calculate(operation) {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    let result;

    switch (operation) {
        case 'sumar':
            result = sumar(num1, num2);
            break;
        case 'restar':
            result = restar(num1, num2);
            break;
        case 'multiplicar':
            result = multiplicar(num1, num2);
            break;
        case 'dividir':
            if (num2 === 0) {
                result = "No se puede dividir por cero.";
            } else {
                result = dividir(num1, num2);
            }
            break;
    }

    document.getElementById('result').innerText = `Resultado: ${result}`;
}

function clearFields() {
    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';
    document.getElementById('result').innerText = '';
}

function exitCalculator() {
    document.getElementById('result').innerText = "Hasta la próxima";
    setTimeout(() => {
        window.close();
    }, 2000);
}
