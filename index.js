//1
const favoriteAnimal = [
  { name: "Caramel", kind: "Cat", age: "1,5", characteristics: "playful" },
];

function changePropertyValue(objIndex, propertyName, newValue) {
  favoriteAnimal[objIndex][propertyName] = newValue;
}

console.log(favoriteAnimal);

changePropertyValue(0, "age", "2");
//2
const twoCars = [
  {brand:"Audi",model:"a7",year:2021,maximumSpeed:"250"},
  {brand:"Lamborghini",model:"Veneno",year:2015,maximumSpeed:"350"}
];

let car1 = JSON.parse(JSON.stringify(twoCars[0]));
let car2 = JSON.parse(JSON.stringify(twoCars[1]));

if (JSON.stringify(car1) === JSON.stringify(car2)) {
  console.log("Об'єкти ідентичні");
} else {
  console.log("Об'єкти різні");
}

for(let i = 0; i < twoCars.length; i++){
  delete twoCars[i].maximumSpeed;
}

console.log(twoCars);
//3
const userWebsite = [
  { name: "Alex", email: "alex@gmail.com", password: "Alex1993", job: "frontEndDeveloper", phone: 3874059425 }
];

function checkPassword(password, object) {
  return password === object.password;
}

function printObjectProperties(object) {
  for (let property in object) {
    console.log(`${property}: ${object[property]}`);
  }
}

const password = "Alex1993";
const result = checkPassword(password, userWebsite[0]);
console.log(result);

printObjectProperties(userWebsite[0]);
//4

