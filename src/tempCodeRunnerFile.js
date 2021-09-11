const matrix = [
  [0, 1, 1, 2],
  [0, 5, 0, 0],
  [2, 0, 3, 3]
];

let masBin = matrix[0].map(function (item) {
  return item > 0 ? 1 : 0;
})
let masSum=0;
for (const iterator in matrix) {
  masSum +=matrix[iterator].map(function (item, index) { return masBin[index] > 0 ? item : 0; }).reduce((a, b) => a + b,0);
  masBin = matrix[iterator].map(function (item) {
    return item > 0 ? 1 : 0;
  })

}
console.log(masSum);