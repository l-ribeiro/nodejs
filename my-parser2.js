//my-parser.js

// Requisitando o arquivo parser.js
var Parser = require('./parser');

// Carregandoo módulo fs (filesystem)
var fs = require('fs');

// Lendo o conteúdo do arquivo para a memória
fs.readFile('example-log.txt', function ( err, logData ) {
	
	// Se um erro ocorrer, irá ser lançada
	// a exceção e a app será encerrada
	if ( err ) throw err;

	// logData é um Buffer, converta-o para string
	var text = logData.toString();

	// Criando uma instância do objeto Parser
	var parser = new Parser();

	// Chame a função parse
	console.log( parser.parse( text ) );
	// { A: 2, B: 14, C: 6 }
});