import React, { useEffect, useRef } from "react";
import Head from "next/head";
import DarkTheme from "../../layouts/Dark";
import Navbar from "../../components/Navbar";
import RectRippleEffect from "../../components/rippleEffect/RectRippleEffect";

const ManagementTeam = () => {
  const navbarRef = useRef(null);
  const logoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    const sections = document.querySelectorAll('.member-section');
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      if (sections) {
        sections.forEach((section) => {
          observer.unobserve(section);
        });
      }
    };
  }, []);

  return (
    <DarkTheme>
      <Head>
        <title>Management Team - THE WHY HOW DO COMPANY</title>
      </Head>
      <Navbar nr={navbarRef} lr={logoRef} />
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
            <source src="/movies/management_movie_1.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="cont mt-0 mb-0 text-center">
                <h1 className="color-font fw-700" style={{
                  display: 'inline-block',
                  backgroundColor: '#002B66',
                  padding: '10px 30px',
                  borderRadius: '5px',
                  fontFamily: "'Century', serif",
                  position: 'relative',
                  zIndex: 1,
                  fontSize: '3.5rem',
                  transform: 'translate(53%, -16%)'
                }}>Management Team</h1>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main className="management-main" style={{ marginTop: '0px' }}>
        <div className="container">
          <section className="member-section" style={{
            display: 'flex',
            justifyContent: 'center',
            transform: 'translateX(5%)',
            marginTop: '-150px'
          }}>
            <div className="member-content" style={{
              display: 'flex',
              gap: '60px',
              alignItems: 'flex-start'
            }}>
              <div className="member-image" style={{ flex: '0 0 auto' }}>
                <RectRippleEffect 
                  imageUrl="/img/profile/iwao.jpg"
                  dropRadius={35}
                  perturbance={0.04}
                  width="300px"
                  height="400px"
                />
              </div>
              <div className="member-info" style={{ flex: '1' }}>
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center',
                  gap: '20px',
                  marginBottom: '30px'
                }}>
                  <h3 style={{
                    fontSize: '2.5rem',
                    margin: 0,
                    color: '#fff'
                  }}>岩尾 俊兵</h3>
                  <h2 style={{ 
                    color: '#1baa80',
                    fontSize: '1.4rem',
                    fontWeight: '300',
                    letterSpacing: '0.1em',
                    margin: 0
                  }}>CEO/COO</h2>
                </div>
                <div className="career-history">
                  <h4 style={{
                    fontSize: '1.4rem',
                    fontWeight: '300',
                    marginBottom: '20px',
                    color: '#fff'
                  }}>＜経歴＞</h4>
                  <ul style={{
                    paddingLeft: '0',
                    color: '#fff'
                  }}>
                    <li><span className="year">2013年8月</span>株式会社理論経営設立・代表取締役社長</li>
                    <li><span className="year">2018年3月</span>東京大学博士（経営学）取得</li>
                    <li><span className="year">2018年4月</span>明治学院大学専任講師</li>
                    <li><span className="year">2021年4月</span>慶應義塾大学商学部専任講師</li>
                    <li><span className="year">2022年3月</span>株式会社ドリーム・アーツ取締役</li>
                    <li><span className="year">2022年4月</span>慶應義塾大学商学部准教授（現任）</li>
                    <li><span className="year">2024年12月</span>当社 代表取締役社長（現任）</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="member-section" style={{
            marginTop: '80px',
            display: 'flex',
            justifyContent: 'center',
            transform: 'translateX(7%)'
          }}>
            <div className="member-content" style={{
              display: 'flex',
              gap: '60px',
              alignItems: 'flex-start'
            }}>
              <div className="member-image" style={{ flex: '0 0 auto' }}>
                <RectRippleEffect 
                  imageUrl="/img/team/itou.jpg"
                  dropRadius={35}
                  perturbance={0.04}
                  width="300px"
                  height="400px"
                />
              </div>
              <div className="member-info" style={{ flex: '1' }}>
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center',
                  gap: '20px',
                  marginBottom: '30px'
                }}>
                  <h3 style={{
                    fontSize: '2.5rem',
                    margin: 0,
                    color: '#fff'
                  }}>伊藤 剛志</h3>
                  <h2 style={{ 
                    color: '#1baa80',
                    fontSize: '1.4rem',
                    fontWeight: '300',
                    letterSpacing: '0.1em',
                    margin: 0
                  }}>CTO/CSO</h2>
                </div>
                <div className="career-history">
                  <h4 style={{
                    fontSize: '1.4rem',
                    fontWeight: '300',
                    marginBottom: '20px',

                  }}>＜経歴＞</h4>
                  <ul style={{
                    paddingLeft: '0',
                    color: '#fff'
                  }}>
                    <li><span className="year">1996年4月</span>ソフトウエア興行株式会社入社</li>
                    <li><span className="year">2008年3月</span>グローバルコミュニケーションズ株式会社入社</li>
                    <li><span className="year">2008年10月</span>当社 入社</li>
                    <li><span className="year">2020年3月</span>当社 執行役員</li>
                    <li><span className="year">2020年11月</span>当社 取締役</li>
                    <li><span className="year">2021年4月</span>ソリュ―ション事業部管掌<br/>ソリュ―ション事業部長委嘱</li>
                    <li><span className="year">2023年8月</span>One's Room株式会社取締役（現任）</li>
                    <li><span className="year">2023年9月</span>当社 取締役副社長（現任）</li>
                    <li><span className="year">2023年11月</span>当社 事業全般管掌（現任）</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="member-section" style={{
            marginTop: '80px',
            display: 'flex',
            justifyContent: 'center',
            transform: 'translateX(3.5%)'
          }}>
            <div className="member-content" style={{
              display: 'flex',
              gap: '60px',
              alignItems: 'flex-start'
            }}>
              <div className="member-image" style={{ flex: '0 0 auto' }}>
                <RectRippleEffect 
                  imageUrl="/img/team/hashimoto.jpg"
                  dropRadius={35}
                  perturbance={0.04}
                  width="300px"
                  height="400px"
                />
              </div>
              <div className="member-info" style={{ flex: '1' }}>
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center',
                  gap: '20px',
                  marginBottom: '30px'
                }}>
                  <h3 style={{
                    fontSize: '2.5rem',
                    margin: 0,
                    color: '#fff'
                  }}>橋本 直樹</h3>
                  <h2 style={{ 
                    color: '#1baa80',
                    fontSize: '1.4rem',
                    fontWeight: '300',
                    letterSpacing: '0.1em',
                    margin: 0
                  }}>CFO/CHRO</h2>
                </div>
                <div className="career-history">
                  <h4 style={{
                    fontSize: '1.4rem',
                    fontWeight: '300',
                    marginBottom: '20px',
                  }}>＜経歴＞</h4>
                  <ul style={{
                    paddingLeft: '0',
                    color: '#fff'
                  }}>
                    <li><span className="year">1986年4月</span>株式会社資生堂パーラー入社</li>
                    <li><span className="year">2003年4月</span>同社経営企画部長</li>
                    <li><span className="year">2004年12月</span>同社取締役経営管理本部長</li>
                    <li><span className="year">2017年9月</span>同社執行役員営業本部長</li>
                    <li><span className="year">2021年7月</span>同社事業企画部参与</li>
                    <li><span className="year">2021年11月</span>当社 監査役</li>
                    <li><span className="year">2022年1月</span>株式会社資生堂パーラー参与</li>
                    <li><span className="year">2023年11月</span>当社 取締役副社長 就任（現任）<br/>当社 経営企画部管掌 管理部管掌（現任）</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </DarkTheme>
  );
};

export default ManagementTeam;
