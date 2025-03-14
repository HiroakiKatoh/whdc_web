import React, { useEffect, useRef } from "react";
import Head from "next/head";
import DarkTheme from "../../layouts/Dark";
import Navbar from "../../components/Navbar";
import RectRippleEffect from "../../components/rippleEffect/RectRippleEffect";

const ManagementTeam = () => {
  const navbarRef = useRef(null);
  const logoRef = useRef(null);

  useEffect(() => {
    // セクション全体のアニメーション
    const sections = document.querySelectorAll('.member-section');
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    }, {
      threshold: 0.3
    });

    sections.forEach(section => {
      sectionObserver.observe(section);
    });

    // 画像のアニメーション
    const images = document.querySelectorAll('.member-image');
    
    // 初期状態をリセット - すべての画像を確実に非表示に
    images.forEach(image => {
      image.style.opacity = '0';
      image.style.transform = 'translateY(50px)';
      image.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
    });

    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const image = entry.target;
          // アニメーションを適用
          setTimeout(() => {
            image.style.opacity = '1';
            image.style.transform = 'translateY(0)';
          }, 100);
        } else {
          // 画面外に出たら再度非表示に
          entry.target.style.opacity = '0';
          entry.target.style.transform = 'translateY(50px)';
        }
      });
    }, {
      threshold: 0,
      rootMargin: '-10% 0px -10% 0px'  // より自然なタイミングでトリガー
    });

    images.forEach(image => {
      imageObserver.observe(image);
    });

    // スクロールインジケーターの表示制御
    const scrollIndicator = document.querySelector('.scroll-indicator-container');
    const handleScroll = () => {
      const firstImage = document.querySelector('.member-image');
      if (firstImage) {
        const rect = firstImage.getBoundingClientRect();
        if (rect.top <= window.innerHeight) {
          scrollIndicator.classList.add('hide');
        } else {
          scrollIndicator.classList.remove('hide');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // 初期状態のチェック

    return () => {
      sections.forEach(section => sectionObserver.unobserve(section));
      images.forEach(image => imageObserver.unobserve(image));
      // スクロールイベントリスナーの削除
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <DarkTheme>
      <Head>
        <title>Management Team - THE WHY HOW DO COMPANY</title>
      </Head>
      <Navbar nr={navbarRef} lr={logoRef} />
      <header className="pages-header circle-bg valign">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="cont mt-90 mb-30 text-center">
                <h1 className="color-font fw-700">Management Team</h1>
                <div className="header-description" style={{ 
                  marginTop: '50px', 
                  maxWidth: '1000px', 
                  margin: '100px auto 80px'
                }}>
                  <p className="color-font fw-700" style={{ 
                    fontSize: '18px',
                    lineHeight: '2',
                    marginBottom: '40px'
                  }}>
                    私たちは、経営と法務の専門家として、<br />
                    企業価値の向上と持続可能な成長を実現するため、<br />
                    確かな専門性と豊富な経験を活かし、<br />
                    新しい価値の創造に挑戦し続けています。
                  </p>
                  <p className="color-font fw-700" style={{ 
                    marginTop: '40px', 
                    fontSize: '18px',
                    lineHeight: '2'
                  }}>
                    経営陣一同、株主の皆様、お客様、従業員、<br />
                    そして社会全体の利益を追求し、<br />
                    企業としての社会的責任を果たしてまいります。                 </p>
                </div>
                <div className="scroll-indicator-container" style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: '60px'
                }}>
                  <div className="scroll-button">
                    <img 
                      src="/img/team/scroll_indicater.jpg" 
                      alt="Scroll" 
                      style={{
                        width: '90px',
                        height: '90px',
                        display: 'block'
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main className="management-main" style={{ marginTop: '200px' }}>
        <div className="container">
          <section className="member-section">
            <div className="member-content">
              <div className="member-image" style={{ marginBottom: '40px' }}>
                <RectRippleEffect 
                  imageUrl="/img/profile/iwao.jpg"
                  dropRadius={35}
                  perturbance={0.04}
                  width="300px"
                  height="400px"
                />
              </div>
              <div className="member-info">
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center',
                  gap: '15px',
                  marginBottom: '20px'
                }}>
                  <h3>岩尾 俊兵</h3>
                  <h2 style={{ 
                    color: '#1baa80',
                    fontSize: '1.4rem',
                    fontWeight: '300',
                    letterSpacing: '0.1em',
                    margin: '0'
                  }}>CEO/COO</h2>
                </div>
                <div className="career-history">
                  <h4 style={{
                    fontSize: '1.4rem',
                    fontWeight: '300',
                    marginBottom: '20px',
                    textDecoration: 'underline',
                    textUnderlineOffset: '5px',
                    paddingLeft: '40px'
                  }}>＜経歴＞</h4>
                  <ul style={{
                    paddingLeft: '40px',
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

          <section className="member-section" style={{ marginTop: '80px' }}>
            <div className="member-content">
              <div className="member-image" style={{ marginBottom: '40px' }}>
                <RectRippleEffect 
                  imageUrl="/img/team/itou.jpg"
                  dropRadius={35}
                  perturbance={0.04}
                  width="300px"
                  height="400px"
                />
              </div>
              <div className="member-info">
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center',
                  gap: '15px',
                  marginBottom: '20px'
                }}>
                  <h3>伊藤 剛志</h3>
                  <h2 style={{ 
                    color: '#1baa80',
                    fontSize: '1.4rem',
                    fontWeight: '300',
                    letterSpacing: '0.1em',
                    margin: '0'
                  }}>CTO/CSO</h2>
                </div>
                <div className="career-history">
                  <h4 style={{
                    fontSize: '1.4rem',
                    fontWeight: '300',
                    marginBottom: '20px',
                    textDecoration: 'underline',
                    textUnderlineOffset: '5px',
                    paddingLeft: '40px'
                  }}>＜経歴＞</h4>
                  <ul style={{
                    paddingLeft: '40px',
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

          <section className="member-section" style={{ marginTop: '80px' }}>
            <div className="member-content">
              <div className="member-image" style={{ marginBottom: '40px' }}>
                <RectRippleEffect 
                  imageUrl="/img/team/hashimoto.jpg"
                  dropRadius={35}
                  perturbance={0.04}
                  width="300px"
                  height="400px"
                />
              </div>
              <div className="member-info">
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center',
                  gap: '15px',
                  marginBottom: '20px'
                }}>
                  <h3>橋本 直樹</h3>
                  <h2 style={{ 
                    color: '#1baa80',
                    fontSize: '1.4rem',
                    fontWeight: '300',
                    letterSpacing: '0.1em',
                    margin: '0'
                  }}>CFO/CHRO</h2>
                </div>
                <div className="career-history">
                  <h4 style={{
                    fontSize: '1.4rem',
                    fontWeight: '300',
                    marginBottom: '20px',
                    textDecoration: 'underline',
                    textUnderlineOffset: '5px',
                    paddingLeft: '40px'
                  }}>＜経歴＞</h4>
                  <ul style={{
                    paddingLeft: '40px',
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
