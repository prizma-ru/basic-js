import { NotImplementedError } from '../extensions/index.js';

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
export default function calculateHanoi(disksNumber, turnsSpeed) {
let objHanoi = {}
objHanoi.turns = Math.pow(2,disksNumber)-1;
objHanoi.seconds = Math.floor(3600/turnsSpeed*objHanoi.turns);
  return objHanoi;
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}


/* left blank for unlimited creativity :) */
const  multiply_all = function multiplyALL (mas){
  return function (n){
     return mas.map(a=>a*2)
   }
   }
 


   console.table(multiply_all([1,2,3])(2))