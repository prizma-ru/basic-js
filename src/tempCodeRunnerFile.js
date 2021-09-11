let masIn = [23, 54, -1, 43, 1, -1, -1, 77, -1, -1, -1, 3];
let masOut = masIn.filter(a=> a>0).sort((a,b)=> a-b);


console.table(masOut);
for (let i=0; i < masIn.length; i++) {
  if (masIn[i] <0) {
    masOut.splice(i, 0, -1)
  }
}
console.table(masOut);