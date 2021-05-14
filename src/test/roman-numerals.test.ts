describe('Roman Numeral', () => {
    it.each`
    number | romanNumeral
    ${0}   | ${""}
  `('should return roman numeral: $romanNumeral for number: $number', ({number, romanNumeral}) => {
        expect(romanNumeral(number)).toEqual(romanNumeral);
    });
})
