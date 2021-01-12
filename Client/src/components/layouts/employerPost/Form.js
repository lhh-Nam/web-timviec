import React, { useState } from "react";
import "./Form.scss";

import swal from "sweetalert";

import { useHistory } from "react-router-dom";

//config
import { DATA_STATUS } from "../../../utils/configs";
//business
import { CreatePostBusiness } from "../../../business/PostBusiness";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch } from "react-redux";
import { GetAllPostBusiness } from "../../../business/commonBusiness/GetAllBusiness";
import { getAllJob } from "../../../redux/action/GetAllAction";

function Form({ categories, position, location }) {
  const [selectedDate, setSelectedDate] = useState(null);
  const history = useHistory();
  const dispatch = useDispatch();

  const [formPost, setFormPost] = useState({
    title: "",
    quantity: "",
    minSalary: "",
    maxSalary: "",
    category: "",
    position: "",
    location: "",
    description: "",
    requirement: "",
    benefit: "",
  });

  //selected item in select option
  const onCategory = (e) => {
    let value = e.target.value;

    if (value !== "0") {
      setFormPost({
        ...formPost,
        category: value,
      });
    }
  };

  const onPosition = (e) => {
    let value = e.target.value;

    if (value !== "0") {
      setFormPost({
        ...formPost,
        position: value,
      });
    }
  };

  const onLocation = (e) => {
    let value = e.target.value;

    if (value !== "0") {
      setFormPost({
        ...formPost,
        location: value,
      });
    }
  };

  //handle Create post
  const onCreatePost = async (event) => {
    event.preventDefault();

    const {
      title,

      category,
      position,
      location,
      description,
      requirement,
      benefit,
    } = formPost;

    const minSalary = parseInt(formPost.minSalary);
    const maxSalary = parseInt(formPost.maxSalary);
    const quantity = parseInt(formPost.quantity);

    if (
      !title ||
      !category ||
      !position ||
      !location ||
      !description ||
      !requirement ||
      !benefit ||
      !minSalary ||
      !maxSalary ||
      !quantity ||
      !selectedDate
    ) {
      swal({
        title: "Thiếu thông tin",
        icon: "warning",
        dangerMode: true,
      });
    } else {
      await CreatePostBusiness(
        title,
        category,
        position,
        location,
        description,
        requirement,
        benefit,
        minSalary,
        maxSalary,
        quantity,
        selectedDate
      ).then((response) => {
        if (response.status === DATA_STATUS.SUCCESS) {
          const createPost = response.data;
          console.log("createPost =>", createPost);
          swal({
            title: "Đăng tin thành công!",
            icon: "success",
          }).then(() => {
            GetAllPost();
            history.push("/jobs");
          });
        } else {
          swal({
            title: "Đăng tin thất bại!",
            icon: "warning",
            dangerMode: true,
          });
        }
      });
    }
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
    <div className="form-post">
      <h2>Tin tuyển dụng </h2>

      <div className="create-form">
        {/* Title & Quantity  */}
        <div className="line-post  flex-title">
          <div className="flex-title__item">
            <strong>Tên công việc:</strong>

            <input
              type="text"
              className="input-post"
              placeholder="Tên công việc"
              onChange={(e) => {
                setFormPost({ ...formPost, title: e.target.value });
              }}
            />
          </div>

          <div className="flex-title__item">
            <strong>Số lượng nhân viên:</strong>

            <input
              type="text"
              className="input-post"
              placeholder="Số lượng cần tuyển"
              onChange={(e) => {
                setFormPost({ ...formPost, quantity: e.target.value });
              }}
            />
          </div>
        </div>

        {/* Salary*/}
        <div className="line-post ">
          <div className="flex-title__item">
            <strong>Mức lương:</strong>

            <input
              type="text"
              className="input-post"
              placeholder="From"
              onChange={(e) => {
                setFormPost({ ...formPost, minSalary: e.target.value });
              }}
            />

            <strong>-</strong>

            <input
              type="text"
              className="input-post"
              placeholder="To"
              onChange={(e) => {
                setFormPost({ ...formPost, maxSalary: e.target.value });
              }}
            />
          </div>
        </div>

        <div className="flex-title__item">
          <strong>Thời gian:</strong>

          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            dateFormat="dd/MM/yyyy"
            minDate={new Date()}
          />
        </div>

        {/* Select box */}
        <div className="line-post flex-box">
          <div className="choice">
            <strong>Danh mục:</strong>

            <select onClick={(event) => onCategory(event)}>
              <option value="0">Danh mục</option>
              {categories.map((category) => {
                return (
                  <option value={category._id} key={category._id}>
                    {category.title}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="choice">
            <strong>Chuyên môn:</strong>

            <select onClick={(event) => onPosition(event)}>
              <option value="0">Chuyên môn</option>
              {position.map((position) => {
                return (
                  <option value={position._id} key={position._id}>
                    {position.title}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="choice">
            <strong>Địa điểm:</strong>

            <select onClick={(event) => onLocation(event)}>
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
        </div>

        {/* Description */}
        <div className="line-post textarea">
          <strong>Công việc:</strong>

          <textarea
            rows="8"
            placeholder="Mô tả công việc"
            onChange={(e) => {
              setFormPost({ ...formPost, description: e.target.value });
            }}
          ></textarea>
        </div>

        {/* Requirement */}
        <div className="line-post textarea">
          <strong>Yêu cầu:</strong>

          <textarea
            rows="8"
            placeholder="Kĩ năng và kinh nghiệm"
            onChange={(e) => {
              setFormPost({ ...formPost, requirement: e.target.value });
            }}
          ></textarea>
        </div>

        {/* Benefit */}
        <div className="line-post textarea">
          <strong>Quyền lợi:</strong>

          <textarea
            rows="8"
            placeholder="Lợi ích nhân viên"
            onChange={(e) => {
              setFormPost({ ...formPost, benefit: e.target.value });
            }}
          ></textarea>
        </div>
      </div>

      <button onClick={onCreatePost}>onCreatePost</button>
    </div>
  );
}

export default Form;
