import React from "react";
import deleteIcon from "../../../../assets/assets/icon-trash-black.svg";
import editIcon from "../../../../assets/assets/icon-edit.svg";
import { withRouter } from "react-router";

import { useDispatch } from "react-redux";
import { DeletePositionBusiness } from "../../../../business/DeleteBusiness";
import { GetAllPositionBusiness } from "../../../../business/commonBusiness/GetAllBusiness";
import { DATA_STATUS } from "../../../../utils/configs";
import { getAllPosition } from "../../../../redux/action/GetAllAction";

function Category_Item({ index, ele, history }) {
  const dispacth = useDispatch();

  const onDeletePosition = async (id) => {
    await DeletePositionBusiness(id).then((response) => {
      if (response.status === DATA_STATUS.SUCCESS) {
        const deletePosition = response.data;
        GetAllPosition();
      }
    });
  };

  const GetAllPosition = async () => {
    await GetAllPositionBusiness().then((response) => {
      if (response.status === DATA_STATUS.SUCCESS) {
        const allPosition = response.data;
        dispacth(getAllPosition(allPosition));
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
        <a onClick={() => onDeletePosition(ele._id)}>
          <img src={deleteIcon} alt="" />
        </a>
      </td>
    </tr>
  );
}
export default withRouter(Category_Item);
