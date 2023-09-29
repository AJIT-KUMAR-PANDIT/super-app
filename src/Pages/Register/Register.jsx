import LeftSideRegister from "../../Components/Register/LeftSideRegister/LeftSideRegister";
import StylesRegister from './Register.module.css';
import RightSideRegister from "../../Components/Register/RightSideRegister/RightSideRegister";

const Register = () => {
  return (
    <>
      <div className={StylesRegister["flex"]}>
        <LeftSideRegister className={StylesRegister["Fifty-Percent"]} />
        <RightSideRegister className={StylesRegister["Fifty-Percent"]} />
      </div>
    </>
  );
};

export default Register;
