/* Desarrollar una ruta que renderice una vista “Pendientes” que itere un arreglo de
tareas por hacer con el helper “each” de handlebars y en caso de no haber tareas,
imprimir un mensaje que diga “No hay tareas pendientes por hacer”. */


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


// definicion de ruta raiz para renderizar una vista principal pendientes, que recibira como
// parametro el array tareas sino hay arreglo entonces tareas es false?
app.get("/", function (req, res) {
    const tareas = ["Ir al médico", "Subir el cerro", "Hacer aseo"];
    /* const tareas = []; */
    res.render("pendientes", {
        layout: "pendientes", // es la vista a renderizar pendientes.handlebars
        tareas: tareas.length > 0 ? tareas : false, // condiciones o parametros
    });
});

