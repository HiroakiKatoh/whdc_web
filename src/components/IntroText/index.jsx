import React, { useEffect, useState } from "react";
import styles from "./style.module.css";

const IntroText = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // 3秒後にアニメーションを開始
    const timer = setTimeout(() => {
      setShow(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`${styles.introText} ${show ? styles.show : ''}`}>
      <h1 className={styles.title}>
        <span className={styles.word}>Welcome</span>{" "}
        <span className={styles.word}>to</span>{" "}
        <span className={styles.word}>WHDC</span>{" "}
        <span className={styles.word}>！</span>
      </h1>
      <h2 className={styles.subtitle}>
        <div className={styles.line}>
          <span className={styles.word}>我々が提供するのは価値提供の場、</span>
        </div>
        <div className={styles.line}>
          <span className={styles.word}>企業再成プラットフォーム。</span>
        </div>
        <div className={styles.line}>
          <span className={styles.word}>ビジネスモデルの総合商社、</span>
        </div>
        <div className={styles.line}>
          <span className={styles.word}>THE WHY HOW DO COMPANY。</span>
        </div>
      </h2>
    </div>
  );
};

export default IntroText; 