import React, { useRef, useState } from "react";
import { withRouter } from "react-router";
import { useDispatch } from "react-redux";
import { AddCategoryBusiness } from "../../../../business/AddBusiness";
import { DATA_STATUS } from "../../../../utils/configs";
import { getAllCategory } from "../../../../redux/action/GetAllAction";
import { GetAllCategoryBusiness } from "../../../../business/commonBusiness/GetAllBusiness";

function Add_Category({ history }) {
  const [title, setTitle] = useState("");
  const dispacth = useDispatch();

  let onHandleSubmit = async (e) => {
    e.preventDefault();

    await AddCategoryBusiness(title).then((response) => {
      if (response.status === DATA_STATUS.SUCCESS) {
        const addCategory = response.data;
        console.log(addCategory);
        GetAllCategory();
        history.push("/admin-category");
      }
    });
  };

  const GetAllCategory = async () => {
    await GetAllCategoryBusiness().then((response) => {
      if (response.status === DATA_STATUS.SUCCESS) {
        const allCategory = response.data;
        dispacth(getAllCategory(allCategory));
      }
    });
  };

  return (
    <div className="right__content">
      <div className="right__title">DashBoard</div>
      <p className="right__desc">Add Category</p>
      <div className="right__formWrapper">
        <form>
          <div className="right__inputWrapper">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              placeholder="Title..."
              onChange={(e) => {
                setTitle(e.target.value);
              }}
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
export default withRouter(Add_Category);
