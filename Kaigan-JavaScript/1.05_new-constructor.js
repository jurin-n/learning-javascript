//new 演算子を使ってネイティブコンストラクタからインスタンスを生成
var myNumber = new Number(66);
var myString = new String('male');
var myBoolean = new Boolean(true);
var myObject = new Object();
var myArray = new Array('foo','bar');
var myFunction = new Function("x","y","return x*y");
var myDate = new Date();
var myRegExp = new RegExp('\bt[a-z]+\b');
var myError = new Error('Error!');

console.log(myNumber.constructor);
console.log(myNumber);
console.log(myString.constructor);
console.log(myString);
console.log(myBoolean.constructor);
console.log(myBoolean);
console.log(myObject.constructor);
console.log(myObject);
console.log(myArray.constructor);
console.log(myArray);
console.log(myFunction.constructor);
console.log(myFunct
ion);
console.log(myDate.constructor);
console.log(myDate);
console.log(myRegExp.constructor);
console.log(myRegExp);
console.log(myError.constructor);
console.log(myError);



