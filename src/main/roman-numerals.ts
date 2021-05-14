export const romanNumeral = (number: number): string => {
    let romanNumeral = "";

    if ((number + 1) % 10 === 0) {
        return "IX"
    }
    if ((number + 1) % 5 === 0) {
        return "IV"
    }

    while (number >= 1) {
        if (number >= 5) {
            romanNumeral += "V";
            number -= 5;
        } else {
            romanNumeral += "I";
            number -= 1;
        }
    }

    return romanNumeral;
};
