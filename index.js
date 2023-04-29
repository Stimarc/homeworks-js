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
const ElectronicStore = {
  name: "StimShop",
  address: "вул. Мостицька, 10, Київ, Україна",
  products: [
    {
      brand: "Ноутбук Lenovo Legion 5 pro",
      price: 65000,
      description: "Екран 17.3 дюймів, Intel Core i7, 16 ГБ ОЗУ, 1000 ГБ HDD+256 ГБ SSD",
    },
    {
      brand: "Смартфон Samsung Galaxy S 21 FE",
      price: 21000,
      description: "Екран 6.4 дюймів, 8 ГБ ОЗУ, 512 ГБ пам'яті, камера 50 МП",
    },
    {
      brand: "Телевізор Samsung 55UN73006LA",
      price: 35000,
      description: "Екран 55 дюймів, 4K Ultra HD, Smart TV, Wi-Fi, Bluetooth",
    },
  ],
};

function sortByPriceDescending(store) {
  store.products.sort((a, b) => b.price - a.price);
  return store.products;
}

const sortedProducts = sortByPriceDescending(ElectronicStore);
console.log(sortedProducts);
//5
const mistExpress = {
  address: "вул. Проспект Правди, 10, Київ, Україна",
  workingHours: {
    monday: { open: "09:00", close: "18:00" },
    tuesday: { open: "09:00", close: "18:00" },
    wednesday: { open: "09:00", close: "18:00" },
    thursday: { open: "09:00", close: "18:00" },
    friday: { open: "09:00", close: "18:00" },
    saturday: { open: "10:00", close: "16:00" },
    sunday: { open: "closed", close: "closed" },
  },
  packages: [
    { id: 1, sender: "Alex", recipient: "Lyuda", status: "delivered" },
    { id: 2, sender: "Cezar", recipient: "Masha", status: "in transit" },
    { id: 3, sender: "Jylia", recipient: "Igor", status: "pending" },
  ],
};

function isMistExpressOpen() {
  const today = new Date();
  const currentDay = today.toLocaleDateString("en-US", { weekday: "lowercase" });
  const currentTime = today.toLocaleTimeString("en-US", { hour12: false });

  const openingTime = mistExpress.workingHours[currentDay].open;
  const closingTime = mistExpress.workingHours[currentDay].close;

  if (openingTime === "closed" || closingTime === "closed") {
    return false;
  } else if (currentTime >= openingTime && currentTime <= closingTime) {
    return true;
  } else {
    return false;
  }
}

console.log(isMistExpressOpen()); 
console.log(isMistEXPRESSOpen()); 