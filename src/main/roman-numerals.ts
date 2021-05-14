export const romanNumeral = (input: number): string => {
    const numberToNumeral = [
        { number: 10, numeral: "X" },
        { number: 9, numeral: "IX" },
        { number: 5, numeral: "V" },
        { number: 4, numeral: "IV" },
        { number: 1, numeral: "I" }
    ]

    let output = "";

    while (input >= 1) {
        numberToNumeral.forEach(({ number, numeral}) => {
           while (input >= number) {
               output += numeral;
               input -= number
           }
        });
    }

    return output;
};
