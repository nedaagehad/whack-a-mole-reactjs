import { IHoleProps } from "./utils/types";
import "./utils/styles.css"

const Hole = ({ index }: IHoleProps) => {
  return <div className="hole" id={index.toString()} />;
};

export default Hole;
