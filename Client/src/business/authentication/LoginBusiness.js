import { DATA_STATUS } from "../../utils/configs";
import { UserLoginERP } from "../../services/ResUserService";

const UserLoginBusiness = (username, password) => {
  try {
    return new Promise(async (res, rej) => {
      console.log("Login Business");
      let user = await UserLoginERP(username, password);

      if (user.status === DATA_STATUS.SUCCESS) {
        let customData = {
          success:
            user.data.data.success !== undefined ? user.data.data.success : "",
          token: user.data.data.token !== undefined ? user.data.data.token : "",
        };

        res({
          data: customData,
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

export { UserLoginBusiness };
