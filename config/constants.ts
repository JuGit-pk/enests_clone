export const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337";

export const GRAPHQL_URL =
  process.env.NEXT_PUBLIC_GRAPHQL_URL || "http://localhost:1337/graphql";

export const FOOTER_DATA = {
  left: {
    title: "About",
    links: [
      { href: "/", title: "Home" },
      { href: "/", title: "Categories" },
      { href: "/about", title: "About Us" },
      { href: "/about", title: "Contact Us" },
    ],
  },
  right: {
    title: "Quick Links",
    links: [
      { href: "/", title: "Get Listed" },
      { href: "/", title: "Write a Review" },
      { href: "/about", title: "Blog" },
      { href: "/about", title: "Site Map" },
    ],
  },
};
