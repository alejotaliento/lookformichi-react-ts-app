import React from "react";

import Home from "../pages/Home";

import styles from "./App.module.css";

const App = () => {
  return (
    <div className={styles.App}>
      <header>
        <div>
        <p className={styles.titulo}>
        HaustieЯ
        </p>
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
        <button className={styles.contactUs}>CONTACTO</button>
        <button className={styles.donaciones}>DONACIONES</button>
        </div>
        <p className={styles.marcaReg}>® 2022 HaustieЯ </p>
      </footer>
    </div>
  );
};

export default App;
