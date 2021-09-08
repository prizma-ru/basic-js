import { NotImplementedError } from '../extensions/index.js';

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
export default function getSeason(/* date */) {
  if (arguments.length === 0) {
    return 'Unable to determine the time of year!'
  }
  let season = '';
  const dateSeason = new Date(...arguments);
  if (dateSeason.toString() === 'Invalid Date') {
    throw 'Invalid Date'
  }
  let month = dateSeason.getMonth();
  console.log(month);
  switch (true) {
    // case month:0
    case month >= 0 && month <= 1 || month == 11:
      season = 'winter';
      break;
    case month <= 4 && month > 1:
      season = 'spring';
      break;
    case month <= 7 && month > 4:
      season = 'summer';
      break;
    case month <= 10 && month > 7:
      season = 'autumn';
      break;
  }
  return season;

  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}


// const springDate = new Date(1667, 9, 19, 22, 46, 48, 373);
// const springDateStart = new Date(1970, 1, 1);

// const springDate = new Date([2019, '27', 0 + '1']);
// console.log(typeof new Date(83, 9, 25, 16, 20, 23, 544));
// console.log(springDate.getMonth());
// console.log(springDate.valueOf(), '----', springDate.toString());
// console.log(springDateStart.valueOf(), '----', springDateStart.toString());





/* function getSeason(date) {
  let season = '';
  const dateSeason = new Date(...arguments);
  console.log(dateSeason);
  let month = dateSeason.getMonth();
  console.log(month);
  switch (true) {
    // case month:0
    case month >= 0 && month <= 1 || month == 11:
      season = 'winter';
      break;
    case month <= 4 && month > 1:
      season = 'spring';
      break;
    case month <= 7 && month > 4:
      season = 'summer';
      break;
    case month <= 10 && month > 7:
      season = 'autumn';
      break;
  }
  return season;
}
console.log(getSeason(2265, 10, 2, 2, 54, 27, 502)); */


// function checkDate(date){
//   const dateSeason = new Date(...arguments);
//   if (arguments.length === 0){
//     return 'Unable to determine the time of year!' 
//   }

// if (dateSeason.toString() !== `Invalid Date`){
//   console.log('true');
//   return true
// } 
// else  {
//   throw new Error('Invalid date!');
// }
// }
// console.log(checkDate());
// checkDate(1456, 0, 2, 1, 50, 9, 238);
// checkDate('foo');
// checkDate({ John: 'Smith' });
// checkDate(20192701);
// checkDate(20192701);
// checkDate([2019, '27', 0 + '1']);


// const dateSeason = new Date('foo');
// console.log(dateSeason);
// console.log(dateSeason.toString() === `Invalid Date`);



