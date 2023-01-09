import Image from "next/image";
import Link from "next/link";
import React from "react";
import img1 from "../public/banner.png";
import styles from "../styles/hero.module.css";

export default function Hero() {
  return (
    <>
      <div className={styles.hero__container}>
        <div className={styles.hero__inner__container}>
          <div className={styles.intro}>
            <div className={styles.intro__title}>
              <div className={styles.title}>
                <h1>Fake ecommerce store API</h1>
              </div>
              <div className={styles.paragraph}>
                <p>
                  The fake ecommerce api for your ecommerce, teaching and
                  testing purposes
                </p>
              </div>
              <div className={styles.btn__container}>
                <div>
                  <button className={styles.btn}>Github</button>
                </div>
                <div>
                  <button className={styles.btn}>Read docs</button>
                </div>
              </div>
            </div>
            <div className={styles.image__container}>
              <Image src={img1} className={styles.img} />
            </div>
          </div>
          <div className={styles.lorem}>
            <div className={styles.heading}>
              <h3>Tired of the old lorem?</h3>
              <h3>Try the fake ecommerce store api for free</h3>
            </div>
            <div>
              <p>
                This is a free REST api that provides users with real time
                ecommerce data in json format.If you don't want to run any
                server side code, you can use this free api.The api is good for
                learning, teaching and testing purposes only. Enjoy it and feel
                free to contribute and alert incase of any errors
              </p>
            </div>
          </div>
          <div className={styles.resources}>
            <h2 className={styles.resources__heading}>Resources</h2>
            <p>There are 4 main resources need in shopping prototypes</p>
            <ul className={styles.resources__list}>
              <li>
                <a href="/products">Products</a>
                <span>20 products</span>
              </li>
              <li>
                <a href="/users">Users</a>10 users
              </li>
              <li>
                <a href="">Login Token</a>
                <span className="badge">A login tokenn</span>
              </li>
            </ul>
          </div>
          <div className={styles.routes}>
            <h2 className={styles.resources__heading}>Routes</h2>
            <p>All HTTP methods are supported</p>
            <ul className={styles.resources__list}>
              <li>
                <span>GET</span>
                <a href="/products">/products</a>
              </li>
              <li>
                <span>GET</span>
                <a href="/products/1">/products/1</a>
              </li>
              <li>
                <span>GET</span>
                <a href="/products/categories">/products/categories</a>
              </li>
              <li>
                <span>GET</span>
                <a href="/products/category/jewelery">
                  /products/category/jewelery
                </a>
              </li>
              <li>
                <span>GET</span>
                <a href="/cart?userId=1">/cart?userId=1</a>
              </li>
              <li>
                <span>GET</span>
                <a href="/products?limit=5">/products?limit=5</a>
              </li>
              <li>
                <span>POST</span>/products
              </li>
              <li>
                <span>PUT</span>/products/1
              </li>
              <li>
                <span>PATCH</span>/products/1
              </li>
              <li>
                <span>DELETE</span>/products/1
              </li>
            </ul>
            <Link href="/docs" className={styles.resources__btn}>
              View Details on Docs
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
