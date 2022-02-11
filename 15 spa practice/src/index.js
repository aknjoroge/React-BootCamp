import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";
import { Suspense } from "react";
import FallbackUI from "./components/UI/fallback";

ReactDOM.render(
  <BrowserRouter>
    <Suspense fallback={<FallbackUI />}>
      <App />
    </Suspense>
  </BrowserRouter>,
  document.getElementById("root")
);
