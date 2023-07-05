// 1. Factory function 

function createRectangle(len, bre){
    let rectangle1={
    length:len,
    breadth:bre,

    // you can also define like this if you're not understanding
    draw(){
        console.log('drawing a rectangle using a factory function');
    }
};
return rectangle1;
}

let rectangleObj1=createRectangle(5,4);
// you can access the object by using [ rectangleObj1.length, rectangleObj1.beadth, rectangleObj1.draw()]

let a=createRectangle();
console.log(a.length);
console.log(a.draw());

let rectangleObj2=createRectangle(7,8);
let rectangleObj3=createRectangle(10,20);