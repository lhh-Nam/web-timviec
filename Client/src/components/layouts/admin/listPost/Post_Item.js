import React from "react";
import deleteIcon from "../../../../assets/assets/icon-trash-black.svg";
import { withRouter } from "react-router";
import { DeletePostBusiness } from "../../../../business/DeleteBusiness";

import { useDispatch } from "react-redux";
import { DATA_STATUS } from "../../../../utils/configs";
import { GetAllPostBusiness } from "../../../../business/commonBusiness/GetAllBusiness";
import { getAllJob } from "../../../../redux/action/GetAllAction";

function Post_Item({ index, ele, history }) {
  const dispacth = useDispatch();

  const onDelete = async (id) => {
    await DeletePostBusiness(id).then((response) => {
      if (response.status === DATA_STATUS.SUCCESS) {
        const deletePost = response.data;
        console.log("a", deletePost);
        GetAllPost();
      }
    });
  };

  const GetAllPost = async () => {
    await GetAllPostBusiness().then((response) => {
      if (response.status === DATA_STATUS.SUCCESS) {
        const allPost = response.data;
        dispacth(getAllJob(allPost));
      }
    });
  };

  return (
    <tr key={index}>
      <td data-label="STT">{index + 1}</td>
      <td data-label="Title">{ele.title}</td>
      <td data-label="Description">{ele.jobDescription}</td>
      <td data-label="Requirement">{ele.requirement}</td>
      <td data-label="Category">{ele.category ? ele.category.title : ""}</td>
      <td data-label="Quantity">{ele.quantity}</td>
      <td data-label="Position" className="right__iconTable">
        {ele.position ? ele.position.title : ""}
      </td>
      <td data-label="Location" className="right__iconTable">
        {ele.location ? ele.location.title : ""}
      </td>
      <td data-label="Online" className="right__iconTable">
        <a onClick={() => onDelete(ele._id)}>
          <img src={deleteIcon} alt="" />
        </a>
      </td>
    </tr>
  );
}
export default withRouter(Post_Item);
