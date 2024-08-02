import { useSelector } from "react-redux";
import "./App.css";
import Board from "./components/Board/index";
import Popup from "./components/Popup";
import { RootState } from "./store/store";
import Header from "./components/Header";

function App() {
  const {start} = useSelector((state: RootState) => state.startGame)
  return (
    <div className="main-box">
      <Header />
      <Board />
      {!start && <Popup />}
    </div>
  );
}

export default App;
