function reverseString(str) {
  if (str.length === 0)
  {
    return null;
  }
  var reversedString = str.split("").reverse().join("");
  
  if (reversedString === str){
    return true;
  }
  return reversedString
}