import React, { useState } from "react";
import ButtonSvg from "../assets/svg/ButtonSvg";
import { useColor } from "./ColorContext";

function Button({ className, href, onClick, children, px, white }) {
  const { color } = useColor();
  const [isHovered, setIsHovered] = useState(false);

  const stationaryColor = white ? "#AC6AFF" : "var(--breathe-end)";

  const classes = `button transition-colors relative inline-flex h-11 items-center justify-center  ${px || "px-7"} ${className || ""}`;

  const baseColor = white ? "#0E0C15" : color.color; // Color when not hovered
  const textColor = isHovered ? stationaryColor : baseColor; // Color when hovered

  // Determine the color based on hover state
  const spanStyles = {
    color: textColor,
    position: "relative",
    zIndex: "10",
  };

  const handleMouseEnterLocal = () => {
    setIsHovered(true);
  };

  const handleMouseLeaveLocal = () => {
    setIsHovered(false);
  };

  const isReactElement = React.isValidElement(children);
  // Clone children and pass isHovered if it's a React element
  const clonedChildren = isReactElement
    ? React.cloneElement(children, { isHovered })
    : children;

  function renderButton() {
    return (
      <button
        className={classes}
        onClick={onClick}
        onMouseEnter={handleMouseEnterLocal}
        onMouseLeave={handleMouseLeaveLocal}
      >
        <span style={spanStyles}>{clonedChildren}</span>
        {ButtonSvg({ white, color, stationaryColor, isHovered })}
      </button>
    );
  }

  function renderLink() {
    return (
      <a
        href={href}
        className={classes}
        onMouseEnter={handleMouseEnterLocal}
        onMouseLeave={handleMouseLeaveLocal}
      >
        <span style={spanStyles}>{children}</span>
        {ButtonSvg({ white, color, stationaryColor, isHovered })}
      </a>
    );
  }

  return href ? renderLink() : renderButton();
}

export default Button;
