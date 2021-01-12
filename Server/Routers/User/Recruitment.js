const express = require('express');
const recruitmentAPIController = require('../../APIs/User/Recruitment');

const recruitmentAPIRouter = express.Router();

recruitmentAPIRouter.get('/allrecruitment', recruitmentAPIController.allRecruitment);
recruitmentAPIRouter.get('/allrecruitmentByPost/:id',recruitmentAPIController.allRecruitmentByPost)

module.exports = recruitmentAPIRouter;