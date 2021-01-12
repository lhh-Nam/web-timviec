import React, { useRef, useState } from "react";
import { withRouter } from "react-router";
import { useDispatch } from "react-redux";

import { AddLocationBusiness } from "../../../../business/AddBusiness";
import { DATA_STATUS } from "../../../../utils/configs";
import { getAllLocation } from "../../../../redux/action/GetAllAction";
import { GetAllLocationBusiness } from "../../../../business/commonBusiness/GetAllBusiness";

function Add_Location({ history }) {
  const [title, setTitle] = useState("");
  const dispacth = useDispatch();

  let onHandleSubmit = async (e) => {
    e.preventDefault();
    await AddLocationBusiness(title).then((response) => {
      if (response.status === DATA_STATUS.SUCCESS) {
        const addLocation = response.data;
        console.log(addLocation);
        GetAllLocation();
        history.push("/admin-location");
      }
    });
  };

  const GetAllLocation = async () => {
    await GetAllLocationBusiness().then((response) => {
      if (response.status === DATA_STATUS.SUCCESS) {
        const allLocation = response.data;
        dispacth(getAllLocation(allLocation));
      }
    });
  };

  return (
    <div className="right__content">
      <div className="right__title">DashBoard</div>
      <p className="right__desc">Add Location</p>
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
export default withRouter(Add_Location);
