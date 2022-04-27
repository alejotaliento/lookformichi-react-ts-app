import React from "react";

import type { IBlogCard } from "../types";

import styles from "./index.module.css";

const BlogCard = ({ id, name, ubication, description, image, state }: IBlogCard) => {
  return (
    <div className="card" id={`${id}`}>
      <h3 className="name" >{name}</h3>
      <p className="ubication">{ubication}</p>
      <div className={styles.container}>
        {image  ? <img alt="" loading="lazy" src={image}  /> : <div>Loading...</div>}
      </div>
      <button className="btnDescription">{description}</button>
    </div>
  );
};

export default BlogCard;
