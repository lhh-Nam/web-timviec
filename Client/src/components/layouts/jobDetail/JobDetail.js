import React from "react";
import DetailSidebar from "./DetailSidebar";
import MainDetail from "./MainDetail";
import "./JobDetail.scss";

//Redux
import { useSelector } from "react-redux";
import { useParams, withRouter } from "react-router-dom";

function JobDetail({ user, userDecode, socket }) {
  //const detail = useSelector((state) => state.GetAllReducer.jobDetail);

  let { id } = useParams();
  const jobs = useSelector((state) => state.GetAllReducer.jobs);

  let jobDetail = jobs.find((job) => job._id === id);

  return (
    <div className="job-detail">
      <div className="white-space"></div>

      {jobDetail ? (
        <div className="job-detail__container">
          <DetailSidebar jobDetail={jobDetail} />

          <MainDetail
            jobDetail={jobDetail}
            user={user}
            userDecode={userDecode}
            socket={socket}
          />
        </div>
      ) : (
        <div className="null"></div>
      )}

      <div className="white-space--bottom"></div>
    </div>
  );
}

export default JobDetail;
