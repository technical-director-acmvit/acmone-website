import React from "react";
import styles from "../../../ui/components/Home.module.css";

const Home: React.FC = () => {
  return (
    <div className={styles.backgroundHome}>
      <div className={styles.flexmiddle}>
        <h1
          style={{
            color: "black",
            fontSize: 30,
          }}
        >
          ACM IN ONE
        </h1>
        <button className={styles.buttonstyles}>
          Download
        </button>
      </div>
    </div>
  );
};

export default Home;
