import { romanNumeral } from "../main/roman-numerals";

describe('Roman Numeral', () => {
    it.each`
    inputNumber | outputRomanNumeral
    ${0}        | ${""}
    ${1}        | ${"I"}
    ${2}        | ${"II"}
  `('should return roman numeral: $outputRomanNumeral for number: $inputNumber', ({inputNumber, outputRomanNumeral}) => {
        expect(romanNumeral(inputNumber)).toEqual(outputRomanNumeral);
    });
})
