const express = require('express');
const locationAPIController = require('../../APIs/User/Location');

const locationAPIRouter = express.Router();

locationAPIRouter.get('/listLocation', locationAPIController.listLocation);
locationAPIRouter.post('/create',locationAPIController.createLocation)
locationAPIRouter.post('/deleteLocation/:id',locationAPIController.deleteLocation)
module.exports = locationAPIRouter;