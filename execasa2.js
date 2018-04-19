
const vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let i=0;
let x;
let y =2;
while(i<vetor.length){
    x=vetor[i] % 2;
 if (x===0){
    console.log(' o numero '+ vetor[i]+ ' é par');
 }
    i++;
}