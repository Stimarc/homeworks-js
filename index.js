// 1
let num = prompt("Введіть число: ");
if (num % 2 === 0) {
  console.log(num + " є парним числом");
} else {
  console.log(num + " є непарним числом");
}
// 2
const numb = prompt("Введіть число: ");

if (num < 10 && num > 5) {
  console.log(num + " є числом, що менше за 10 і більше за 5");
} else if (num === "7") {
  console.log(num + " дорівнює 7");
} else {
  console.log(num + " не задовольняє умови");
}
// 3
const month = Number(prompt("Введіть номер місяця:"));

switch (month) {
  case 1:
  case 2:
  case 12:
    console.log("Зима");
    break;
  case 3:
  case 4:
  case 5:
    console.log("Весна");
    break;
  case 6:
  case 7:
  case 8:
    console.log("Літо");
    break;
  case 9:
  case 10:
  case 11:
    console.log("Осінь");
    break;
  default:
    console.log("Введений неправильний номер місяця.");
    break;
}
