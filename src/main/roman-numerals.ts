export const romanNumeral = (number: number): string => {
    let romanNumeral = "";

    if ((number + 1) % 5 === 0) return "IV"

    while (number >= 1) {
        romanNumeral += "I";
        number -= 1;
    }

    return romanNumeral;
};
