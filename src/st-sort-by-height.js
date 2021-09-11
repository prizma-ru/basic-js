import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
export default function sortByHeight(arr) {
  let masOut = arr.filter(a=> a>0).sort((a,b)=> a-b);


console.table(masOut);
for (let i=0; i < arr.length; i++) {
  if (arr[i] <0) {
    masOut.splice(i, 0, -1)
  }
}
return masOut;
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}



// let masIn = [23, 54, -1, 43, 1, -1, -1, 77, -1, -1, -1, 3];
// let masOut = masIn.filter(a=> a>0).sort((a,b)=> a-b);


// console.table(masOut);
// for (let i=0; i < masIn.length; i++) {
//   if (masIn[i] <0) {
//     masOut.splice(i, 0, -1)
//   }
// }
// console.table(masOut);


// Array.prototype.insert = function ( index, item ) {
//   this.splice( index, 0, item );
// };
// var arr = [ 'A', 'B', 'D', 'E' ];
// arr.insert(2, 'C');
// console.table(arr);
// var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];
// myFish.splice(5, 0, -1);
// console.log(myFish);