const express = require('express');
const categoryAPIController = require('../../APIs/User/Category');

const categoryAPIRouter = express.Router();

categoryAPIRouter.get('/listcategory', categoryAPIController.listCategory);
categoryAPIRouter.post('/create',categoryAPIController.createCategory)
categoryAPIRouter.post('/deleteCategory/:id',categoryAPIController.deleteCategory)

module.exports = categoryAPIRouter;