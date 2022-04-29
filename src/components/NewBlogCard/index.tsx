import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";

import { mockNewItem } from "../../data";
import { IBlogCard } from "../types";
import Modal from "../Modals/modal";

import styles from "./index.module.css";

export interface Props {
  data: IBlogCard[];
  setData: any;
}

const NewBlogCard = ({ setData }: Props) => {
  const [modalState, changeState] = useState(false);

  const handleClick = (newItem: IBlogCard) => {
    setData((prevState: IBlogCard[]) => [...prevState, newItem]);
    changeState(true);
  };

  return (
    <div className="card">
      <h4 className={styles.pMascota}>Cargá una Mascota</h4>
      <button onClick={() => handleClick(mockNewItem)}>
        <FontAwesomeIcon color="rgb(56, 194, 98)" icon={faCirclePlus} size="7x" />
      </button>
      <Modal cambiarEstado={changeState} estado={modalState}>
        <p>
          Se perdió el día sabado por la zona del parque baron. Tiene las patitas de adelante
          manchaditas y un collar rojo con su nombre
        </p>
      </Modal>
    </div>
  );
};

export default NewBlogCard;
