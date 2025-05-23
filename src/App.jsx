import { useState } from "react";

import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./pages/Main/Main";

function App() {
  return (
    <div>
      <Header />

      <Main />

      <Footer />
    </div>
  );
}

export default App;
