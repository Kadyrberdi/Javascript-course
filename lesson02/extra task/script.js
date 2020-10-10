let num = '266219';
let reducer = (accumulator, currentValue) => accumulator * currentValue;
//let multiplication = num.split('').reduce(reducer);
//let result = multiplication ** 3;
//console.log(result.toString().substring(0, 2));
console.log((num.split('').reduce(reducer) ** 3).toString().substring(0, 2));