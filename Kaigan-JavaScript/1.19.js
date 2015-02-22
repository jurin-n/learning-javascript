var CustomConstructor = function(){this.aaa='value of aaa';}

var instanceOfCustomObject = new CustomConstructor();
console.log(instanceOfCustomObject instanceof CustomConstructor);

//ネイティブオブジェクトも同様に動作
var myArray = new Array('aaa','bbb');
console.log(myArray instanceof Array);