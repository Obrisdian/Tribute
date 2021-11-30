import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { TributeInfo } from "../components/TributeInfo";
import {TributePage2} from"../components/TributeInfo/page2"
import {TributePage3} from"../components/TributeInfo/page3"
import {TributePage4} from"../components/TributeInfo/page4"
import {TributePage5} from"../components/TributeInfo/page5"
import {TributePage6} from"../components/TributeInfo/page6"
const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <TributeInfo id={1}/>
      <TributePage2 id={0} />
      <TributePage3 id={0}/>
      <TributePage4 id={0}/>
      <TributePage5 id={0}/>
      <TributePage6 id={2}/>
      
     

      <main className={styles.main}></main>

      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Home;
