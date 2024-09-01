import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import { styler } from "../styles";

const Draggable = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [loadTime, setLoadTime] = useState(null);
  const [isPositioned, setIsPositioned] = useState(false); // New state to control visibility
  const boxRef = useRef(null);

  useEffect(() => {
    const timeSincePageLoad = performance.now();
    setLoadTime(`${Math.round(timeSincePageLoad)}ms`);
  }, []);

  useLayoutEffect(() => {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    if (boxRef.current) {
      const boxWidth = boxRef.current.offsetWidth;
      const boxHeight = boxRef.current.offsetHeight;
      setPosition({
        x: (screenWidth - boxWidth) / 2,
        y: screenHeight - boxHeight
      });
      setIsPositioned(true); // Set this to true after positioning is complete
    }
  }, []);

  const handleDragStart = () => {
    setIsDragging(true);
  };

  const handleDragMove = event => {
    if (isDragging) {
      const clientX = event.type === "mousemove" ? event.clientX : event.touches[0].clientX;
      const clientY = event.type === "mousemove" ? event.clientY : event.touches[0].clientY;
      setPosition({
        x: clientX - 50,
        y: clientY - 50
      });
    }
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    snapToEdge();
  };

  const snapToEdge = () => {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const boxWidth = boxRef.current.offsetWidth;
    const boxHeight = boxRef.current.offsetHeight;

    const distances = {
      left: position.x,
      right: screenWidth - (position.x + boxWidth),
      top: position.y,
      bottom: screenHeight - (position.y + boxHeight)
    };

    const closestEdge = Object.keys(distances).reduce((closest, edge) =>
      distances[edge] < distances[closest] ? edge : closest
    );

    switch (closestEdge) {
      case "left":
        setPosition({ x: 0, y: position.y });
        break;
      case "right":
        setPosition({ x: screenWidth - boxWidth, y: position.y });
        break;
      case "top":
        setPosition({ x: position.x, y: 0 });
        break;
      case "bottom":
        setPosition({ x: position.x, y: screenHeight - boxHeight });
        break;
      default:
        break;
    }
  };

  styler();

  return (
    <div
      ref={boxRef}
      onMouseDown={handleDragStart}
      onMouseMove={handleDragMove}
      onMouseUp={handleDragEnd}
      onTouchStart={handleDragStart}
      onTouchMove={handleDragMove}
      onTouchEnd={handleDragEnd}
      className={`position-fixed z-99999 center to-a-none u-s-none p-1rem tr-time-150ms tr-timing-[ease-in-out] ${
        isPositioned ? "opa-1" : "opa-0"
      }`}
      style={{
        left: position.x,
        top: position.y
      }}
    >
      <div className="bg-neutral-900 p-4px px-6px br-999px shadow-lg shadow-opacity-0.2 hover:shadow-opacity-0.4 shadow-primary-500 center tr-time-150ms tr-timing-[ease-in-out]">
        <span className="d-block ri-flashlight-line fs-14px text-primary-500"></span>
        <div className="w-1px bg-neutral-600 h-8px mx-6px"></div>
        <span className="fs-10px text-neutral-300 family-[JetBrains\_Mono]">{loadTime ? loadTime : "load..."}</span>
      </div>
    </div>
  );
};

export default Draggable;
