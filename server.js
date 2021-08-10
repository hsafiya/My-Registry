// import  general dependencies
const path = require('path');
const express = require('express');
const session = require('express-session');
const sequelize = require("./config/connection");

// assign variables to start express and set the port
const app = express();
const PORT = process.env.PORT || 3001;

// set up session store
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const sess = {
    secret: process.env.SECRET,
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};
app.use(session(sess));



// add midlleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// set up the routes
app.use(require('./controllers/'));

// sync sequelize with the server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`
    Now listening on PORT ${PORT}!`));
});