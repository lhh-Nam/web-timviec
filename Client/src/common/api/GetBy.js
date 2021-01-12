import { DATA_STATUS } from "../../utils/configs";

//Business
import { GetByCategoryBusiness } from "../../business/commonBusiness/GetByBusiness";

//redux
import { useDispatch } from "react-redux";
import { getPostByCategory } from "../../redux/action/GetAllAction";

const GetByCategory = async (id) => {
  const dispatch = useDispatch();
  await GetByCategoryBusiness(id).then((response) => {
    if (response.status === DATA_STATUS.SUCCESS) {
      const byCategory = response.data;
      console.log("byCategory  =>", byCategory);
      dispatch(getPostByCategory(byCategory));
    }
  });
};

export { GetByCategory };
