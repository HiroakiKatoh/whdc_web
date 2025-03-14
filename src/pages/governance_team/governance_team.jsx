import React, { useState } from "react";
import DarkTheme from "../../layouts/Dark";
import Navbar from "../../components/Navbar";
import SmallFooter from "../../components/Small-footer";

const GovernanceTeam = () => {
  const [openHistory, setOpenHistory] = useState(null);
  const MainContent = React.useRef(null);

  const toggleHistory = (index) => {
    if (openHistory === index) {
      setOpenHistory(null);
    } else {
      setOpenHistory(index);
    }
  };

  React.useEffect(() => {
    window.addEventListener("load", () => {
      setTimeout(() => {
        if (MainContent.current) {
          MainContent.current.style.marginTop = "100px";
        }
      }, 0);
    });
  }, [MainContent]);

  const officers = [
    {
      title: "代表取締役会長",
      name: "田邊 勝己",
      history: [
        { date: "1986年10月", description: "司法試験合格" },
        { date: "1989年4月", description: "弁護士登録" },
        { date: "1993年4月", description: "田邊勝己法律事務所 設立 所長" },
        { date: "2013年7月", description: "弁護士法人カイロス総合法律事務所 設立 代表社員（現任）" },
        { date: "2019年11月", description: "当社 執行役員" },
        { date: "2020年11月", description: "当社 取締役" },
        { date: "2020年12月", description: "当社 代表取締役会長" },
        { date: "2021年12月", description: "当社 管理部管掌" },
        { date: "2023年8月", description: "当社 代表取締役会長兼社長" },
        { date: "2023年9月", description: "当社 経営企画部管掌" },
        { date: "2023年11月", description: "当社 ㈱宇部整環リサイクルセンター 特別管掌（現任）" },
        { date: "2024年11月", description: "当社 代表取締役会長（現任）" }
      ]
    },

    {
      title: "取締役",
      name: "國吉 芳夫",
      history: [
        { date: "1997年4月", description: "リコーシステム開発株式会社入社" },
        { date: "2002年1月", description: "株式会社電通国際情報サービス入社" },
        { date: "2004年2月", description: "株式会社エイチアイ入社" },
        { date: "2004年7月", description: "当社設立 取締役" },
        { date: "2006年7月", description: "当社 取締役副社長" },
        { date: "2009年7月", description: "当社 管理部管掌" },
        { date: "2017年1月", description: "株式会社渋谷肉横丁代表取締役" },
        { date: "2017年8月", description: "株式会社エンターテイメントシステムズ代表取締役（現 株式会社クリプト・フィナンシャル・システム）" },
        { date: "2017年12月", description: "当社 ソリューション事業部管掌" },
        { date: "2018年9月", description: "当社 管理部管掌 管理部副部長委嘱" },
        { date: "2020年3月", description: "当社 管理部管掌 管理部長委嘱" },
        { date: "2020年3月", description: "株式会社インタープラン 代表取締役" },
        { date: "2021年12月", description: "当社 取締役 内部監査室管掌 内部監査室長（現任）" }
      ]
    },
    {
      title: "社外取締役",
      name: "逢坂 貞夫",
      history: [
        { date: "1961年4月", description: "検察庁検事任官" },
        { date: "1965年3月", description: "大阪地方検察庁検事" },
        { date: "1986年12月", description: "大阪地方検察庁刑事部長" },
        { date: "1989年4月", description: "最高検察庁検事" },
        { date: "1990年4月", description: "熊本地方検察庁検事正" },
        { date: "1993年12月", description: "最高検察庁公判部長" },
        { date: "1995年2月", description: "大阪地方検察庁検事正" },
        { date: "1996年6月", description: "高松高等検察庁検事長" },
        { date: "1997年12月", description: "大阪高等検察庁検事長" },
        { date: "1999年8月", description: "弁護士登録" },
        { date: "1999年8月", description: "逢坂貞夫法律事務所弁護士（現任）" },
        { date: "2017年7月", description: "当社 コンプライアンス担当顧問" },
        { date: "2017年9月", description: "当社 社外取締役（現任）" }
      ]
    },
    {
      title: "社外取締役",
      name: "足立 敏彦",
      history: [
        { date: "1975年4月", description: "東京地方検察庁検事任官" },
        { date: "1990年4月", description: "東京地方検察庁特捜部検事" },
        { date: "2001年5月", description: "名古屋地方検察庁次席検事" },
        { date: "2003年4月", description: "山形地方検察庁検事正" },
        { date: "2005年1月", description: "岐阜地方検察庁検事正" },
        { date: "2006年2月", description: "東京法務局所属公証人" },
        { date: "2016年2月", description: "弁護士登録" },
        { date: "2017年3月", description: "カイロス総合法律事務所弁護士（現任）" },
        { date: "2017年7月", description: "当社 コンプライアンス担当顧問" },
        { date: "2017年9月", description: "当社 社外取締役（現任）" }
      ]
    },
    {
      title: "社外取締役",
      name: "弦間 明",
      history: [
        { date: "1959年4月", description: "株式会社資生堂入社" },
        { date: "1997年6月", description: "同社代表取締役社長" },
        { date: "2001年6月", description: "同社代表取締役執行役員会長" },
        { date: "2003年6月", description: "同社相談役" },
        { date: "2004年6月", description: "コナミホールディングス株式会社取締役" },
        { date: "2013年4月", description: "株式会社資生堂特別顧問（現任）" },
        { date: "2015年6月", description: "株式会社テレビ朝日取締役（監査等委員）（現任）" },
        { date: "2021年6月", description: "コナミホールディングス株式会社取締役（監査等委員）（現任）" },
        { date: "2021年11月", description: "当社 社外取締役就任（現任）" }
      ]
    },
    {
      title: "常勤社外監査役",
      name: "手塚 宏",
      history: [
        { date: "1987年4月", description: "株式会社東芝オフィスオートメーション入社" },
        { date: "1997年10月", description: "株式会社APTI入社（現株式会社JBアドバンスト・テクノロジー株式会社）" },
        { date: "2004年10月", description: "JBSテクノロジー株式会社入社 取締役" },
        { date: "2007年9月", description: "株式会社クラフト・ビュー設立 代表取締役" },
        { date: "2011年10月", description: "株式会社MAP経営 執行役員" },
        { date: "2017年11月", description: "経営支援コンサルMASSELL設立 代表（現任）" },
        { date: "2023年11月", description: "当社 常勤社外監査役 就任（現任）" }
      ]
    },
    {
      title: "監査役",
      name: "井内 康文",
      history: [
        { date: "1965年4月", description: "社団法人共同通信社入社" },
        { date: "1998年6月", description: "同社大阪支社長" },
        { date: "2002年6月", description: "株式会社共同通信会館 専務取締役" },
        { date: "2004年6月", description: "同社常任監査役" },
        { date: "2009年8月", description: "西松建設株式会社 社外監査役" },
        { date: "2017年9月", description: "当社 社外取締役" },
        { date: "2021年11月", description: "当社 監査役就任（現任）" }
      ]
    },
    {
      title: "社外監査役",
      name: "森井 じゅん",
      history: [
        { date: "2005年11月", description: "Bonanza Casino入社" },
        { date: "2009年10月", description: "尾台会計事務所入所" },
        { date: "2012年2月", description: "米国ワシントン州公認会計士登録" },
        { date: "2012年9月", description: "デロイトトーマツファイナンシャルアドバイザリー株式会社入社" },
        { date: "2013年8月", description: "公認会計士登録" },
        { date: "2014年1月", description: "税理士登録" },
        { date: "2014年1月", description: "森井会計事務所開設 代表公認会計士・税理士（現任）" },
        { date: "2014年1月", description: "株式会社城南紙商代表取締役（現任）" },
        { date: "2016年4月", description: "東京都品川区監査委員（現任）" },
        { date: "2021年11月", description: "当社 社外監査役就任（現任）" }
      ]
    }
  ];

  const complianceOfficers = [
    {
      name: "逢坂 貞夫",
      history: [
        { date: "1961年4月", description: "検察庁検事任官" },
        { date: "1965年3月", description: "大阪地方検察庁検事" },
        { date: "1986年12月", description: "大阪地方検察庁刑事部長" },
        { date: "1989年4月", description: "最高検察庁検事" },
        { date: "1990年4月", description: "熊本地方検察庁検事正" },
        { date: "1993年12月", description: "最高検察庁公判部長" },
        { date: "1995年2月", description: "大阪地方検察庁検事正" },
        { date: "1996年6月", description: "高松高等検察庁検事長" },
        { date: "1997年12月", description: "大阪高等検察庁検事長" },
        { date: "1999年8月", description: "弁護士登録" },
        { date: "1999年8月", description: "逢坂貞夫法律事務所弁護士（現任）" },
        { date: "2017年7月", description: "当社 コンプライアンス担当顧問" },
        { date: "2017年9月", description: "当社 社外取締役（現任）" }
      ]
    },
    {
      name: "足立 敏彦",
      history: [
        { date: "1975年4月", description: "東京地方検察庁検事任官" },
        { date: "1990年4月", description: "東京地方検察庁特捜部検事" },
        { date: "2001年5月", description: "名古屋地方検察庁次席検事" },
        { date: "2003年4月", description: "山形地方検察庁検事正" },
        { date: "2005年1月", description: "岐阜地方検察庁検事正" },
        { date: "2006年2月", description: "東京法務局所属公証人" },
        { date: "2016年2月", description: "弁護士登録" },
        { date: "2017年3月", description: "カイロス総合法律事務所弁護士（現任）" },
        { date: "2017年7月", description: "当社 コンプライアンス担当顧問" },
        { date: "2017年9月", description: "当社 社外取締役（現任）" }
      ]
    }
  ];

  return (
    <DarkTheme>
      <Navbar theme="themeL" />
      <header className="pages-header circle-bg valign">
        <div className="video-background">
          <video
            autoPlay
            muted
            loop
            playsInline
            style={{
              position: 'absolute',
              width: '200%',
              height: '100%',
              top: '60%',
              left: '50%',
              objectFit: 'fill',
              transform: 'translate(-50%, -50%)',
              zIndex: -1,
              maxWidth: '1150px',
              margin: '0 auto',
              clipPath: 'inset(0 0 70% 0)'
            }}
          >
            <source src="/movies/governance_movie.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="cont mt-0 mb-0 text-center">
                <h1 className="color-font fw-700" style={{
                  display: 'inline-block',
                  backgroundColor: '#280137',
                  padding: '10px 30px',
                  borderRadius: '5px',
                  fontFamily: "'Century', serif",
                  position: 'relative',
                  zIndex: 1,
                  fontSize: '3.5rem',
                  transform: 'translate(60%, -16%)'
                }}>Governance Team</h1>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div ref={MainContent} className="main-content">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9 col-md-11">
              <h2 style={{ 
                color: '#fff', 
                fontSize: '2.5rem',
                marginBottom: '40px',
                marginTop: '-1000px',
                border: '2px solid #fff',
                display: 'inline-block',
                padding: '10px 30px',
                marginLeft: '-50px'
              }}>ガバナンスチーム役員一覧</h2>
              <div className="officers-list" style={{ marginTop: '50px' }}>
                {officers.map((officer, index) => (
                  <div key={index} className="officer-item" style={{ 
                    marginBottom: '0',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                    padding: '20px 0'
                  }}>
                    <div style={{ 
                      display: 'flex', 
                      alignItems: 'baseline',
                      gap: '40px'
                    }}>
                      <h3 style={{ 
                        fontSize: '1.6rem',
                        color: '#fff',
                        margin: 0,
                        minWidth: '200px'
                      }}>{officer.title}</h3>
                      <div style={{
                        display: 'flex',
                        alignItems: 'baseline',
                        gap: '20px'
                      }}>
                        <span style={{
                          fontSize: '1.6rem',
                          color: '#fff'
                        }}>{officer.name}</span>
                        <button
                          onClick={() => toggleHistory(index)}
                          style={{
                            background: 'none',
                            border: 'none',
                            color: '#1baa80',
                            cursor: 'pointer',
                            fontSize: '1.2rem',
                            textDecoration: 'underline'
                          }}
                        >
                          略歴 ▼
                        </button>
                      </div>
                    </div>
                    {openHistory === index && (
                      <div className="history-content" style={{
                        marginTop: '20px',
                        paddingLeft: '220px'
                      }}>
                        {officer.history.map((item, hIndex) => (
                          <div key={hIndex} style={{
                            display: 'flex',
                            gap: '20px',
                            marginBottom: '10px',
                            color: '#fff'
                          }}>
                            <span style={{ minWidth: '100px', color: '#1baa80' }}>{item.date}</span>
                            <span>{item.description}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <h2 style={{ 
                color: '#fff', 
                fontSize: '2.5rem',
                marginBottom: '40px',
                marginTop: '80px',
                border: '2px solid #fff',
                display: 'inline-block',
                padding: '10px 30px',
                marginLeft: '-50px'
              }}>コンプライアンス委員</h2>
              <div className="compliance-officers-list">
                {complianceOfficers.map((officer, index) => (
                  <div key={index} className="officer-item" style={{ 
                    marginBottom: '0',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                    padding: '20px 0'
                  }}>
                    <div style={{ 
                      display: 'flex', 
                      alignItems: 'baseline',
                      gap: '20px'
                    }}>
                      <h3 style={{ 
                        fontSize: '1.6rem',
                        color: '#fff',
                        margin: 0,
                        minWidth: '200px'
                      }}>コンプライアンス委員</h3>
                      <div style={{
                        display: 'flex',
                        alignItems: 'baseline',
                        gap: '20px'
                      }}>
                        <span style={{
                          fontSize: '1.6rem',
                          color: '#fff'
                        }}>{officer.name}</span>
                        <button
                          onClick={() => toggleHistory(index + officers.length)}
                          style={{
                            background: 'none',
                            border: 'none',
                            color: '#1baa80',
                            cursor: 'pointer',
                            fontSize: '1.2rem',
                            textDecoration: 'underline'
                          }}
                        >
                          略歴 ▼
                        </button>
                      </div>
                    </div>
                    {openHistory === index + officers.length && (
                      <div className="history-content" style={{
                        marginTop: '20px',
                        paddingLeft: '220px'
                      }}>
                        {officer.history.map((item, hIndex) => (
                          <div key={hIndex} style={{
                            display: 'flex',
                            gap: '20px',
                            marginBottom: '10px',
                            color: '#fff'
                          }}>
                            <span style={{ minWidth: '100px', color: '#1baa80' }}>{item.date}</span>
                            <span>{item.description}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <SmallFooter />
      </div>
    </DarkTheme>
  );
};

export default GovernanceTeam;
