require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const { DB_USER, DB_PASSWORD, DB_HOST, DB_DEPLOY } = process.env;
// const UserFunction=require("./models/User")
// const FavoriteFunction=require("./models/Favorite")

// EJERCICIO 03
// A la instancia de Sequelize le falta la URL de conexión. ¡Agrégala!
// Recuerda pasarle la información de tu archivo '.env'.

// URL ----> postgres://DB_USER:DB_PASSWORD@DB_HOST/rickandmorty
// const sequelize = new Sequelize(
//    // URL
//    `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/rickandmorty`,
//     { logging: false, native: false },
   
// );
//Deploy
const sequelize = new Sequelize(
   // URL
   DB_DEPLOY,
    { logging: false, native: false },
   
);
const basename = path.basename(__filename);
const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach(model => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);
// EJERCICIO 05
// Debajo de este comentario puedes ejecutar la función de los modelos.
// UserFunction(sequelize);
// FavoriteFunction(sequelize);
//

//

// Ejercicio 06
// ¡Relaciona tus modelos aquí abajo!
const { User, Favorite } = sequelize.models;

User.belongsToMany( Favorite,{through:"user_favorite"});
Favorite.belongsToMany( User,{through:"user_favorite"})

module.exports = {
   ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
   conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
 };

