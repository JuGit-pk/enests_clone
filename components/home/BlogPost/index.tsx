import React from "react";
import Post from "./Post";

interface IBlog {
  blogTitle: string;
  blogDescription: string;
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

const BlogPost = ({ blogTitle, blogDescription, posts }: IBlog) => {
  return (
    <div className="py-16 px-[15px] text-center font-medium ">
      <div className="max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] mx-auto">
        <h1 className="text-[34px]">{blogTitle}</h1>
        <p className="text-[#505050] text-base leading-6 max-w-[680px] mx-auto">
          {blogDescription}
        </p>
        <Post posts={posts} />
        <a
          href=""
          className="border-[2px] border-[#4d2573] py-2 px-6 inline-block text-white bg-[#4d2573]  hover:text-[#4d2573] hover:bg-white transition-all text-sm font-semibold cursor-pointer text-center rounded-[30px] mt-[50px]"
        >
          Load More
        </a>
      </div>
    </div>
  );
};

export default BlogPost;
