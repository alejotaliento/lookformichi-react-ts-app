import React from "react";

import Service from "../../services/RandomDog";

import { IBlogCard } from "./types";
import styles from "./index.module.css";

const BlogCard = (props: IBlogCard) => {
  const [data, setData] = React.useState({ ...props });
  const { id, name, description, image, state: estado } = data;

  React.useEffect(() => {
    if (!image) {
      Service.getImage().then((image) => {
        return setData((prev) => ({ ...prev, image }));
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="card" id={`${id}`}>
      <h3>{name}</h3>
      <p>{estado}</p>
      <div className={styles.container}>
        <img alt="" src={image} />
      </div>
      <p>{description}</p>
    </div>
  );
};

export default BlogCard;
