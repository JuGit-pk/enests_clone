import React from "react";
import { FaUser } from "react-icons/fa";

interface IPost {
  posts: [
    {
      id: string;
      title: string;
      excerpt: string;
      url: string;
      coverImage: {
        url: string;
        alternativeText: string;
      };
      category: {
        name: string;
        slug: string;
      };
      author: string;
    }
  ];
}

const Post: React.FC<IPost> = ({ posts }) => {
  return (
    <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-[30px]">
      {posts?.map((post) => (
        <div
          key={post.id}
          className="text-left border border-[#dfdede] pb-3 rounded-[5px] overflow-hidden"
        >
          <div className="h-[250px] w-full overflow-hidden">
            <img
              src={post?.coverImage.url}
              alt={post?.coverImage.alternativeText}
              className="h-full w-full object-cover hover:scale-110 transition-all duration-500 ease-in-out z-0"
            />
          </div>
          <div className="px-5 -mt-[13px] bg-white">
            <a
              href=""
              className="relative py-[1px] px-4 bg-[#4d2573] text-white text-sm inline-block rounded-[22px] capitalize z-20"
            >
              {post?.category?.name}
            </a>
            <a
              href={`/blog/${post.url}`}
              className=" block text-[#4d2573] mt-3 text-base leading-6"
            >
              {post.title}
            </a>
            <p className="text-[15px] leading-[22px] text-[#505050] py-[15px]">
              {post.excerpt}
            </p>
            <div className="flex items-center gap-2 text-sm text-[#868686] py-2 border-t border-[#dfdede]">
              <span>
                <FaUser className="fill-white stroke-[#868686] stroke-[25]" />
              </span>{" "}
              {post.author}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Post;
