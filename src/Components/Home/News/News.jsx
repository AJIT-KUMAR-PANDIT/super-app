import StyleNews from "./News.module.css";

const News = () => {
  return (
    <>
      <div>
        <div className={`${StyleNews.image}`}>
          <div className={`${StyleNews.heading}`}>
            Want to climb Mount <br /> Everest?
          </div>
        </div>
        <div className={`${StyleNews.news}`}>
          In the years since human beings first reached the summit of Mount
          Everest in 1953, climbing the world’s highest mountain has changed
          dramatically. Today, hundreds of mountaineers manage the feat each
          year thanks to improvements in knowledge, technology, and the
          significant infrastructure provided by commercially guided expeditions
          that provide a veritable highway up the mountain for those willing to
          accept both the......
        </div>
      </div>
    </>
  );
};

export default News;
