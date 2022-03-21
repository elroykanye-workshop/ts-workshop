import {
    capitalise
} from './arrow-cat-soln';

describe("test suite for sentence", () => {
    test("capitalise", () =>{
        expect(capitalise("HELLO")).toBe("Hello");
    })
})