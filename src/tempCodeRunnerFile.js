function sumD(n){
  //s = 0;
  while (n > 10){
    n = (""+n).split("").reduce((a,b)=>a+Number(b),0)
    console.log(n);
  }
return n;
}

console.log(sumD(77777777777777));