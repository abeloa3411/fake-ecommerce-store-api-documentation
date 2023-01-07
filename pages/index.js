import Head from "next/head";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fake Furnitures Api</title>
      </Head>
      <main>
        <Hero />
      </main>
    </>
  );
}
