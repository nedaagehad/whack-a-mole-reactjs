import { useState } from "react";
import MalletSrc from "../../assets/images/mallet.png";
import "./utils/styles.css";

const Mallet = () => {
  const [horizontalMove, setHorizontalMove] = useState(0);
  const [verticalMove, setVerticalMove] = useState(0);
  const [clicked, setClicked] = useState(false);

  return (
    <div
      role="presentation"
      className="mallet"
      style={{
        left: horizontalMove,
        top: verticalMove,
        transform: clicked
            ? "translateX(-70px) translateY(-25px) rotate(-45deg)"
            : "translateX(-70px) translateY(-25px)",
          transition: "transform 0.1s",
      }}
      onMouseMove={(e) => {
        setHorizontalMove(e.pageX);
        setVerticalMove(e.pageY);
      }}
      onClick={(e) => {
        e.preventDefault();
        console.log("clicked on mallet");
      }}
      onMouseDown={(e) => {
        e.preventDefault();
        setClicked(true);
      }}
      onMouseUp={(e) => {
        e.preventDefault();
        setClicked(false);
      }}
    >
      {/* <img
        alt="Mallet"
        src={MalletSrc}
        style={{
          position: "absolute",
          left: horizontalMove,
          top: verticalMove,
          width: "150px",
          height: "150px",
          pointerEvents: "none",
          
        }}
      /> */}
    </div>
  );
};

export default Mallet;
