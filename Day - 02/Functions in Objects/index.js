let rectangle1={
    length:1,
    breadth:1,

    draw: function(){
        console.log('drawing a rectangle');
    }
};

console.log(rectangle1.length);
console.log(rectangle1.breadth);
console.log(rectangle1.draw());



//         // if a function is created inside of the object it it called as [METHOD] not function 
//         // we can acces the draw method by using dot operator [ ex: rectangle.draw()]
//     draw: function(){
//         console.log('drawing a rectangle');
//     }
// };

// Functions 
// if we want to use same code multiple times then we can add that in a function and can call it as many times as we want 
// two types 

// Factory Function
// constructor Function 