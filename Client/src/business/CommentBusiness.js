import { DATA_STATUS } from "../utils/configs";
import { CommentERP } from "../services/ResCommentService";

const CommentBusiness = (id) => {
  try {
    return new Promise(async (res, rej) => {
      let comment = await CommentERP(id);

      if (comment.status === DATA_STATUS.SUCCESS) {
        res({
          data: comment.data.data.payload,
          status: DATA_STATUS.SUCCESS,
        });
      } else {
        rej(comment);
      }
    });
  } catch (error) {
    error({
      data: [],
      status: DATA_STATUS.FAILED,
    });
  }
};

export { CommentBusiness };
