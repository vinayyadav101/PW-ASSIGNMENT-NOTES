class Shape {
    constructor() {
        this.type = "Shape";
    }

    calculateArea() {
        return "Area calculation not implemented for this shape.";
    }

    calculatePerimeter() {
        return "Perimeter calculation not implemented for this shape.";
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.type = "Circle";
        this.radius = radius;
    }

    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }

    calculatePerimeter() {
        return 2 * Math.PI * this.radius;
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.type = "Rectangle";
        this.width = width;
        this.height = height;
    }

    calculateArea() {
        return this.width * this.height;
    }

    calculatePerimeter() {
        return 2 * (this.width + this.height);
    }
}

class Triangle extends Shape {
    constructor(base, height, side1, side2, side3) {
        super();
        this.type = "Triangle";
        this.base = base;
        this.height = height;
        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3;
    }

    calculateArea() {
        return 0.5 * this.base * this.height;
    }

    calculatePerimeter() {
        return this.side1 + this.side2 + this.side3;
    }
}


const circle = new Circle(5,4);
console.log(`Circle - Area: ${circle.calculateArea()}, Perimeter: ${circle.calculatePerimeter()}`);


const rectangle = new Rectangle(4, 6);
console.log(`Rectangle - Area: ${rectangle.calculateArea()}, Perimeter: ${rectangle.calculatePerimeter()}`);


const triangle = new Triangle(8, 6, 5, 7, 10);
console.log(`Triangle - Area: ${triangle.calculateArea()}, Perimeter: ${triangle.calculatePerimeter()}`);



