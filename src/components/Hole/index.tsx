import { IHoleProps } from "./utils/types";
import "./utils/styles.css";
import {ReactComponent as HoleBack} from "../../assets/images/hole-back.svg"
import {ReactComponent as HoleFront} from "../../assets/images/hole-front.svg"

const Hole = ({ index }: IHoleProps) => {
  return <div className="hole" id={index.toString()}>
    <HoleBack width={"100%"} style={{ position: "absolute", top: 0, zIndex: 1}} />
    <HoleFront width={"100%"} style={{ position: "absolute", top: "25px", zIndex: 3}} />
  </div>;
};

export default Hole;
