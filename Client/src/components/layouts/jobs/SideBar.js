import React from "react";
import "./SideBar.scss";
import { DATA_STATUS } from "../../../utils/configs";

//redux
import { useSelector } from "react-redux";

//API Business
import {
  GetByCategoryBusiness,
  GetByPositionBusiness,
} from "../../../business/commonBusiness/GetByBusiness";
import { GetAllPostBusiness } from "../../../business/commonBusiness/GetAllBusiness";

//redux
import { useDispatch } from "react-redux";
import {
  getPostByCategory,
  getPostByPosition,
  getAllJob,
} from "../../../redux/action/GetAllAction";

function SideBar() {
  //Value on REDUCER
  const categories = useSelector((state) => state.GetAllReducer.categories);
  const position = useSelector((state) => state.GetAllReducer.position);
  const dispatch = useDispatch();

  //checked on Category
  const onCategory = (event, item) => {
    let isChecking = event.target.checked;
    if (isChecking) {
      console.log(item._id);
      GetByCategory(item._id);
    } else {
      GetAllPost();
    }
  };

  //checked on POSITION
  const onPosition = (event, item) => {
    let isChecking = event.target.checked;
    if (isChecking) {
      console.log(item._id);
      GetByPosition(item._id);
    } else {
      GetAllPost();
    }
  };

  //Get post by CATEGORY
  const GetByCategory = async (id) => {
    await GetByCategoryBusiness(id).then((response) => {
      if (response.status === DATA_STATUS.SUCCESS) {
        const byCategory = response.data;
        console.log("byCategory  =>", byCategory);
        dispatch(getPostByCategory(byCategory));
      }
    });
  };

  // Get post by POSITION
  const GetByPosition = async (id) => {
    await GetByPositionBusiness(id).then((response) => {
      if (response.status === DATA_STATUS.SUCCESS) {
        const byPosition = response.data;
        console.log("byPosition  =>", byPosition);
        dispatch(getPostByPosition(byPosition));
      }
    });
  };

  // Get ALL POST
  const GetAllPost = async () => {
    await GetAllPostBusiness().then((response) => {
      if (response.status === DATA_STATUS.SUCCESS) {
        const allPost = response.data;
        dispatch(getAllJob(allPost));
      }
    });
  };

  return (
    <div className="sidebar">
      <div className="sidebar__box">
        <div className="cate">
          <p className="cate--title">Loại công việc</p>
          <div className="cate--list">
            {categories.map((item) => {
              return (
                <div className="check-box" key={item._id}>
                  <input
                    className="inp-cbx"
                    id={item._id}
                    type="checkbox"
                    onChange={(event) => onCategory(event, item)}
                  />
                  <label className="cbx" htmlFor={item._id}>
                    <span>
                      <svg width="12px" height="10px" viewBox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <small>{item.title}</small>
                  </label>
                </div>
              );
            })}
          </div>
        </div>

        <div className="cate">
          <p className="cate--title">Chuyên môn</p>

          <div className="cate--list">
            {position.map((item) => {
              return (
                <div className="check-box" key={item._id}>
                  <input
                    className="inp-cbx"
                    id={item._id}
                    type="checkbox"
                    onChange={(event) => {
                      onPosition(event, item);
                    }}
                  />
                  <label className="cbx" htmlFor={item._id}>
                    <span>
                      <svg width="12px" height="10px" viewBox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <small>{item.title}</small>
                  </label>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
