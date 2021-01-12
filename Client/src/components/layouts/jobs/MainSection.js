import React from "react";
import Content from "./Content";
import SideBar from "./SideBar";
import "./MainSection.scss";

function MainSection({ searchText }) {
  return (
    <div className="main-section">
      <SideBar />
      <Content searchText={searchText} />
    </div>
  );
}

export default MainSection;
