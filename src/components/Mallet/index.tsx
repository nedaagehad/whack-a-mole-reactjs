import { useEffect, useRef } from "react";
import "./utils/styles.css";

interface IMalletProps {
  coordinates: {
    x: number;
    y: number;
  };
  reference: React.LegacyRef<HTMLDivElement>
}

const Mallet = ({ coordinates, reference }: IMalletProps) => {
  // const malletRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   requestAnimationFrame(() => {
  //     if (malletRef.current) {
  //       malletRef.current.style.left = `${coordinates.x - 30}px`;
  //       malletRef.current.style.top = `${coordinates.y - 10}px`;
  //     }
  //   });
  // }, [malletRef, coordinates.x, coordinates.y]);

  return (
    <div
      ref={reference}
      className="mallet"
      style={{
        // left: coordinates.x - 30,
        // top: coordinates.y - 10,
        // transform: clicked
        //     ? "translateX(-70px) translateY(-25px) rotate(-45deg)"
        //     : "translateX(-70px) translateY(-25px)",
        //   transition: "transform 0.1s",
      }}
    >
      {" "}
    </div>
  );
};

export default Mallet;
