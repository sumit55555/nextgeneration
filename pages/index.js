import styles from "../styles/index.module.css";
import Link from 'next/Link';
import Navbar from "../components/navbar";
import Header from "../components/Header";
import Head from "next/head";

const index = () => {
  return (
    <>
      <Head>
        <title>HomePage</title>
      </Head>
      <Header />
    </>
  )
}

export default index;
