import { GetService } from "./Services";
import { DATA_STATUS, DOMAIN } from "../utils/configs";

const GetAllPostERP = () => {
  //console.log("Login ERP");
  const url = `${DOMAIN.URL}/user/post/listPost`;
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

const GetAllCategoryERP = () => {
  //console.log("Login ERP");
  const url = `${DOMAIN.URL}/user/category/listcategory`;
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

const GetAllPositionERP = () => {
  //console.log("Login ERP");
  const url = `${DOMAIN.URL}/user/position/listPosition`;
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

const GetAllLocationERP = () => {
  //console.log("Login ERP");
  const url = `${DOMAIN.URL}/user/location/listLocation`;
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

const GetAllUserERP = () => {
  //console.log("Login ERP");
  const url = `${DOMAIN.URL}/user/allUser`;
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

export {
  GetAllPostERP,
  GetAllCategoryERP,
  GetAllPositionERP,
  GetAllLocationERP,
  GetAllUserERP,
};
