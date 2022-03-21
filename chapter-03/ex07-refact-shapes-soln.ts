import { 
    Circle,
    Square,
    Rectangle,
    RightTriangle,
    getArea2,
 } from "./ex08-shapes-lib";


const circle2: Circle = { type: 'circle', radius: 4 };
getArea2(circle2);
console.log(circle2);

const rectangle2: Rectangle = { type: 'rectangle', length: 7, width: 4 };
getArea2(rectangle2);
console.log(rectangle2);

const square2: Square = { type: 'square', width: 5 };
getArea2(square2);
console.log(square2);

const rightTriangle2: RightTriangle = { type: 'rightTriangle', base: 9, height: 4 };
getArea2(rightTriangle2);
console.log(rightTriangle2);