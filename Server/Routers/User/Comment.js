const express = require('express');
const commentAPIController = require('../../APIs/User/Comment');

const commentAPIRouter = express.Router();

commentAPIRouter.get('/allComment', commentAPIController.allComment);
commentAPIRouter.get('/allCommentByPost/:id',commentAPIController.commentByProductID)

module.exports = commentAPIRouter;