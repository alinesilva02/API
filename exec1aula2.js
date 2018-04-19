const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('digita a frase', answer =>{
    let frase = answer.toLowerCase().trim();

    let vog =0;
    let cons = 0;
    
    for (var i=0;i < frase.length;i++){
        switch (frase[i]){
            case " " : case "!":case "?":
            if (texto[i+1]===" ") 
                i++;
                break;
            case "a":case"b":case"i":case"o": case"u":
                vog ++;
                break;
            default:
                cons++;
                
            
        }
    }
    console.log(`a Frase ${frase} ,possui + ${vog} + e + ${cons} + consoantes`);
    rl.close();
})