import React from "react";
import "./Info.scss";
import Img from "../../../assets/images/employer.jpg";

// Icons
import HomeIcon from "@material-ui/icons/Home";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";

function Info() {
  return (
    <div className="info-employer">
      <div className="img-employer">
        <img src={Img} alt="" />

        <p className="">Employer's name</p>
      </div>

      <div className="detail-employer">
        <div className="detail-employer__text">
          <EmailIcon />
          <p>Employer's Email</p>
        </div>

        <div className="detail-employer__text">
          <HomeIcon />
          <p>Employer's Address</p>
        </div>

        <div className="detail-employer__text">
          <PhoneIcon />
          <p>Employer's Phone</p>
        </div>
      </div>
    </div>
  );
}

export default Info;
