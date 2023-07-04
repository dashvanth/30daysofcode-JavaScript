// Control Statements 
// 1. if else statements
// 2. switch case

let marks=50;
/* 1.if else if statement */ if(marks>=90){
    console.log("Excellent Performance");
}
else if(marks>=50){
    console.log("Average performance");
}
else{
    console.log("poor performance");
}

let day=5;
/* 2.Switch Case*/ switch(day){
    case 1: console.log('monday'); break;
    case 2: console.log('tuesday'); break;
    case 3: console.log('wednesday'); break;
    case 4: console.log('thursday'); break;
    case 5: console.log('friday'); break;
    case 6: console.log('saturday'); break;
    case 7: console.log('sunday'); break;

    default: console.log('invalid');
}