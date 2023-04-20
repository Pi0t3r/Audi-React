import React, { useState, useEffect } from "react";
import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import { ThemeContext } from "./utilities/style/ThemeContext";
import { themeLight, themeDark } from "./utilities/style/theme";
import App from "./App";
import Models from "./view/Models";
import Car from "./view/Car";
import "./index.css";

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
    path: "/Car/:carModel/:carName/:carID",
    element: <Car />,
  },
]);

const AppContainer = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const storedValue = localStorage.getItem("isDarkMode");
    return storedValue ? JSON.parse(storedValue) : false;
  });
  useEffect(() => {
    localStorage.setItem("isDarkMode", JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider
      value={{ themeLight, themeDark, isDarkMode, setIsDarkMode }}
    >
      <RouterProvider router={router} />
    </ThemeContext.Provider>
  );
};
export default AppContainer;
