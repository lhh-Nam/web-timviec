import React from "react";
import { withRouter } from "react-router";

import { useSelector } from "react-redux";
import Location_Item from "./Location_Item";

function List_Location_Component( ) {
  const jobs = useSelector((state) => state.GetAllReducer.location);

  let onShowListProduct = (data) => {
    let result = null;
    if (data) {
      result = data.map((ele, index) => {
        return <Location_Item index={index} ele={ele} key={ele._id} />;
      });
    }
    return result;
  };
  return (
    <div className="right__content">
      <div className="right__title">DashBorad</div>
      <p className="right__desc">ALL LOCATION</p>
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
            <tbody>{onShowListProduct(jobs)}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
export default withRouter(List_Location_Component);
