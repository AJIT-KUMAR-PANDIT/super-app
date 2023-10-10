import StyleTimer from "./Timer.module.css";

const Timer = () => {
  return (
    <>
      <div className={`${StyleTimer.timerBody}`}>
        <div className={`${StyleTimer.timerShowAdjust}`}>
          <div className={`${StyleTimer.timerShow}`}>05:08:56</div>
          </div>
        <div>
          <div className={`${StyleTimer.timerHMS}`}>
            <div className={`${StyleTimer.timerHMStext}`}>
              <br /> Hours
              <br />
              <br />
              <img src="/images/upArrow.svg" style={{ width: "2vw" }} />
              <br />
              <span className={`${StyleTimer.text}`}>05</span>
              <br />
              <img src="/images/downArrow.svg" style={{ width: "2vw" }} />
            </div>
            <div className={`${StyleTimer.timerHMStext}`}>
              <br /> Minutes
              <br />
              <br />
              <img src="/images/upArrow.svg" style={{ width: "2vw" }} />
              <br />
              <span className={`${StyleTimer.text}`}>09</span>
              <br />
              <img src="/images/downArrow.svg" style={{ width: "2vw" }} />
            </div>
            <div className={`${StyleTimer.timerHMStext}`}>
              <br /> Seconds
              <br />
              <br />
              <img src="/images/upArrow.svg" style={{ width: "2vw" }} />
              <br />
              <span className={`${StyleTimer.text}`}>00</span>
              <br />
              <img src="/images/downArrow.svg" style={{ width: "2vw" }} />
            </div>
          </div>
          <div>
            <br />
            <button className={`${StyleTimer.timerButton}`}>Start</button>
          </div>
          <br />
        </div>
      </div>
    </>
  );
};

export default Timer;
