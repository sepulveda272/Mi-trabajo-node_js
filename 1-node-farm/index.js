 /* COLORES */
    //Resetear color
    const reset = "\x1b[0m";
    //Colores de texto
    const rojo = "\x1b[31m"
    const verde = "\x1b[32m"
    //Backgroun de texto
    const backgroundRojo = "\x1b[41m";
    const backgroundVerde = "\x1b[42m";
    //Diseños de letra
    const bold = "\x1b[1m";
    const italic = "\x1b[3m";
    //ESPACIO
    const espacio = "/* -------------------------------------------------------------------------------------------------------------------------- */"

const { log } = require('console');
//Codigo para verificar si funciona la consola

/* const hello = "Hello world!";
console.log(hello); */  

// importacion de modulos
const fs = require('fs');
const http = require('http')
const url = require('url');


//lectura de archivos

/* const textIn = fs.readFileSync('./starter/txt/input.txt', 'utf-8')
console.log(textIn);

console.log(`${bold + backgroundRojo}   ${espacio}   ${reset}`); */

//creacion de archivos con contenido

/* const textOut = `This is what we know about the avocado: ${textIn}.\nCreated on ${Date.now()}`;
fs.writeFileSync('./starter/txt/output.txt', textOut);
console.log("File written!"); */

//CODIGO SINCRONICO O CODIGO DE BLOQUEO (BLOCKING)
/* Blocking code execution */

/* const input = fs.readFileSync('./starter/txt/input.txt', 'utf8');
console.log(input);

console.log(`${bold + backgroundRojo}   ${espacio}   ${reset}`); */

//CODIGO ASINCRONICO O CODIGO SIN BLOQUEO (NOT-BLOCKING)
/* Not Blocking code execution */
/* fs.readFile('./starter/txt/input.txt', 'utf8',(err, data)=>{
    console.log(data);
}) */

/* console.log("Reading file...");

console.log(`${bold + backgroundRojo}   ${espacio}   ${reset}`); */

//TRABAJO CON CODIGO ASINCRONICO (NOT-BLOCKING, ASYNCHRONOUS WAY)
//Trabajo 1

/* fs.readFile('./starter/txt/start.txt', 'utf8',(err, data)=>{
    console.log(data);
})
console.log("Will read file!"); */

// Trabajo 2 -> Dos funciones de devolucion lectura de archivos//

/* fs.readFile('./starter/txt/start.txt', 'utf-8', (err, data1) => {
    fs.readFile(`./starter/txt/${data1}.txt`, 'utf-8', (err, data2) => {
        console.log(data2); 
        console.log(`${bold + backgroundRojo}   ${espacio}   ${reset}`);

    }); 
});
console.log('Will read file work 2!'); */

// Trabajo 3 -> Tres funciones de devolucion lectura de archivos//

/* fs.readFile('./starter/txt/start.txt', 'utf-8', (err, data1) => {
    fs.readFile(`./starter/txt/${data1}.txt`, 'utf-8', (err, data2) => {
        console.log(data2); 

        fs.readFile(`./starter/txt/append.txt`, 'utf-8', (err, data3) => {
            console.log(data3); 
            console.log(`${bold + backgroundRojo}   ${espacio}   ${reset}`);
        });
    }); 
});
console.log('Will read file work 3!');  */

// Trabajo 4 -> Tres funciones de devolucion con lectura, escritura de archivos y uso de error (el error normalmente no se usa)//

/* fs.readFile('./starter/txt/start.txt', 'utf-8', (err, data1) => {
    if (err) return console.log('ERROR! ');
    
    fs.readFile(`./starter/txt/${data1}.txt`, 'utf-8', (err, data2) => {
        console.log(data2); 

        fs.readFile(`./starter/txt/append.txt`, 'utf-8', (err, data3) => {
            console.log(data3); 

            fs.writeFile('./startet/txt/final.txt', `${data2}\n${data3}`, 'utf-8', err => {
                console.log('Your file has been written 😄');
                console.log(`${bold + backgroundRojo}   ${espacio}   ${reset}`);
            })
        });
    }); 
});
console.log('Will read file work 4!'); */


////////////////////////////////////////////////////////////////////////////////
//SERVER


const data = fs.readFileSync("./starter/dev-data/data.json", "utf-8")
const dataObj = JSON.parse(data)

const server = http.createServer((req,res) => {
    const pathName = req.url;

    if (pathName === '/' || pathName === "/overview"){
        res.end("this is the overview")
    } else if (pathName === "/product"){
        res.end("this is the product")
    } else if (pathName === "/api"){

        fs.readFile("./starter/dev-data/data.json", "utf-8", (err, data)=>{
            const productData = JSON.parse(data)
            res.writeHead(200, {'Content-type':'application/json'})
            res.end(data)
        })

        
    } else {
        res.writeHead(404, {
            'Content-type':'text/html',
            'my-own-header': 'hello-word'
        });
        res.end("<h1>la pagina no funshion</h1>")
    }
});

server.listen(8000, "127.0.01", ()=>{
    console.log("se escucha en el puerto 8000");
})