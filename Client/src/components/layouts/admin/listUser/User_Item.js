import React from "react";
import deleteIcon from "../../../../assets/assets/icon-trash-black.svg";
import editIcon from "../../../../assets/assets/icon-edit.svg";

import { useDispatch } from "react-redux";
import { withRouter } from "react-router";
function User_Item({ index, ele, history }) {
  const dispatch = useDispatch();

  console.log(ele.isEmployer);
  let onShowThumbnail = (data) => {
    console.log(data);
    return data
      ? data
      : "https://readvii.com/wp-content/uploads/2020/07/sach-hay-ve-thiet-ke-logo-cover.png";
  };
  return (
    <tr key={index}>
      <td data-label="STT">{index + 1}</td>
      <td data-label="Name">{ele.name}</td>
      <td data-label="Email">{ele.email}</td>
      <td data-label="Phone">{ele.phone}</td>
      <td data-label="Thumbnail">
        <img src={onShowThumbnail(ele.image)} alt=""></img>
      </td>
      <td data-label="Address">{ele.address}</td>
      <td data-label="Employer" className="right__iconTable">
        {/* <a>
          <img src={editIcon} alt="" />
        </a> */}

        {ele.isEmployer ? "True" : "False"}
      </td>
      <td data-label="Online" className="right__iconTable">
        <a>
          <img src={deleteIcon} alt="" />
        </a>
      </td>
    </tr>
  );
}
export default withRouter(User_Item);
