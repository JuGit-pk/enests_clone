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
        "max-w-[512px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] mx-auto px-4",
        className || ""
      )}
    >
      {children}
    </div>
  );
};

export default Container;
