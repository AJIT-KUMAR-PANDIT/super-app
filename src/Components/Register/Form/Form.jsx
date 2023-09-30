import { useState } from "react";

import StylesForm from "./Form.module.css";

const Form = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

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
              onChange={(e) => console.log(e.target.value)}
            />
          </div>
          <br />
          <div>
            <input
              className={`${StylesForm.inputStyle}`}
              type="text"
              placeholder="UserName"
              onChange={(e) => console.log(e.target.value)}
            />
          </div>
          <br />
          <div>
            <input
              className={`${StylesForm.inputStyle}`}
              type="mail"
              placeholder="Email"
              onChange={(e) => console.log(e.target.value)}
            />
          </div>
          <br />
          <div>
            <input
              className={`${StylesForm.inputStyle}`}
              type="number"
              placeholder="Mobile"
              onChange={(e) => console.log(e.target.value)}
            />
          </div>
          <br /><br />
          <div>
            <label>
              <input
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
              />
              <span className={`${StylesForm.checkBoxTxt}`}>
                Share my registration data with Superapp
              </span>
            </label>
          </div>
          <br/><br/>
          <div>
            <button className={StylesForm["green-button-sign-up"]}>
              SIGN UP
            </button>
          </div>
          <br/>
        </form>
        <div className={`${StylesForm.text1}`}>
          By clicking on Sign up. you agree to Superapp
          <span className={`${StylesForm.text1Green}`}>Terms and Conditions of Use</span>
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
