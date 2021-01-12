import React from "react";
import "./Expand.scss";

function Expand() {
  return (
    <div className="expand">
      <div className="recent-search">
        <div className="recent-search--box">
          <div className="expand__heading">
            <p>Tìm kiếm gần đây</p>
          </div>

          <div className="recent-search__items">
            <div className="job">
              <small className="job--title">IT</small>
              <small className="job--number">(100 Việc làm)</small>
            </div>

            <div className="job">
              <small className="job--title">IT</small>
              <small className="job--number">(100 Việc làm)</small>
            </div>
          </div>
        </div>
      </div>

      <div className="hot-keyword">
        <div className="hot-keyword__box">
          <div className="expand__heading">
            <p>Từ khóa phổ biến</p>
          </div>

          <div className="wrapper">
            <div className="hot-keyword__items">
              <div className="tag">
                <small className="tag-keyword">Java</small>
                <small className="tag-industry">(IT-Phần Mềm)</small>
              </div>
            </div>

            <div className="hot-keyword__items">
              <div className="tag">
                <small className="tag-keyword">Sales</small>
                <small className="tag-industry">(Bán hàng)</small>
              </div>
            </div>

            <div className="hot-keyword__items">
              <div className="tag">
                <small className="tag-keyword">Java</small>
                <small className="tag-industry">(IT-Phần Mềm)</small>
              </div>
            </div>

            <div className="hot-keyword__items">
              <div className="tag">
                <small className="tag-keyword">Java</small>
                <small className="tag-industry">(IT-Phần Mềm)</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expand;
