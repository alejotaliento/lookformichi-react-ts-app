import { useState } from "react";

import BlogCard from "../BlogCard";
import NewBlogCard from "../NewBlogCard";
import type { IBlogCard } from "../BlogCard/types";
import { cardArray } from "../../data";

import styles from "./index.module.css";

// const hasImage = (data: IBlogCard[]) => data.every((items) => items.image);

const BlogCardList = () => {
  const [state, setState] = useState<IBlogCard[]>(cardArray);

  return (
    <div className={styles.root}>
      <NewBlogCard data={state} setData={setState} />
      {state.map((item, index) => (
        <BlogCard key={index} {...item} />
      ))}
    </div>
  );
};

export default BlogCardList;
