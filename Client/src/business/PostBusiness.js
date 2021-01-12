import { DATA_STATUS } from "../utils/configs";
import { CreatePostERP } from "../services/ResPostService";

const CreatePostBusiness = (
  title,
  category,
  position,
  location,
  description,
  requirement,
  benefit,
  minSalary,
  maxSalary,
  quantity,
  selectedDate
) => {
  try {
    return new Promise(async (res, rej) => {
      let createPost = await CreatePostERP(
        title,
        category,
        position,
        location,
        description,
        requirement,
        benefit,
        minSalary,
        maxSalary,
        quantity,
        selectedDate
      );

      if (createPost.status === DATA_STATUS.SUCCESS) {
        res({
          data: createPost,
          status: DATA_STATUS.SUCCESS,
        });
      } else {
        rej(createPost);
      }
    });
  } catch (error) {
    error({
      data: [],
      status: DATA_STATUS.FAILED,
    });
  }
};

export { CreatePostBusiness };
