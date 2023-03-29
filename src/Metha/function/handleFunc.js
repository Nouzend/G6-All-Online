import axios from "axios";
import React, { useState, SetState } from "react";
import {checkConfirmPassword,checkemail,checkPassword,checkname} from "./checkfunc"


function handleFunc(){
  const [email, setEmail] = useState("");
  const [Name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [NameError, setNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  
  
  
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
  
 const handleReset = () => {
      setName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    };
  
 const handleSubmit = async (event, err) => {
      try {
        let hasError = false;
         event.preventDefault();
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
            url: "http://localhost:3002/register",
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
              )
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


}

export default handleFunc;

