import React from "react";
import Split from "../Split";

const Services1 = () => {
  return (
    <section id="services" className="services section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="sec-head text-center">
              <h6 className="wow fadeIn" data-wow-delay=".1s">
                BEST FEATURES
              </h6>
              <h3 className="wow">SERVICES</h3>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="text-center wow fadeInUp" data-wow-delay="0.2s">
              <p className="text-description" style={{ color: '#fff', fontSize: '18px', lineHeight: '1.8', marginBottom: '30px' }}>
                価値創造の力で、もう一度豊かになる。当社はこれから全社的ビジネスモデルとして「企業再"成"プラットフォーム」を掲げます。
                まずは通常の事業再生を、次に「売らない事業承継」を、最後に「ビジネスモデル総合商社」を手掛けていきます。
              </p>
              <p className="text-description" style={{ color: '#fff', fontSize: '18px', lineHeight: '1.8' }}>
                こうしてM&A業界における総合ディベロッパーのような唯一無二の存在を目指していきます。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services1;
