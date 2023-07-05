// Factory Function -> camelCase Notation -> ex: numberOfStudents 
// Constructor Function -> Pascalcase Notation -> ex: NumberOfStudents



// Constructor Function 
// constructor function is used to initialise or define you properties or methods
// this keyword is used to show the current object which we are working on

function Rectangle(len, bre){
    this.length=len;
    this.breadth=bre;
    this.draw=function(){
        console.log('drawing');
    }
}
// you can also pass input values 

// Object creation using constructor function 
// new is a keyword which gives a empty object 

let constructorRectObj=new Rectangle(9, 4);

// Dynamic Nature of Objects 
// we can add properties individually even after declaring the objects 

constructorRectObj.color='yellow';
console.log(constructorRectObj);

// we can also deleted an object property using delete keyword
delete constructorRectObj.color;
console.log(constructorRectObj);


// Constructor Property 
// constructor property is used to find out the constructor of the object(every objec t has a constructor) 
// Even the function is also a object so if we give ask about function constructor it gives the value related to that 

console.log(constructorRectObj.constructor);
