// // 1

// let num = prompt("Введіть число: ");
// if (num % 2 === 0) {
//   console.log(num + " є парним числом");
// } else {
//   console.log(num + " є непарним числом");
// }
// // 2

// const numb = prompt("Введіть число: ");

// if (num < 10 && num > 5) {
//   console.log(num + " є числом, що менше за 10 і більше за 5");
// } else if (num === "7") {
//   console.log(num + " дорівнює 7");
// } else {
//   console.log(num + " не задовольняє умови");
// }
// // 3

// const month = Number(prompt("Введіть номер місяця:"));

// switch (month) {
//   case 1:
//   case 2:
//   case 12:
//     console.log("Зима");
//     break;
//   case 3:
//   case 4:
//   case 5:
//     console.log("Весна");
//     break;
//   case 6:
//   case 7:
//   case 8:
//     console.log("Літо");
//     break;
//   case 9:
//   case 10:
//   case 11:
//     console.log("Осінь");
//     break;
//   default:
//     console.log("Введений неправильний номер місяця.");
//     break;
// }
// // 4

// function power(number, exponent) {
//   let result = Math.pow(number, exponent);
//   return result;
// }
// // 5

// function repeatString(string, times) {
//   let repeatedString = string.repeat(times);
//   console.log(`Рядок ${string} повторений ${times} разів: ${repeatedString}`);
//   return repeatedString;
// }
// // 6

// for (let i = 0; i < 5; i++) {
//   let randomNum = Math.random();
//   console.log(randomNum);
// }
// // 7

// function знайтиНайбільше(масив) {
//   let найбільше = масив[0];
//   for (let i = 1; i < масив.length; i++) {
//     if (масив[i] > найбільше) {
//       найбільше = масив[i];
//     }
//   }
//   return найбільше;
// }

// let числа = [50, 15, 60, 35, 75, 20, 95];
// let найбільше_число = знайтиНайбільше(числа);

// console.log("Найбільше число: " + найбільше_число);
// // 8

// function validatePassword(password, confirmPassword) {
//   if (password.length < 8) {
//     return false;
//   }

//   if (password !== confirmPassword) {
//     return false;
//   }

//   return true;
// }
// const password = "myPass145624";
// const confirmPassword = "myPass145624";

// if (validatePassword(password, confirmPassword)) {
//   console.log("Пароль валідний");
// } else {
//   console.log("Пароль не валідний");
// }

//9

function sumWithAbsoluteValue(num1, num2) {
  const absNum = Math.abs(num1);
  const sum = absNum + num2;
  return sum;
}
console.log(sumWithAbsoluteValue (7,15));
//10

function generateRandomNumber() {
  const randomNumber = Math.floor(Math.random() * 10) + 1;
  return randomNumber;
}
console.log(generateRandomNumber());

//11

function factorial(n) {
  let result = 1;

 
  for (let i = 1; i <= Math.floor(n); i++) {
    result *= i;
  }

  return result;
}

console.log(factorial(5)); 

//12

function isPrime(n) {
  if (n < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}
console.log(isPrime(7));


