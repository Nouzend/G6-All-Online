import React, { useState, SetState } from "react";
import axios from "axios";
import swal from "sweetalert"
import { redirect } from "react-router-dom";
import Navbar from "./sup-compo/navbar/navbarRegis";

function Register(productType) {
  const [email, setEmail] = useState("");
  const [Name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [NameError, setNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const {checkConfirmPassword,checkemail,checkPassword,checkname} = require('./function/checkfunc')
  console.log(productType.productType)
  // handle input change event
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === "Name") {
      setName(value);
    }
    if (id === "email") {
      setEmail(value);
    }
    if (id === "password") {
      setPassword(value);
    }
    if (id === "confrimPassword") {
      setConfirmPassword(value);
    }
  };
  // JWT validation

  // handle form reset
  const handleReset = () => {
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };
  //register button function
  const handleSubmit = async (event, err) => {
    try {
      let hasError = false;
      //  event.preventDefault();
      const NameError = checkname(Name);
      if (NameError) {
        setNameError(NameError);
        hasError = true;
      } else {
        setNameError("");
      }

      const emailError = checkemail(email);
      if (emailError) {
        setEmailError(emailError);
        hasError = true;
      } else {
        setEmailError("");
      }
      const passwordError = checkPassword(password);
      if (passwordError) {
        setPasswordError(passwordError);
        hasError = true;
      } else {
        setPasswordError("");
      }
      const confirmPasswordError = checkConfirmPassword(
        password,
        confirmPassword
      );
      if (confirmPasswordError) {
        setConfirmPasswordError(confirmPasswordError);
        hasError = true;
      } else {
        setConfirmPasswordError("");
      }
      if (!hasError) {
        var data = JSON.stringify({
          email: email,
          name: Name,
          password: password,
        });

        var config = {
          method: "post",
          url: "http://localhost:3002/user/register",
          headers: {
            "Content-Type": "application/json",
          },
          data: data,
        };

        axios(config)
          .then(function (response) {
            return (
              swal({
                icon: "success",
                text: "สมัครสมาชิกเรียบร้อย"
              })
            ),
            window.location.href = "/login";
          })
          .catch(function (error) {
            console.log(error);
          });
        handleReset();
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="">
      <Navbar/>
      <div className=" text-center">
        <div className="d-grid gap-3 d-flex justify-content-center text-center">
          <div className="">
            <div className="form-floating py-1">
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                onChange={(e) => handleInputChange(e)}
              />
              <label htmlFor="floatingInput">อีเมล</label>
              <small className="text-danger">{emailError}</small>
            </div>
            <div className="form-floating py-1">
              <input
                type="uername"
                className="form-control"
                id="Name"
                value={Name}
                onChange={(e) => handleInputChange(e)}
              />
              <label htmlFor="floatingPassword">ชื่อผู้ใช้</label>
              <small className="text-danger">{NameError}</small>
            </div>
            <div className="form-floating mb-3 py-1">
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={(e) => handleInputChange(e)}
              />
              <label htmlFor="floatingPassword">รหัสผ่าน</label>
              <small id="passwordHelpInline" className="text-muted">
                ต้องมีรหัสผ่านอย่างน้อย 8
                และมีอักษรพิมพ์ใหญ่หรือพิมเล็กอย่างน้อย 1 ตัวอักษร.
              </small>
              <small className="text-danger">{passwordError}</small>
            </div>
            <div className="form-floating py-1">
              <input
                type="password"
                className="form-control"
                id="confrimPassword"
                value={confirmPassword}
                onChange={(e) => handleInputChange(e)}
              />
              <label htmlFor="floatingPassword">ยืนยันรหัสผ่าน</label>
              <small className="text-danger">{confirmPasswordError}</small>
            </div>
            <hr />
            <p>
              ในการสร้างบัญชีคุณกรุณายอมรับข้อกำหนดของเรา{" "}
              <a href="">ข้อกำหนด & ความเป็นส่วนตัว</a>.
            </p>
            <button
              id="submit"
              type="button"
              onClick={() => handleSubmit()}
              className="btn btn-success py-1"
            >
              สมัคร
            </button>
            <div className="container signin">
              <p>
                {/* มีบัญชีผู้ใช้อยู่แล้วใช่ไหม? <a href="#">ล็อคอิน</a>. */}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
