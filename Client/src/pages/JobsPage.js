import React from "react";
import { useState } from "react";
import MainSection from "../components/layouts/jobs/MainSection";
import SearchJobs from "../components/layouts/jobs/SearchJobs";
import "./JobsPage.scss";

function JobsPage() {
  const [searchText, setSearchText] = useState("");

  return (
    <div className="jobspage">
      <div className="white-space"></div>
      <div className="jobspage--content">
        <SearchJobs onChange={(value) => setSearchText(value)} />
        <MainSection searchText={searchText} />
      </div>
      <div className="white-space"></div>
    </div>
  );
}

export default JobsPage;
