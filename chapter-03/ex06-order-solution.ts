import { Order } from "./ex05-order";

export const orderFactory = () => {
    let id = 0;
    return (color: string) => (size: string) => (qty: number): Order[]  => {
        const orders: Order[] = [];
        for(let i = 0; i < qty; i++) {
            orders.push({
                id: id++,
                color: color,
                size: size,
            });
        }
        return orders;
    };
};

const createOrder =  orderFactory();

const blueSmall = createOrder("blue")("S");
const redSmall = createOrder("red")("S");
const blackLarge = createOrder("black")("L");
console.log(blackLarge(3))
console.log(redSmall(4));
console.log(blueSmall(7));