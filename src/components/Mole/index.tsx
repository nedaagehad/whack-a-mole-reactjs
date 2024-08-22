import "./utils/styles.css";
import { whackTheMole } from "./utils/whackTheMole";
import MoleIcon from "../../assets/images/mole.svg";
import WhackedIcon from "../../assets/images/whacked.svg";
import { useState } from "react";

const Mole = () => {
  const [whacked, setWhacked] = useState<boolean>(false);

  return (
    <div
      role="presentation"
      className="mole"
      onClick={() => {
        whackTheMole();
        setWhacked(true)
      }}
    >
      <img alt="mole" src={whacked ? WhackedIcon : MoleIcon} />
    </div>
  );
};

export default Mole;
