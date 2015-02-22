var myNumber = new Number('99');
var myNumberLiteral=99;
var myString = new String('aaa');
var myStringLiteral= 'aaa';
var myBoolean = new Boolean('true');
var myBooleanLiteral=true;
var myObject = new Object();
var myObjectLiteral ={};
var myArray =new Array();
var myArrayLiteral=[];
var myFunction = new Function();
var myFunctionLiteral = function(){};
var myDate = new Date();
var myRegExp = new RegExp('/./');
var myRegExpLiteral = /./;
var myError = new Error();

console.log(
myNumber.constructor===Number,
myNumberLiteral.constructor===Number
);
console.log(
myString.constructor===String,
myStringLiteral.constructor===String
);

console.log(
myBoolean.constructor===Boolean,
myBooleanLiteral.constructor===Boolean
);

console.log(
myObject.constructor===Object,
myObjectLiteral.constructor===Object
);

console.log(
myArray.constructor===Array,
myArrayLiteral.constructor===Array
);

console.log(
myFunction.constructor===Function,
myFunctionLiteral.constructor===Function
);

console.log(
myDate.constructor===Date
);

console.log(
myRegExp.constructor===RegExp,
myRegExpLiteral.constructor===RegExp
);

console.log(
myError.constructor===Error
);