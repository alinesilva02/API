
let fibonacci = [0, 1];
let i=0;
let x;
while(i<15){
    x=fibonacci[i+1] + fibonacci[i];
  //  console.log(x);
    fibonacci.push(x);
 //   console.log(fibonacci);
    i++;

}
console.log(fibonacci);