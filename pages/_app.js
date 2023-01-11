import { useState } from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Sidebar from "../components/Sidebar";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  const [active, setActive] = useState(false);
  const toggle = () => setActive(!active);
  return (
    <>
      <Nav toggle={toggle} />
      <Sidebar toggle={toggle} active={active} />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
