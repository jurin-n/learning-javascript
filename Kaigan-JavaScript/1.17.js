String.augmentedProperties=[];

if(!String.prototype.trimIt){
  String.prototype.trimIt=function(){
    return this.replace(/^\s+|\s+$/g,'');
  }

  String.augmentedProperties.push('trimIt');
}

var myString = ' trim me  ';
console.log(myString);
console.log(myString.trimIt());

console.log(String.augmentedProperties.join());