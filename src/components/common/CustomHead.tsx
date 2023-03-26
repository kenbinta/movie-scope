import React from "react";
import Head from "next/head";

interface CustomHeadProps {
  title?: string;
  description?: string;
}

const CustomHead = ({ title, description }: CustomHeadProps) => {
  return (
    <Head>
      <title>{title || "Movie Scope"}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default CustomHead;
