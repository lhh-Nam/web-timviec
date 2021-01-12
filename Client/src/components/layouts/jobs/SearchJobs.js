import React, { useEffect, useState, useMemo } from "react";
import "./SearchJobs.scss";

//icons
import PlaceIcon from "@material-ui/icons/Place";
import SearchIcon from "@material-ui/icons/Search";

// redux
import { useSelector, useDispatch } from "react-redux";
import {
  getPostByLocation,
  getAllJob,
} from "../../../redux/action/GetAllAction";

//call API
import { GetAllPost } from "../../../common/api/GetAll";
import { GetByLocationBusiness } from "../../../business/commonBusiness/GetByBusiness";
import { GetAllPostBusiness } from "../../../business/commonBusiness/GetAllBusiness";

//config
import { DATA_STATUS } from "../../../utils/configs";

function SearchJobs({ onChange }) {
  const dispatch = useDispatch();
  const location = useSelector((state) => state.GetAllReducer.location);
  const jobs = useSelector((state) => state.GetAllReducer.jobs);
  const [search, setSearch] = useState("");

  const onSelect = (e) => {
    let value = e.target.value;
    console.log(value);
    if (value === "0") {
      GetAllPost();
    } else {
      GetByLocation(value);
    }
  };

  // Get post by POSITION
  const GetByLocation = async (id) => {
    await GetByLocationBusiness(id).then((response) => {
      if (response.status === DATA_STATUS.SUCCESS) {
        const byLocation = response.data;

        dispatch(getPostByLocation(byLocation));
      }
    });
  };

  const GetAllPost = async () => {
    await GetAllPostBusiness().then((response) => {
      if (response.status === DATA_STATUS.SUCCESS) {
        const allPost = response.data;
        dispatch(getAllJob(allPost));
      }
    });
  };

  return (
    <div className="searchjobs">
      <div className="container">
        <div className="searchjobs__box">
          <form action="">
            <div className="searchjobs__box--input">
              <SearchIcon />
              <input
                type="text"
                placeholder="Công việc cần tìm"
                defaultValue={search}
                onChange={(event) => onChange(event.target.value)}
              />
            </div>

            <div className="border"></div>

            <div className="searchjobs__box--select">
              <PlaceIcon />
              <select onClick={(event) => onSelect(event)}>
                <option value="0">Địa điểm</option>
                {location.map((location) => {
                  return (
                    <option value={location._id} key={location._id}>
                      {location.title}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="searchjobs__box--btn">
              <button>Search</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SearchJobs;
