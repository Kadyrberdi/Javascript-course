const firstNumber = document.getElementById('a'),
      secondNumber = document.getElementById('b'),
      sum = document.getElementById('sum'),
      mult = document.getElementById('mult'),
      res = document.getElementById('res');
     
const calculator = {
  sum: function(a, b){
    let sumNumbers = 0;
    sumNumbers = a + b;
    return sumNumbers;
  },
  mult: function(){
    // ваш код
  },
  show: function(){
    //
      /* res.value = this.sum(firstNumber.value, secondNumber.value);
      return res.value; */
  sum.addEventlistener('click', function() {
    console.log(show);
  });

  }
};

console.log(calculator);
/* 
console.log(Number(firstNumber.value));
console.log(Number(secondNumber.value)); 
console.log(Number(res.value)); */ 