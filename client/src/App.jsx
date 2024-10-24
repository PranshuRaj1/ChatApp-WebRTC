import "./App.css";
import { Routes, Route } from "react-router-dom";
import { LobbyScreen } from "./components/Lobby";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LobbyScreen />} />
      </Routes>
    </div>
  );
}

export default App;
