
//todyay's class
// loops
// for loops
// while loop
// do while loop
  //for  loop
for(let i = 0;i<=10;i++){
   console.log(i)
}

console.log("for ...loop ====================");

for(let j = 10 ; j>= 0;j--){

    console.log(j)
}

//while .....loop
let j = 11;

while(j <=10){

    console.log(j);

    j++;
}

console.log("do......while loop ===========")
let i = 11;
// do......while loop
do{

console.log(i);
i++;


}while(i<=10);

let number;

for(let i = 0;i<=10;i++){

   number = i * 10;

  document.write(`${i} x ${10} = ${number} <br>`)

}

// Functions in javascript
console.log("functions in javascript ===========")
// A function in JavaScript is a reusable block of code designed to perform a specific task. Functions help in organizing code, making it modular and easier to maintain.
function  getSum(a,b){
  
    return a + b;
    
}

let result1 = getSum(8,12)
  console.log(getSum(2,5))
  console.log(getSum(5,6))
  console.log( getSum(5,9))

  console.log(result1)


 function getDay( day){
//swich case in javascript
    switch (day) {
        case  1:
              console.log("Sunday");
            
            break;
        case 2:
            console.log("monday")
            break
        default:
            console.log("incorrect value");
            break;
    }




 }

 getDay()


//Yesterday's project that entails a function and a switch satatement

 let input1 = document.getElementById('input1')
 let input2 = document.getElementById('input2')
 let operator = document.getElementById('operator')
 let button = document.getElementById('btn')

 let result = document.getElementById('p1')


function  arithmetic(){

   let num1 = Number(input1.value) ;
   let num2 = Number(input2.value);
  let op = operator.value;
  switch (op) {
    case '+':
        answer = num1+num2;
          result.textContent = answer;
        break;
    case '-':
        answer = num1 - num2;
        result.textContent = answer;
        break;
    case '*':
        answer = num1 * num2;
        result.textContent = answer;
        break
    case '/':
          if(num2 === 0){
            result.textContent = "cannot divide by 0"

          }else{
            answer = num1 /num2;
            result.textContent = answer;
            break;
          }
    default:
         result.textContent = "Invalid operation!"
        break;
  }
    
  button.innerHTML = "result";
  button.style.background = "red";
  button.style.color = "white";



}




