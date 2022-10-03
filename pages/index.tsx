import { ConnectWallet } from "@thirdweb-dev/react";
import type { NextPage } from "next";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Wen <a href="https://livethelife.tv/">Berachain Ser</a>!
        </h1>

        <p className={styles.description}>
          Wen Bera Chain!
        </p>

        <div className={styles.connect}>
          <ConnectWallet />
        </div>
      </main>
    </div>
  );
};

export default Home;
