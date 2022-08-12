import React from "react";

interface ICategoryBoxProps {
  title: string;
  children: string;
}

const CategoryBox: React.FC<ICategoryBoxProps> = ({ children, title }) => {
  return (
    <div className="group transition-all">
      <div className="w-[80px] h-[75px] py-[10px] px-2 flex justify-center items-center flex-col bg-white/[14%] border border-white/[15%] group-hover:bg-white rounded transition-all">
        <div className="group-hover:text-primary">
          <i className={children} aria-hidden="true"></i>
        </div>
        <p className="text-[11px] font-lato uppercase mt-2 font-semibold group-hover:text-primary transition-all">
          {title}
        </p>
      </div>
    </div>
  );
};

export default CategoryBox;
