/**
 * Clean text so it only consist of numbers and dash (-)
 * @param number text to be cleaned
 * @returns cleaned text
 */
export const stringNumber = (number: string) => number.replace(/[^-\d]/g, '').toString()