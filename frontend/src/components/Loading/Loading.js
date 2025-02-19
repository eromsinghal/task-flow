import React from "react";
import styles from "./Loading.module.css"; // Import CSS module

const Loading = () => {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.spinner}></div>
      <p className={styles.loadingText}>Loading, please wait...</p>
    </div>
  );
};

export default Loading;
