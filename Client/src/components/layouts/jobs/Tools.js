import React, { useState } from "react";
import "./Tools.scss";

//Icons
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import ViewModuleSharpIcon from "@material-ui/icons/ViewModuleSharp";

//Business
import {
  GetMinSalaryBusiness,
  GetMaxSalaryBusiness,
} from "../../../business/commonBusiness/GetRangeBusiness";

//config
import { DATA_STATUS } from "../../../utils/configs";

//redux
import { useDispatch } from "react-redux";
import { getAllJob } from "../../../redux/action/GetAllAction";

//business API
import { GetAllPostBusiness } from "../../../business/commonBusiness/GetAllBusiness";

function Tools() {
  const [notificate, setNotificate] = useState(false);
  const dispatch = useDispatch();

  function handleNotificate() {
    setNotificate(!notificate);
  }

  const onSelect = (e) => {
    let value = e.target.value;
    if (value === "1") {
      GetMinSalary();
    } else if (value === "2") {
      GetMaxSalary();
    } else {
      GetAllPost();
    }
  };

  /* MIN salary API */
  const GetMinSalary = async () => {
    await GetMinSalaryBusiness().then((response) => {
      if (response.status === DATA_STATUS.SUCCESS) {
        const minSalary = response.data;
        dispatch(getAllJob(minSalary));
      }
    });
  };

  /* MAX salary API */
  const GetMaxSalary = async () => {
    await GetMaxSalaryBusiness().then((response) => {
      if (response.status === DATA_STATUS.SUCCESS) {
        const maxSalary = response.data;
        dispatch(getAllJob(maxSalary));
      }
    });
  };

  const GetAllPost = async () => {
    await GetAllPostBusiness().then((response) => {
      if (response.status === DATA_STATUS.SUCCESS) {
        const allPost = response.data;
        dispatch(getAllJob(allPost));
      }
    });
  };

  return (
    <div className="tools">
      <div className="notificate">
        <button
          onClick={handleNotificate}
          className={notificate ? "active" : ""}
        >
          <NotificationsNoneIcon />
        </button>
        <small>Tạo thông báo tìm kiếm?</small>
      </div>

      <div className="sort">
        <p>Sắp xếp theo:</p>
        <select
          onClick={(event) => {
            onSelect(event);
          }}
        >
          <option value="0">Sắp xếp</option>
          <option value="1">Lương tăng dần</option>
          <option value="2">Lương giảm dần</option>
        </select>
      </div>

      <div className="another">
        <button>
          <FormatListBulletedIcon />
        </button>

        <button>
          <ViewModuleSharpIcon />
        </button>
      </div>
    </div>
  );
}

export default Tools;
