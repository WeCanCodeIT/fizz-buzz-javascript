describe("addTwoNumbers() adds two numbers!", () => {
    it("given 2 and 1, returns 3", () => {
        expect(addTwoNumbers(2, 1)).toBe(3)
    });
    it("given 2 and 3, returns 5", () => {
        expect(addTwoNumbers(2, 3)).toBe(5)
    })
})

describe("fizzBuzz() takes a number and returns a string determined by the rules of the FizzBuzz game.", () => {
    it("Given 1 should return '1'", () => {
        let spokenWord = fizzBuzz(1);
        expect(spokenWord).toBe('1');
    });

    it("Given 2, should return '2'", () => {
        let spokenWord = fizzBuzz(2);
        expect(spokenWord).toBe('2');
    });





})