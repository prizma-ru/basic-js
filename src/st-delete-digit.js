import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {

  let masOut = [];
  let str = ''+n;
  for(let i=0; i< str.length; i++){
      masOut.push(str.split('').filter((item, index)=> index !==i).join(''));
  }
  console.table(masOut);
   return Math.max(...masOut.map(Number));
  // return masOut;
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}
