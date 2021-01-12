import { DATA_STATUS } from "../../utils/configs";
import {
  GetAllPostERP,
  GetAllCategoryERP,
  GetAllPositionERP,
  GetAllLocationERP,
  GetAllUserERP,
} from "../../services/ResGetAllService";

/* All POST */
const GetAllPostBusiness = () => {
  try {
    return new Promise(async (res, rej) => {
      let allPost = await GetAllPostERP();

      if (allPost.status === DATA_STATUS.SUCCESS) {
        let customData = allPost.data.data.payload;

        res({
          data: customData,
          status: DATA_STATUS.SUCCESS,
        });
      } else {
        rej(allPost);
      }
    });
  } catch (error) {
    error({
      data: [],
      status: DATA_STATUS.FAILED,
    });
  }
};

/* all CATEGORY */
const GetAllCategoryBusiness = () => {
  try {
    return new Promise(async (res, rej) => {
      let allCategory = await GetAllCategoryERP();

      if (allCategory.status === DATA_STATUS.SUCCESS) {
        let customData = allCategory.data.data.payload;

        res({
          data: customData,
          status: DATA_STATUS.SUCCESS,
        });
      } else {
        rej(allCategory);
      }
    });
  } catch (error) {
    error({
      data: [],
      status: DATA_STATUS.FAILED,
    });
  }
};

/* all POSITION */
const GetAllPositionBusiness = () => {
  try {
    return new Promise(async (res, rej) => {
      let allPosition = await GetAllPositionERP();

      if (allPosition.status === DATA_STATUS.SUCCESS) {
        let customData = allPosition.data.data.payload;

        res({
          data: customData,
          status: DATA_STATUS.SUCCESS,
        });
      } else {
        rej(allPosition);
      }
    });
  } catch (error) {
    error({
      data: [],
      status: DATA_STATUS.FAILED,
    });
  }
};

/* all LOCATION */
const GetAllLocationBusiness = () => {
  try {
    return new Promise(async (res, rej) => {
      let allLocation = await GetAllLocationERP();

      if (allLocation.status === DATA_STATUS.SUCCESS) {
        let customData = allLocation.data.data.payload;

        res({
          data: customData,
          status: DATA_STATUS.SUCCESS,
        });
      } else {
        rej(allLocation);
      }
    });
  } catch (error) {
    error({
      data: [],
      status: DATA_STATUS.FAILED,
    });
  }
};

/* all USER */
const GetAllUserBusiness = () => {
  try {
    return new Promise(async (res, rej) => {
      let allUser = await GetAllUserERP();

      if (allUser.status === DATA_STATUS.SUCCESS) {
        let customData = allUser.data.data.payload;

        res({
          data: customData,
          status: DATA_STATUS.SUCCESS,
        });
      } else {
        rej(allUser);
      }
    });
  } catch (error) {
    error({
      data: [],
      status: DATA_STATUS.FAILED,
    });
  }
};

export {
  GetAllPostBusiness,
  GetAllCategoryBusiness,
  GetAllPositionBusiness,
  GetAllLocationBusiness,
  GetAllUserBusiness,
};
