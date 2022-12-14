import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Weather from "./Weather.js";
import Main  from "./Main";

import "./styles.css";
function App() {
  return (
    <div className="App">
      <div>
        <Weather />
      </div>
      <Main />
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
