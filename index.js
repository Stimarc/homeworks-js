// 1.

let admin, name;

name = "Джон";

admin = name;

alert(admin);

// 2.

const planetName = "Ерта";

console.info("Название планеты:", planetName);

// 3.
let variable1 = prompt("Введите значения 1:");
let variable2 = prompt("Введите значения 2:");
let variable3 = prompt("Введите значения 3:");

console.warn(variable1);
console.warn(variable2);
console.warn(variable3);

// 4.

const Name = prompt("Как вас зовут?");
const yearOfBirth = prompt("Сколько вам лет?");


const yearOfBirthNumber = parseInt(yearOfBirth);
if (isNaN(yearOfBirthNumber)) {
  console.log("Вы ввели неправильную дату рождения.");
 
  throw new Error("Ошибка: неправильный год рождения.");
}


const currentYear = new Date().getFullYear();
const age = currentYear - yearOfBirthNumber;


if (age >= 18) {
  console.log(`${Name}, вам ${age} лет. Ви можете гулять!`);
} else {
  console.log(`${Name}, к сожелению, ви еще не достигли совершенолетия. Гулять запрещено!`);
}


// .5

const input = prompt("Введите число:");
const number = Number(input);

if (number >= 10 && number <= 1100) {
  console.log(`${number} входит в диапазон от 10 до 1100.`);
} else {
  console.log(`${number} не входит в диапазон от 10 до 1100.`);
}


