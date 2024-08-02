import "./utils/styles.css";
import { ReactComponent as ClockIcon } from "../../assets/images/clock.svg";
import { useDispatch, useSelector } from "react-redux";
import { startGame } from "../../store/StartGameSlice";
import { resetTimer } from "../../store/timerSlice";
import { RootState } from "../../store/store";
import {
  IPopupContent,
  retryGamePopupContent,
  startGamePopupContent,
} from "./utils/PopupContent";
import { useEffect, useState } from "react";

const Popup = () => {
  const dispatch = useDispatch();
  const [content, setContent] = useState<IPopupContent>(startGamePopupContent);

  const { timer } = useSelector((state: RootState) => state.timer);
  const { score } = useSelector((state: RootState) => state.score);

  useEffect(() => {
    if (timer === 0) setContent(retryGamePopupContent);
    else setContent(startGamePopupContent);
  }, [timer]);

  const handleClick = () => {
    dispatch(resetTimer());
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
