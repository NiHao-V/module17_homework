//1
import { revertString } from "../revertString.js";

describe(`tests for revertString function`, () => {
    it("should reverse the string correctly", () => {
    expect(revertString('привет')).toBe('тевирп');
    })

    it("should throw an error if an empty string is entered", () => {
        expect(revertString(' ')).toBe('Вы не написали слово');
        })

        it("should throw an error if the user canceled the input", () => {
            expect(revertString(null)).toBe('Вы отменили ввод');
        })    
});





