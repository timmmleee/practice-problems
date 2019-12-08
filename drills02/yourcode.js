function countOccurences(array,word){
  var wordFound = 0;

  for (var index = 0; index < array.length; index++) {
    if (array[index] === word) {
      wordFound++;
    }
  }
  return wordFound;
}

function wordLengths(array){
  var wordLengthArray = [];

  for (var index = 0; index < array.length; index++) {
   var wordLength =  array[index].length;
   wordLengthArray.push(wordLength);
  }
  return wordLengthArray;
}

function getMinMaxMean(array){
  var minMaxMeanObject = {
    "min": null,
    "max": null,
    "mean": null
  }
  var totalSum = 0;
  var totalNum = 0;

  for (var index = 0; index < array.length; index++) {
    minMaxMeanObject["min"] = Math.min.apply(Math,array);
    minMaxMeanObject["max"] = Math.max.apply(Math,array);
    totalSum += array[index];
    totalNum++;
    var mean = parseInt(totalSum / totalNum);
    minMaxMeanObject["mean"] = mean;
  }
  return minMaxMeanObject;
}


function findMode(){

}
