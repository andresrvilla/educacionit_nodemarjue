const http = require("http");
const pagina = require("./paginaInicial");
const paginaDos = require("./paginaDos");
const fs = require("fs");

const servidor = http.createServer((request,response) => {
    console.log("Recibí una peticion a la url "+request.url);

    switch(request.url){
        case "/":
            response.writeHead(200, {"content-type": "text/html"});
            response.end(pagina);
            break;
        case "/dos":
            response.writeHead(200, {"content-type": "text/html"});
            response.end(paginaDos);
            break;
        case "/tres":
            //Si no le pongo el parametro utf-8, puedo leer imagenes, etc. Si no es texto, no pongo el parametro
            fs.readFile("./tres.html", "utf-8", (err,datos) => { 
                if(err){
                    response.end("Ha ocurrido un error");
                }else{
                    response.end(datos);
                }
            });
            break;
        case "/imagen":
            fs.readFile("./logo-it.svg",(err,datos) => {
                if(err){
                    response.end("Ha ocurrido un error");
                }else{
                    response.end(datos);
                }
            });
            break;
        default:
            response.writeHead(404, {"content-type": "text/html"});
            response.end("404 - Pagina no encontrada")
            break;
    }    
});

servidor.listen(3000);