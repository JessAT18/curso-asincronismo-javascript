console.log('Taco 1');
console.log('Taco 2');
console.log('Taco 3');

setTimeout(() => {
    console.log('Torta');
}, 1000);

console.log('Taco 4');

//🌮 - call stack : el taquero (órdenes rápidas)
//👨‍🍳 - web APIs : la cocina
//🌯 - callback queue : las órdenes preparadas
//💁‍♂️ - event loop : el mesero