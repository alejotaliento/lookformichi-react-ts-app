import React from "react";

import Home from "../components/BlogCardList";

import styles from "./App.module.css";

const App = () => {
  return (
    <div className={styles.App}>
      <header>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
      </header>
      <main>
        <Home />
      </main>
    </div>
  );
};

export default App;
