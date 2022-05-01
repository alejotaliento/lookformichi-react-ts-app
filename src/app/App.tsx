import { useState } from "react";

import { ModalBase, ModalForm } from "../Modals";
import Home from "../pages/Home";

import styles from "./App.module.css";

const DONACIONES: string[] = [
  "Cafecito",
  "Paypal",
  "Bitcoin",
  "USDT",
  "Mercado Pago",
  "MuchBetter",
];

const App = () => {
  const [modalStateContact, changeStateContact] = useState<boolean>(false);
  const [modalStateDonation, changeStateDonation] = useState<boolean>(false);

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
        <ModalForm title="Contacto" cambiarEstado={changeStateContact} estado={modalStateContact} />
        
        <ModalBase title="Donaciones" cambiarEstado={changeStateDonation} estado={modalStateDonation} >
          <div className={styles.container_btns_donaciones}>
            {DONACIONES.map((element) => <button className={styles.btn_donacion}>{element}</button>)}
          </div>
        </ModalBase>

          <button className={styles.contactUs}>HOME</button>
          <button onClick={(() => changeStateContact(!modalStateContact) )  } className={styles.contactUs}>CONTACTO</button>
          <button onClick={(() => changeStateDonation(!modalStateDonation) )  } className={styles.donaciones}>DONACIONES</button>
          <button className={styles.contactUs}>About Us</button>
        </div>

        <p className={styles.marcaReg}>® 2022 HaustieЯ</p>
      </footer>
    </div>
  );
};

export default App;
