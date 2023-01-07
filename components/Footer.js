import React from "react";
import styles from "../styles/footer.module.css";

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.footer__container}>
          <p>Enjoy and contribute</p>
          <a href="https://buymeacoffee.com/abelw34x">Buy me a coffee</a>
        </div>
      </footer>
    </>
  );
}
