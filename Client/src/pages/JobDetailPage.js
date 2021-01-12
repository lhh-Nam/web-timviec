import React,{useEffect} from "react";
import JobDetail from "../components/layouts/jobDetail/JobDetail";
import { withRouter } from "react-router-dom";


function JobDetailPage({ user, match,userDecode ,socket}) {
  const roomID = match.params.id
  useEffect(() => {
    if(socket){
      socket.emit("joinProduct",{roomID:roomID})
      socket.on("onlineUser",(data)=>{
        console.log(data)
      })
    }
    return () => {
      if(socket){
        socket.emit("leaveProduct",{roomID:roomID})
      }
    };
  }, []);
  return (
    <div style={{ background: "#e9e9e9" }}>
      <JobDetail user={user} userDecode={userDecode} socket={socket} />
    </div>
  );
}

export default withRouter(JobDetailPage);
