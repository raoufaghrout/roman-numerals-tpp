export const romanNumeral = (input: number): string => {
    const numberToNumeral = [
        { number: 10, numeral: "X" },
        { number: 5, numeral: "V" },
        { number: 1, numeral: "I" }
    ]

    let output = "";

    if ((input + 1) % 10 === 0) {
        return "IX"
    }

    if ((input + 1) % 5 === 0) {
        return "IV"
    }

    while (input >= 1) {
        numberToNumeral.forEach(({ number, numeral}) => {
           if (input >= number) {
               output += numeral;
               input -= number
           }
        });
    }

    return output;
};
