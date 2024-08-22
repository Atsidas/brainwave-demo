// ColorContext.js
import { createContext, useState, useEffect, useContext } from "react";

const ColorContext = createContext();

export const ColorProvider = ({ children }) => {
  const [color, setColor] = useState({
    stroke: "var(--breathe-start)",
    fill: "var(--breathe-start)",
    color: "var(--breathe-start)",
  });

  useEffect(() => {
    const hiddenDiv = document.querySelector(".hidden-breathe");

    const getComputedStyle = () => {
      const computedStyle = window.getComputedStyle(hiddenDiv);
      setColor({
        stroke: computedStyle.stroke,
        fill: computedStyle.fill,
        color: computedStyle.color,
      });
    };

    getComputedStyle(); // Initial setting of colors
    const interval = setInterval(getComputedStyle, 100); // Update color state periodically

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, []);

  return (
    <ColorContext.Provider value={{ color }}>{children}</ColorContext.Provider>
  );
};

export const useColor = () => useContext(ColorContext);
