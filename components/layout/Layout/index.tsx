import React from "react";
import cn from "classnames";
import Seo from "../SEO";
import Footer from "../Footer";
interface ILayoutProps {
  children: React.ReactNode;
  className?: string;
}
const Layout: React.FC<ILayoutProps> = ({ children, className }) => {
  return (
    <main className={cn("", className || "")}>
      <Seo />
      {children}
      <Footer />
    </main>
  );
};

export default Layout;
