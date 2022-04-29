import React, {useState} from "react";


import Home from "../pages/Home";

import styles from "./App.module.css";
import Modal from "../components/Modals/modal";



const App = () => {

    const[modalState, changeState] = useState(false);


  return (
    <div className={styles.App}>
      <header>
        <Modal estado={modalState} cambiarEstado={changeState} >
          <p>
              Se perdió el día sabado por la zona del parque baron. 
              Tiene las patitas de adelante manchaditas y un collar rojo con su nombre
          </p>
        </Modal>

        <div>
        <p className={styles.titulo}>
        puppies 
        </p>
        </div>
        <div className={styles.pestañas}>
          
          <button onClick={(() => changeState(!modalState))} className={styles.btnPestañas}>Perdidos</button>
          <button className={styles.btnPestañas}>Encontrados</button>
          <button className={styles.btnPestañas}>Adoptá</button>
        </div>
      </header>
      <main>
        <Home />

      </main>
      <footer>
        <div>
          
        <button className={styles.contactUs}>CONTACTO</button>
        <button className={styles.donaciones}>DONACIONES</button>
        </div>
        <p className={styles.marcaReg}>® 2022 HaustieЯ </p>
      </footer>
    </div>
  );
};

export default App;
