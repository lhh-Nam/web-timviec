import { GetService } from "./Services";
import { DATA_STATUS, DOMAIN } from "../utils/configs";

const GetMinSalaryERP = () => {
  console.log("Login ERP");
  const url = `${DOMAIN.URL}/user/post/listPostSortByMinSalary`;

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

const GetMaxSalaryERP = () => {
  console.log("Login ERP");
  const url = `${DOMAIN.URL}/user/post/listPostSortByMaxSalary`;

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

export { GetMinSalaryERP, GetMaxSalaryERP };
