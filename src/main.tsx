import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import firebaseConfig from "./fbconfig.ts";
import { initializeApp } from "firebase/app";

const app = initializeApp(firebaseConfig);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
