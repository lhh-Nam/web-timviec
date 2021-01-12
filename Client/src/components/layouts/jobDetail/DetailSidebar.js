import React from "react";
import "./DetailSidebar.scss";
import SettingsIcon from "@material-ui/icons/Settings";
import GroupIcon from "@material-ui/icons/Group";
import TodayIcon from "@material-ui/icons/Today";
import ScheduleIcon from "@material-ui/icons/Schedule";
import PublicIcon from "@material-ui/icons/Public";

function DetailSidebar({ jobDetail }) {
  return (
    <div className="detail-sidebar">
      <div className="detail-sidebar__container">
        <div className="employer-logo">
          {/* <img
            src={detail.job.user.image}
            alt=""
          /> */}
        </div>

        <div className="employer-info">
          <div className="employer-info--name">
            <h3>vin group</h3>
          </div>

          <div className="employer-info--intro">
            <small>chúng tôi xây dựng phầm mềm với chuyên môn và đam mê</small>
          </div>

          <div className="employer-info--basic-info">
            <div className="gear icon">
              <SettingsIcon />
              <small>{jobDetail.position.title}</small>
            </div>

            <div className="group icon">
              <GroupIcon />
              <small>{jobDetail.quantity}</small>
            </div>

            <div className="country icon">
              <PublicIcon />
              <small>Việt Nam</small>
            </div>

            <div className="working-date icon">
              <TodayIcon />
              <small>Monday - Friday</small>
            </div>

            <div className="overtime icon">
              <ScheduleIcon />
              <small>Không OT</small>
            </div>
          </div>
        </div>

        <div className="employer-profile">Thông tin công ty</div>
      </div>
    </div>
  );
}

export default DetailSidebar;
