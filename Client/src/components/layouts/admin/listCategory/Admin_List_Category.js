import React from "react";
import { withRouter } from "react-router";
import Category_Item from "./Category_Item";

import { useSelector } from "react-redux";

function List_Category_Component() {
  const category = useSelector((state) => state.GetAllReducer.categories);
  let onShowListProduct = (data) => {
    let result = null;
    if (data) {
      result = data.map((ele, index) => {
        return <Category_Item index={index} ele={ele} key={ele._id} />;
      });
    }
    return result;
  };
  return (
    <div className="right__content">
      <div className="right__title">DashBorad</div>
      <p className="right__desc">ALL CATEGORY</p>
      <div className="right__table">
        <div className="right__tableWrapper">
          <table>
            <thead>
              <tr>
                <th>STT</th>
                <th>Title</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>{onShowListProduct(category)}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
export default withRouter(List_Category_Component);
