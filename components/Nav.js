import Link from "next/link";
import { AiOutlineCode } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import styles from "../styles/nav.module.css";

function Nav({ toggle }) {
  return (
    <div className={styles.nav__container}>
      <div className={styles.nav__inner__container}>
        <div className={styles.logo}>
          <Link href="/" className={styles.logo__link}>
            <AiOutlineCode />
          </Link>
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
        <div className={styles.bars} onClick={toggle}>
          <FaBars />
        </div>
      </div>
    </div>
  );
}

export default Nav;
