Create a function, add_arrays(), that does the following:

#### Input: 2 arrays of equal size
- first_array, an array of numbers
- needle array, an array of numbers

#### Output:
- output array, which has all values from the first array added to the values from the second array

#### Example:
var first_array = [3,-5,15,4];
var second_array = [3,18,-5];


output = add_arrays(first_array,second_array);
console.log(output); //outputs [6,13,10,0];

#### Put your solution in answer.js


/**  Pseudo Code **/
1. create an empty array for the output
2. conditional to check length of both arrays
  - cut off at shorter one

  var x = shorter_array.length;

3. for each element in each array,
  - look at each element at index
  - check if they are the same type
    - false = insert NaN
    - true = add the elements at the current index
  - add or (push) the result into the empty array (output)

4. return output
