/* Desarrollar un servidor con Express que tenga integrado handlebars y Bootstrap para
la renderización de una plantilla principal “Inicio” que importe un parcial “Table".

En este parcial que su carpeta sera Componentes, deberás usar el helper “each” para mostrar la información de diferentes usuarios enviados como parámetros en el render de la ruta raíz. */


// importo y defino la instancia de express
const express = require("express");
const app = express();

// importo handlebars
const exphbs = require("express-handlebars");

// levanto el servidor
app.listen(3000, () => {
console.log("El servidor está inicializado en http://localhost:3000");
});

// middleware para definir una ruta estatica para bootstrap en la carpeta node_module, hay que instalar bootstrap
// con npm install previamente
app.use("/css", express.static(__dirname + "/node_modules/bootstrap/dist/css"));

// especifico una configuracion donde motor de plantilla sera handlebars (requerido)
app.set("view engine", "handlebars");



// el metodo engine pasamos la extension a usar "handlebars" y la instancia de handlebars exphbs con carpeta
// principal de plantilla main.handlebars y de ser necesario la carpeta partials
app.engine(
    "handlebars",
    exphbs.engine({
    layoutsDir: __dirname + "/views",
    partialsDir: __dirname + "/views/componentes",
    })
);

// definimos ruta raiz con archivo a renderizar main.handlebars, se puede obviar la extension por la
// configuracion previa
app.get("/", (req, res) => {
    res.render("main");
});

// ruta usuarios para renderizar una lista usuarios que se envia como parametro en el render
app.get("/usuarios", function (req, res) {
    const usuarios = [
        {
            nombre: "Luis",
            direccion: "Avenida Libertador",
            telefono: "+56978994561",
        },
        {
            nombre: "Francisco",
            direccion: "Avenida Luis del valle Garcia",
            telefono: "+56935761594",
        },
        {
            nombre: "Diana",
            direccion: "Avenida via al Sur",
            telefono: "+56913467946",
        },
    ]


    res.render("main", {
        layout: "main", usuarios,
    });

});

 