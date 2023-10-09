import StyleHome from "./Home.module.css";
import UserPannel from "../../Components/Home/UserPannel/UserPannel";
import News from "../../Components/Home/News/News";
import Notes from "../../Components/Home/Notes/Notes";
import Weather from "../../Components/Home/Weather/Weather";

const Home = () => {
  return (
    <>
      <div className={`${StyleHome.container}`}>
        <div>
          <UserPannel />
          <br/>
          <Weather />
        </div>
        <div>
          <Notes className={`${StyleHome.notes}`} />
        </div>
        <div className={`${StyleHome.news}`}>
          <News />
        </div>
      </div>
    </>
  );
};

export default Home;
