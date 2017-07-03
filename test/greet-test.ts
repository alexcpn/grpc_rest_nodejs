import { sayHello } from "../src/greet";
import { expect } from 'chai';



describe('Simple Greet function', () => {
    it('should return a string with what is passed in', () => {
        const result = sayHello("First TypeScipt Test");
        expect(result).to.equal('Hello from $result');
    });
});