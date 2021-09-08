function checkDate(date){
  const dateSeason = new Date(...arguments);
  if (arguments.length === 0){
    return 'Unable to determine the time of year!' 
  }
  console.log(dateSeason.toString());
  console.log(arguments.length>3);
if (dateSeason.toString() !== `Invalid Date`){
  console.log('true');
  return true
} 
else  {
  throw new Error('Invalid date!');
}
}
console.log(checkDate());
checkDate(1456, 0, 2, 1, 50, 9, 238);
checkDate('foo');
checkDate({ John: 'Smith' });
checkDate(20192701);
checkDate(20192701);
checkDate([2019, '27', 0 + '1']);