import { NotImplementedError } from '../extensions/index.js';

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
export default function getCommonCharacterCount(s1, s2) {
  let str1 = s1.split('');
  let str2 = s2.split('');
  let masOut = [];

  for (let i in str1) {
    if (str2.indexOf(str1[i]) > -1) {
      masOut.push(str1[i]);
      str2.splice(str2.indexOf(str1[i]), 1);

    }
  }
return masOut.length;
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}



/* let str1 = 'abca';
let str2 = 'xyzbac';

function chrCount(str1, str2) {
  if (str1.length === 0 || str2.length === 0) {
    return 0;
  }
  let strOut = [];
  for (let i in str1) {
    if (str2.indexOf(str1[i]) > -1 && strOut.indexOf(str1[i]) === -1) {
      strOut.push(str1[i]);
    }
  }
  // console.table(strOut);

}
let objStr = {}
for (let i in str1) {
  console.log(typeof objStr[str1[i]], '<-------->',i)
  if (objStr[str1[i]]) {
    objStr[str1[i]] += 1
  }
  else {
    objStr[str1[i]] = 1;
  }

}
 console.table(objStr);

console.log(chrCount(str1, str2));


let str1 = 'zzzz'.split('');
let str2 = 'zzzzzzz'.split('');
let masOut = [];

for (let i in str1){
  console.log(str1[i], '<--->',str2.indexOf(str1[i]));
  if (str2.indexOf(str1[i])>-1){
    masOut.push(str1[i]);
    str2.splice(str2.indexOf(str1[i]),1);
    //console.table(str2);
  }
}
console.table(masOut);
// console.table(str2); */

