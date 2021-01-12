import { DATA_STATUS } from "../utils/configs";
import {
  AddCategoryERP,
  AddLocationERP,
  AddPositionERP,
} from "../services/ResAddService";

const AddCategoryBusiness = (title) => {
  try {
    return new Promise(async (res, rej) => {
      let addCategory = await AddCategoryERP(title);

      if (addCategory.status === DATA_STATUS.SUCCESS) {
        res({
          data: addCategory.data.data.payload,
          status: DATA_STATUS.SUCCESS,
        });
      } else {
        rej(addCategory);
      }
    });
  } catch (error) {
    error({
      data: [],
      status: DATA_STATUS.FAILED,
    });
  }
};

const AddLocationBusiness = (title) => {
  try {
    return new Promise(async (res, rej) => {
      let addLocation = await AddLocationERP(title);

      if (addLocation.status === DATA_STATUS.SUCCESS) {
        res({
          data: addLocation.data.data.payload,
          status: DATA_STATUS.SUCCESS,
        });
      } else {
        rej(addLocation);
      }
    });
  } catch (error) {
    error({
      data: [],
      status: DATA_STATUS.FAILED,
    });
  }
};

const AddPositionBusiness = (title) => {
  try {
    return new Promise(async (res, rej) => {
      let addPosition = await AddPositionERP(title);

      if (addPosition.status === DATA_STATUS.SUCCESS) {
        res({
          data: addPosition.data.data.payload,
          status: DATA_STATUS.SUCCESS,
        });
      } else {
        rej(addPosition);
      }
    });
  } catch (error) {
    error({
      data: [],
      status: DATA_STATUS.FAILED,
    });
  }
};

export { AddCategoryBusiness, AddLocationBusiness, AddPositionBusiness };
