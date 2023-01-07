import Head from "next/head";
import Hero from "../components/Hero";
import Nav from "../components/Nav";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fake Furnitures Api</title>
      </Head>
      <main>
        <Nav />
        <Hero />
      </main>
    </>
  );
}
