import React from "react";

const ContentWrapper = ({ children, className }) => {
  return (
    <div
      className={
        className
          ? "w-4/5 mx-auto max-w-[1224px] " + className
          : "w-4/5 mx-auto max-w-[1224px]"
      }
    >
      {children}
    </div>
  );
};

export default ContentWrapper;
