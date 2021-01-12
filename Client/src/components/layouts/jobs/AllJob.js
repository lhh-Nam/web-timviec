import React, { useState } from "react";
import { Link, useHistory, withRouter } from "react-router-dom";

//Icons + Style
import "./AllJob.scss";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";

//Redux
import { useDispatch } from "react-redux";
import { getJobDetail } from "../../../redux/action/GetAllAction";

function AllJob(job) {
  const [save, setSave] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  function handleSave() {
    setSave(!save);
  }

  const onDetail = () => {
    //console.log("job detail =>", job);
    dispatch(getJobDetail(job));

    history.push(`/job-detail/${job.job._id}`);
  };

  let a = new Date(job.job.createdAt);
  let durationTime = new Date(job.job.duration);
  return (
    <div className="alljob" key={job.job._id}>
      <div className="job" onClick={onDetail}>
        <div className="job--logo">
          {/* <img src={job.job.user.image} alt="" /> */}
        </div>
        <div className="job--info">
          <div className="job--info__title">
            <h3 className="name">{job.job.title}</h3>
            <small className="time">{`${a.getDate()}/${a.getMonth()} đến ${durationTime.getDate()}/${durationTime.getMonth()}/${durationTime.getFullYear()}`}</small>
          </div>
          <div className="job--info__type">
            <p className="title-type">Full-time</p>
            <p className="location">
              <small>in</small>{" "}
              {job.job.location ? job.job.location.title : null}
            </p>
          </div>
          <div className="job--info__role">
            <p>{job.job.position ? job.job.position.title : null}</p>
          </div>
          <div className="job--info__save">
            <button onClick={handleSave} className={save ? "active" : ""}>
              <BookmarkBorderIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(AllJob);

//   <Link to="job-detail">
// </Link>
