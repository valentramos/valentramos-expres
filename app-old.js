const http = require('http')

http.createServer((req, res) => {
        res.writeHead(200, { 'Content-Type': 'application/json' });

        let salida = {
            nombre: 'Ignacio',
            edad: 26,
            url: req.url
        }
        res.write(JSON.stringify(salida))
            // res.write('Hola Valent');
        res.end();
    })
    .listen(8080);

console.log('Escuchando el puerto 8080');