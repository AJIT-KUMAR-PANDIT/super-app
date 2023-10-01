import StylesRightSideRegister from "./RightSideRegister.module.css";
import Form from "../Form/Form";

const RightSideRegister = () => {
  return (
    <>
      <div
        className={`${StylesRightSideRegister.container} ${StylesRightSideRegister.center}`}
      >
        <div className={`${StylesRightSideRegister.compact} ${StylesRightSideRegister.center}`}>
          <div className={StylesRightSideRegister["super-app-text"]}>
            Super app
          </div>
          <div className={StylesRightSideRegister["text1"]}>
            Create your new account
          </div>
          <Form />
        </div>
        </div>
    </>
  );
};

export default RightSideRegister;
