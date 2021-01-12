import React from "react";
import UserLogin from "../components/layouts/userLogin/UserLogin";

function UserLoginPage({setUpSocket}) {
  return (
    <div>
      <UserLogin setUpSocket={setUpSocket}/>
    </div>
  );
}

export default UserLoginPage;
