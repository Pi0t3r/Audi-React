import Nav from "./view/Nav";
import Main from "./view/Main";
import Footer from "./view/Footer";
import { themeLight, themeDark } from "./utilities/style/theme";
import { ThemeContext } from "./utilities/style/ThemeContext";
import React, { useState } from "react";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <ThemeContext.Provider
      value={{ themeLight, themeDark, isDarkMode, setIsDarkMode }}
    >
      <Nav />
      <Main />
      <Footer />
    </ThemeContext.Provider>
  );
}

export default App;
