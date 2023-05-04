//1
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  discount(discountPercent) {
    const discountAmount = this.price * (discountPercent / 100);
    const discountedPrice = this.price - discountAmount;
    return discountedPrice;
  }
}

const product1 = new Product('Nike', 5500);
const discountedPrice = product1.discount(40);
console.log(`Ціна зі знижкою: ${discountedPrice}`);
//2
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }

  getPerimeter() {
    return 2 * (this.width + this.height);
  }
}

const rectangle1 = new Rectangle(1, 500);
console.log(`Площа прямокутника: ${rectangle1.getArea()}`);
console.log(`Периметр прямокутника: ${rectangle1.getPerimeter()}`);
//3
class Client {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  
  static validateEmail(email) {
    if (email.indexOf('@') === -1 || email.indexOf('.') === -1) {
      return false;
    }
    return true;
  }
}

const client1 = new Client('Dmytro', 'stim_arc@gmail.com');//true
const client2 = new Client('Alex', 'alexparadoks@');//false
const client3 = new Client('Lyuda', 'Luydazapro@gmail.com');//true

console.log(Client.validateEmail(client1.email));
console.log(Client.validateEmail(client2.email)); 
console.log(Client.validateEmail(client3.email));
//4
class Transport {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }

  showInfo() {
    console.log(`Brand: ${this.brand}, Model: ${this.model}`);
  }
}

class Car extends Transport {
  constructor(brand, model, year) {
    super(brand, model);
    this.year = year;
  }

  showInfo() {
    super.showInfo();
    console.log(`Year: ${this.year}`);
  }
}

class Motorcycle extends Transport {
  constructor(brand, model, engineCapacity) {
    super(brand, model);
    this.engineCapacity = engineCapacity;
  }

  showInfo() {
    super.showInfo();
    console.log(`Engine Capacity: ${this.engineCapacity} cc`);
  }
}

const car = new Car('Audi', 'A4', 2021);
const motorcycle = new Motorcycle('Suziku', 'Ninja', 600);

car.showInfo(); 
motorcycle.showInfo();
//5
class Shape {
  constructor() {}

  calculateArea() {}

  calculatePerimeter() {}

  showInfo() {}
}

class Square extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  calculateArea() {
    return this.width * this.height;
  }

  calculatePerimeter() {
    return 2 * (this.width + this.height);
  }

  showInfo() {
    console.log(`Square: width=${this.width}, height=${this.height}, area=${this.calculateArea()}, perimeter=${this.calculatePerimeter()}`);
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  calculateArea() {
    return Math.PI * Math.pow(this.radius, 2);
  }

  calculatePerimeter() {
    return 2 * Math.PI * this.radius;
  }

  showInfo() {
    console.log(`Circle: radius=${this.radius}, area=${this.calculateArea()}, perimeter=${this.calculatePerimeter()}`);
  }
}

const square = new Square(10, 10);
square.showInfo();

const circle = new Circle(7);
circle.showInfo();
