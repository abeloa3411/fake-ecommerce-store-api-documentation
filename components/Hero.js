import Image from "next/image";
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
                  The fake ecommerce api api for your ecommerce and for testing
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
        </div>
      </div>
    </>
  );
}
