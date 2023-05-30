// ********************************************************
// Sum All Numbers in a Range

// We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

// For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.

function sumAll(arr) {
    let sortedArr = [...arr.sort(function(a, b) {
      return a - b;
    })];
  
    let sum = 0;
  
    for (let i = sortedArr[0]; i <= sortedArr[1]; i++) {
      sum += i;
    }
  
    
    return sum;
  }
  
//   console.log(sumAll([5, 10]));

// test

// ********************************************************

// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

// Note: You can return the array with its elements in any order.


