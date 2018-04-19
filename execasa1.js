
const vetor =  [1, 'a', 'banana', 2, -1, 10, undefined, {rua: "Rua dos Vetore"}, 5];
let i=0;
while(i<vetor.length){
 if (!isNaN(vetor[i])){
    console.log('numero '+ vetor[i]+ ' é númerico'); 
}
i++;
 
}