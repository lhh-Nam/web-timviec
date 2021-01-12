import React, { useState } from "react";
import "./SearchBox.scss";
import SearchIcon from "@material-ui/icons/Search";
import Arrow from "./Arrow";
import Expand from "./Expand";

function SearchBox() {
  const [show, setShow] = useState(false);

  function handleFocus() {
    setShow(true);
  }

  function handleBlur() {
    setShow(false);
  }

  return (
    <div className="search">
      <div className="search__header">
        <h1 className="line anim-typerwrite">Tìm kiếm công việc mơ ước.</h1>
      </div>

      {/* Search input */}
      <form className="search__box">
        <div className="input__box">
          <div className="input__box--group">
            <span className="icon">
              <SearchIcon />
            </span>

            <input
              type="text"
              placeholder="Tìm kiếm việc làm, công ty, kỹ năng"
              onFocus={handleFocus}
              onBlur={handleBlur}
            />

            <button>Tìm kiếm</button>
          </div>
        </div>

        {show ? <Expand /> : null}
      </form>

      <Arrow />
    </div>
  );
}

export default SearchBox;
