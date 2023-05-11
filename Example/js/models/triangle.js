class Triangle extends Shape {
    constructor(a, b, c) {
        super('трикутник');
        this.a = a;
        this.b = b;
        this.c = c;
    }

    calcSquare() {
        const p = (this.a + this.b + this.c) / 2;
        return Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
    }
}

const totalSquare = shapes.reduce((acc, shape) => acc + shape.calcSquare(), 0);
console.log(`Загальна площа фігур: ${totalSquare}`);