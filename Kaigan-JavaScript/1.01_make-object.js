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
//�u���P�b�g�L�@��myObject��0,1,2�̊e�v���p�e�B�ɕ�������
myObject['0'] = 'f';
myObject['1'] = 'o';
myObject['2'] = 'o';
console.log(myObject);

var myString = new String('foo');
console.log(myString);


//Person�R���X�g���N�^�֐����`
var Person = function(living, age, gender){
    this.living=living;
    this.age=age;
    this.gender=gender;
    this.getGender= function(){ return this.gender; };
};
var p = new Person(true, 33, 'male');
//console.log(Person);
console.log(p);