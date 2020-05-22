//Dear instructor I commented all my invocation codes. Please uncomment to see the outcome of the functions. Thanks

// Get 1 to 255 - Write a function that returns an array with all the numbers from 1 to 255.
function array() {
  let result = []
  for (let i = 1; i <= 255; i++) {
    result.push(i)
  }
  return result;
}
// let finalResult = array();
// console.log(finalResult)


// Get even 1000 - Write a function that would get the sum of all the even numbers from 1 to 1000.  You may use a modulus operator for this exercise.
function evensAdder(num) {
  let sumEven = 0;
  for (let i = 1; i <= num; i++) {
    if (i % 2 === 0) {
      sumEven += i;
    }
  }
  return sumEven;
}
// let totalEvens = evensAdder(1000);
// console.log(totalEvens)


// Sum odd 5000 - Write a function that returns the sum of all the odd numbers from 1 to 5000. (e.g. 1+3+5+...+4997+4999).
function oddsAdder(num) {
  let sumOdd = 0;
  for (let i = 1; i <= num; i += 2) {
    sumOdd += i;
  }
  return sumOdd;
}
// let totalOdds = oddsAdder(5000);
// console.log(totalOdds)

// Iterate an array - Write a function that returns the sum of all the values within an array. (e.g. [1,2,5] returns 8. [-5,2,5,12] returns 14)
function sumVal(arr) {
  let total = 0;
  for (let item of arr) {
    total += item;
  }
  return total;
}
// console.log(sumVal([-5,2,5,12]))

// Find max - Given an array with multiple values, write a function that returns the maximum number in the array. (e.g. for [-3,3,5,7] max is 7)
function maximum(arr) {
  let max = arr[0]
  for (let item of arr) {
    if (item > max) {
      max = item;
    }
  }
  return max;
}
// console.log(maximum([-3, 3, 5, 7]))

// Find average - Given an array with multiple values, write a function that returns the average of the values in the array. (e.g. for [1,3,5,7,20] average is 7.2)
function avg(arr) {
  let sum = 0;
  for (let item of arr) {
    sum += item;
  }
  return sum / arr.length;
}
// let avgNum = avg([1, 3, 5, 7, 20]);
// console.log(avgNum)

// Array odd - Write a function that would return an array of all the odd numbers between 1 to 50. (ex. [1,3,5, .... , 47,49]). Hint: Use 'push' method.
function arrOdd(num) {
  let oddVals = [];
  for (let i = 1; i < num; i += 2) {
    oddVals.push(i)
  }
  return oddVals;
}
// let result = arrOdd(50);
// console.log(result)

// Greater than Y - Given value of Y, write a function that takes an array and returns the number of values that are greater than Y. For example if arr = [1, 3, 5, 7] and Y = 3, your function will return 2. (There are two values in the array greater than 3, which are 5, 7).
function greaterThanY(arr, y) {
  let counter = 0;
  for (let item of arr) {
    if (item > y) {
      counter++;
    }
  }
  return counter;
}
// let bigNums = greaterThanY([1, 3, 5, 7], 3);
// console.log(bigNums)

// Squares - Given an array with multiple values, write a function that replaces each value in the array with the value squared by itself. (e.g. [1,5,10,-2] will become [1,25,100,4])
function squredVals(arr) {
  let sqr = [];
  for (let i = 0; i < arr.length; i++) {
    sqr.push(arr[i] * arr[i])
  }
  return sqr;
}
// console.log(squredVals([1,5,10,-2]))

// Negatives - Given an array with multiple values, write a function that replaces any negative numbers within the array with the value of 0. When the program is done the array should contain no negative values. (e.g. [1,5,10,-2] will become [1,5,10,0])
function replaceNegs(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      arr[i] = 0;
    }
  }
  return arr
}
// console.log(replaceNegs([1,5,10,-2]))

// Max/Min/Avg - Given an array with multiple values, write a function that returns a new array that only contains the maximum, minimum, and average values of the original array. (e.g. [1,5,10,-2] will return [10,-2,3.5])
function maxMinAvg(arr) {
  let max = arr[0];
  let min = arr[0];
  let sum = 0;
  for (let item of arr) {
    sum += item;
    if (item > max) {
      max = item;
    }
    if (item < min) {
      min = item;
    }
  }
  let avg = sum / arr.length;

  return [max, min, avg]
}
// console.log(maxMinAvg([1, 5, 10, -2]))

// Swap Values - Write a function that will swap the first and last values of any given array. The default minimum length of the array is 2. (e.g. [1,5,10,-2] will become [-2,5,10,1]).
function swipeValues(arr) {
  let temp = arr[0];
  arr[0] = arr[arr.length - 1];
  arr[arr.length - 1] = temp;
  return arr
}
// console.log(swipeValues([1, 5, 10, -2]))

// Number to String - Write a function that takes an array of numbers and replaces any negative values within the array with the string 'Dojo'. For example if array = [-1,-3,2], your function will return ['Dojo','Dojo',2].
function numToStr(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      arr[i] = "Dojo"
    }
  }
  return arr;
}
// console.log(numToStr([-1,-3,2]));