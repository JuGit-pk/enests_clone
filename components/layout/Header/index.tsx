import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Container from "../Container";
import cn from "classnames";
import MenuIcon from "/public/assets/svgs/hamburger.svg";

const Header = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  return (
    <header className="w-full py-[22px] border-b-2 font-light">
      <Container>
        <div className="flex justify-between items-center">
          <div className="">
            <Image src="/images/logo.png" alt="" width="183px" height="41px" />
          </div>
          <div className="hidden lg:flex justify-between items-center">
            <Link href="/">
              <a className="py-2 px-4 ">Catagories</a>
            </Link>
            <div className="">
              <span>
                <Link href="/">
                  <a className="py-2 px-4 ">Login</a>
                </Link>
              </span>
              <span>|</span>
              <Link href="/">
                <a className="py-2 px-4 ">Register</a>
              </Link>
            </div>
            <div className="text-sm space-x-4">
              <button className="px-6 py-2 border border-white rounded-full hover:bg-white hover:text-primary transition-all">
                Get Listed
              </button>
              <button className="px-6 py-2 border text-primary border-white rounded-full bg-white hover:bg-transparent hover:text-white  transition-all">
                Write a Review
              </button>
            </div>
          </div>

          {/* mobile menu */}
          <div
            className={cn(
              "flex lg:hidden justify-center items-center border",
              menuIsOpen ? " border-yellow-500" : "border-transparent"
            )}
            onClick={() => setMenuIsOpen((pre) => !pre)}
          >
            <span>
              <Image src={MenuIcon} width="30" height="30" alt="menu icon" />
            </span>
          </div>
        </div>
        {/* FOR MOBILE */}
        <div className="block lg:hidden">
          <div
            className={cn(
              "bg-black w-full transition-all mt-4",
              menuIsOpen ? "flex" : "hidden"
            )}
          >
            <div className="flex flex-col justify-between">
              <Link href="/">
                <a className="py-2 px-4 ">Catagories</a>
              </Link>
              <div className="space-x-0">
                <span>
                  <Link href="/">
                    <a className="py-2 px-4 ">Login</a>
                  </Link>
                </span>
                <span>|</span>
                <Link href="/">
                  <a className="py-2 px-4 ">Register</a>
                </Link>
              </div>
              <div className="text-sm space-x-4 p-4">
                <button className="px-6 py-2 border border-white rounded-full hover:bg-white hover:text-primary transition-all">
                  Get Listed
                </button>
                <button className="px-6 py-2 border text-primary border-white rounded-full bg-white hover:bg-transparent hover:text-white  transition-all">
                  Write a Review
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
