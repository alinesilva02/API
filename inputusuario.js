const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let palavra1;

rl.question('digita palavra1', answer =>{
    console.log(answer);
    rl.close();
})