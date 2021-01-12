import { GetService } from "./Services";
import { DATA_STATUS, DOMAIN } from "../utils/configs";

const GetByCategoryERP = (id) => {
  console.log("Login ERP");
  const url = `${DOMAIN.URL}/user/post/listPostByCategory/${id}`;

  return new Promise((res, rej) => {
    GetService(url)
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

const GetByPositionERP = (id) => {
  console.log("Login ERP");
  const url = `${DOMAIN.URL}/user/post/listPostByPosition/${id}`;

  return new Promise((res, rej) => {
    GetService(url, {})
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

const GetByLocationERP = (id) => {
  console.log("Login ERP");
  const url = `${DOMAIN.URL}/user/post/listPostByLocation/${id}`;

  return new Promise((res, rej) => {
    GetService(url)
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

export { GetByCategoryERP, GetByPositionERP, GetByLocationERP };
