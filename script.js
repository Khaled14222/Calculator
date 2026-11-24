/**
 * First create a function that takes a number and operator and then another number
 * do the math and display in DOM
 */

let operator = (Num1,op ,Num2) =>{
  let mathe
  if(op == '+'){
    mathe = Num1 + Num2;
    return mathe;
  } else if (op == '-'){
    mathe = Num1 - Num2;
    return mathe;
  } else if (op == 'x' || op == '*'){
    mathe = Num1 * Num2;
    console.log(mathe)
    return mathe;    
  } else if(op == '/'){
    mathe = Num1 / Num2;
    return mathe;
  }
  results.textContent = `${mathe}`;
}


let results = document.querySelector('.Numbers');
let btn = document.querySelectorAll(".nume");

let nam1 = false;
let opo = false;
let nam2 = false;

function printNum(nana)
{

  if(nam1 === false && opo == false&& /[0-9]/.test(nana)){
    nam1 = Number(nana);
    console.log(nam1)
  } else if(/[+\-/x]/.test(nana)){
    opo = nana;
    console.log(opo);
  } else if (nam2 === false && opo !== false){
    nam2 = Number(nana);
    console.log(nam2)
  }
  
  results.textContent = `${nam1} ${opo} ${nam2}`;
  let answer = operator(nam1, opo, nam2);

  document.getElementById('equal').onclick = function() {
   operator(nam1,opo,nam2);
   results.textContent = `${answer}`
  };
}
//let opo = prompt("Operator");
//let nam1 = Number(prompt("Numer 1"));
//let nam2 = Number(prompt("Numer 2"));

/**
 * Print num function calls operator function inside of it so I can pass value into operator
 * do a while loop to check if nam1 if it has any value if not then assign num1 to value
 * then do another while loop to check if opo has any value if not then assign ValueOp another variable to it
 * do the same with nam2
 * 
 * then do the math
 */