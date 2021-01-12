import React, { useState } from "react";
import "./MainDetail.scss";

//Icons
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import LocationOnIcon from "@material-ui/icons/LocationOn";

import { withRouter } from "react-router-dom";

import Comment from "./Comment";

import { CvBusiness } from "../../../business/CvBusiness";
import { DATA_STATUS } from "../../../utils/configs";

function MainDetail({ jobDetail, user, userDecode, socket, match }) {
  let employer = userDecode === undefined ? "" : userDecode.isEmployer;
  let id = jobDetail._id;

  const [CV, setCV] = useState();

  const onCV = (event) => {
    let CV = event.target.files[0].name;
    setCV(CV);
  };

  const onApply = async (event) => {
    event.preventDefault();

    await CvBusiness(id, CV).then((response) => {
      if (response.status === DATA_STATUS.SUCCESS) {
        let CV = response.data;
        console.log(CV);
      }
    });
  };

  return (
    <div className="main-detail">
      <div className="main-detail__container">
        <div className="header">
          <div className="job-title">
            <h3>{jobDetail.title}</h3>
          </div>

          <div className="more-info">
            <div className="more-info__item">
              <AttachMoneyIcon />
              <small>
                From {jobDetail.minSalary} to {jobDetail.maxSalary}
              </small>
            </div>

            <div className="more-info__item">
              <LocationOnIcon />
              <small>{jobDetail.location.title}</small>
            </div>
          </div>
        </div>

        <div className="body">
          <div className="body__box">
            <div className="title">
              <h4>Reasons To Join Us</h4>
            </div>
            <div className="content">
              <p>{jobDetail.benefit}</p>
            </div>
          </div>

          <div className="body__box">
            <div className="title">
              <h4>Job Description</h4>
            </div>
            <div className="content">
              <p>{jobDetail.jobDescription}</p>
              <p>{jobDetail.requirement}</p>
            </div>
          </div>

          <div className="body__box">
            <div className="title">
              <h4>Your Skills and Experience</h4>
            </div>
            <div className="content">
              <p>{jobDetail.requirement}</p>
            </div>
          </div>

          {/* <div className="body__box">
            <div className="title">
              <h4>Why You'll Love Working Here</h4>
            </div>
            <div className="content">
              <p>Love Working Here 1</p>
              <p>Love Working Here 2</p>
              <p>Love Working Here 3</p>
            </div>
          </div> */}

          <div className="body__box">
            <div className="title">
              <h4>Danh sách ứng tuyển</h4>
            </div>
            <div className="content">
              <p>{jobDetail.requirement}</p>
            </div>
          </div>

          {user.isEmployer || employer ? null : (
            <div className="btn-box">
              <label className="btn-apply" onClick={onApply}>
                Apply Now
              </label>

              <input type="file" id="file" className="file" onChange={onCV} />
            </div>
          )}
        </div>
      </div>

      <Comment socket={socket} jobDetail={jobDetail} />
    </div>
  );
}

export default withRouter(MainDetail);
