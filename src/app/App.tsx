import React, {Children, useState} from "react";

import ModalContacto from "../components/Modals/modalContacto";
import ModalDonaciones from "../components/Modals/modalDonaciones";

import Home from "../pages/Home";

import styles from "./App.module.css";

const App = () => {
  const [modalStateContact, changeStateContact] = useState(false);
  const [modalStateDonation, changeStateDonation] = useState(false);

  return (
    <div className={styles.App}>
      <header>
        <div>
          <p className={styles.titulo}>puppies</p>
        </div>
        <div className={styles.pestañas}>
          <button className={styles.btnPestañas}>Perdidos</button>
          <button className={styles.btnPestañas}>Encontrados</button>
          <button className={styles.btnPestañas}>Adoptá</button>
        </div>
      </header>
      <main>
        <Home />
      </main>
      <footer>
        <div>
        <ModalContacto cambiarEstado={changeStateContact} estado={modalStateContact}>
          Formulario p/ mail - redes?
        </ModalContacto>
        <ModalDonaciones cambiarEstadoDon={changeStateDonation} estadoDon={modalStateDonation} >
          Cafecito - paypal - bitcoin - usdt - mercadopago
        </ModalDonaciones>
          <button onClick={(() => changeStateContact(!modalStateContact) )  } className={styles.contactUs}>CONTACTO</button>
          <button onClick={(() => changeStateDonation(!modalStateDonation) )  } className={styles.donaciones}>DONACIONES</button>
        </div>
        <p className={styles.marcaReg}>® 2022 HaustieЯ </p>
      </footer>
    </div>
  );
};

export default App;
