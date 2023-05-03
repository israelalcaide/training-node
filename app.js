const http = require("http"); //esto es un modulo de node que nos permite crear un servidor.
const hostName = "127.0.0.1"; //esto es un localhost osea el servidor local, es decir, el servidor de mi computadora.
const port = "8000"; //esto es el puerto por el cual se va a conectar el servidor.
const server = http.createServer((req, res) => {
  //esto es un servidor que se crea con el modulo http, y se le pasa una funcion que recibe dos parametros, el request y el response.
  res.statusCode = 200; //esto es el codigo de estado que se le va a dar al servidor, en este caso es 200 que significa que todo esta bien.
  res.setHeader = ("Content-Type", "text/plain"); //esto es el tipo de contenido que se le va a dar al servidor, en este caso es texto plano.
  res.end("Hello, World!\n"); //esto es lo que se va a mostrar en el servidor.
});

server.listen(port, hostName, () => {
  //esto es el servidor que se va a escuchar, y se le pasa el puerto y el hostName.
  console.log(`Server running at http://${hostName}:${port}/`); //esto es lo que se va a mostrar en la consola.
});
//con todo esto ya tenemos un servidor creado que se está ejecutando en el puerto 8000.