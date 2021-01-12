import { NAME_PAGE } from "../NameAction";

//Get POST
export const getAllJob = (jobs) => {
  return {
    type: NAME_PAGE.ALLJOB_PAGE.GET_ALL_JOB,
    payload: { jobs },
  };
};

export const getPostByCategory = (jobs) => {
  return {
    type: NAME_PAGE.ALLJOB_PAGE.GET_POST_BY_CATEGORY,
    payload: { jobs },
  };
};

export const getPostByPosition = (jobs) => {
  return {
    type: NAME_PAGE.ALLJOB_PAGE.GET_POST_BY_POSITION,
    payload: { jobs },
  };
};

export const getPostByLocation = (jobs) => {
  return {
    type: NAME_PAGE.ALLJOB_PAGE.GET_POST_BY_LOCATION,
    payload: { jobs },
  };
};

//Get all item in SIDEBAR and TOOL
export const getAllPosition = (position) => {
  return {
    type: NAME_PAGE.ALLJOB_PAGE.GET_ALL_POSITION,
    payload: { position },
  };
};

export const getAllLocation = (location) => {
  return {
    type: NAME_PAGE.ALLJOB_PAGE.GET_ALL_LOCATION,
    payload: { location },
  };
};

export const getAllCategory = (categories) => {
  return {
    type: NAME_PAGE.ALLJOB_PAGE.GET_ALL_CATEGORY,
    payload: { categories },
  };
};

export const getAllUser = (user) => {
  return {
    type: NAME_PAGE.ALLJOB_PAGE.GET_ALL_USER,
    payload: { user },
  };
};

//Get DETAIL of 1 job
export const getJobDetail = (jobDetail) => {
  return {
    type: NAME_PAGE.JOB_DETAIL_PAGE.GET_JOB_DETAIL,
    payload: { jobDetail },
  };
};
