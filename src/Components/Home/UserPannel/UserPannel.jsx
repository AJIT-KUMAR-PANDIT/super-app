import Profile from "../Profile/Profile";
import StyleUserPannel from "./UserPannel.module.css";

const UserPannel = () => {
  const storedData = JSON.parse(localStorage.getItem("data"));

  // Access the data as needed
  const { name, userName, email, mobile } = storedData;
  const browse = JSON.parse(localStorage.getItem("category"));
  return (
    <>
      {console.log(browse)}
      <div className={`${StyleUserPannel.pannel}`}>
        <div>
          <Profile />
        </div>
        <div className={`${StyleUserPannel.space1}`}>
          <div>
            <span className={`${StyleUserPannel.nameEmail}`}> {name}</span>
            <br />
            <span className={`${StyleUserPannel.nameEmail}`}> {email}</span>
            <br />
            <span className={`${StyleUserPannel.userName}`}>{userName}</span>
          </div>

          <div style={{ overflowY: "scroll" , maxHeight: "11vh"}}>
            <Movies category={browse}></Movies>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserPannel;

const Movies = ({ category }) => {
  return (
    <span
      style={{
        color: "white",
        overflowY: `${category.length > 4 ? "scroll" : "hidden"}`,
      }}
    >
      {category.map((genre, index) => (
        <div
          style={{
            color: "white",
            borderRadius: "36.947px",
            background: "#9F94FF",
            width: "111px",
            fontSize: "21px",
            textAlign: "center",
          }}
          key={index}
        >
          {genre}
        </div>
      ))}
    </span>
  );
};
