const express = require('express');
const httprequest = require('request');
const chalk = require('chalk');

const app = express();

let db = [];


app.get(`/cep/:cepinput`, (request, response) => {
    const cep = request.params.cepinput;
    const url = `https://viacep.com.br/ws/${cep}/json`;

    httprequest(url, function (error, resposta, body) {
        console.log('resposta', resposta);
        console.log('error:', error); // Print the error if one occurred
        console.log('statusCode:', resposta && resposta.statusCode); // Print the response status code if a response was received
        console.log('body:', body); // Print the HTML for the Google homepage.
        // const convert = JSON.parse(body);
        response.status(200).send(`Endereco ${body}`);

    });


});

//tem o objetivo de pegar a rua atraves do cep 
app.get(`/cep/:cepinput/rua`, (request, response) => {
    const cep = request.params.cepinput;
    const url = `https://viacep.com.br/ws/${cep}/json`;

    httprequest(url, function (error, resposta, body) {
        console.log('error:', error); // Print the error if one occurred
        console.log('statusCode:', resposta && resposta.statusCode); // Print the response status code if a response was received
        console.log('body:', body); // Print the HTML for the Google homepage.

        //primeiro coloquei o body em formato json
        const rua = JSON.parse(body);
        //peguei somente o campo logadorouro que esta no body
        const logradouro = rua.logradouro;

        response.status(200).send(logradouro);

    });
});


//tem o objetivo de pegar a bairro atraves do cep 
app.get(`/cep/:cepinput/bairro`, (request, response) => {
    const cep = request.params.cepinput;
    const url = `https://viacep.com.br/ws/${cep}/json`;

    httprequest(url, function (error, resposta, body) {

        console.log('error:', error); // Print the error if one occurred
        console.log('statusCode:', resposta && resposta.statusCode); // Print the response status code if a response was received
        console.log('body:', body); // Print the HTML for the Google homepage.

        //primeiro coloquei o body em formato json e acessei a variavel bairro
        const bairro = JSON.parse(body).bairro;

        response.status(200).send(bairro);

    });


});


//tem o objtivo para criar um usuário post (qdo envia algo para o front end)
app.post('/usuario', (request, response) => {
    console.log('POST /usuario');


    let user = {
        nome: request.body.nome,
        sobrenome: request.body.sobrenome,
        cep: request.body.cep,
        numero: request.body.numero,
        complemento: request.body.complemento,
        telefone: request.body.telefone,
        senha: request.body.senha
    };
    if (user.nome == '') {
        response.status(400).send('nome incorre, por favor preencha novamente');
    }
     
    db.push(user);
    response.status(201).send ('status');
});


app.listen(3000, () => {
    console.log(chalk.green('servidor blzinha na porta 3000'));
});