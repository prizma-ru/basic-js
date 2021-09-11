let masFiles = ['doc', 'doc', 'image', 'doc(1)', 'doc'];
let masObj = {};
for (let i of masFiles){
  console.log(i);
  if (masObj[i]){
    masObj[`${i}(${masObj[i]})`] = 1;
    masObj[i] +=1;
  }else{
    masObj[`${i}`] = 1;
  }

}
console.table(Object.keys(masObj));
console.log(masObj);