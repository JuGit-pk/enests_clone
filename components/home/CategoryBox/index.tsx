import React from "react";

interface ICategoryBoxProps {
  title: string;
  children: React.ReactNode;
}

const CategoryBox: React.FC<ICategoryBoxProps> = ({ children, title }) => {
  return (
    <div>
      <div className="w-[80px] h-[75px] py-[10px] px-2 flex justify-center items-center flex-col bg-white/10 rounded">
        <div>{children}</div>
        <p className="text-[11px] font-lato uppercase mt-2 font-semibold">
          {title}
        </p>
      </div>
    </div>
  );
};

export default CategoryBox;
