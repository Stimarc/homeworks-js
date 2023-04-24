//Рекурсія:
//1
function factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
//2
function isPalindrome(word) {
  word = word.toLowerCase();
  
  if (word.length <= 1) {
    return true;
  } else if (word[0] !== word[word.length - 1]) {
    return false;
  } else {
    return isPalindrome(word.slice(1, word.length - 1));
  }
}
//3
function Recursion(a, b) {
  if (b === 0) {
    return a;
  } else {
    return Recursion(b, a % b);
  }
}
//Робота з масивами:
//1
function increaseValues(arr) {
  const sum = arr.reduce((acc, val) => acc + val, 0);
  const avg = sum / arr.length;
  const result = Array(arr.length);

  for (let i = 0; i < arr.length; i++) {
    result[i] = arr[i] < avg ? arr[i] + 1 : arr[i];
  }

  return result;
}
//2
function findLongestWord(sentence) {
  const words = sentence.split(' ');
  let longestWord = '';
  let longestWordLength = 0;

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    if (word.length > longestWordLength) {
      longestWord = word;
      longestWordLength = word.length;
    }
  }

  return { word: longestWord, length: longestWordLength };
}
//3
function numbersToLetters(numbers) {
  const letters = [];
  for (let i = 0; i < numbers.length; i++) {
    const letter = String.fromCharCode(64 + parseInt(numbers[i]));
    letters.push(letter);
  }
  return letters;
}
//4
function filterDuplicates(arr) {
  const uniqueArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (uniqueArr.indexOf(arr[i]) === -1) {
      uniqueArr.push(arr[i]);
    }
  }
  return uniqueArr;
}
//5
function createArray(n, first = 0, second = 1) {
  const result = [first, second];

  for (let i = 2; i < n; i++) {
    const sum = result[i - 1] + result[i - 2];
    result.push(sum);
  }

  return result;
}
//6
function ChessBoard(size) {
  const board = [];

  for (let i = 0; i < size; i++) {
    const row = [];

    for (let j = 0; j < size; j++) {
      const cell = (i + j) % 2 === 0 ? '  ' : '  ';
      row.push(cell);
    }

    board.push(row.join(''));
  }

  console.log(board.join('\n'));
}
