/**
 *
 */
var cody= new Object();
cody.living = true;
cody.age=35;
cody.gender='male';
cody.getGender = function(){
    return cody.gender;
}

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