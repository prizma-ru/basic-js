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