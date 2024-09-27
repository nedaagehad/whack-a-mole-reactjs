import { useSelector } from "react-redux";
import "./App.css";
import Board from "./components/Board/index";
import Popup from "./components/Popup";
import { RootState } from "./store/store";
import Header from "./components/Header";
import { useEffect, useState } from "react";
import { playGameMusic } from "./components/Board/utils/playGameMusic";
import IntroMusic from "./assets/audio/arcade-intro.mp3";
import InGameMusic from "./assets/audio/in-game-music.mp3";
import { ReactComponent as MusicOn } from "./assets/images/music-on.svg";
import { ReactComponent as MusicOff } from "./assets/images/music-off.svg";
import ReactConfetti from "react-confetti";

function App() {
  const { start } = useSelector((state: RootState) => state.startGame);
  const { score } = useSelector((state: RootState) => state.score);
  const [muteMusic, setMuteMusic] = useState<boolean>(true);

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
    <div className="main-box">
     {!start && Boolean(score) && <ReactConfetti
        gravity={0.1}
        numberOfPieces={2000}
        recycle={false}
        style={{ zIndex: 10}}
        width={window.innerWidth}
        height={window.innerHeight}
      />}
     <div className="music-section">
      {muteMusic && <p className="music-hint lilita-one-font">Click to play some cool music! &rarr;</p>}
     <button
        className="music-button"
        onClick={() => setMuteMusic((prev) => !prev)}
      >
        {muteMusic ? (
          <MusicOff className=".inherit-cursor" width={50} height={50} />
        ) : (
          <MusicOn className=".inherit-cursor" width={50} height={50} />
        )}
      </button>
     </div>
      <Header />
      <Board />
      {!start && <Popup />}
    </div>
  );
}

export default App;
