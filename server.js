// import  general dependencies
const express = require('express');
const sequelize = require("./config/connection");

// assign variables to start express and set the port
const app = express();
const PORT = process.env.PORT || 3001;

// add midlleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// set up the routes
app.use(require('./controllers/'));

// sync sequelize with the server
sequelize.sync({ force: true }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
});