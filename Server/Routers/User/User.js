const express = require('express');
const userAPIController = require('../../APIs/User/User');
const auth = require('../../Middlewares/userAuth.js');

const userAPIRouter = express.Router();

userAPIRouter.post('/register', userAPIController.register);
userAPIRouter.post('/login', userAPIController.login)
userAPIRouter.get('/profile', auth, userAPIController.getProfile)
userAPIRouter.post('/postRecruitment', auth, userAPIController.postRecruitment)
userAPIRouter.post('/employerPostRecruitment', auth, userAPIController.employerPost)
userAPIRouter.get('/allUser', userAPIController.listUser)
module.exports = userAPIRouter;