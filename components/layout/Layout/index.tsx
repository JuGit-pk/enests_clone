import React from "react";
import cn from "classnames";
import Seo from "../SEO";
interface ILayoutProps {
  children: React.ReactNode;
  className?: string;
}
const Layout: React.FC<ILayoutProps> = ({ children, className }) => {
  return (
    <main className={cn("", className || "")}>
      <Seo />
      {children}
    </main>
  );
};

export default Layout;
