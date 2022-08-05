import { FaChevronRight } from "react-icons/fa";
import Link from "next/link";
import React from "react";
interface ILinkProps {
  label: string;
  href: string;
}
const FooterLink: React.FC<ILinkProps> = ({ label, href }) => {
  return (
    <Link href={href}>
      <a>
        <li className="flex items-center gap-[6px] mb-4 group ">
          <span>
            <FaChevronRight />
          </span>
          <p className=" group-hover:-translate-x-1 transition ease-in-out">
            {label}
          </p>
        </li>
      </a>
    </Link>
  );
};

export default FooterLink;
