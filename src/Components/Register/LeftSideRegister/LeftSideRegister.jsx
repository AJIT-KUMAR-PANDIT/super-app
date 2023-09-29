import StyleLeftRegister from "./LeftSideRegister.module.css";

const LeftSideRegister = () => {
  return (
    <>
      <div className={StyleLeftRegister["Left-body"]}>
        <p className={StyleLeftRegister["Left-body-text"]}>
          Discover new things on Superapp
        </p>
      </div>
    </>
  );
};

export default LeftSideRegister;
