import { PostService } from "./Services";
import { DATA_STATUS, DOMAIN } from "../utils/configs";

const CreatePostERP = (
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
  const url = `user/employerPostRecruitment`;

  return new Promise((res, rej) => {
    PostService(url, {
      title: title,
      category: category,
      position: position,
      location: location,
      description: description,
      requirement: requirement,
      benefit: benefit,
      minSalary: minSalary,
      maxSalary: maxSalary,
      quantity: quantity,
      duration: selectedDate,
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

export { CreatePostERP };
