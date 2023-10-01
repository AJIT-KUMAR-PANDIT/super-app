import { useState } from "react";

import StylesForm from "./Form.module.css";

const Form = () => {
  const [isError, setIsError] = useState(false);
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);

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
      !isValidEmail(email)||
      !isMobileValid(mobile)
    ) {
      setIsError(true);
      console.log("isError ", isError, "email ", email);
    } else {
      setIsError(false);
    }

    // email error check email valadation
  };

  const showError = () => {};

  const isValidEmail=(email) =>{
    const validateEmailRegex = /^\S+@\S+\.\S+$/;
    return validateEmailRegex.test(email);
  };

  const isMobileValid = (mobile) => {
    const validMobileRegex = /^\d{10}$/;
    return validMobileRegex.test(mobile);
  };

  const isUserNameValid =(userName)=>{
    const validUserNameRegex = /^[a-zA-Z]{3,10}$/;
    return validUserNameRegex.test(userName);
  }

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <br />
          <br />
          <div>
            <input
              className={`${StylesForm.inputStyle}`}
              type="text"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            />
            {isError && name.length <= 0 ? (
              <label className={`${StylesForm.error}`}>
                <br />
                Field is required
              </label>
            ) : null}
          </div>
          <br />
          <div>
            <input
              className={`${StylesForm.inputStyle}`}
              type="text"
              placeholder="UserName"
              onChange={(e) => setUserName(e.target.value)}
            />
            {isError && !isUserNameValid(userName) ? (
              <label className={`${StylesForm.error}`}>
                <br />
                Field is required
              </label>
            ) : null}
          </div>
          <br />
          <div>
            <input
              className={`${StylesForm.inputStyle}`}
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {isError && !isValidEmail(email) ? (
              <label className={`${StylesForm.error}`}>
                <br />
                Field is required
              </label>
            ) : null}
          </div>
          <br />
          <div>
            <input
              className={`${StylesForm.inputStyle}`}
              type="number"
              placeholder="Mobile"
              onChange={(e) => setMobile(e.target.value)}
            />
            {isError && !isMobileValid(mobile) ? (
              <label className={`${StylesForm.error}`}>
                <br />
                Field is required
              </label>
            ) : null}
          </div>
          <br />
          <br />
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
          <br />
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
