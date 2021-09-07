import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
export default function getSumOfDigits(n) {
  while (n > 9) {
    n = ("" + n).split("").reduce((a, b) => a + Number(b), 0)
    console.log(n);
  }
  return n;

  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}


/* function sumD(n) {
  //s = 0;
  while (n > 10) {
    n = ("" + n).split("").reduce((a, b) => a + Number(b), 0)
    console.log(n);
  }
  return n;
}

console.log(sumD(77777777777777));

console.log(("" + 777777777777777).split("")); */