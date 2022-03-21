var PI2 = 3.14;
var getArea2 = function (shape) {
    switch (shape.type) {
        case "circle": return getCircleArea2(shape);
        case "square": return getSquareArea2(shape);
        case "rectangle": return getRectangleArea2(shape);
        case "rightTriangle": return getRightTriangleArea2(shape);
    }
};
var getCircleArea2 = function (circle) {
    var radius = circle.radius;
    return radius * radius * PI2;
};
var getSquareArea2 = function (square) {
    var width = square.width;
    return width * width;
};
var getRectangleArea2 = function (rectangle) {
    var length = rectangle.length, width = rectangle.width;
    return length * width;
};
var getRightTriangleArea2 = function (rightTriangle) {
    var base = rightTriangle.base, height = rightTriangle.height;
    return (base * height) / 2;
};
var circle2 = { type: 'circle', radius: 4 };
getArea(circle2);
console.log(circle2);
var rectangle2 = { type: 'rectangle', length: 7, width: 4 };
getArea(rectangle2);
console.log(rectangle2);
var square2 = { type: 'square', width: 5 };
getArea(square2);
console.log(square2);
var rightTriangle2 = { type: 'rightTriangle', base: 9, height: 4 };
getArea(rightTriangle2);
console.log(rightTriangle2);
