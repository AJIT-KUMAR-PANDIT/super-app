import StyleHome from "./Home.module.css";
import UserPannel from "../../Components/Home/UserPannel/UserPannel";
import News from "../../Components/Home/News/News";

const Home = () => {
  return (
    <>
      <div className={`${StyleHome.container}`}>
        <div>
          <UserPannel />
        </div>
        <div>

        </div>
        <div className={`${StyleHome.news}`}>
            <News/>
        </div>
      </div>
    </>
  );
};

export default Home;
