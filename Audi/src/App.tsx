import Nav from "./view/Nav";
import Main from "./view/Main";
import Footer from "./view/Footer";
import { themeLight, themeDark } from "./utilities/style/theme";
import { ThemeContext } from "./utilities/style/ThemeContext";
import React, { useState } from "react";

function App() {
  return (
    <>
      <Nav />
      <Main />
      <Footer />
    </>
  );
}

export default App;
