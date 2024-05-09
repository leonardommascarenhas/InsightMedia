import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import { Noticias } from "./Body/Blog/Noticias";
import { PaginaDaNoticia } from "./Body/Blog/PaginaNoticia";
import Home from "./Home";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/noticias"
            element={<Noticias />}
          />
          <Route
            path="/noticias/:urlEncoded"
            element={<PaginaDaNoticia />}
          />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
