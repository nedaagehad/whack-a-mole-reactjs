import "./utils/styles.css";
import { whackTheMole } from "./utils/whackTheMole";
import {ReactComponent as MoleIcon} from "../../assets/images/mole.svg"

const Mole = () => {

  return (
    <div role="presentation" className="mole" onClick={whackTheMole}>
      <MoleIcon/>
    </div>
  );
};

export default Mole;
