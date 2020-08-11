/**
 * Will return an array containing what's in the first array but NOT in the other arrays.
 * adapted from https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_difference
 */
// Handle overloading
export type ArrayDifferenceType = {
  (...arrays: number[][]): number[];
  (...arrays: string[][]): string[];
  (...arrays: (string | number)[][]): (string | number)[];
};
const arrayDifference: ArrayDifferenceType = (...arrays: any[][]) => {
  return arrays.reduce((a, b) => a.filter((c) => !b.includes(c)));
};
export default arrayDifference;
