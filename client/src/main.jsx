import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import { Socketprovider } from "./context/SocketProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Socketprovider>
        <App />
      </Socketprovider>
    </BrowserRouter>
  </StrictMode>
);