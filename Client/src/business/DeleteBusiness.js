import { DATA_STATUS } from "../utils/configs";
import {
  DeletePostERP,
  DeleteCategoryERP,
  DeleteLocationERP,
  DeletePositionERP,
} from "../services/ResDeleteService";

const DeletePostBusiness = (id) => {
  try {
    return new Promise(async (res, rej) => {
      let deletePost = await DeletePostERP(id);

      if (deletePost.status === DATA_STATUS.SUCCESS) {
        res({
          data: deletePost.data.data.payload,
          status: DATA_STATUS.SUCCESS,
        });
      } else {
        rej(deletePost);
      }
    });
  } catch (error) {
    error({
      data: [],
      status: DATA_STATUS.FAILED,
    });
  }
};

const DeleteCategoryBusiness = (id) => {
  try {
    return new Promise(async (res, rej) => {
      let deleteCategory = await DeleteCategoryERP(id);

      if (deleteCategory.status === DATA_STATUS.SUCCESS) {
        res({
          data: deleteCategory.data.data.payload,
          status: DATA_STATUS.SUCCESS,
        });
      } else {
        rej(deleteCategory);
      }
    });
  } catch (error) {
    error({
      data: [],
      status: DATA_STATUS.FAILED,
    });
  }
};

const DeletePositionBusiness = (id) => {
  try {
    return new Promise(async (res, rej) => {
      let deletePosition = await DeletePositionERP(id);

      if (deletePosition.status === DATA_STATUS.SUCCESS) {
        res({
          data: deletePosition.data.data.payload,
          status: DATA_STATUS.SUCCESS,
        });
      } else {
        rej(deletePosition);
      }
    });
  } catch (error) {
    error({
      data: [],
      status: DATA_STATUS.FAILED,
    });
  }
};

const DeleteLocationBusiness = (id) => {
  try {
    return new Promise(async (res, rej) => {
      let deleteLocation = await DeleteLocationERP(id);

      if (deleteLocation.status === DATA_STATUS.SUCCESS) {
        res({
          data: deleteLocation.data.data.payload,
          status: DATA_STATUS.SUCCESS,
        });
      } else {
        rej(deleteLocation);
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
  DeletePostBusiness,
  DeleteCategoryBusiness,
  DeleteLocationBusiness,
  DeletePositionBusiness,
};
