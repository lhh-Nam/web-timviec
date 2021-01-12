import React from "react";
import deleteIcon from "../../../../assets/assets/icon-trash-black.svg";
import editIcon from "../../../../assets/assets/icon-edit.svg";

import { withRouter } from "react-router";

import { useDispatch } from "react-redux";
import { DeleteLocationBusiness } from "../../../../business/DeleteBusiness";
import { GetAllLocationBusiness } from "../../../../business/commonBusiness/GetAllBusiness";
import { DATA_STATUS } from "../../../../utils/configs";
import { getAllLocation } from "../../../../redux/action/GetAllAction";

function Location_Item({ index, ele, history }) {
  const dispacth = useDispatch();

  const onDeleteLocation = async (id) => {
    await DeleteLocationBusiness(id).then((response) => {
      if (response.status === DATA_STATUS.SUCCESS) {
        const deleteLocation = response.data;
        GetAllLocation();
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
    <tr key={index}>
      <td data-label="STT">{index + 1}</td>
      <td data-label="Title">{ele.title}</td>
      <td data-label="Edit" className="right__iconTable">
        <a>
          <img src={editIcon} alt="" />
        </a>
      </td>
      <td data-label="Delete" className="right__iconTable">
        <a onClick={() => onDeleteLocation(ele._id)}>
          <img src={deleteIcon} alt="" />
        </a>
      </td>
    </tr>
  );
}
export default withRouter(Location_Item);
