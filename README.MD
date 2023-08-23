# Node.js y npm (Node Package Manager)

### _Creador_ : _Juan David Sepulveda Rojas_

## FS - File System
Sirve para leer archivos, ya sean textos, json, etc. 


Forma de leer los archivos: 
- sincronica
- asincronica

Forma sincrónica: El programa se bloquea y espera a que se complete la operación de lectura antes de continuar con la siguiente línea de código.

Forma asincrónica: El programa no espera a que se complete la lectura del archivo y continua procesando otras tareas, de echo aveces lo ejecuta hasta el final.

### Partes de FS sincrónico
Ejemplo:

const textIn = fs.readFileSync('./starter/txt/input.txt', 'utf-8')
console.log(textIn);

El fs primero lo traemos con un require y lo declaramos en un variable fs, después se lee el archivo con readFileSync, lo siguiente es donde se encuentra ubicado el archivo y por ultimo se envia el formato de codificación para que lea bien el archivo.

### Partes de FS asincrónico

    fs.readFile('./starter/txt/start.txt', 'utf-8', (err, data1) => {
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
console.log('Will read file work 4!');


## HTTP

Esto permite a los desarrolladores crear servidores HTTP, hacer solicitudes HTTP y mucho más.

La forma de crear servidores es: 
    
    const server = http.createServer((req,res)=>{
        res.end('Hello from the server!')
    })

Y asi se ejecuta: 

    server.listen(8001,'localhost', ()=>{
        console.log('Se escuchan las respuestas desde el servidor 8001');
    })



## Código de nivel superior

Quiere decir que solo se ejecuto una vez y se utiliza de manera estrategica, es decir, se ejecuta y queda cargada solo una vez.

Un ejemplo de este codigo es el siguiente: 

    const tempOverview = fs.readFileSync(`${__dirname}/templates/template-overview.html`, 'utf-8');

Este código indica que llama una archivo html y se ejecuta una sola vez y se llama más adelante de forma estrategica, es decir, no dentro de un ciclo, a lo que me refiero es que se ejecuta una vez y más adelante se llama de manera inteligente.


## URL

Proporciona utilidades para la manipulación y resolución de URLs. 

### Parse

Esta función descompondrá la URL en sus partes (protocolo, host, puerto, ruta, consulta, etc.) y las devolverá como un objeto.

    const { query, pathname } = url.parse(req.url, true)

## Rutas

Explicación código:

    if(pathname === "/" || pathname === "/overview" ){
        res.writeHead(200, {'Content-type':'text/html'});

        const cardsHtml = dataObject.map(el => replaceTemplate(tempCard, el)).join('');
        const output = tempOverview.replace('{%PRODUCT_CARDS%}', cardsHtml)

        res.end(output);
    }

En el condicional if verifica si la ruta solicitada (pathname) es la ruta raíz (/) o la ruta /overview. 

### Respuesta por cabecera:

    res.writeHead(200, {'Content-type':'text/html'});

Se establece el tipo de contenido que va a recibir que es código html.

### Generar contenido HTML para tarjetas de producto:

    const cardsHtml = dataObject.map(el => replaceTemplate(tempCard, el)).join('');

dataObject: El archivo json con todos los datos de la granja para más adelante iterarlo.

    map(el => replaceTemplate(tempCard, el)):

Para cada objeto en dataObject, estamos llamando a la función replaceTemplate con dos argumentos: tempCard (que probablemente es una plantilla HTML en forma de cadena de texto) y el objeto actual el.

    .join(''):

Luego, se toma el arreglo de cadenas HTML de las tarjetas y se une en una sola cadena de texto.

### Incorporar las tarjetas en la vista general:

    const output = tempOverview.replace('{%PRODUCT_CARDS%}', cardsHtml)

tempOverview es una plantilla HTML más grande que representa una "vista general". Estamos reemplazando el marcador {%PRODUCT_CARDS%} en esa plantilla con el HTML generado de todas las tarjetas de las frutas.

    res.end(output);

Enviamos el HTML generado (output) a traves de la respuesta.

    else if(pathname === "/api"){
        res.writeHead(200, {'Content-type':'application/json'})
        res.end(data);
    }
    
En este apartado estamos llamando a la api, para que se vea en el 

    res.writeHead(200, {'Content-type':'application/json'}) 

se indica que se va enviar un elemento de tipo json para que se púeda leer en la página. y después e esto se envia la respuesta xd.


## Npm

Npm es el sistema de gestión de paquetes por defecto para Node.js

### npm init

Mediante este inicia un nuevo proyecto en Node.js y para crear un archivo package.json en el directorio actual. El archivo es esencial en cualquier proyecto basado en Node.js para el manejo de dependencias y demás.

Cuando se ejecuta npm init, se hacen unas preguntas para ayuda a configurar el proyecto:

* name: Nombre de tu proyecto.
* version: La versión inicial de tu proyecto (por defecto 1.0.0).
* description: Una breve descripción de tu proyecto.
* main: El punto de entrada principal de tu proyecto (por defecto index.js).
* scripts: Comandos personalizados que puedes ejecutar usando npm run.
* keywords: Palabras clave relacionadas con tu proyecto.
* author: Yo xd.
* license: La licencia bajo la cual se distribuye tu proyecto - enter xd.

### instalar dependencias regulares

Estas son las dependencias que tu proyecto necesita para funcionar correctamente en producción

    npm install nombre-dependencia

De esta forma se instalar las dependencias y van a quedar registradas en package.json

### instalar dependencias de desarrollo
Estas son las dependencias que solo son necesarias durante el desarrollo de tu proyecto.

    npm i nombre-dependencia --save--dev

### instalar dependencias de manera global

Estas dependencias están disponibles desde cualquier lugar en tu sistema, independientemente de tu directorio de trabajo actual, pueden ser útiles para herramientas de desarrollo.

    npm i nombre-dependencia --global

### desinstalar dependencias

De esta manera se elimina una dependencia de manera directa.

    npm uninstall nombre-dependencia

### Versión de dependencias

    1.18.11

* El 1 es la version principal, normalmente este cambia de  número si los cambios fueron importantes.

* El 18 Es la version menor e incluye caracteristicas nuevas que no romperan el código.

* El 11 El la version de parches, correcciones que se presentan de errores que se ven en el desarrollo de procesos.


### Manera de correr nuestro proyecto

Se utiliza para ejecutar un script llamado "start" que está definido en el archivo package.json.

    npm run start  

Es un scripts iniciar el servidor. Estos scripts se definen en el campo scripts del archivo package.json.