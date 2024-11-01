import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import { SocketProvider } from "./Providers/Socket";
import RoomPage from "./pages/Room";
import LobbyScreen from "./pages/Lobby";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LobbyScreen />} />
        <Route path="/room/:id" element={<RoomPage />} />
      </Routes>
    </>
  );
}

export default App;
