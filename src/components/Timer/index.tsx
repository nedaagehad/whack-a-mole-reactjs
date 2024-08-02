import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { starttimer } from "../../store/timerSlice";
import { endGame } from "../../store/StartGameSlice";
import { ReactComponent as ClockIcon } from "../../assets/images/clock.svg";
import "./utils/styles.css";
import { resetMoleIndex } from "../../store/MoleIndexSlice";
import { TIMER } from "../../enums/TIMER";

const Timer = () => {
  const dispatch = useDispatch();

  const { timer } = useSelector((state: RootState) => state.timer);
  const { start } = useSelector((state: RootState) => state.startGame);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (start) {
      interval = setInterval(() => {
        dispatch(starttimer());
      }, 1000);
    }

    if (timer === 0) {
      dispatch(endGame());
      dispatch(resetMoleIndex())
    }

    return () => {
      clearInterval(interval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [start, timer]);

  return (
    <div className="timer-box">
      <ClockIcon className="clock" width={70} height={70}/>
      <div className="progress-bar">
        <div className="inner-bar" style={{ width: `${((timer) / TIMER.LIMIT) * 100}%`}} />
      </div>
    </div>
  );
};

export default Timer;
