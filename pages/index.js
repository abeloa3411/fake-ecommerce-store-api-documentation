import Head from "next/head";
import Nav from "../components/Nav";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fake Furnitures Api</title>
      </Head>
      <main className={styles.main}>
        <Nav />
      </main>
    </>
  );
}
