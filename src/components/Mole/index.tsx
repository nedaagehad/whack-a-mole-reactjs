import { useDispatch } from "react-redux";
import "./utils/styles.css";
import { increaseScore } from "../../store/scoreSlice";

const Mole = () => {
  const dispatch = useDispatch()
  const whackTheMole = () => {
    dispatch(increaseScore({
      score: 10
    }))
  }
  return (
    <div className="mole" onClick={whackTheMole}>
      <div className="eyes">
        <div className="eye left">
          <div className="pupil">
            <div className="eye-light" />
          </div>
        </div>
        <div className="eye right">
        <div className="pupil">
            <div className="eye-light" />
          </div>
        </div>
      </div>
      <div
        className="nose"
      />
      <div className="mouth">
      <div
        className="lip right"
      >
       <div className="mustache top"/>
       <div className="mustache middle"/>
       <div className="mustache bottom"/>
      </div>
      <div
        className="lip left"
      >
        <div className="mustache top"/>
       <div className="mustache middle"/>
       <div className="mustache bottom"/>
      </div>
      <div className="teeth">
      <div className="tooth left"/>
      <div className="tooth right"/>
      </div>
      </div>
    </div>
  );
};

export default Mole;
