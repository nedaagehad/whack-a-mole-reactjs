import { useEffect } from "react";
import Hole from "../Hole";
import Mole from "../Mole";
import generateRandomIndex from "../../utils/GenerateRandomIndex";
// import Mallet from "../Mallet";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../store/store";
import { setMoleIndex } from "../../store/MoleIndexSlice";

const Board = () => {
  const dispatch = useDispatch();
  const { moleIndex } = useSelector((state: RootState) => state.moleIndex);
  const { start } = useSelector((state: RootState) => state.startGame);

  console.log(moleIndex)

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (start) {
       interval = setInterval(() => {
        dispatch(
          setMoleIndex({
            moleIndex: generateRandomIndex(moleIndex),
          })
        );
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [moleIndex, start]);

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
      <div role="presentation" className="board" onClick={() => console.log("clicked on board")}>{displayHoles().map((item) => item)}</div>
      {/* <Mallet/> */}
    </>
  );
};

export default Board;
