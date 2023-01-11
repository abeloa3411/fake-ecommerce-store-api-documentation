import Link from "next/link";
import React from "react";
import { FaTimes } from "react-icons/fa";
import styles from "../styles/sidebar.module.css";

export default function Sidebar({ toggle, active }) {
  return (
    <>
      <div
        className={
          active ? styles.sidebar__container__show : styles.sidebar__container
        }
      >
        <div className={styles.sidebar__inner__container}>
          <div className={styles.sidebar__icon} onClick={toggle}>
            <FaTimes />
          </div>
          <div className={styles.sidebar__nav}>
            <nav className={styles.nav__menu}>
              <ul className={styles.sidebar__list}>
                <li className={styles.sidebar__list__items} onClick={toggle}>
                  <Link href="/" className={styles.a}>
                    Home
                  </Link>
                </li>
                <li className={styles.sidebar__list__items} onClick={toggle}>
                  <Link href="/docs" className={styles.a}>
                    Docs
                  </Link>
                </li>
                <li className={styles.sidebar__list__items} onClick={toggle}>
                  <a
                    href="https://www.github.com/abeloa3411/fake-ecommerce-store-api"
                    target="_blank"
                    rel="noopener"
                    className={styles.a}
                  >
                    Github
                  </a>
                </li>
                <li className={styles.sidebar__list__items} onClick={toggle}>
                  <a
                    href="https://www.buymeacoffee.com/abelw34x"
                    target="_blank"
                    rel="noopener"
                    className={styles.a}
                  >
                    Buy me a coffee
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
