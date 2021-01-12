import { DATA_STATUS } from "../../utils/configs";
import {
  UserRegisterERP,
  EmployerRegisterERP,
} from "../../services/ResUserService";

const UserRegisterBusiness = (
  username,
  email,
  fullname,
  address,
  password,
  phoneNumber
) => {
  try {
    return new Promise(async (res, rej) => {
      console.log("Login Business");
      let user = await UserRegisterERP(
        username,
        email,
        fullname,
        address,
        password,
        phoneNumber
      );

      if (user.status === DATA_STATUS.SUCCESS) {
        // let customData = {
        //   success:
        //     user.data.data.success !== undefined ? user.data.data.success : "",
        //   token: user.data.data.token !== undefined ? user.data.data.token : "",
        // };

        res({
          data: user,
          status: DATA_STATUS.SUCCESS,
        });
      } else {
        rej(user);
      }
    });
  } catch (error) {
    error({
      data: [],
      status: DATA_STATUS.FAILED,
    });
  }
};

const EmployerRegisterBusiness = (
  username,
  email,
  fullname,
  address,
  password,
  phoneNumber,
  image
) => {
  try {
    return new Promise(async (res, rej) => {
      console.log(
        username,
        email,
        fullname,
        address,
        password,
        phoneNumber,
        image
      );
      let user = await EmployerRegisterERP(
        username,
        email,
        fullname,
        address,
        password,
        phoneNumber,
        image
      );

      if (user.status === DATA_STATUS.SUCCESS) {
        // let customData = {
        //   success:
        //     user.data.data.success !== undefined ? user.data.data.success : "",
        //   token: user.data.data.token !== undefined ? user.data.data.token : "",
        // };

        res({
          data: user,
          status: DATA_STATUS.SUCCESS,
        });
      } else {
        rej(user);
      }
    });
  } catch (error) {
    error({
      data: [],
      status: DATA_STATUS.FAILED,
    });
  }
};

export { UserRegisterBusiness, EmployerRegisterBusiness };
