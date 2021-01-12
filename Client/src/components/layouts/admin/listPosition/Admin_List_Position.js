import React from "react";
import { withRouter } from "react-router";

import { useSelector } from "react-redux";
import Position_Item from "./Position_Item";

function List_Position_Component( ) {
  const jobs = useSelector((state) => state.GetAllReducer.position);

  let onShowListProduct = (data) => {
    let result = null;
    if (data) {
      result = data.map((ele, index) => {
        return <Position_Item index={index} ele={ele} key={ele._id} />;
      });
    }
    return result;
  };
  return (
    <div className="right__content">
      <div className="right__title">DashBorad</div>
      <p className="right__desc">ALL POSITION</p>
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
export default withRouter(List_Position_Component);
