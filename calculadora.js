let funcao = (numero1,numero2) =>{
    let resultado = numero1+numero2;
    return resultado;
}

let a =1, b=5;

console.log(`${a}+${b} = ${funcao(a,b)}`);

//ou

let a =1, b=5;
let resultado =funcao(a,b);
console.log(`${a}+${b} = ${resultado}`);