import React, { useState, useRef } from "react";
import "./EmployerRegister.scss";

//image & icon
import profileImg from "../../../assets/images/employer.jpg";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";

//business API
import { EmployerRegisterBusiness } from "../../../business/authentication/RegisterBusiness";

//config
import { DATA_STATUS } from "../../../utils/configs";
import swal from "sweetalert";
import { Link, useHistory } from "react-router-dom";

function EmployerRegister() {
  const [img, setImg] = useState("");
  const image = useRef();
  let history = useHistory();

  const [form, setForm] = useState({
    image: "",
    email: "",
    password: "",
    username: "",
    fullname: "",
    phone: "",
    address: "",
  });

  //upload image
  const onImage = (event) => {
    let file = event.target.files[0];
    let test = image.current.files[0].name;

    setForm({ ...form, image: test });

    const reader = new FileReader();
    reader.onload = () => {
      setImg(reader.result);
    };

    reader.readAsDataURL(file);
  };

  //handle employer register
  const onRegister = async (event) => {
    event.preventDefault();
    const { image, username, email, fullname, address, password } = form;
    const phoneNumber = parseInt(form.phone);

    await EmployerRegisterBusiness(
      username,
      email,
      fullname,
      address,
      password,
      phoneNumber,
      image
    ).then((response) => {
      if (response.status === DATA_STATUS.SUCCESS) {
        const user = response.data;
        console.log("user register", user);
        swal({
          title: "Đăng kí thành công!",
          icon: "success",
        }).then(() => {
          history.push("/user-login");
        });
      }
    });
  };

  console.log(form);

  return (
    <div className="employer-register">
      <div className="img"></div>

      <div className="master">
        <div className="container">
          <div className="form">
            <h2 className="title">Đăng kí doanh nghiệp</h2>

            <div className="main">
              <div className="img-div">
                <div className="img-employer">
                  <img src={img ? img : profileImg} />

                  <div className="layer"></div>

                  <div className="btnImg">
                    <label htmlFor="file">
                      <AddAPhotoIcon className="btnIcon" />
                    </label>
                  </div>
                </div>

                <input
                  type="file"
                  id="file"
                  className="inputFile"
                  onChange={onImage}
                  ref={image}
                />
              </div>

              <div className="line">
                <div className="input-box">
                  <div className="label">
                    <label className="text_lable"> Username: </label>
                  </div>

                  <div className="input">
                    <input
                      type="text"
                      placeholder="Username"
                      onChange={(e) => {
                        setForm({ ...form, username: e.target.value });
                      }}
                    />
                  </div>
                </div>

                <div className="input-box">
                  <div className="label">
                    <label className="text_lable"> Pass: </label>
                  </div>

                  <div className="input">
                    <input
                      type="password"
                      placeholder="Nhập pass"
                      onChange={(e) => {
                        setForm({ ...form, password: e.target.value });
                      }}
                    />
                  </div>
                </div>
              </div>

              <div className="line">
                <div className="input-box">
                  <div className="label">
                    <label className="text_lable"> Fullname: </label>
                  </div>

                  <div className="input">
                    <input
                      type="text"
                      placeholder="Fullname"
                      onChange={(e) => {
                        setForm({ ...form, fullname: e.target.value });
                      }}
                    />
                  </div>
                </div>

                <div className="input-box">
                  <div className="label">
                    <label className="text_lable"> Email: </label>
                  </div>

                  <div className="input">
                    <input
                      type="text"
                      placeholder="User"
                      onChange={(e) => {
                        setForm({ ...form, email: e.target.value });
                      }}
                    />
                  </div>
                </div>
              </div>

              <div className="line">
                <div className="input-box">
                  <div className="label">
                    <label className="text_lable"> Phone: </label>
                  </div>

                  <div className="input">
                    <input
                      type="text"
                      placeholder="Phone number"
                      onChange={(e) => {
                        setForm({ ...form, phone: e.target.value });
                      }}
                    />
                  </div>
                </div>

                <div className="input-box">
                  <div className="label">
                    <label className="text_lable"> Address: </label>
                  </div>

                  <div className="input">
                    <input
                      type="text"
                      placeholder="Address"
                      onChange={(e) => {
                        setForm({ ...form, address: e.target.value });
                      }}
                    />
                  </div>
                </div>
              </div>

              <div className="line">
                <button className="btn" onClick={onRegister}>
                  Đăng kí
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmployerRegister;
