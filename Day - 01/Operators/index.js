// Operators 

// Arithmetic operators
let num1=5, num2=10;
let add=num1+num2;
let sub=num1-num2;
let mul=num1*num2;
let div=num1/num2;
let rem=num1%num2;

console.log(add, sub, mul, div, rem);

//Unary Operators

// 1. Increment operator 
// Pre-Increment Opeartor 
++num1;
// post increment operator 
num2++;
console.log(num1);
console.log(num2);
// 2.Decerment operator 
// pre-decrement operator 
--num1;
// post-decrement operator 
num2--;
console.log(num1);
console.log(num2);

let ans1=(++num1)*(--num2);
let ans2=(num1++)*(num2--);
let ans3=(num1++)*(--num2);
let ans4=(--num2)*(num1++);
console.log(ans1, ans2, ans3, ans4);


// Assignment Operator

// =, +=,-=,/=,*=,%= 

let var1=+num1 //which is same as var1=var1+num1 , var1-=num1, var1/=num1

// Comparision Operator 

console.log(num1>num2);
console.log(num1>=num2);
console.log(num1<num2);
console.log(num1<=num2);

// differencen between == (loose equality) / === (strict equality)
console.log(num1==num2);

let variable1=1;
let variable2='1';
console.log(variable1===variable2);
// It gives false eventhough the values are same because number and string are not equal so this is called strict equality 

// if is is applied to loose equality then it will give true bcoz it only checks the values 

// Ternary Operator 
let A=10, B=20;
A>B?console.log('greater'):console.log('lesser');

// Logical Operator 
// AND Operator
let age=19;
if(age>18 && age<20){
    console.log("elgible to vote")
}

// if any one cond is false then all the condition will be not executed 

// OR Operator 
if(age>18 || age<10){
    console.log("elgible to vote")
}
// if anyone cond is true the code will take execution 

if(age!=18){
    console.log("eligible to vote")
}
// if the cond is not true then it executes the code 


// Truthy and Falsy values 

// if logical operators are assinged with non booleans it gives the particular output 

// OR operator (with Non-Booleans)
console.log((false || true));
console.log((false ||false));
console.log((false || 1));
console.log((false || 1 || 5));
console.log((false || 5 || 1));
console.log((false || 'dashvanth' || 5));
console.log((false || 'dashvanth'));
console.log(('dashvanth'|| true));

// AND Operator (with non Booleans)
console.log((true && 'dashvanth'));
console.log((false && true ));

// Bitwise Operator 
// &, | operators

// Operator Precedence

// operator precedence decides which operator has the highest position and which one is first calculated 