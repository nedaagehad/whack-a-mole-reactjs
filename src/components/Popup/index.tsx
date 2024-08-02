import "./utils/styles.css";
import {ReactComponent as ClockIcon} from "../../assets/images/clock.svg"
import { useDispatch } from "react-redux";
import { startGame } from "../../store/StartGameSlice";

const Popup = () => {
    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(startGame())
    }
  return (
    <div className="tint">
      <div className="popup">
        <div className="popup-content">
            <ClockIcon />
            <p className="lilita-one-font title">test</p>
            <p className="lilita-one-font subtitle">test</p>
        </div>
        <button className="lilita-one-font start-button" onClick={handleClick}>Start Game!</button>
      </div>
    </div>
  );
};

export default Popup;
