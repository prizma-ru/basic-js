import { NotImplementedError } from '../extensions/index.js';

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
export default function renameFiles(names) {
  let masObj = {};
  for (let i of names) {
    console.log(i);
    if (masObj[i]) {
      masObj[`${i}(${masObj[i]})`] = 1;
      masObj[i] += 1;
    } else {
      masObj[`${i}`] = 1;
    }

  }
  return Object.keys(masObj);
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}


// let obj = {
//   'a': 2,
//   'b': 2,
//   'c': 2,
//   'e': 2,
//   'x': 2,
// }
// console.table(Object.keys(obj))

// let masFiles = ['doc', 'doc', 'image', 'doc(1)', 'doc'];
// let masObj = {};
// for (let i of masFiles) {
//   console.log(i);
//   if (masObj[i]) {
//     masObj[`${i}(${masObj[i]})`] = 1;
//     masObj[i] += 1;
//   } else {
//     masObj[`${i}`] = 1;
//   }

// }
// console.table(Object.keys(masObj));
// console.log(masObj);

