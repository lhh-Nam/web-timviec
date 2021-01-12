import React from "react";
import "./EmployerPost.scss";
import Form from "./Form";
import Info from "./Info";

function EmployerPost({ categories, position, location }) {
  return (
    <div>
      <div className="white-space"></div>

      <div className="employer-post">
        <Info />
        <Form categories={categories} position={position} location={location} />
      </div>
    </div>
  );
}

export default EmployerPost;
