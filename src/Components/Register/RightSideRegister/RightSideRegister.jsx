import StylesRightSideRegister from "./RightSideRegister.module.css";

const RightSideRegister = () => {
  return (
    <>
      <div className='{StylesRightSideRegister["container"]}'>
        <div className={StylesRightSideRegister["super-app-text"]}>
          Super App
        </div>
      </div>
    </>
  );
};

export default RightSideRegister;
