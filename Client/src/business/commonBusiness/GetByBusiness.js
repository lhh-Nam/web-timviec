import { DATA_STATUS } from "../../utils/configs";
import {
  GetByCategoryERP,
  GetByPositionERP,
  GetByLocationERP,
} from "../../services/ResGetByService";

/* by CATEGOTY */
const GetByCategoryBusiness = (id) => {
  try {
    return new Promise(async (res, rej) => {
      let byCategory = await GetByCategoryERP(id);

      if (byCategory.status === DATA_STATUS.SUCCESS) {
        let customData = byCategory.data.data.payload;

        res({
          data: customData,
          status: DATA_STATUS.SUCCESS,
        });
      } else {
        rej(byCategory);
      }
    });
  } catch (error) {
    error({
      data: [],
      status: DATA_STATUS.FAILED,
    });
  }
};

/* by CATEGOTY */
const GetByPositionBusiness = (id) => {
  try {
    return new Promise(async (res, rej) => {
      let byPosition = await GetByPositionERP(id);

      if (byPosition.status === DATA_STATUS.SUCCESS) {
        let customData = byPosition.data.data.payload;

        res({
          data: customData,
          status: DATA_STATUS.SUCCESS,
        });
      } else {
        rej(byPosition);
      }
    });
  } catch (error) {
    error({
      data: [],
      status: DATA_STATUS.FAILED,
    });
  }
};

/* by LOCATION */
const GetByLocationBusiness = (id) => {
  try {
    return new Promise(async (res, rej) => {
      let byLocation = await GetByLocationERP(id);
      if (byLocation.status === DATA_STATUS.SUCCESS) {
        let customData = byLocation.data.data.payload;

        res({
          data: customData,
          status: DATA_STATUS.SUCCESS,
        });
      } else {
        rej(byLocation);
      }
    });
  } catch (error) {
    error({
      data: [],
      status: DATA_STATUS.FAILED,
    });
  }
};

export { GetByCategoryBusiness, GetByPositionBusiness, GetByLocationBusiness };
