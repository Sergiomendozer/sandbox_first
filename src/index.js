import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ReactDOM from "react";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
const rootElement1 = document.getElementById("root_2");
const root1 = createRoot(rootElement1);

root.render(
  <StrictMode>
    <App />
    <p>Hello</p>
  </StrictMode>
);

// ReactDOM.render(<p>Hello</p>, document.getElementById("root_2"));
