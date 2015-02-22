var objectA={aaa:'aaa'};
var pointer1=objectA;
var pointer2=pointer1;

console.log(objectA.aaa,pointer1.aaa,pointer2.aaa);

objectA.aaa='bbb';
console.log(objectA.aaa,pointer1.aaa,pointer2.aaa);

objectA.aaa=null;
console.log(objectA.aaa,pointer1.aaa,pointer2.aaa);

