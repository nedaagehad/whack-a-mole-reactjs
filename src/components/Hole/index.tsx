import Mole from "../Mole";

type props = {
  index: number;
};

const Hole = ({ index }: props) => {
  return <div className="hole" id={index.toString()} />;
};

export default Hole;
