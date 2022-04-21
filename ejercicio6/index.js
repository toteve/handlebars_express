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
    })
);

// definimos ruta raiz con archivo a renderizar main.handlebars, se puede obviar la extension por la
// configuracion previa
app.get("/", (req, res) => {
    res.render("main");
});

