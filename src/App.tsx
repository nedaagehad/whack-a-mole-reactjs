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
import { ReactComponent as SoundOn } from "./assets/images/sound-on.svg";
import { ReactComponent as SoundOff } from "./assets/images/sound-off.svg";

function App() {
  const { start } = useSelector((state: RootState) => state.startGame);
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
