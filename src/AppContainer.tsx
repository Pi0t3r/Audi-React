import React, { useState } from "react";
import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import { ThemeContext } from "./utilities/style/ThemeContext";
import { themeLight, themeDark } from "./utilities/style/theme";
import App from "./App";
import Models from "./view/Models";
import Car from "./view/Car";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Models",
    element: <Models />,
  },
  {
    path: "/Car",
    element: <Car />,
  },
]);

const AppContainer = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  return (
    <ThemeContext.Provider
      value={{ themeLight, themeDark, isDarkMode, setIsDarkMode }}
    >
      <RouterProvider router={router} />
    </ThemeContext.Provider>
  );
};
export default AppContainer;
