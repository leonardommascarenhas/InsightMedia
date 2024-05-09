/// <reference types="vite-plugin-svgr/client" />
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ContentfulProvider } from "./Context/useContentful.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ContentfulProvider>
    <App />
  </ContentfulProvider>
);
