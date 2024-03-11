import { useState } from "react";
import MalletSrc from "../../assets/mallet.png";

const Mallet = () => {
  const [horizontalMove, setHorizontalMove] = useState(0);
  const [verticalMove, setVerticalMove] = useState(0);
  const [clicked, setClicked] = useState(false);
  
  return (
    <div
      className="mallet"
      style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: "100%",
        height: "100%",
        // pointerEvents: "none"
      }}
      onMouseMove={(e) => {
        setHorizontalMove(e.pageX);
        setVerticalMove(e.pageY);
      }}
      onMouseDown={() => setClicked(true)}
      onMouseUp={() => setClicked(false)}
    >
      <img
        alt="Mallet"
        src={MalletSrc}
        style={{
          position: "absolute",
          left: horizontalMove,
          top: verticalMove,
          width: "150px",
          height: "150px",
          pointerEvents: "none",
          transform: clicked
            ? "translateX(-70px) translateY(-25px) rotate(-45deg)"
            : "translateX(-70px) translateY(-25px)",
          transition: "transform 0.1s",
        }}
      />
    </div>
  );
};

export default Mallet;
