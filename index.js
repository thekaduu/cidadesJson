var fs = require('fs');	
var parse = require('csv-parse');
var inputFile = 'cidades_ibge.csv';
var request = require('request');
var http = require('http');


var cidades_json = '';
/*var parser = parse({delimiter: ','}, function (err, data) {	
	for(var k in data){
		cidade = { cidade:{ estado_id:data[k][0], cidade: data[k][1]}};
		request.post('http://localhost:3000/cidades.json', {form:cidade});
		return false;
	}
});*/
var parser = parse({delimiter: ','}, function (err, data) {	
	for(var i in data){				
		console.log(data[i]);
		return;
		//request.post('http://localhost:3000/cidades.json', { form: {cidade: {id: data[i][0],cidade: data[i][1]}}  });	
	}
});
fs.createReadStream(inputFile).pipe(parser)

var inputFile = 'estados.ibge.csv';
var parser = parse({delimiter: ','}, function (err, data) {	
	for(var i in data){				
		request.post('http://localhost:3000/estados.json', { form: {estado: {id: data[i][0],estado: data[i][1]}}  });	
	}
});
fs.createReadStream(inputFile).pipe(parser)

/*request.get('http://localhost:3000/estados.json').on('response', function(response) {
    console.log(response);
    console.log('asdf');
  })*/

/*request.post('http://localhost:3000/cidades.json', function (error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body); // Show the HTML for the Modulus homepage.
    }else{
    	console.log(body);
    }
});*/