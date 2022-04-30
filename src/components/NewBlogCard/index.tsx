import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";

import { mockNewItem } from "../../data";
import { IBlogCard } from "../types";


import styles from "./index.module.css";

export interface Props {
  setData: any;
}

const NewBlogCard = ({ setData }: Props) => {
  

  const handleClick = (newItem: IBlogCard) => {
    setData((prevState: IBlogCard[]) => [...prevState, newItem]);
    
  };

  return (

      <div className="card">

        <h4 className={styles.pMascota}>Cargá una Mascota</h4>
            <button onClick={() => handleClick(mockNewItem)}>
              <FontAwesomeIcon color="rgb(56, 194, 98)" icon={faCirclePlus} size="7x" />
            </button>
      
    </div>
  );
};

export default NewBlogCard;
