const express = require("express");
const postAPIController = require("../../APIs/User/Post");

const postAPIRouter = express.Router();

postAPIRouter.get("/listPost", postAPIController.listPost);
postAPIRouter.get(
  "/listPostSortByMaxSalary",
  postAPIController.listPostSortByMaxSalary
);
postAPIRouter.get(
  "/listPostSortByMinSalary",
  postAPIController.listPostSortByMinSalary
);

postAPIRouter.get(
  "/listPostByLocation/:idLocation",
  postAPIController.listPostByLocation
);
postAPIRouter.get(
  "/listPostByPosition/:idPosition",
  postAPIController.listPostByPosition
);
postAPIRouter.get(
  "/listPostByCategory/:idCategory",
  postAPIController.listPostByCategory
);
postAPIRouter.post(
  '/deletePost/:id',
  postAPIController.deletePost
)
module.exports = postAPIRouter;
