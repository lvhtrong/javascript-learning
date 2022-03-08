import { sum } from './index'

describe('1.2 Functions', () => {
    describe('input: 1 and 2', () => {
        it('should return 3', () => {
            const num1 = 1;
            const num2 = 2;
            const expected = 3;

            const result = sum(num1, num2)

            expect(result).toEqual(expected);
        });
    });

    describe('input: 2 and 2.5', () => {
        it('should return 4.5', () => {
            const num1 = 2;
            const num2 = 2.5;
            const expected = 4.5;

            const result = sum(num1, num2)

            expect(result).toEqual(expected);
        });
    });

    describe('input: 2 and 3', () => {
        it('should return 5', () => {
            const num1 = 2;
            const num2 = 3;
            const expected = 5;

            const result = sum(num1, num2)

            expect(result).toEqual(expected);
        });
    });
});