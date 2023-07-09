// Reference Types difference
console.log('reference type');
let a={
    value:10
};
let b=a;
a.value++;
console.log(a.value);
console.log(b.value);
// The answer will be 11 and 11 

// because 
// Primitive types copy the value not address 
// whereas reference types copy the addres of the variable  so both values will be pointing at the same address so whatever you change it will be reflect on the other copied variables also.


// Primitive are copied by their variables. 
// Reference are copid by their address 


// The below concept is called as pass by value, only the value is passsed not the address. 
let aa=10;
function inc(aa){
    aa++;
    // console.log(aa);
}
inc(aa);
console.log(aa);

// Pass by reference 
let bb={
    value:10
};
function increase(bb){
    bb.value++;
}
console.log('pass by reference');
increase(bb);
console.log(bb.value);