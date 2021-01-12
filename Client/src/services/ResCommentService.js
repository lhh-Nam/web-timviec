import { GetService } from "./Services";
import { DATA_STATUS, DOMAIN } from "../utils/configs";

const CommentERP = (id) => {
  console.log("Login ERP");
  const url = `${DOMAIN.URL}/user/comment/allCommentByPost/${id}`;

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

export { CommentERP };
