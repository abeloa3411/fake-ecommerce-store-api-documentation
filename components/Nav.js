import Link from "next/link";
import { AiOutlineCode } from "react-icons/ai";
import styles from "../styles/nav.module.css";

function Nav() {
  return (
    <div className={styles.nav__container}>
      <div className={styles.nav__inner__container}>
        <div className={styles.logo}>
          <AiOutlineCode />
        </div>
        <nav className={styles.nav__menu}>
          <ul className={styles.nav__menu__items}>
            <li className={styles.nav__menu__item}>
              <Link href="/" className={styles.a}>
                Home
              </Link>
            </li>
            <li className={styles.nav__menu__item}>
              <Link href="/docs" className={styles.a}>
                Docs
              </Link>
            </li>
            <li className={styles.nav__menu__item}>
              <a
                href="https://www.github.com/abeloa3411/fake-ecommerce-store-api"
                target="_blank"
                rel="noopener"
                className={styles.a}
              >
                Github
              </a>
            </li>
            <li className={styles.nav__menu__item}>
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
  );
}

export default Nav;
