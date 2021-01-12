const express = require('express')
const userAPIRouter = express.Router()

const userAPIService = require('./User')
const locationAPIService = require('./Location')
const postAPIService = require('./Post')
const categoryAPIService = require('./Category')
const positionAPIService = require('./Position')
const commentAPIService = require('./Comment')
const recruitmentAPIService = require('./Recruitment')

userAPIRouter.use('/',userAPIService);
userAPIRouter.use('/location',locationAPIService);
userAPIRouter.use('/post',postAPIService)
userAPIRouter.use('/category',categoryAPIService)
userAPIRouter.use('/position', positionAPIService)
userAPIRouter.use('/comment',commentAPIService)
userAPIRouter.use('/recruitment',recruitmentAPIService)

module.exports = userAPIRouter