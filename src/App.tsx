import { useSelector } from "react-redux";
import "./App.css";
import Board from "./components/Board/index";
import Popup from "./components/Popup";
import Score from "./components/Score";
import { RootState } from "./store/store";

function App() {
  const {start} = useSelector((state: RootState) => state.startGame)
  return (
    <div>
      <Score/>
      <Board />
      {!start && <Popup />}
    </div>
  );
}

export default App;
