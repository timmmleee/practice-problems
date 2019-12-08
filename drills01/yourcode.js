
function sumArray(array){
  var total = 0;
    for (var index = 0; index < array.length; index++) {
        total += array[index];
    }
    return total;
}

function fitWithinVal(array,num){
  var newArray = [];
  var total = 0;

  for (var index = 0; index < array.length; index++){
    var currentNum = array[index];
    total += currentNum;

    if (total <= num) {
      newArray.push(currentNum);
    } else {
      total -= currentNum;
    }
  }
  return newArray;
}

function getAllNamesShorterThan(array,num){
  var namesThatAreShorter = [];

  for (var index = 0; index < array.length; index++) {
    var currentWord = array[index];

    if(currentWord.length < num) {
      namesThatAreShorter.push(currentWord);
    }
  }
  return namesThatAreShorter;
}

function makeLabel(someObject){
  return `${someObject["greeting"]} ${someObject["givenName"]} ${someObject["familyName"]}
${someObject["home address"].streetNumber} ${someObject["home address"].streetName}
${someObject["home address"].city}, ${someObject["home address"].state} ${someObject["home address"].zip}`
}
