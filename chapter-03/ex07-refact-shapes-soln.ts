const PI2 = 3.14;

interface Shape {
    area?: number;
    type: "circle" | "rectangle" | "rightTriangle" | "square";
}

interface Circle extends Shape {
    radius: number;
    type: "circle";
}

interface Square extends Shape {
    width: number;
    type: "square";
}

interface Rectangle extends Shape {
    length: number;
    width: number;
    type: "rectangle";
}

interface RightTriangle extends Shape {
    base: number;
    height: number;
    type: "rightTriangle";
}


const getArea2 = (shape: Shape) => {
    switch(shape.type) {
        case "circle": return getCircleArea2(shape as Circle);
        case "square": return getSquareArea2(shape as Square);
        case "rectangle": return getRectangleArea2(shape as Rectangle);
        case "rightTriangle": return getRightTriangleArea2(shape as RightTriangle);
    }
};

const getCircleArea2 = (circle: Circle): number => {
    const {radius} = circle;
    return radius * radius  * PI2;
}

const getSquareArea2 = (square: Square): number => {
    const {width} = square;
    return width * width;
}

const getRectangleArea2 = (rectangle: Rectangle) : number => {
    const {length, width} = rectangle;
    return length * width;
}

const getRightTriangleArea2 = (rightTriangle: RightTriangle) => {
    const {base, height} = rightTriangle;
    return (base * height) / 2;
}


const circle2: Circle = { type: 'circle', radius: 4 };
getArea(circle2);
console.log(circle2);

const rectangle2: Rectangle = { type: 'rectangle', length: 7, width: 4 };
getArea(rectangle2);
console.log(rectangle2);

const square2: Square = { type: 'square', width: 5 };
getArea(square2);
console.log(square2);

const rightTriangle2: RightTriangle = { type: 'rightTriangle', base: 9, height: 4 };
getArea(rightTriangle2);
console.log(rightTriangle2);