var myNumber = new Number(23);
var myNumberLiteral = 23;
console.log(myNumber.constructor,myNumberLiteral.constructor);

var myString = new String('male');
var myStringLiteral = 'male';
console.log(myString.constructor,myStringLiteral.constructor);

var myBoolean = new Boolean(true);
var myBooleanLiteral = true;
console.log(myBoolean.constructor,myBooleanLiteral.constructor);

var myObject = new Object();
var myObjectLiteral = {};
console.log(myObject.constructor,myObjectLiteral.constructor);

var myArray = new Array('foo','bar');
var myArrayLiteral = ['foo','bar'];
console.log(myArray.constructor,myArrayLiteral.constructor);

var myFunction = new Function("x","y","return x*y");
var myFunctionLiteral = function(x,y){return x*y};
console.log(myFunction.constructor,myFunctionLiteral.constructor);

var myRegExp = new RegExp('\bt[a-z]+\b');
var myRegExpLiteral = /\bt[a-z]+\b/;
console.log(myRegExp.constructor,myRegExpLiteral.constructor);
