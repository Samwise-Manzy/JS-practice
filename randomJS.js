
// ****************************************************

// Return the length of the longest word in the provided sentence.

// Your response should be a number.

function findLongestWordLength(str) {
    let longWord = 0; // tracks longest number 
    let tempWord = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] != " ") {
            tempWord++;
            if (tempWord > longWord) {
                longWord = tempWord;
            }
        } else {
            tempWord = 0;
        }
    }
  return longWord;
}

// console.log(findLongestWordLength("What if we try a super-long word such as otorhinolaryngology "));



// ****************************************************

// Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

// Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].


function largestOfFour(arr) {
    let largestNumsArr = []; // array of largest number in given array
    let tempNum;

    for(let i = 0; i < arr.length; i++) {
        tempNum = arr[i][0];
        for (let j = 0; j < arr[i].length; j++) {
            if (tempNum < arr[i][j]) {
                tempNum = arr[i][j];
            }
        }
        largestNumsArr.push(tempNum);
    }

    return largestNumsArr;
  }
  
//   console.log(largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]));


  // ****************************************************

//   Check if a string (first argument, str) ends with the given target string (second argument, target).

// This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.


function confirmEnding(str, target) {

    return str.slice(str.length - target.length) === target;
  }
  
//   console.log(confirmEnding("Bastian", "n"));



  // ****************************************************

// Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number. For the purpose of this challenge, do not use the built-in .repeat() method.

function repeatStringNumTimes(str, num) {
    let copyOfString = str;
    if (num <= 0) {
        return "";
    } else {
        for (let i = 0; i < num - 1; i++) {
            str += copyOfString;
        }
    }

    return str;
}

// console.log(repeatStringNumTimes("abc", 3));



// ****************************************************

// Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.


function truncateString(str, num) {

    if (str.length > num) {
        str = str.slice(0, num);
        str += "...";
    }

    return str;
}

// console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));


// ****************************************************


// Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'. This means that given an element x, the 'truth test' is passed if func(x) is true. If no element passes the test, return undefined.


function findElement(arr, func) {

  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i]) === true) {
        return arr[i];
    } 
  }

  return;
  
}

// console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));


// ****************************************************

// Check if a value is classified as a boolean primitive. Return true or false.

// Boolean primitives are true and false.


function booWho(bool) {
return typeof bool === "boolean";
}

booWho(null);


// ****************************************************

// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

// For the purpose of this exercise, you should also capitalize connecting words like the and of.


function titleCase(str) {
    const arr = str.split(" "); // slits the string into an array of works when there is a " "

    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1).toLowerCase();
    }

    str = arr.join(" ");

    return str;
}

// console.log(titleCase("I'm a little tea pot"));



// ****************************************************


// You are given two arrays and an index.

// Copy each element of the first array into the second array, in order.

// Begin inserting elements at index n of the second array.

// Return the resulting array. The input arrays should remain the same after the function runs.


function frankenSplice(arr1, arr2, n) {
    let newArr = [...arr2]; // use spread opporator to copy arr2 to newArr

    // for (let i = 0; i < arr1.length; i++) {
    //     newArr.splice(n, 0, arr1[i]); // inserts arr1 into newArr at given position n
    //     n++;
    // }
    newArr.splice(n, 0, ...arr1);

    return newArr;
}

// console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));


// ****************************************************


// Remove all falsy values from an array. Return a new array; do not mutate the original array.

// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

// Hint: Try converting each value to a Boolean.

function bouncer(arr) {
    let newArr = [];        // create new array

    for (let i = 0; i < arr.length; i++) {      // loop through argument array
        if (!!arr[i] === true) {                // converts array elements into boolean values and checks if falsey
            newArr.push(arr[i]);                // pushes non-falsey values into newArr
        }
    }

    return newArr;
  }
  
//   console.log(bouncer([7, "ate", "", false, 9]));



// ****************************************************


// Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

// For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).

// Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).


function getIndexToIns(arr, num) {
    let temp = 0;
    let insertIndex = 0;

    const quickSort = (arr) => {    // quick sort arr
        if (arr.length <= 1) {
          return arr;
        }
      
        let pivot = arr[0];
        let leftArr = [];
        let rightArr = [];
      
        for (let i = 1; i < arr.length; i++) {
          if (arr[i] < pivot) {
            leftArr.push(arr[i]);
          } else {
            rightArr.push(arr[i]);
          }
        }
      
        return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
      };

    arr = quickSort(arr);       // set sorted arr
      

    console.log(arr);

    for (let i = 0; i < arr.length; i++) {      // finds lowest index for num arguement
        if (arr[i] >= num) {
            insertIndex = i;
            break;
        } else {
            insertIndex = i + 1;
        }
    }
    
    
    return insertIndex;
  }
  
//   console.log(getIndexToIns([5, 3, 20, 4], 5));



// ****************************************************

// Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

// For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

// The arguments ["hello", "hey"] should return false because the string hello does not contain a y.

// Lastly, ["Alien", "line"], should return true because all of the letters in line are present in Alien.

function mutation(arr) {
    let compareArr = [];    // creating new array of charaters; easier to compare 
    // let includesCount = arr[1].length;      //count use to measure number of matching characters; if count matches, all charaters in second element of array match


    for (let i = 0; i < arr[1].length; i++) {       // new array of lower case characters
        compareArr.push(arr[1][i].toLowerCase());
    }

    // for (let i = 0; i < arr[1].length; i++) {       // loop through arr elements to check for matching characters
    //     if (compareArr.includes(arr[1][i].toLowerCase())) {
    //         includesCount--;                        // counting matched characters; 
    //     }                                           // if all characters match; count shoud be 0 at end of loop 
    // }

    for (let i = 0; i < compareArr.length; i ++) {      // use indexOf to check if first string contains characters in second string
        if (arr[0].toLowerCase().indexOf(compareArr[i]) < 0) {
            return false
        }
    }

    return true;

    // if (includesCount === 0) {
    //     return true;
    // } else {
    //     return false;
    // }
    
  }
  
//   console.log(mutation(["hello", "hey"]));




  // ****************************************************


//   Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

function chunkArrayInGroups(arr, size) {
    let arr2D = [];
    let numArr = Math.ceil(arr.length / size);     // insicates number of array elements based off arr size and size arguemnts passed into function 
    sizeIteration = 

    console.log(numArr);

    for (let i = 0; i < numArr; i++) {
      for (let j = 0; j < size; j++) {
        arr2D[j].push(arr[j]);
        console.log(arr2D);
        i++;
      }
    }

    return arr;
  }
  
  chunkArrayInGroups(["a", "b", "c", "d"], 2);

  