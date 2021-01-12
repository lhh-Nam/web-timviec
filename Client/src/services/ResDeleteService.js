import { PostService } from "./Services";
import { DATA_STATUS, DOMAIN } from "../utils/configs";

const DeletePostERP = (id) => {
  const url = `/user/post/deletePost/${id}`;

  return new Promise((res, rej) => {
    PostService(url)
      .then((resService) => {
        res({
          data: resService,
          status: DATA_STATUS.SUCCESS,
        });
      })
      .catch((rejService) => {
        res({
          status: DATA_STATUS.FAILED,
          err: rejService,
        });
      });
  });
};

const DeleteCategoryERP = (id) => {
  const url = `/user/category/deleteCategory/${id}`;

  return new Promise((res, rej) => {
    PostService(url)
      .then((resService) => {
        res({
          data: resService,
          status: DATA_STATUS.SUCCESS,
        });
      })
      .catch((rejService) => {
        res({
          status: DATA_STATUS.FAILED,
          err: rejService,
        });
      });
  });
};

const DeletePositionERP = (id) => {
  const url = `/user/position/deletePosition/${id}`;

  return new Promise((res, rej) => {
    PostService(url)
      .then((resService) => {
        res({
          data: resService,
          status: DATA_STATUS.SUCCESS,
        });
      })
      .catch((rejService) => {
        res({
          status: DATA_STATUS.FAILED,
          err: rejService,
        });
      });
  });
};

const DeleteLocationERP = (id) => {
  const url = `/user/location/deleteLocation/${id}`;

  return new Promise((res, rej) => {
    PostService(url)
      .then((resService) => {
        res({
          data: resService,
          status: DATA_STATUS.SUCCESS,
        });
      })
      .catch((rejService) => {
        res({
          status: DATA_STATUS.FAILED,
          err: rejService,
        });
      });
  });
};

export {
  DeletePostERP,
  DeleteCategoryERP,
  DeleteLocationERP,
  DeletePositionERP,
};
