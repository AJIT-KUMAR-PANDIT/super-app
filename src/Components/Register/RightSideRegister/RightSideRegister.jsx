import StylesRightSideRegister from "./RightSideRegister.module.css";
import Form from "../Form/Form";

const RightSideRegister = () => {
  return (
    <>
      <div
        className={`${StylesRightSideRegister.container} ${StylesRightSideRegister.center}`}
      >
        
          <div className={StylesRightSideRegister["super-app-text"]}>
            Super app
          </div>
          <div className={StylesRightSideRegister["text1"]}>
            Create your new account
          </div>
          <Form className={`${StylesRightSideRegister.compact}`}/>
        </div>
    
    </>
  );
};

export default RightSideRegister;
