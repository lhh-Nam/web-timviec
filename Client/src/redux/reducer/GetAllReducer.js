import { NAME_PAGE } from "../NameAction";
import { DATA_STATUS } from "../../utils/configs";

const initState = {
  jobDetail: "",
  jobs: [],
  position: [],
  location: [],
  categories: [],
  user: [],
  status: DATA_STATUS.NONE,
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    //get POST
    case NAME_PAGE.ALLJOB_PAGE.GET_ALL_JOB:
      return {
        ...state,
        jobs: action.payload.jobs,
        status: DATA_STATUS.SUCCESS,
      };

    case NAME_PAGE.ALLJOB_PAGE.GET_POST_BY_CATEGORY:
      return {
        ...state,
        jobs: action.payload.jobs,
        status: DATA_STATUS.SUCCESS,
      };

    case NAME_PAGE.ALLJOB_PAGE.GET_POST_BY_POSITION:
      return {
        ...state,
        jobs: action.payload.jobs,
        status: DATA_STATUS.SUCCESS,
      };

    case NAME_PAGE.ALLJOB_PAGE.GET_POST_BY_LOCATION:
      return {
        ...state,
        jobs: action.payload.jobs,
        status: DATA_STATUS.SUCCESS,
      };

    //get item in sidebar and tool
    case NAME_PAGE.ALLJOB_PAGE.GET_ALL_LOCATION:
      return {
        ...state,
        location: action.payload.location,
        status: DATA_STATUS.SUCCESS,
      };

    case NAME_PAGE.ALLJOB_PAGE.GET_ALL_POSITION:
      return {
        ...state,
        position: action.payload.position,
        status: DATA_STATUS.SUCCESS,
      };

    case NAME_PAGE.ALLJOB_PAGE.GET_ALL_CATEGORY:
      return {
        ...state,
        categories: action.payload.categories,
        status: DATA_STATUS.SUCCESS,
      };

    case NAME_PAGE.ALLJOB_PAGE.GET_ALL_USER:
      return {
        ...state,
        user: action.payload.user,
        status: DATA_STATUS.SUCCESS,
      };

    //get DETAIL
    case NAME_PAGE.JOB_DETAIL_PAGE.GET_JOB_DETAIL:
      return {
        ...state,
        jobDetail: action.payload.jobDetail,
        status: DATA_STATUS.SUCCESS,
      };

    default:
      return state;
  }
};

export default reducer;
