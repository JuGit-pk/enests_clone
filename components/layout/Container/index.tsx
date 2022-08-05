import React from "react";
import cn from "classnames";

interface IContainerProps {
  children: React.ReactNode;
  className?: string;
}
const Container: React.FC<IContainerProps> = ({ children, className }) => {
  return (
    <div
      className={cn(
        "px-4 sm:max-w-[600px] md:max-w-[730px] lg:max-w-[990px] mx-auto",
        className || ""
      )}
    >
      {children}
    </div>
  );
};

export default Container;
