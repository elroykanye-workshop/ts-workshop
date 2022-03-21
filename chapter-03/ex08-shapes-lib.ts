const PI2 = 3.14;

interface Shape {
    area?: number;
    type: "circle" | "rectangle" | "rightTriangle" | "square";
}

export interface Circle extends Shape {
    radius: number;
    type: "circle";
}

export interface Square extends Shape {
    width: number;
    type: "square";
}

export interface Rectangle extends Shape {
    length: number;
    width: number;
    type: "rectangle";
}

export interface RightTriangle extends Shape {
    base: number;
    height: number;
    type: "rightTriangle";
}


export const getArea2 = (shape: Shape) => {
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
