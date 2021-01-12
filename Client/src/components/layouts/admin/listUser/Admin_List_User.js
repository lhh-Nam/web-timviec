import React from "react";
import { withRouter } from "react-router";
import User_Item from "./User_Item";

import { useSelector } from "react-redux";

function List_User_Component({ product }) {
  const user = useSelector((state) => state.GetAllReducer.user);

  let onShowListProduct = (data) => {
    console.log(data);
    let result = null;
    if (data) {
      result = data.map((ele, index) => {
        return <User_Item index={index} ele={ele} key={ele._id} />;
      });
    }
    return result;
  };
  return (
    <div className="right__content">
      <div className="right__title">DashBorad</div>
      <p className="right__desc">ALL USER</p>
      <div className="right__table">
        <div className="right__tableWrapper">
          <table>
            <thead>
              <tr>
                <th>STT</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Thumbnail</th>
                <th>Address</th>
                <th>Employer</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>{onShowListProduct(user)}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
export default withRouter(List_User_Component);
