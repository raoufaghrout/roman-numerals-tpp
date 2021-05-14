import {romanNumeral} from "../main/roman-numerals";

describe('Roman Numeral', () => {
    it.each`
    inputNumber | OutputRomanNumeral
    ${0}   | ${""}
    ${1}   | ${"I"}
  `('should return roman numeral: $OutputRomanNumeral for number: $inputNumber', ({inputNumber, OutputRomanNumeral}) => {
        expect(romanNumeral(inputNumber)).toEqual(OutputRomanNumeral);
    });
})
