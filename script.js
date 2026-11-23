/**
 * First create a function that takes a number and operator and then another number
 * do the math and display in DOM
 */

let operator = (Num1,op ,Num2) =>{
  let mathe
  if(op == '+'){
    mathe = Num1 + Num2;
    results.textContent = mathe
    console.log(mathe)
    return mathe;
  } else if (op == '-'){
    mathe = Num1 - Num2;
    results.textContent = mathe
    console.log(mathe)
    return mathe;
  } else if (op == 'x' || op == '*'){
    mathe = Num1 * Num2;
    results.textContent = mathe
    console.log(mathe)
    return mathe;    
  } else if(op == '/'){
    mathe = Num1 / Num2;
    results.textContent = mathe
    console.log(mathe)
    return mathe;
  }
}


let results = document.querySelector('.Numbers');
let btn = document.querySelectorAll(".nume");

function printNum(nana)
{
    results.textContent = nana;
}
let opo = prompt("Operator");
let nam1 = Number(prompt("Numer 1"));
let nam2 = Number(prompt("Numer 2"));
operator(nam1,opo, nam2);

