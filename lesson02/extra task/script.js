let num = 266219;
let reducer = (accumulator, currentValue) => accumulator * currentValue;
let multiplication = num.toString().split('').reduce(reducer);
console.log(multiplication);
console.log((multiplication ** 3).toString().substring(0, 2));