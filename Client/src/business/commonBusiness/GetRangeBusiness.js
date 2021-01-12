import { DATA_STATUS } from "../../utils/configs";
import {
  GetMinSalaryERP,
  GetMaxSalaryERP,
} from "../../services/ResGetRangeService";

/* MIN salary */
const GetMinSalaryBusiness = () => {
  try {
    return new Promise(async (res, rej) => {
      let minSalary = await GetMinSalaryERP();

      if (minSalary.status === DATA_STATUS.SUCCESS) {
        let customData = minSalary.data.data.payload;

        res({
          data: customData,
          status: DATA_STATUS.SUCCESS,
        });
      } else {
        rej(minSalary);
      }
    });
  } catch (error) {
    error({
      data: [],
      status: DATA_STATUS.FAILED,
    });
  }
};

/* MAX salary */
const GetMaxSalaryBusiness = () => {
  try {
    return new Promise(async (res, rej) => {
      let maxSalary = await GetMaxSalaryERP();

      if (maxSalary.status === DATA_STATUS.SUCCESS) {
        let customData = maxSalary.data.data.payload;

        res({
          data: customData,
          status: DATA_STATUS.SUCCESS,
        });
      } else {
        rej(maxSalary);
      }
    });
  } catch (error) {
    error({
      data: [],
      status: DATA_STATUS.FAILED,
    });
  }
};

export { GetMinSalaryBusiness, GetMaxSalaryBusiness };
