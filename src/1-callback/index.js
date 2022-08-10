function sum(num1, num2) {
    return num1 + num2;
}

function calc(num1, num2, operationFunction) {
    return operationFunction(num1, num2);
}

console.log(calc(5, 2, sum)); //No agregar los parentesis ya que estariamos invocando directamente la funcion

//--

setTimeout( function () {
    console.log('Hola mundo');
}, 2000);

//--

function greeting(name) {
    console.log(`Hola ${name}!`);
}

setTimeout(greeting, 2000, 'Jessica Aquino');