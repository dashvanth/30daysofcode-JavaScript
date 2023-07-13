
// Inbuilt objects and Arrays 

// 1. Math object
// you can search on mdn and get all the math properties 
// ex: Math.random();
// it return a random number between 0 and 1

Math.round();
// it returns a round of the value ex: 1.2->1, 1.5->2, 1.8->2
console.log(Math.round(1.6));s

// 2. String Object 
// string is a primitive and we can also create a string Object 

let firstName='dashvanth';
// this is a string 
console.log(typeof firstName);
let lastName= new String('  Raj  ');
// This is a Object 
console.log(typeof lastName);

// String  methods 

console.log(lastName.startsWith('R'));
console.log(lastName.toUpperCase());
console.log(lastName.endsWith('J'));
console.log(lastName.indexOf('a'));
console.log(lastName.trim('Raj'));

let message='This is my first message';
console.log(message.replace('first', 'second'));



// Template Litereal -> ``

// we can insert new line by using \n (but this method is not recommended)
let call='\'hey\' \"this is \n911'
console.log(call);

// Escape Sequences(are used to print some special charcters ex: if you want to print single quote then you can use \', double quotes->\"". everything starts with \

// Escape sequences are not used because of template litereal-> `` 
// ex:
let breakingBad=`'Say my Name-> ${firstName} '
said by Heisenberg:)`
console.log(breakingBad);
// By using backtick we can print statements in multiple and add special characters where we doesn't need escape sequences 


// Date and time
// the date and time format -> YYYY-MM-DD-HH:MM:SS 
console.log(Date()); // this prints the current date and time

let dateTime=new Date();
console.log(dateTime);

let setDateTime=new Date('09 july 2001 6:15:00');
console.log(setDateTime);
console.log(`The year was :${setDateTime.getFullYear()}`);

let date4=new Date(2001, 6, 9, 7);
console.log(date4);

// get and set 
// when we want to set a date or value or anything we use 'set' function 
// when we want to get a value of particular date or anything we use 'get' function 



