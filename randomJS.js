
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

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));


