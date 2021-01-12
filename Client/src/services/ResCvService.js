import { PostService } from "./Services";
import { DATA_STATUS, DOMAIN } from "../utils/configs";

const CvERP = (id, CV) => {
  const url = `/user/postRecruitment`;

  return new Promise((res, rej) => {
    PostService(url, {
      post: id,
      cv: CV,
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

export { CvERP };
