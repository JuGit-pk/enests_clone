import Head from "next/head";
import React from "react";

interface ISeoProps {
  title?: string;
  description?: string;
}

const Seo: React.FC<ISeoProps> = ({ title, description }) => {
  return (
    <Head>
      <title>{title || "enests"}</title>
      <meta
        name="description"
        content={description || "Make your Business to Top"}
      />
    </Head>
  );
};

export default Seo;
