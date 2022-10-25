const express = require('express');
const api = express();
const routes = require('./router');
const port = 4200

api.use(express.json());
api.use(routes);

api.listen(port, function(){
    console.log(`--> BACKEND is running on port !${port}!. <--`)
});