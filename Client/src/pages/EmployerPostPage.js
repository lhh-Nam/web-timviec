import React from "react";
import EmployerPost from "../components/layouts/employerPost/EmployerPost";

//redux
import { useSelector } from "react-redux";
import { GetAllReducer } from "../redux/action/GetAllAction";

function EmployerPostPage() {
  //Value on REDUCER
  const categories = useSelector((state) => state.GetAllReducer.categories);
  const position = useSelector((state) => state.GetAllReducer.position);
  const location = useSelector((state) => state.GetAllReducer.location);

  return (
    <div>
      <EmployerPost
        categories={categories}
        position={position}
        location={location}
      />
    </div>
  );
}

export default EmployerPostPage;
