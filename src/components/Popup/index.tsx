import "./utils/styles.css";
import { ReactComponent as ClockIcon } from "../../assets/images/clock.svg";
import { useDispatch, useSelector } from "react-redux";
import { startGame } from "../../store/StartGameSlice";
import { resetTimer } from "../../store/timerSlice";
import { RootState } from "../../store/store";
import {
  IPopupContent,
  returnPopupContent,
} from "./utils/PopupContent";
import { useState } from "react";
import { resetscore } from "../../store/scoreSlice";

const Popup = () => {
  const dispatch = useDispatch();
  const { timer } = useSelector((state: RootState) => state.timer);
  const { score } = useSelector((state: RootState) => state.score);
  const [content] = useState<IPopupContent>(returnPopupContent(timer));

  const handleClick = () => {
    dispatch(resetTimer());
    dispatch(resetscore());
    dispatch(startGame());
  };
  return (
    <div className="tint">
      <div className="popup">
        <div className="popup-content">
          <ClockIcon />
          <p className="lilita-one-font title">{content.title}</p>
          <p className="lilita-one-font subtitle">{content.subtitle} {timer === 0 ? score : ""}</p>
        </div>
        <button
          className="lilita-one-font start-button"
          onClick={handleClick}
        >{content.buttonText}</button>
      </div>
    </div>
  );
};

export default Popup;

