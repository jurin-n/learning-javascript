/**
 *
 */
var cody= new Object();
cody.living = true;
cody.age=35;
cody.gender='male';
cody.getGender = function(){ return cody.gender;}

console.log(cody);
console.log(cody.getGender);
console.log(cody.getGender());


var myObject = new Object();
//ブラケット記法でmyObjectの0,1,2の各プロパティに文字を代入
myObject['0'] = 'f';
myObject['1'] = 'o';
myObject['2'] = 'o';
console.log(myObject);

var myString = new String('foo');
console.log(myString);


//Personコンストラクタ関数を定義
var Person = function(living, age, gender){
    this.living=living;
    this.age=age;
    this.gender=gender;
    this.getGender= function(){ return this.gender; };
};
var p = new Person(true, 33, 'male');
//console.log(Person);
console.log(p);