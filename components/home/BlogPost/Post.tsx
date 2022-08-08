import React from "react";
import { FaUser } from "react-icons/fa";

const posts = [
  {
    category: "health",
    title: "5 Health Benefits Of Men's Self-Care",
    desc: "Self-care always comes up with several benefits for men if they properly take care of this factor. According to a recent analysis,it has been observed that self-care has not only physi...",
    imgSrc: "/assets/images/blogpost.jpg",
  },
  {
    category: "health",
    title: "5 Health Benefits Of Men's Self-Care",
    desc: "Self-care always comes up with several benefits for men if they properly take care of this factor. According to a recent analysis,it has been observed that self-care has not only physi...",
    imgSrc: "/assets/images/blogpost.jpg",
  },
  {
    category: "health",
    title: "5 Health Benefits Of Men's Self-Care",
    desc: "Self-care always comes up with several benefits for men if they properly take care of this factor. According to a recent analysis,it has been observed that self-care has not only physi...",
    imgSrc: "/assets/images/blogpost.jpg",
  },
];

const Post = () => {
  return (
    <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-[30px]">
      {posts.map((posts) => (
        <div className="text-left border border-[#dfdede] pb-3 rounded-[5px] overflow-hidden">
          <img
            src={posts.imgSrc}
            alt=""
            className="h-[250px] w-full object-cover"
          />
          <div className="px-5 -mt-[13px]">
            <a
              href=""
              className="py-[1px] px-4 bg-[#4d2573] text-white text-sm inline-block rounded-[22px] capitalize"
            >
              {posts.category}
            </a>
            <a className=" block text-[#4d2573] mt-3 text-base leading-6">
              {posts.title}
            </a>
            <p className="text-[15px] leading-[22px] text-[#505050] py-[15px]">
              {posts.desc}
            </p>
            <div className="flex items-center gap-2 text-sm text-[#868686] py-2 border-t border-[#dfdede]">
              <span>
                <FaUser className="fill-white stroke-[#868686] stroke-[25]" />
              </span>{" "}
              Enests
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Post;
