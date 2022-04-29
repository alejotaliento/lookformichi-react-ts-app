import React from "react";

import BlogCard from "../BlogCard";
import type { IBlogCard } from "../types";
import modalDetalles from "../Modals/modal";

import styles from "./index.module.css";

export interface BlogCardListProps {
  data: IBlogCard[];
}

const BlogCardList = ({ data }: BlogCardListProps) => {
  return (
    <div className={styles.root}>
      {data && data.map((item, index) => <BlogCard key={index} {...item} />)}
    </div>
  );
};

export default BlogCardList;
