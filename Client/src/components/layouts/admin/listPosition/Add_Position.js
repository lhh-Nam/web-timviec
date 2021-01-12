import React, { useRef, useState } from "react";
import { withRouter } from "react-router";
import { useDispatch } from "react-redux";

import { AddPositionBusiness } from "../../../../business/AddBusiness";
import { DATA_STATUS } from "../../../../utils/configs";
import { getAllPosition } from "../../../../redux/action/GetAllAction";
import { GetAllPositionBusiness } from "../../../../business/commonBusiness/GetAllBusiness";

function Add_Position({ history }) {
  const [title, setTitle] = useState("");
  const dispacth = useDispatch();

  let onHandleSubmit = async (e) => {
    e.preventDefault();

    await AddPositionBusiness(title).then((response) => {
      if (response.status === DATA_STATUS.SUCCESS) {
        const addPosition = response.data;
        console.log(addPosition);
        GetAllPosition();
        history.push("/admin-position");
      }
    });
  };

  const GetAllPosition = async () => {
    await GetAllPositionBusiness().then((response) => {
      if (response.status === DATA_STATUS.SUCCESS) {
        const allPosition = response.data;
        dispacth(getAllPosition(allPosition));
      }
    });
  };
  return (
    <div className="right__content">
      <div className="right__title">DashBoard</div>
      <p className="right__desc">Add Position</p>
      <div className="right__formWrapper">
        <form>
          <div className="right__inputWrapper">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              placeholder="Title..."
            />
          </div>
          <button className="btn" onClick={onHandleSubmit}>
            Add
          </button>
        </form>
      </div>
    </div>
  );
}
export default withRouter(Add_Position);
