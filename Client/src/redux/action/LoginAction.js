import { NAME_PAGE } from "../NameAction";

export const login = (user) => {
  return {
    type: NAME_PAGE.USER_LOGIN_PAGE.LOGIN,
    payload: { user },
  };
};

export const logout = () => {
  return {
    type: NAME_PAGE.USER_LOGIN_PAGE.LOGOUT,
  };
};
