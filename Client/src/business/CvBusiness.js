import { DATA_STATUS } from "../utils/configs";
import { CvERP } from "../services/ResCvService";

const CvBusiness = (id, CV) => {
  try {
    return new Promise(async (res, rej) => {
      let cv = await CvERP(id, CV);

      if (cv.status === DATA_STATUS.SUCCESS) {
        res({
          data: cv,
          status: DATA_STATUS.SUCCESS,
        });
      } else {
        rej(cv);
      }
    });
  } catch (error) {
    error({
      data: [],
      status: DATA_STATUS.FAILED,
    });
  }
};

export { CvBusiness };
