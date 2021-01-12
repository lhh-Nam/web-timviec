import { DATA_STATUS } from "../../utils/configs";
import {
  GetAllPostBusiness,
  GetAllCategoryBusiness,
  GetAllPositionBusiness,
  GetAllLocationBusiness,
  GetAllUserBusiness,
} from "../../business/commonBusiness/GetAllBusiness";

//redux
import { useDispatch } from "react-redux";
import {
  getAllJob,
  getAllPosition,
  getAllLocation,
  getAllCategory,
  getAllUser,
} from "../../redux/action/GetAllAction";

const GetAllPost = async () => {
  const dispacth = useDispatch();
  await GetAllPostBusiness().then((response) => {
    if (response.status === DATA_STATUS.SUCCESS) {
      const allPost = response.data;
      dispacth(getAllJob(allPost));
    }
  });
};

const GetAllCategory = async () => {
  const dispacth = useDispatch();
  await GetAllCategoryBusiness().then((response) => {
    if (response.status === DATA_STATUS.SUCCESS) {
      const allCategory = response.data;
      dispacth(getAllCategory(allCategory));
    }
  });
};

const GetAllPosition = async () => {
  const dispacth = useDispatch();
  await GetAllPositionBusiness().then((response) => {
    if (response.status === DATA_STATUS.SUCCESS) {
      const allPosition = response.data;
      //console.log(allPosition);
      dispacth(getAllPosition(allPosition));
    }
  });
};

const GetAllLocation = async () => {
  const dispacth = useDispatch();
  await GetAllLocationBusiness().then((response) => {
    if (response.status === DATA_STATUS.SUCCESS) {
      const allLocation = response.data;
      //console.log("allLocation", allLocation);
      dispacth(getAllLocation(allLocation));
    }
  });
};

const GetAllUser = async () => {
  const dispacth = useDispatch();
  await GetAllUserBusiness().then((response) => {
    if (response.status === DATA_STATUS.SUCCESS) {
      const allUser = response.data;
      dispacth(getAllUser(allUser));
    }
  });
};

export {
  GetAllPost,
  GetAllCategory,
  GetAllPosition,
  GetAllLocation,
  GetAllUser,
};
