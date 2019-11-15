function addArrays (first_array, second_array) {
    var output = [];
    var shortArr = null;

    if (first_array.length == second_array.length) {
      shortArr = first_array;
    } else if (first_array.length > second_array.length){
      shortArr = second_array;
    } else {
      shortArr = first_array;
    }

    for (var num=0; num <= shortArr.length; num++) {
      if(typeof(first_array[num]) == number && typeof(second_array[num])==number) { //fix this. what if its a string
        var result = first_array[num] + second_array[num];
        output.push(result);
      } else {
        output.push('NaN');
      }
    }
    return output;
}

addArrays([1,2,'hi',3,4],[2,3,4,'bye',5,6]);

//hello
