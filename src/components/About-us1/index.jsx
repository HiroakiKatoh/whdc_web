/* eslint-disable @next/next/no-img-element */
import React from "react";
import Split from "../Split";
import "./style.css";

const Topics = () => {
  const newsItems = [
    {
      date: "2024.03.10",
      title: "Acrodea firstView03",
      url: "https://www.twhdc.co.jp/ir/news/index.html"
    },
    {
      date: "2024.03.09",
      title: "ニュース一覧",
      url: "https://www.twhdc.co.jp/ir/news/index.html"
    },
    {
      date: "2024.03.08",
      title: "決算・適時開示",
      url: "https://www.twhdc.co.jp/ir/news/index.html"
    }
  ];

  return (
    <section className="topics section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="sec-head text-center">
              <h6 className="wow fadeIn" data-wow-delay=".1s">
                LATEST NEWS
              </h6>
              <h3 className="wow color-font">TOPICS</h3>
            </div>
          </div>
        </div>
        <div className="row">
          {newsItems.map((news, index) => (
            <div key={index} className="col-lg-4">
              <div className="news-item wow fadeInUp" data-wow-delay={`${0.2 + index * 0.1}s`}>
                <div className="news-content">
                  <div className="news-date">{news.date}</div>
                  <a href={news.url} className="news-title" target="_blank" rel="noopener noreferrer">
                    {news.title}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Topics;
