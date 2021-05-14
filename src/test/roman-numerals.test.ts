import { romanNumeral } from "../main/roman-numerals";

describe('Roman Numeral', () => {
    it.each`
    inputNumber | outputRomanNumeral
    ${0}        | ${""}
    ${1}        | ${"I"}
    ${2}        | ${"II"}
    ${3}        | ${"III"}
    ${4}        | ${"IV"}
    ${5}        | ${"V"}
    ${6}        | ${"VI"}
    ${7}        | ${"VII"}
    ${8}        | ${"VIII"}
    ${9}        | ${"IX"}
    ${10}       | ${"X"}
    ${11}       | ${"XI"}
    ${12}       | ${"XII"}
    ${13}       | ${"XIII"}
    ${14}       | ${"XIV"}
    ${15}       | ${"XV"}
    ${16}       | ${"XVI"}
    ${17}       | ${"XVII"}
    ${18}       | ${"XVIII"}
    ${19}       | ${"XIX"}
    ${20}       | ${"XX"}
    ${21}       | ${"XXI"}
    ${24}       | ${"XXIV"}
    ${29}       | ${"XXIX"}
    ${39}       | ${"XXXIX"}
    ${40}       | ${"XL"}
  `('should return roman numeral: $outputRomanNumeral for number: $inputNumber', ({inputNumber, outputRomanNumeral}) => {
        expect(romanNumeral(inputNumber)).toEqual(outputRomanNumeral);
    });
})
