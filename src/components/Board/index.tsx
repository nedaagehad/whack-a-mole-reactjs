import { useEffect, useState } from "react";
import Hole from "../Hole";
import Mole from "../Mole";
import generateRandomIndex from "../../utils/GenerateRandomIndex";
import Mallet from "../Mallet";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../store/store";
import { setMoleIndex } from "../../store/MoleIndexSlice";

const Board = () => {
  const [stopMole, setStopMole] = useState<boolean>(false);
  const dispatch = useDispatch();
  const { moleIndex } = useSelector((state: RootState) => state.moleIndex);

  useEffect(() => {
    let interval = setInterval(() => {
      dispatch(
        setMoleIndex({
          moleIndex: generateRandomIndex(moleIndex),
        })
      );
    }, 1000);

    if (stopMole) clearInterval(interval);

    return () => {
      clearInterval(interval);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stopMole, moleIndex]);

  const displayMole = (holeIndex: number) => {
    if (holeIndex === moleIndex) return <Mole />;
  };

  const displayHoles = () => {
    let arrayOfHoles = [];
    for (let i = 0; i < 9; i++) {
      arrayOfHoles.push(
        <div
          className="hole-wapper"
          style={{
            width: "100%",
            position: "relative",
            height: "80%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            alignItems: "center",
            overflow: "hidden",
          }}
          id={i.toString()}
          key={i}
        >
          <Hole index={i} />
          {displayMole(i)}
        </div>
      );
    }

    return arrayOfHoles;
  };

  return (
    <>
      <div className="board">{displayHoles().map((item) => item)}</div>
      <button onClick={() => setStopMole(true)}>Stop!!!</button>
      {/* <Mallet/> */}
    </>
  );
};

export default Board;
