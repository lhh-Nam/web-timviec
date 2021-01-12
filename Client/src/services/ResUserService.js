import { PostService } from "./Services";
import { DATA_STATUS, DOMAIN } from "../utils/configs";

const UserLoginERP = (username, password) => {
  const url = `/user/login`;
  return new Promise((res, rej) => {
    PostService(url, {
      userName: username,
      password: password,
    })
      .then((resService) => {
        res({
          data: resService,
          status: DATA_STATUS.SUCCESS,
        });
      })
      .catch((rejService) => {
        res({
          status: DATA_STATUS.FAILED,
          err: rejService,
        });
      });
  });
};

const UserRegisterERP = (
  username,
  email,
  fullname,
  address,
  password,
  phoneNumber
) => {
  console.log("Login ERP");
  const url = `${DOMAIN.URL}/user/register`;
  return new Promise((res, rej) => {
    PostService(url, {
      userName: username,
      email: email,
      phone: phoneNumber,
      name: fullname,
      password: password,
      address: address,
      isEmployer: false,
    })
      .then((resService) => {
        res({
          data: resService,
          status: DATA_STATUS.SUCCESS,
        });
      })
      .catch((rejService) => {
        res({
          status: DATA_STATUS.FAILED,
          err: rejService,
        });
      });
  });
};

const EmployerRegisterERP = (
  username,
  email,
  fullname,
  address,
  password,
  phoneNumber,
  image
) => {
  const url = `/user/register`;
  return new Promise((res, rej) => {
    console.log("asdf");
    PostService(url, {
      userName: username,
      email: email,
      phone: phoneNumber,
      name: fullname,
      password: password,
      address: address,
      image: image,
      isEmployer: true,
    })
      .then((resService) => {
        res({
          data: resService,
          status: DATA_STATUS.SUCCESS,
        });
      })
      .catch((rejService) => {
        res({
          status: DATA_STATUS.FAILED,
          err: rejService,
        });
      });
  });
};

export { UserLoginERP, UserRegisterERP, EmployerRegisterERP };
