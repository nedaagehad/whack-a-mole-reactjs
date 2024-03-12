import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";
import "./utils/styles.css"

const Score = () => {
  const { score } = useSelector((state: RootState) => state.score);
  return <h1 className="score">Score: {score}</h1>;
};

export default Score;
