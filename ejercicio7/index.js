/* Agregar a un servidor una ruta GET /ventas que use los helpers each, if y unless para
mostrar las ventas de un usuario, enviadas como parámetro desde el método render. */


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
    })
);



// Paso 1: Crear la ruta get /ventas, que renderice una vista principal "ventas" y pase como 
// parametro usuario (string) y ventas (array)
app.get("/ventas", function (req, res) {
    // Paso 2
    res.render("ventas", {
        layout: "ventas",
        usuario: "Pedro Luis",  // nulo o false generara el aviso de iniciar sesion en ventas.handlebars
        ventas_dia: [14990, 42490, 22500],
    });
});



 