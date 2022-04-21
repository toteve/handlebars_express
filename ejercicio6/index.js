/* Desarrollar un servidor con Express que disponibilice 3 rutas para renderizar 3 vistas
diferentes: Inicio, Galería y Contactos. El objetivo será utilizar los parciales de handlebars
para que las 3 vistas compartan el mismo menú de navegación. */


// importo y defino la instancia de express
const express = require("express");
const app = express();

// importo handlebars
const exphbs = require("express-handlebars");

// levanto el servidor
app.listen(3000, () => {
console.log("El servidor está inicializado en http://localhost:3000");
});

// especifico una configuracion donde motor de plantilla sera handlebars (requerido)
app.set("view engine", "handlebars");

// el metodo engine pasamos la extension a usar "handlebars" y la instancia de handlebars exphbs con carpeta
// principal de plantilla main.handlebars y de ser necesario la carpeta partials
app.engine(
    "handlebars",
    exphbs.engine({
        layoutsDir: __dirname + "/views",
        partialsDir: __dirname + "/views/componentes/",
    })
);

// Paso 3: definimos ruta raiz con archivo a renderizar inicio.handlebars, se puede obviar la extension por la configuracion previa
app.get("/", function (req, res) {
    res.render("inicio", { layout: "inicio" });
});


// Paso 4: definimos ruta /contactos con archivo a renderizar contactos.handlebars, se puede obviar la extension por la configuracion previa
app.get("/contactos", function (req, res) {
    res.render("contactos", { layout: "contactos" });
});


// Paso 5: definimos ruta /galeria con archivo a renderizar galeria.handlebars, se puede obviar la extension por la configuracion previa
app.get("/galeria", function (req, res) {
    res.render("galeria", { layout: "galeria" });
});

