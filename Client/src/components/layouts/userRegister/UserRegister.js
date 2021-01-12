import React, { useState } from "react";
import "./UserRegister.scss";
import { UserRegisterBusiness } from "../../../business/authentication/RegisterBusiness";
import { DATA_STATUS } from "../../../utils/configs";
import { Link } from "react-router-dom";

function UserRegister() {
  /* ======= GET value on input ======= */
  const [formRegister, setFormRegister] = useState({
    username: "",
    email: "",
    phone: "",
    fullname: "",
    address: "",
    password: "",
  });

  const onUsername = (e) => {
    setFormRegister({
      ...formRegister,
      username: e.target.value,
    });
  };

  const onEmail = (e) => {
    setFormRegister({
      ...formRegister,
      email: e.target.value,
    });
  };

  const onPhone = (e) => {
    setFormRegister({
      ...formRegister,
      phone: e.target.value,
    });
  };

  const onFullname = (e) => {
    setFormRegister({
      ...formRegister,
      fullname: e.target.value,
    });
  };

  const onAddress = (e) => {
    setFormRegister({
      ...formRegister,
      address: e.target.value,
    });
  };

  const onPassword = (e) => {
    setFormRegister({
      ...formRegister,
      password: e.target.value,
    });
  };
  /* ===x=== GET value on input ===x=== */

  const onRegister = async (event) => {
    event.preventDefault();
    const { username, email, fullname, address, password } = formRegister;
    const phoneNumber = parseInt(formRegister.phone);

    await UserRegisterBusiness(
      username,
      email,
      fullname,
      address,
      password,
      phoneNumber
    ).then((response) => {
      if (response.status === DATA_STATUS.SUCCESS) {
        const user = response.data;
        console.log("user register", user);
      }
    });
  };
  return (
    <div>
      <div className="user-register">
        <div className="input">
          <h2>Đăng Ký Thành Viên</h2>

          <form className="input__container">
            <div className="input__box">
              <div className="center">
                <strong>Họ tên</strong>

                <input
                  onChange={onFullname}
                  value={formRegister.fullname}
                  type="text"
                  placeholder="Họ tên"
                />
              </div>
            </div>
            <div className="input__box">
              <div className="center">
                <strong>Số điện thoại</strong>

                <input
                  onChange={onPhone}
                  value={formRegister.phone}
                  type="text"
                  placeholder="Điện thoại"
                />
              </div>
            </div>
            <div className="input__box">
              <div className="center">
                <strong>Địa chỉ</strong>

                <input
                  onChange={onAddress}
                  value={formRegister.address}
                  type="text"
                  placeholder="Địa chỉ"
                />
              </div>
            </div>
            <div className="input__box">
              <div className="center">
                <strong>Email</strong>

                <input
                  onChange={onEmail}
                  value={formRegister.email}
                  type="text"
                  placeholder="Email"
                />
              </div>
            </div>
            <div className="input__box">
              <div className="center">
                <strong>Tài khoản</strong>

                <input
                  value={formRegister.username}
                  onChange={onUsername}
                  type="text"
                  placeholder="Username"
                />
              </div>
            </div>
            <div className="input__box">
              <div className="center">
                <strong>Mật khẩu</strong>

                <input
                  onChange={onPassword}
                  value={formRegister.password}
                  type="pass"
                  placeholder="Password"
                />
              </div>
            </div>

            <div className="btn-register">
              <button onClick={onRegister}>Đăng kí</button>
            </div>
          </form>

          <div className="other-action">
            <div className="login">
              <p>
                Bạn đã có tài khoản? <Link to="/user-login"> Đăng nhập</Link>
              </p>
            </div>
            <div className="line"></div>
            <div className="register-employer">
              <p>
                Nếu bạn có nhu cầu tuyển dụng, vui lòng đăng kí tại{" "}
                <Link to="/user-login"> đây</Link>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserRegister;
