import React from "react";
import deleteIcon from "../../../../assets/assets/icon-trash-black.svg";
import editIcon from "../../../../assets/assets/icon-edit.svg";

import { useDispatch } from "react-redux";
import { DeleteCategoryBusiness } from "../../../../business/DeleteBusiness";
import { GetAllCategoryBusiness } from "../../../../business/commonBusiness/GetAllBusiness";
import { DATA_STATUS } from "../../../../utils/configs";
import { getAllCategory } from "../../../../redux/action/GetAllAction";

import { withRouter } from "react-router";
function Category_Item({ index, ele, history }) {
  const dispacth = useDispatch();

  const onDeleteCategory = async (id) => {
    await DeleteCategoryBusiness(id).then((response) => {
      if (response.status === DATA_STATUS.SUCCESS) {
        const deleteCategory = response.data;
        GetAllCategory();
      }
    });
  };

  const GetAllCategory = async () => {
    await GetAllCategoryBusiness().then((response) => {
      if (response.status === DATA_STATUS.SUCCESS) {
        const allCategory = response.data;
        dispacth(getAllCategory(allCategory));
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
        <a onClick={() => onDeleteCategory(ele._id)}>
          <img src={deleteIcon} alt="" />
        </a>
      </td>
    </tr>
  );
}
export default withRouter(Category_Item);
