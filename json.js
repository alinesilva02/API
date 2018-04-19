let numero =2000;


let endereco ={
    rua : 'logradouro',
    bairro : 'centro',
    cidade : 'sao paulo',
    numero: numero
}

console.log(endereco);
console.log(endereco.rua);
console.log(JSON.stringify(endereco));
console.log(JSON.stringify(endereco.numero));

let array=['a','bebe','coco'];
console.log(array[2]);

let i=0;

while(i<array.length){
    console.log(i)
    console.log(array[i]);
    i++;
}