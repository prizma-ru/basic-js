import { NotImplementedError } from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(members) {
  if (Array.isArray(members)) {
    return members.map(str => typeof str === "string" ? str.trim()[0].toLocaleUpperCase().match(/[A-Z]/g, "") : "").sort().join("");
  }
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  return false
}

// console.log("PrizmaD".replace(/(\w)[a-z]/g,""));
// let members = ['aEthan R', null, 'Vincent', 'Timothy', 'Edward', 'Eric', 'Hannah', 'Henry', 'Lori', 'jJoyce'];
// console.table(members.map(str => typeof str === "string"?str[0].match(/[A-Z]/g,""):"").sort().join(""));



