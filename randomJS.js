
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
  
  console.log(confirmEnding("Bastian", "n"));

  console.log("test");