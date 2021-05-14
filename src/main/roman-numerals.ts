export const romanNumeral = (number: number): string => {
    let romanNumeral = "";

    while (number >= 1) {
        romanNumeral += "I";
        number -= 1;
    }

    return romanNumeral;
};
