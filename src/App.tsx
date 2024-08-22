import { useSelector } from "react-redux";
import "./App.css";
import Board from "./components/Board/index";
import Popup from "./components/Popup";
import { RootState } from "./store/store";
import Header from "./components/Header";
import { useEffect } from "react";
// import { playGameMusic } from "./components/Board/utils/playGameMusic";
import IntroMusic from "./assets/audio/arcade-intro.mp3";
import InGameMusic from "./assets/audio/in-game-music.mp3";

function App() {
  const { start } = useSelector((state: RootState) => state.startGame);

  useEffect(() => {
    let gameMusic: HTMLAudioElement | null = null;

    if (!start) {
      gameMusic = new Audio(IntroMusic);
      gameMusic.play();
      gameMusic.loop = true;
    } else {
      gameMusic = new Audio(InGameMusic);
      gameMusic.play();
      gameMusic.loop = true;
    }

    return () => {
      if (gameMusic !== null) {
        gameMusic.pause();
        gameMusic.currentTime = 0;
      }
    };
  }, [start]);

  return (
    <div className="main-box">
      <Header />
      <Board />
      {!start && <Popup />}
    </div>
  );
}

export default App;
