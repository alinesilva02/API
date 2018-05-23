

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let ehprimo = (numero) => {
    let primo = true;

    for (var i = 2; i < numero; i++) {
        let resto = numero % i;
        if (resto == 0) {
            primo = false;
            break;
        }
    }
    return primo;
}

rl.question('digita o numero ', answer => {
//para realizar a consistencia do numero se e numerico ou menor que zero
//vc pode consistir antes de chamar a funcao... ou seja igual abaixo ou criar outra funcao
    
    if (isNaN(answer) || answer <= 0) {
        console.log('numero ' + answer + ' não é válido');
    } else {
        let retorno = ehprimo(answer);
        //pode chamar desta forma o IF
        //if (retorno)) ou if ( retorno == false)
        if (ehprimo(answer)) {
            console.log('o Numero ' + answer + ' é primo');
        } else {
            console.log('o Numero ' + answer + ' não é primo');
        }
    } 
        

    rl.close();
})