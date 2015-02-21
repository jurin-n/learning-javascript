//Personコンストラクタ関数を定義
var Person = function(living, age, gender){
    this.living=living;
    this.age=age;
    this.gender=gender;
    this.getGender= function(){ return this.gender; };
};
var taro = new Person(true, 33, 'male');
//console.log(Person);
console.log('/--- taro ---------------------/');
console.log(typeof taro);
console.log(taro.constructor);
console.log(taro);

var jiro = new Person(true, 36, 'male');
console.log('/--- jiro ---------------------/');
console.log(typeof jiro);
console.log(jiro.constructor);
console.log(jiro);

