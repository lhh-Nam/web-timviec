import React, { useRef, useEffect, useState } from "react";
import "./Comment.scss";
import user from "../../../assets/images/employer.jpg";
import { CommentBusiness } from "../../../business/CommentBusiness";
import { DATA_STATUS } from "../../../utils/configs";
import { withRouter } from "react-router-dom";

function Comment({ socket, match, jobDetail }) {
  const roomID = match.params.id;
  const commentRef = useRef("");
  const [state, setstate] = useState([]);

  const JOB_ID = jobDetail._id;
  const [commentArr, setCommentArr] = useState([]);
  //call action fetch all comment :

  const GetComment = async (id) => {
    await CommentBusiness(id).then((response) => {
      if (response.status === DATA_STATUS.SUCCESS) {
        const comment = response.data;
        setCommentArr(comment);
      }
    });
  };

  useEffect(() => {
    GetComment(JOB_ID);
  }, []);

  //get profile user login :
  useEffect(
    () => {
      setstate(""); //set state = [] comment after fetch api.
    },
    [
      /*comment*/
    ]
  );
  const sendComments = () => {
    if (socket) {
      socket.emit("allCMT", {
        roomID: roomID,
        comment: commentRef.current.value,
      });
      console.log(commentRef.current.value);
      commentRef.current.value = "";
    }
  };
  useEffect(() => {
    if (socket) {
      socket.on("newComment", (comment) => {
        if (state) {
          const newState = state.concat(comment.newComment);
          console.log(state.concat(comment.newComment));
          setstate(newState);
        }
      });
    }
  }, [state]);

  let onShowComment = (data) => {
    let result = null;
    if (data) {
      result = data.map((element, index) => {
        let timeCmt = new Date(element.createdAt);
        return (
          <div className="comment__box">
            <img src={element.user.image} />

            <div className="comment__text">
              <div className="comment__text--info">
                <strong>{element.user.name}</strong>
                <small>{`${timeCmt.getDate()}/${
                  timeCmt.getMonth() + 1
                }/${timeCmt.getFullYear()}`}</small>
              </div>

              <div className="comment__text--content">
                <p>{element.description}</p>
              </div>
            </div>
          </div>
        );
      });
    }

    return result;
  };

  const sortDate = (date, nextdate) =>
    Date.parse(nextdate.createdAt) - Date.parse(date.createdAt);

  let commentArrSortByDate = commentArr.sort(sortDate);

  const onCommented = (commentArr) => {
    let result = null;
    if (commentArr) {
      result = commentArr.map((element, index) => {
        let timeCmt = new Date(element.createdAt);

        return (
          <div className="comment__box" key={index}>
            <img src={element.user ? element.user.image : null} />

            <div className="comment__text">
              <div className="comment__text--info">
                <strong>{element.user ? element.user.userName : ""}</strong>
                <small>{`${timeCmt.getDate()}/${
                  timeCmt.getMonth() + 1
                }/${timeCmt.getFullYear()}`}</small>
              </div>

              <div className="comment__text--content">
                <p>{element.description}</p>
              </div>
            </div>
          </div>
        );
      });
    }

    return result;
  };
  return (
    <div className="comment">
      <div className="comment__input">
        <textarea rows="8" ref={commentRef} placeholder="Bình luận"></textarea>
        <button
          disabled={commentRef === "" ? true : false}
          onClick={sendComments}
          className="btn-cmt"
        >
          Bình luận
        </button>
      </div>
      {onShowComment(state)}
      {onCommented(commentArrSortByDate)}
    </div>
  );
}

export default withRouter(Comment);
