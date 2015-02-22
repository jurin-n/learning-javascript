var CustomConstructor = function CustomConstructor(){
  return 'Custom!!!';
}
var instansOfCustomObject = new CustomConstructor();

console.log(instansOfCustomObject.constructor === CustomConstructor);
console.log(instansOfCustomObject.constructor);
console.log(typeof instansOfCustomObject);