import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import "./index.css";
import { AuthProvider } from "./context/AuthProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { disableReactDevTools } from "@fvilers/disable-react-devtools";

if (import.meta.env.VITE_NODE_ENV === "prod") {
  console.log("running in production mode...");
  disableReactDevTools();
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthProvider>
      <Routes>
        <Route path="/*" element={<App />} />
      </Routes>
    </AuthProvider>
  </BrowserRouter>,
);
