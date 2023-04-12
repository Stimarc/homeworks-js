//Об'єкт Math:

//1
function findHypotenuse(a, b) {
  const cSquared = Math.pow(a, 2) + Math.pow(b, 2);
  const c = Math.sqrt(cSquared);
  return c;
}
const a = 3;
const b = 4;
const c = findHypotenuse(a, b);
console.log(c);
//2
function getRandomNumber(precision) {
  const randomNumber = Math.random();
  const roundedNumber = randomNumber.toFixed(precision);
  return parseFloat(roundedNumber);
}

const randomNum = getRandomNumber(2);
console.log(randomNum); 

// Методи роботи з масивами:

//1
function reverseArray(arr) {
  const len = arr.length;
  for (let i = 0; i < len / 2; i++) {
    const temp = arr[i];
    arr[i] = arr[len - 1 - i];
    arr[len - 1 - i] = temp;
  }
  return arr;
}
//2
function sumOfEvenNumbers(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sum += arr[i];
    }
  }
  return sum;
}
//3
function removeWhitespace(arr) {
  return arr.map(str => str.trim());
}
//Цикли:

//1
function multiplicationTable(num) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${num} * ${i} = ${num * i}`);
  }
}
//2
function uniqueArray(arr) {
  const uniqueArr = []; 
  for (let i = 0; i < arr.length; i++) {
    if (!uniqueArr.includes(arr[i])) {
      uniqueArr.push(arr[i]); 
    }
  }
  return uniqueArr; 
}
const arr = [1, 2, 2, 3, 3, 3, 4, 5, 5];
const uniqueArr = uniqueArray(arr);
console.log(uniqueArr); 
//3
function longestString(arr) {
  let longest = ""; 
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > longest.length) {
      longest = arr[i]; 
    }
  }
  return longest;
}
//4
function squareArray(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i] ** 2);
  }
  return result;
}
//5
function toLowerCaseArray(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i].toLowerCase());
  }
  return result;
}
//6
function averageArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}



