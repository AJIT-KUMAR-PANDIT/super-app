import { useState, useEffect } from "react";
import { redirect, useNavigate } from "react-router-dom";

import StylesForm from "./Form.module.css";

const Form = () => {
  const navigate = useNavigate();

  const storedData = JSON.parse(localStorage.getItem("data")) || {
    name: "",
    userName: "",
    email: "",
    mobile: "",
    reg: false,
  };
  const [data, setData] = useState(storedData);

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data));
  }, [data]);

  // useEffect(() => {
  //   //function to be executed on page load
  //   console.log("Function executed on page load", data.reg);
  //   if (data.reg === "true") {
  //     navigate("/category");
  //   }
  // }, []);

  // const navigate = useNavigate();

  useEffect(() => {
    if (data.reg) {
      navigate('/category'); // Redirect to category
    }
  }, [navigate]);

  const [isError, setIsError] = useState(false);
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [reg, setReg] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (handelError() === false) {
      updateData();
      console.log("set data reg before true ", data.reg);
      
      storedData.reg = true; 
      console.log("set data reg after true ", data.reg);
      navigate("/category");
    } else {
      console.log("set data reg before false ", data.reg);
      storedData.reg = false;
      console.log("set data reg after false ", data.reg);
      console.log("set data reg", data.reg);
    }
    // console.log("upadate data", data);
    // console.log(data.reg);
    handelError();
  };

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  const handelError = () => {
    if (
      name.length <= 0 ||
      userName.length <= 0 ||
      email.length <= 0 ||
      mobile.length <= 0 ||
      !isChecked ||
      !isValidEmail(email) ||
      !isMobileValid(mobile) ||
      !isUserNameValid(userName) ||
      !isName(name)
    ) {
      setIsError(true);
      return true;
      // console.log("isError ", isError, "email ", email);
    } else {
      setIsError(false);
      return false;
    }

    // email error check email valadation
  };

  // const showError = () => {};

  const isName = (name) => {
    const validNameRegex = /^[a-zA-Z ]{3,}$/;
    return validNameRegex.test(name);
  };

  const isValidEmail = (email) => {
    const validateEmailRegex = /^\S+@\S+\.\S+$/;
    return validateEmailRegex.test(email);
  };

  const isMobileValid = (mobile) => {
    const validMobileRegex = /^\+?[1-9][0-9]{8,9}$/;
    return validMobileRegex.test(mobile);
  };

  const isUserNameValid = (userName) => {
    const validUserNameRegex = /^[a-zA-Z0-9]{3,10}$/;
    return validUserNameRegex.test(userName);
  };

  const updateData = () => {
    data.name = name;
    data.userName = userName;
    data.email = email;
    data.mobile = mobile;
  };

  return (
    <>
      {/* // console.log("data.reg", data.reg) */}
      {/* redirect.redirect("/category"); */}

      <div>
        <form onSubmit={handleSubmit}>
          <br />
          <br />
          {/* [Name]****************************************************************************** */}
          <div>
            {isError && !isName(name) ? (
              <input
                className={`${StylesForm.inputStyle}, ${StylesForm.errorBox}`}
                type="text"
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
              />
            ) : (
              <input
                className={`${StylesForm.inputStyle}`}
                type="text"
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
              />
            )}
            {isError && !isName(name) ? (
              <label className={`${StylesForm.error}`}>
                <br />
                Field is required must be albhabet
              </label>
            ) : null}
          </div>
          <br />
          {/* [UserName]****************************************************************************** */}

          <div>
            {isError && !isUserNameValid(userName) ? (
              <input
                className={`${StylesForm.inputStyle}, ${StylesForm.errorBox}`}
                type="text"
                placeholder="UserName"
                onChange={(e) => setUserName(e.target.value)}
              />
            ) : (
              <input
                className={`${StylesForm.inputStyle}`}
                type="text"
                placeholder="UserName"
                onChange={(e) => setUserName(e.target.value)}
              />
            )}
            {isError && !isUserNameValid(userName) ? (
              <label className={`${StylesForm.error}`}>
                <br />
                Field is required [ without space must be 3-10 char ]
              </label>
            ) : null}
          </div>
          <br />
          {/* [Email]****************************************************************************** */}

          <div>
            {isError && !isValidEmail(email) ? (
              <input
                className={`${StylesForm.inputStyle}, ${StylesForm.errorBox}`}
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            ) : (
              <input
                className={`${StylesForm.inputStyle}`}
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            )}
            {isError && !isValidEmail(email) ? (
              <label className={`${StylesForm.error}`}>
                <br />
                Field is required [ must be valid email format ]
              </label>
            ) : null}
          </div>
          <br />
          {/* [Mobile]****************************************************************************** */}

          <div>
            {isError && !isMobileValid(mobile) ? (
              <input
                className={`${StylesForm.inputStyle}, ${StylesForm.errorBox}`}
                type="number"
                placeholder="Mobile"
                onChange={(e) => setMobile(e.target.value)}
              />
            ) : (
              <input
                className={`${StylesForm.inputStyle}`}
                type="number"
                placeholder="Mobile"
                onChange={(e) => setMobile(e.target.value)}
              />
            )}
            {isError && !isMobileValid(mobile) ? (
              <label className={`${StylesForm.error}`}>
                <br />
                Field is required [ must be 9 or 10 digit number ]
              </label>
            ) : null}
          </div>
          <br />
          {/* [Chekbox]****************************************************************************** */}

          <div>
            <label>
              <input
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
                className={`${StylesForm.checkBox}`}
              />
              <span className={`${StylesForm.checkBoxTxt}`}>
                Share my registration data with Superapp
              </span>
            </label>
            {isError && !isChecked ? (
              <label className={`${StylesForm.error}`}>
                <br />
                Check this box if you want to proceed
              </label>
            ) : null}
          </div>
          <br />
          {/* [SubmitButton]****************************************************************************** */}

          <div>
            <button className={StylesForm["green-button-sign-up"]}>
              SIGN UP
            </button>
          </div>
          <br />
        </form>
        <div className={`${StylesForm.text1}`}>
          By clicking on Sign up. you agree to Superapp
          <span className={`${StylesForm.text1Green}`}>
            {" "}
            Terms and Conditions of Use
          </span>
        </div>
        <div className={`${StylesForm.text1}`}>
          To learn more about how Superapp collects, uses, shares and protects
          your personal data please head Superapp
          <span className={`${StylesForm.text1Green}`}> Privacy Policy</span>
        </div>
      </div>
    </>
  );
};

export default Form;
