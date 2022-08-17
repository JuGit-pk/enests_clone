import React from "react";
import cn from "classnames";
import Seo from "../SEO";
import Footer from "../Footer";
interface ILayoutProps {
  children: React.ReactNode;
  className?: string;
  seoTitle?: string;
  seoDescription?: string;
}
const Layout: React.FC<ILayoutProps> = ({
  children,
  className,
  seoDescription,
  seoTitle,
}) => {
  return (
    <main className={cn("", className || "")}>
      <Seo description={seoDescription} title={seoTitle} />
      {children}
      <Footer />
    </main>
  );
};

export default Layout;
