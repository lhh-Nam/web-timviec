import { DATA_STATUS } from "../../utils/configs";

//Business
import {
  GetMinSalaryBusiness,
  GetMaxSalaryBusiness,
} from "../../business/commonBusiness/GetRangeBusiness";

import { useDispatch } from "react-redux";
import { getAllJob } from "../../redux/action/GetAllAction";

const GetMinSalary = async () => {
  const dispatch = useDispatch();

  await GetMinSalaryBusiness().then((response) => {
    if (response.status === DATA_STATUS.SUCCESS) {
      const minSalary = response.data;
      dispatch(getAllJob(minSalary));
    }
  });
};

const GetMaxSalary = async () => {
  const dispatch = useDispatch();

  await GetMaxSalaryBusiness().then((response) => {
    if (response.status === DATA_STATUS.SUCCESS) {
      const maxSalary = response.data;
      dispatch(getAllJob(maxSalary));
    }
  });
};

export { GetMinSalary, GetMaxSalary };
