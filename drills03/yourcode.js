function getPath(string){
  var newArray = string.split('/');
  return newArray;
}

function getPathParts(string){
//   var newObject = {
//     "protocol": null,
//     "host": null,
//     "port": null,
//     "path": null,
//     "file": null
//   }
//   var split1 = string.split('://');
//   var protocolValue = split1.shift();
//   newObject["protocol"] = protocolValue;
//   var joinSplit1 = split1.join();

//   var split2 = joinSplit1.split(':');
//   var hostValue = split2.shift();
//   newObject["host"] = hostValue;
//   var joinSplit2 = split2.join();

//   var split3 = joinSplit2.split('/');
//   var portValue = split3.shift();
//   newObject["port"] = portValue;
//   var joinSplit3 = split3.join('/');

//   var split4 = joinSplit3.split('/');
//   var part_time = split4.splice(0,1);
//   var details = split4.splice(0,1);
//   var pathValue = part_time + '/' + details;
//   newObject["path"] = pathValue;
//   var joinSplit4 = split4.join();

//   newObject["file"] = joinSplit4;
// console.log(newObject)
}

function getCapitalCount(array){
  var count = 0;
  for (var index = 0; index < array.length; index++) {
    if (array[index][0] === array[index][0].toUpperCase()){
      count++;
    }
  }
  return count;
}

function correctCalcChecker(array){
  // var correctCombinations = []
  // for (var index = 0; index < array.length; index++) {
  //   var arrayNum1 = array[index].num1;
  //   var arrayNum2 = array[index].num2;
  //   var arrayOp = array[index].op;
  //   var arrayResult = array[index].result;
  //   var combination = ;

  //   if(combination == array[index].result){
  //     correctCombinations.push(array[index])
  //   }
  // }
  // return correctCombinations;
  }
}
