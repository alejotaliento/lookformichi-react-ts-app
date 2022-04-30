import React, {useState} from "react";
import Modal from "../Modals/modal";

import type { IBlogCard } from "../types";

import styles from "./index.module.css";


const BlogCard = ({ id, name, ubication, description, image, state }: IBlogCard) => {

const [modalState, changeState] = useState(false);


  return (
    <div className="card" id={`${id}`}>
      <h3 className="name" >{name}</h3>
      <p className="ubication">{ubication}</p>
      <div className={styles.container}>
        {image  ? <img alt="" loading="lazy" src={image}  /> : <div>Loading...</div>}
      </div>
      <Modal cambiarEstado={changeState} estado={modalState}>
        {description}
      </Modal>
      
      <button  onClick={(() => changeState(!modalState))} className="btnDescription">{description}</button>
    </div>
  );
};

export default BlogCard;
