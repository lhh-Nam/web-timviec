import { NAME_PAGE } from "../NameAction";
import { DATA_STATUS } from "../../utils/configs";

const initState = {
  user: {
    success: "",
    token: "",
  },
  status: DATA_STATUS.NONE,
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case NAME_PAGE.USER_LOGIN_PAGE.LOGIN:
      return {
        ...state,
        user: action.payload.user,
        status: DATA_STATUS.SUCCESS,
      };

    case NAME_PAGE.USER_LOGIN_PAGE.LOGOUT:
      return {
        user: "",
        status: DATA_STATUS.NONE,
      };

    default:
      return state;
  }
};

export default reducer;
