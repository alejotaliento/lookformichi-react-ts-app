import React from "react";

import BlogCard from "../BlogCard";
import type { IBlogCard } from "../types";
//import modalDetalles from "../Modals/modal";

export interface BlogCardListProps {
  data: IBlogCard[];
}

const BlogCardList = ({ data }: BlogCardListProps) => {
  return <>{data && data.map((item, index) => <BlogCard key={index} {...item} />)}</>;
};

export default BlogCardList;
