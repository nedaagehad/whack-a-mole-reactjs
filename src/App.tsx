import { useSelector } from "react-redux";
import "./App.css";
import Board from "./components/Board/index";
import Popup from "./components/Popup";
import { RootState } from "./store/store";
import Header from "./components/Header";
import { useEffect, useMemo, useRef, useState } from "react";
import { playGameMusic } from "./components/Board/utils/playGameMusic";
import IntroMusic from "./assets/audio/arcade-intro.mp3";
import InGameMusic from "./assets/audio/in-game-music.mp3";
import { ReactComponent as SoundOn } from "./assets/images/sound-on.svg";
import { ReactComponent as SoundOff } from "./assets/images/sound-off.svg";
import { TIMER } from "./enums/TIMER";
// import Mallet from "./components/Mallet";

function App() {
  // const malletRef = useRef<HTMLDivElement>(null);

  const { start } = useSelector((state: RootState) => state.startGame);
  const { timer } = useSelector((state: RootState) => state.timer);
  const [muteMusic, setMuteMusic] = useState<boolean>(true);
  // const [malletCoordinates, setMalletCoordinates] = useState({
  //   x: 0,
  //   y: 0
  // })

  // const memoizedCoordinates = useMemo(() => malletCoordinates, [malletCoordinates])

  // const setMalletPosition = (e: React.MouseEvent<HTMLDivElement>) => {
    // setMalletCoordinates({
    //   x: e.pageX,
    //   y: e.pageY
    // })
  //   requestAnimationFrame(() => {
  //     if (malletRef.current) {
  //       malletRef.current.style.left = `${e.pageX - 30}px`;
  //       malletRef.current.style.top = `${e.pageY - 10}px`;
  //     }
  //   });
  // }

  // useEffect(() => {
  //   window.addEventListener("mousemove", setMalletPosition)

  //   return () => {
  //     window.removeEventListener("mousemove", setMalletPosition)
  //   }
  // }, [malletRef])
  
  useEffect(() => {
    let gameMusic: HTMLAudioElement;

    if (!start) {
      gameMusic = new Audio(IntroMusic);
    } else {
      gameMusic = new Audio(InGameMusic);
    }
    gameMusic.muted = muteMusic;
    if (!muteMusic) playGameMusic(gameMusic);

    return () => {
      if (gameMusic !== null) {
        gameMusic.pause();
        gameMusic.currentTime = 0;
      }
    };
  }, [start, muteMusic]);

  return (
    <div className="main-box" 
    // onMouseMove={setMalletPosition}
    >
      {/* <Mallet reference={malletRef} coordinates={memoizedCoordinates} /> */}
      <button
        className="sound-button"
        onClick={() => setMuteMusic((prev) => !prev)}
      >
        {muteMusic ? (
          <SoundOff width={50} height={50} />
        ) : (
          <SoundOn width={50} height={50} />
        )}
      </button>
      <Header />
      <Board />
      {!start && <Popup />}
    </div>
  );
}

export default App;
