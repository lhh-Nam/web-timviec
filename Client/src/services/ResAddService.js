import { PostService } from "./Services";
import { DATA_STATUS, DOMAIN } from "../utils/configs";

const AddCategoryERP = (title) => {
  const url = `/user/category/create`;

  return new Promise((res, rej) => {
    PostService(url, {
      title: title,
    })
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

const AddLocationERP = (title) => {
  const url = `/user/location/create`;

  return new Promise((res, rej) => {
    PostService(url, {
      title: title,
    })
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

const AddPositionERP = (title) => {
  const url = `/user/position/create`;

  return new Promise((res, rej) => {
    PostService(url, {
      title: title,
    })
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

export { AddCategoryERP, AddLocationERP, AddPositionERP };
