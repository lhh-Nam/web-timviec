const express = require('express');
const positionAPIController = require('../../APIs/User/Position');

const positionAPIRouter = express.Router();

positionAPIRouter.get('/listPosition', positionAPIController.listPosition);
positionAPIRouter.post('/create',positionAPIController.createPosition)
positionAPIRouter.post('/deletePosition/:id',positionAPIController.deletePosition)

module.exports = positionAPIRouter;