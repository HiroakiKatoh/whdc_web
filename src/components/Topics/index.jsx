/* eslint-disable @next/next/no-img-element */
import React from "react";
import Split from "../Split";
import styles from "./styles.module.css";

const Topics = () => {
  const newsItems = {
    pressRelease: {
      date: "2024.03.10",
      title: "Acrodea firstView03のお知らせ",
      url: "https://www.twhdc.co.jp/ir/news/index.html",
      category: "PRESS RELEASE"
    },
    disclosure: {
      date: "2024.03.09",
      title: "2024年3月期 第3四半期決算短信〔日本基準〕（連結）",
      url: "https://www.twhdc.co.jp/ir/news/index.html",
      category: "DISCLOSURE"
    }
  };

  return (
    <section className={`${styles.topics} section-padding`}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className={styles.secHead}>
              <h6 className="wow fadeIn" data-wow-delay=".1s">
                LATEST NEWS
              </h6>
              <h3 className="wow">TOPICS</h3>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className={`${styles.newsItem} wow fadeInUp`} data-wow-delay="0.2s">
              <div className={styles.newsContent}>
                <h2 className={styles.newsHeading}>プレスリリース</h2>
                <div className={styles.newsCategory}>{newsItems.pressRelease.category}</div>
                <div className={styles.newsDate}>{newsItems.pressRelease.date}</div>
                <a href={newsItems.pressRelease.url} className={styles.newsTitle} target="_blank" rel="noopener noreferrer">
                  {newsItems.pressRelease.title}
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className={`${styles.newsItem} wow fadeInUp`} data-wow-delay="0.3s">
              <div className={styles.newsContent}>
                <h2 className={styles.newsHeading}>決算・適時開示</h2>
                <div className={styles.newsCategory}>{newsItems.disclosure.category}</div>
                <div className={styles.newsDate}>{newsItems.disclosure.date}</div>
                <a href={newsItems.disclosure.url} className={styles.newsTitle} target="_blank" rel="noopener noreferrer">
                  {newsItems.disclosure.title}
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-4">
            <a href="https://www.twhdc.co.jp/ir/news/index.html" className={`${styles.moreButton} wow fadeInUp`} data-wow-delay="0.4s" target="_blank" rel="noopener noreferrer">
              ニュース一覧
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Topics; 