import React from "react";

import type { IBlogCard } from "../types";

import styles from "./index.module.css";

const BlogCard = ({ id, name, description, image, state }: IBlogCard) => {
  return (
    <div className="card" id={`${id}`}>
      <h3>{name}</h3>
      <p>{state}</p>
      <div className={styles.container}>
        {image ? <img alt="" src={image} /> : <div>Loading...</div>}
      </div>
      <p>{description}</p>
    </div>
  );
};

export default BlogCard;
