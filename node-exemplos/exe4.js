var http = require('http');
var url = require('url');

var server = http.createServer(function(req, res){
	res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});
	
	if(req.url == '/'){
		res.write('<h1> Pagina Inicial </h1>');
	}else if (req.url == '/contatos'){
		res.write('<h1>Pagina contatos</h1>');
	}else if(req.url == '/usuarios'){
		res.write('<h1>Pagina Usuarios</h1>');
	}else{
		res.write('<h1>Pagina nao encontrada!</h1>')
	}

	var resultado = url.parse(req.headers.host+req.url);
	res.write('<br />')
	res.write(resultado.href);

	res.end();
});

server.listen(3000, function(){
	console.log('Server rodando, rodando, rodando!');
})