import { IoLocationSharp, IoMail } from "react-icons/io5";

import { FOOTER_DATA } from "../../../config/constants";
import { FaTelegramPlane } from "react-icons/fa";
import FooterLink from "./FooterLink";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="relative bg-footer bg-no-repeat bg-cover px-4 py-[70px] ">
      <div className="grid grid-cols-2 lg:grid-cols-6 max-w-[512px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] mx-auto md:gap-y-5">
        <div className="col-span-2 md:col-span-1 lg:col-span-2 pr-7">
          <Image
            src="/assets/images/logo.png"
            width="183"
            height="41"
            alt="logo"
          />
          <p className="text-white text-base font-normal leading-6 mt-[30px]">
            Enests is one of the top business listing sites where you can submit
            your agency, find top companies or better service providers, read or
            write reviews and make buying decisions. So list your company or
            choose the right service provider to make your business fly.
          </p>
          <div className="flex gap-1 mt-6">
            <a className="w-8 h-8 block">
              <img
                src="/assets/svgs/facebook-f.svg"
                alt=""
                className="bg-[#4064ad] w-full h-full p-2 rounded-full"
              />
            </a>
            <a className="w-8 h-8 block">
              <img
                src="/assets/svgs/instagram.svg"
                alt=""
                className="bg-[#4064ad] w-full h-full p-2 rounded-full"
                style={{
                  background:
                    "radial-gradient(circle at 30% 107%, #fdf497 0%,#fdf497 5%,#fd5949 45%,#d6249f 60%,#285aeb 90%)",
                }}
              />
            </a>
            <a className="w-8 h-8 block">
              <img
                src="/assets/svgs/twitter.svg"
                alt=""
                className="bg-[#43abde] w-full h-full p-2 rounded-full"
              />
            </a>
            <a className="w-8 h-8 block">
              <img
                src="/assets/svgs/linkedin.svg"
                alt=""
                className="bg-[#0070ac] w-full h-full p-2 rounded-full"
              />
            </a>
          </div>
        </div>
        <div className="text-white mt-10 md:mt-0">
          <h2 className="text-xl font-semibold">{FOOTER_DATA.left.title}</h2>
          <ul className="mt-4 md:mt-8">
            {FOOTER_DATA.left.links.map(({ title, href }) => (
              <FooterLink key={title + href} label={title} href={href} />
            ))}
          </ul>
        </div>
        <div className="text-white mt-10 md:mt-0">
          <h2 className="text-xl font-semibold">{FOOTER_DATA.right.title}</h2>
          <ul className="mt-4 md:mt-8">
            {FOOTER_DATA.right.links.map(({ title, href }) => (
              <FooterLink key={title + href} label={title} href={href} />
            ))}
          </ul>
        </div>
        <div className="text-white text-xl font-semibold col-span-2 md:col-span-1 lg:col-span-2 mt-5 md:mt-0">
          <h2>Sign Up For Newsletter</h2>
          <form className="relative mt-4 md:mt-8">
            <input
              type="email"
              name="form_subscribe"
              placeholder="Enter your email"
              required
              className="h-[42px] border border-white bg-transparent text-white text-sm font-light placeholder:text-white leading-6 pl-3 pr-16 w-full rounded-md hover:outline-primary"
            />
            <button
              type="submit"
              className=" w-12 h-10 bg-white text-[#4d2573] absolute top-[1px] right-[1px] rounded-r-md"
            >
              <span className="mx-auto inline-block relative top-1">
                <FaTelegramPlane />
              </span>
            </button>
          </form>
          <div className="flex items-start gap-[10px] mt-7">
            <span>
              <IoLocationSharp />
            </span>
            <p className="text-base leading-6 font-normal">
              Punjab, Pakistan & Willenhall, United Kingdom
            </p>
          </div>
          <div className="flex items-center gap-[10px] mt-7">
            <span>
              <IoMail />
            </span>
            <p className="text-base leading-6 font-normal">
              enestsdotco@gmail.com
            </p>
          </div>
        </div>
      </div>
      <div className="mt-[70px] border-t border-white py-[10px] text-white text-sm text-center leading-6 max-w-[512px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] mx-auto">
        {`Copyright © 2020-${new Date().getFullYear()}. All Rights Reserved`} |{" "}
        <a href="http://enests.co/" className="text-white underline">
          Enests.co
        </a>{" "}
        Developed by{" "}
        <a
          href="https://www.aamconsultants.org/"
          className="text-white underline"
        >
          AAM Consultants
        </a>
      </div>
    </footer>
  );
};

export default Footer;
