import React from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import icon from "../../../assets/assets/icon-tag.svg";
import icon_down from "../../../assets/assets/arrow-down.svg";

function Admin_Menu() {
  return (
    <div className="left">
      <span className="left__icon">
        <span />
        <span />
        <span />
      </span>
      <div className="left__content">
        <div className="left__logo">LOGO</div>
        <div className="left__profile">
          <div className="left__image">
            <img
              src={
                "http://res.cloudinary.com/drdnfzayf/image/upload/v1604112567/ueechupbralvxuduiwyp.jpg"
              }
              alt=""
            />
          </div>
          <p className="left__name">Le Nguyen Ngoc Vien</p>
        </div>
        <ul className="left__menu">
          <li className="left__menuItem">
            <Link to="/admin-dashboard">
              <p className="left__title">
                <img src="assets/icon-dashboard.svg" alt="" />
                Dashboard
              </p>
            </Link>
          </li>

          <li className="left__menuItem open">
            <div className="left__title">
              <img src={icon} alt="" />
              Category
              <img className="left__iconDown" src={icon_down} alt="" />
            </div>
            <div className="left__text">
              <Link to="/admin-add-category">
                <p className="left__link">Add Category</p>
              </Link>
              <Link to="/admin-category">
                <p className="left__link">List Category</p>
              </Link>
            </div>
          </li>

          <li className="left__menuItem open">
            <div className="left__title">
              <img src={icon} alt="" />
              Position
              <img className="left__iconDown" src={icon_down} alt="" />
            </div>
            <div className="left__text">
              <Link to="/admin-add-position">
                <p className="left__link">Add Position</p>
              </Link>
              <Link to="/admin-position">
                <p className="left__link">List Position</p>
              </Link>
            </div>
          </li>

          <li className="left__menuItem open">
            <div className="left__title">
              <img src={icon} alt="" />
              Location
              <img className="left__iconDown" src={icon_down} alt="" />
            </div>
            <div className="left__text">
              <Link to="/admin-add-location">
                <p className="left__link">Add Location</p>
              </Link>
              <Link to="/admin-location">
                <p className="left__link">List Location</p>
              </Link>
            </div>
          </li>
          <li className="left__menuItem open">
            <div className="left__title">
              <img src={icon} alt="" />
              Post
              <img className="left__iconDown" src={icon_down} alt="" />
            </div>
            <div className="left__text">
              <Link to="/admin-post">
                <p className="left__link">List Post</p>
              </Link>
            </div>
          </li>
          <li className="left__menuItem open">
            <div className="left__title">
              <img src={icon} alt="" />
              User
              <img className="left__iconDown" src={icon_down} alt="" />
            </div>
            <div className="left__text">
              <Link to="/admin-user">
                <p className="left__link">List user </p>
              </Link>
            </div>
          </li>

          <li className="left__menuItem">
            <p className="left__title">
              <img src={icon} alt="" />
              Đăng Xuất
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default withRouter(Admin_Menu);
