import { NotImplementedError } from '../extensions/index.js';

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
export default function getMatrixElementsSum(matrix) {
  let masBin = matrix[0].map(function (item) {
    return item > 0 ? 1 : 0;
  })
  let masSum = 0;
  for (const iterator in matrix) {
    masSum += matrix[iterator].map(function (item, index) { return masBin[index] > 0 ? item : 0; }).reduce((a, b) => a + b, 0);
    masBin = matrix[iterator].map(function (item) {
      return item > 0 ? 1 : 0;
    })

  }
  return masSum;
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}


