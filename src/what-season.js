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
export default function getSeason(date) {
  if (!date) return 'Unable to determine the time of year!';
  if (arguments.length === 0) {
    return 'Unable to determine the time of year!'
  }

  if (
    Object.prototype.toString.call(date) !== "[object Date]" ||
    typeof date !== "object" ||
    Object.keys(date).length > 0 ||
    !(date instanceof Date)
  ) {
    throw new Error("Invalid date!");
  }
  let season = '';
 
  
  let month = date.getMonth();
  
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


