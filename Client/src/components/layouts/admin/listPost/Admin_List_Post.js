import React,{useState,useEffect} from "react";
import { withRouter } from "react-router";
import Post_Item from "./Post_Item";
import { useSelector } from "react-redux";

function List_Post_Component( ) {
  const jobs = useSelector((state) => state.GetAllReducer.jobs);
  
  let onShowListProduct = (data) => {
    let result = null;
    if (data) {
      result = data.map((ele, index) => {
        return <Post_Item index={index} ele={ele} key={ele._id} />;
      });
    }
    return result;
  };
  return (
    <div className="right__content">
      <div className="right__title">DashBorad</div>
      <p className="right__desc">ALL POST</p>
      <div className="right__table">
        <div className="right__tableWrapper">
          <table>
            <thead>
              <tr>
                <th>STT</th>
                <th>Title</th>
                <th>Description</th>
                <th>Requirement</th>
                <th>Category</th>
                <th>Quantity</th>
                <th>Position</th>
                <th>Location</th>
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
export default withRouter(List_Post_Component);
