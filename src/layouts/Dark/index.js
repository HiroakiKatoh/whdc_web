'use client';
import React from "react";
import "./style.css";

const DarkTheme = ({ children }) => {
  React.useEffect(() => {
    window.theme = "dark";
  }, []);
  return (
    <>
      <div className="circle-bg">
        <div className="circle-color fixed">
          <div className="gradient-circle"></div>
          <div className="gradient-circle two"></div>
        </div>
      </div>
      {children}
    </>
  );
};

export default DarkTheme;