var myNumber1=10;
var myNumber2=10;
var myNumber3= new Number('10');
var myNumber4=myNumber3;

//myNumber1===myNumber2 is true
console.log(myNumber1===myNumber2);

//myNumber1===myNumbe3 is false
console.log(myNumber1===myNumber3);

//myNumber3===myNumber4 is true
console.log(myNumber3===myNumber4);

myNumber4=10;

//after myNumber4=10,myNumber3===myNumber4 is false
console.log(myNumber3===myNumber4);

//myNumber3==myNumber4 is true
console.log(myNumber3==myNumber4);


//null===undefined is false
console.log(null===undefined);
//null==undefined is true
console.log(null==undefined);