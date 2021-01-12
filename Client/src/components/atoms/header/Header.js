import React, { useEffect, useState } from "react";

import { Link, useHistory } from "react-router-dom";
import "./Header.scss";

import cookie from "react-cookies";
import swal from "sweetalert";

function Header({ user, userDecode }) {
  const [scroll, setScroll] = useState(false);
  const history = useHistory();

  let employer = userDecode === undefined ? "" : userDecode.isEmployer;

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);

  const onLogout = () => {
    cookie.remove("x_auth");
    window.location.reload(false);
  };

  return (
    <div className="header">
      <nav className={`navbar ${scroll ? "nam" : null}`}>
        <span className="brand">
          <Link to="/">Tìm việc</Link>
        </span>

        <ul className="menu">
          <li>
            <Link to="/jobs">Việc làm</Link>
          </li>

          <li>
            <Link
              to={
                user.isEmployer || employer
                  ? "/employer-post"
                  : "/employer-register"
              }
            >
              Nhà tuyển dụng
            </Link>
          </li>

          {user || userDecode ? (
            <li onClick={onLogout}>Đăng xuất</li>
          ) : (
            <>
              <li>
                <Link to="/user-register">Đăng kí</Link>
              </li>

              <li>
                <Link to="/user-login">Đăng nhập</Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
}

export default Header;
