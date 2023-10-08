import Profile from "../Profile/Profile";
import StyleUserPannel from "./UserPannel.module.css";

const UserPannel = () => {
  const storedData = JSON.parse(localStorage.getItem("data"));

  // Access the data as needed
  const { name, userName, email, mobile } = storedData;

  return (
    <>
      <div className={`${StyleUserPannel.pannel}`}>
        <div>
          <Profile />
        </div>
        <div className={`${StyleUserPannel.space1}`}>
          <div>
         <span className={`${StyleUserPannel.nameEmail}`}>   {name}</span>
            <br/>
            <span className={`${StyleUserPannel.nameEmail}`}> {email}</span>
            <br/>
            <span className={`${StyleUserPannel.userName}`}>{userName}</span>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default UserPannel;
