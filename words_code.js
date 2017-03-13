function words(str){
  var newString = str.replace(/\t|\n| +/g, " ");
	var splitString = newString.split(" ");
  var JSON = {};

  for (var i = 0; i < splitString.length; i++){
    if(!(JSON.hasOwnProperty(splitString[i]))){
      JSON[splitString[i]]=1;
    }
    else{
      JSON[splitString[i]]++;
    }
  }
  
  return JSON;
}

