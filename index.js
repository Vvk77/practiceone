const num1 = document.querySelector("#num1");
const num2 = document.querySelector("#num2");
const add = document.querySelector("#add");
const sub = document.querySelector("#sub");
const mul = document.querySelector("#mul");
const div = document.querySelector("#div");
const ans = document.querySelector("#ans");

const math = (x) => {
  const number1 = Number(num1.value);
  const number2 = Number(num2.value);
  if (x === "+") ans.innerHTML = number1 + number2;
  else if (x === "-") ans.innerHTML = number1 - number2;
  else if (x === "*") ans.innerHTML = number1 * number2;
  else ans.innerHTML = number1 / number2;
};

add.addEventListener("click", () =>  math("+") );
sub.addEventListener("click", () =>  math("-") );
mul.addEventListener("click", () =>  math("*") );
div.addEventListener("click", () =>  math("/") );













