import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'

import BlogCard from "../BlogCard";
import type { IBlogCard } from "../types";
import styles from "./index.module.css";
import modalDetalles from "../Modals/modal"

export interface BlogCardListProps {
  data: IBlogCard[];
}

const BlogCardList = ({ data }: BlogCardListProps) => {
  return (
    <div className={styles.root}>
      <div className={styles.divAgregarMascota}>
        <h4 className={styles.pMascota}>Cargá una Mascota</h4>
        <button onClick={(() => {})}><FontAwesomeIcon color="rgb(56, 194, 98)" size="7x" icon={faCirclePlus}/></button>
      </div>
      {data && data.map((item, index) => <BlogCard key={index} {...item} />)}
    </div>
  );
};

export default BlogCardList;
