var primitiveString1="aaa";
var primitiveString2=String("aaa");
var primitiveNumber1=10;
var primitiveNumber2=Number('10');
var primitiveBoolean1=true;
var primitiveBoolean2=Boolean('true');
console.log('**** test primitive ****');
console.log(typeof primitiveString1, typeof primitiveString2);
console.log(typeof primitiveNumber1, typeof primitiveNumber2);
console.log(typeof primitiveBoolean1, typeof primitiveBoolean2);

var myNumber= new Number(99);
var myString= new String('bbb');
var myBoolean = new Boolean(true);
var myObject = new Object();
var myArray = new Array('aaa','aaa-1');
var myFunction = new Function("x","y","return x*y");
var myDate = new Date();
var myRegExp = new RegExp('\\bt[a-z]+\\b');
var myError = new Error('エラー！');

console.log('**** test objects ****');
console.log(
typeof myNumber,
typeof myString,
typeof myBoolean,
typeof myObject,
typeof myArray,
typeof myFunction,
typeof myDate,
typeof myRegExp,
typeof myError
);