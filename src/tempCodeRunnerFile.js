function test(sampleActivity) {
  const MODERN_ACTIVITY = 15;
  const HALF_LIFE_PERIOD = 5730;
  if (typeof sampleActivity !== 'string' ||
    !/^[\d]+\.?[\d]*/.test(sampleActivity) ||
    parseFloat(sampleActivity) <= 0 ||
    parseFloat(sampleActivity) > MODERN_ACTIVITY) {
    return false;
  } else {
    return Math.ceil(Math.log(MODERN_ACTIVITY / +sampleActivity) / (Math.log(2) / HALF_LIFE_PERIOD));
  }
}
console.log(test(['1']));