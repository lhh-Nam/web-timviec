import LockIcon from "@material-ui/icons/Lock";
import PersonIcon from "@material-ui/icons/Person";
import React, { useState ,useEffect} from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import userLoginImage from "../../../assets/images/user-login.jpg";
import { UserLoginBusiness } from "../../../business/authentication/LoginBusiness";
import { login } from "../../../redux/action/LoginAction";
import { DATA_STATUS } from "../../../utils/configs";
import "./UserLogin.scss";
import jwt_decode from "jwt-decode";

function UserLogin({setUpSocket}) {
  /* ===================== Handle UI ===================== */
  const [username, setUsername] = useState(false);
  const [password, setPassword] = useState(false);

  function handleUsernameFocus() {
    setUsername(true);
  }

  function handlePasswordFocus() {
    setPassword(true);
  }

  /* ===================== Handle Logic ===================== */
  const dispatch = useDispatch();

  let history = useHistory();

  /* ======= Get value from input ======= */
  const [formLogin, SetFormLogin] = useState({
    username: "",
    password: "",
  });

  const onChangeUsername = (e) => {
    SetFormLogin({ ...formLogin, username: e.target.value });
  };

  const onChangePassword = (e) => {
    SetFormLogin({ ...formLogin, password: e.target.value });
  };
  /* ===x=== Get value from input ===x=== */

  const onLogin = async (event) => {
    event.preventDefault();
    const { username, password } = formLogin;

    await UserLoginBusiness(username, password).then((response) => {
      if (response.status === DATA_STATUS.SUCCESS) {
        const user = response.data;
        let istoken = user.token;
        let decode = jwt_decode(istoken);
        setUpSocket()
        dispatch(login(user));
        if (user) {
          history.push("/");
        }
      }
    });
  };


  return (
    <div className="user-login">
      <div className="image">
        <img src={userLoginImage} alt="" />
      </div>

      <div className="user-login__container">
        <div className="form-input">
          <h3>
            <span>"SET</span> &nbsp;
            <span>GOALS"</span>
          </h3>

          <form action="">
            <div className="input">
              {/* Username input */}
              <div className="input__box username">
                <PersonIcon />

                <div className="input__box--area">
                  <h5 className={username ? "move" : ""}>Tên tài khoản</h5>
                  <input
                    defaultValue={formLogin.username}
                    onChange={onChangeUsername}
                    type="text"
                    onFocus={handleUsernameFocus}
                  />
                </div>
              </div>

              {/* password input */}
              <div className="input__box">
                <LockIcon />

                <div className="input__box--area">
                  <h5 className={password ? "move" : ""}>Mật khẩu</h5>
                  <input
                    defaultValue={formLogin.password}
                    onChange={onChangePassword}
                    id="password"
                    type="password"
                    onFocus={handlePasswordFocus}
                  />
                </div>
              </div>

              <button onClick={onLogin}>Đăng nhập</button>
            </div>
          </form>

          <div className="forgot-pass">
            <Link to="/">Quên mật khẩu?</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserLogin;
