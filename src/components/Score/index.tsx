import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";
import {ReactComponent as StarIcon} from "../../assets/images/star.svg"
import "./utils/styles.css"

const Score = () => {
  const { score } = useSelector((state: RootState) => state.score);
  return <div className="score-box">
    <StarIcon className="star" />
    <div className="score-text lilita-one-font">
      {score}
    </div>
  </div>;
};

export default Score;
