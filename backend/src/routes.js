const express = require("express");
const SessionController = require("./controllers/SessionController");
const routes = express.Router();

routes.post('/addcurse', SessionController.update);
routes.post('/delete', SessionController.destroy);
routes.post('/register', SessionController.store);

module.exports = routes;