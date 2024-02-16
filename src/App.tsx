import { useEffect, useState } from "react";
import "./App.css";
import Mole from "./components/Mole";

function App() {
  const [randomHoleIndex, setRandomHoleIndex] = useState<number | null>();
  const [stopMole, setStopMole] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);

  useEffect(() => {
    let interval = setInterval(() => {
      setRandomHoleIndex(Math.floor(Math.random() * 9));
    }, 500);

    if (stopMole) clearInterval(interval);

    return () => {
      clearInterval(interval);
    };
  }, [stopMole]);

  const displayMole = (holeIndex: number) => {
    if (holeIndex === randomHoleIndex)
      return (
        <div 
        style={{ position: "absolute", top: 0, left: "30px"}} 
        
        onMouseDown={() => setScore(score + 1)}>
          <Mole />
        </div>
      );
  };

  const displayHoles = () => {
    let arrayOfHoles = [];
    for (let i = 0; i < 9; i++) {
      arrayOfHoles.push(
        <div className="hole-wapper" style={{ position: "relative", height: "80%", display: "flex", flexDirection: "column", justifyContent: "flex-end", alignItems: "center", overflow: "hidden"}} id={i.toString()} key={i}>
          {displayMole(i)}
          <div className="hole"/>
        </div>
      );
    }

    return arrayOfHoles;
  };
  return (
    <div>
      <h2>score: {score * 10}</h2>
      <div className="board">{displayHoles().map((item) => item)}</div>
      <button onClick={() => setStopMole(true)}>Stop!!!</button>
    </div>
  );
}

export default App;
