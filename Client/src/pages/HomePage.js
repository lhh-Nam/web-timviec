import React from "react";
import Company from "../components/layouts/home/Company";
import Employer from "../components/layouts/home/Employer";
import Hotjob from "../components/layouts/home/Hotjob";
import SearchBox from "../components/layouts/home/SearchBox";

function Home() {
  return (
    <div className="wrapper">
      <SearchBox />
      <Company />
      <Hotjob />
      <Employer />
    </div>
  );
}

export default Home;
