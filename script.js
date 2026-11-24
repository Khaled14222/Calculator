let operator = (Num1,op ,Num2) =>{
  let mathe
  if(op == '+'){
    mathe = Number(Num1) + Number(Num2);
    return mathe;
  } else if (op == '-'){
    mathe = Number(Num1) - Number(Num2);
    return mathe;
  } else if (op == 'x' || op == '*'){
    mathe = Number(Num1) * Number(Num2);
    console.log(mathe)
    return mathe;    
  } else if(op == '/'){
    mathe = Number(Num1) / Number(Num2);
    return mathe;
  }
  console.log(mathe);
}


let results = document.querySelector('.Numbers');
let btn = document.querySelectorAll(".nume");

let nam1 = '';
let opo = false;
let nam2 = '';

function printNum(nana)
{
  if(opo === false && /[+\-/x]/.test(nana)){
    opo = nana;
    console.log(opo);
    results.textContent = `${nam1} ${opo}`;
  } else if(opo == false){
    nam1 += nana;
    console.log(nam1)
    results.textContent = `${nam1}`;
  } 
   else if (opo !== false){
    nam2  += nana;

    console.log(nam2)
    results.textContent = `${nam1} ${opo} ${nam2}`;
  }
}

  document.getElementById('equal').onclick = function() {
  console.log(nam1, opo, nam2);
  let answer = operator(nam1, opo, nam2);
  results.textContent = `${answer}`

    nam1 = answer;
    opo = '+';
    nam2 = '';
  };