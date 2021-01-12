import React, { useMemo } from "react";
import AllJob from "./AllJob";
import "./Content.scss";
import Tools from "./Tools";

//redux
import { useSelector } from "react-redux";

function Content({ searchText }) {
  console.log("searchText =>", searchText);
  const jobs = useSelector((state) => state.GetAllReducer.jobs);

  let listJobs = useMemo(() => {
    let result = jobs.filter((job) => {
      return job.title.toLowerCase().indexOf(searchText.toLowerCase()) !== -1;
    });

    return result;
  }, [jobs, searchText]);
  console.log("jobs =>", jobs);

  return (
    <div className="main-content">
      <div className="main-content__box">
        <Tools />

        {listJobs.map((job) => {
          return <AllJob job={job} key={job._id} />;
        })}
      </div>
    </div>
  );
}

export default Content;
