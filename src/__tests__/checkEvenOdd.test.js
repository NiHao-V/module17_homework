import { checkEvenOdd } from "../checkEvenOdd.js"
describe('even or odd number test', () => {
    it('should throw an error if the number is even', () => {
        expect(checkEvenOdd(9)).toBe('Число 9 - нечетное');
    });
  
    it('should throw an error if the number is odd', () => {
        expect(checkEvenOdd(6)).toBe('Число 6 - четное');
    });
  
    it('should throw an error if a non-numeric value is entered', () => {
        expect(checkEvenOdd('abc')).toBe('Вы ввели не числовое значение. Пожалуйста, введите число.');
    });
  
    it('should throw an error if an empty string is entered', () => {
        expect(checkEvenOdd(' ')).toBe('Вы ввели не числовое значение. Пожалуйста, введите число.');
    });
  })