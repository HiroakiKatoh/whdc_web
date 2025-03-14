import React, { useEffect, useRef } from "react";
import Head from "next/head";
import DarkTheme from "../../layouts/Dark";
import Navbar from "../../components/Navbar";

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
              <div className="member-image">
                <img src="/img/profile/iwao.jpg" alt="岩尾俊兵" />
              </div>
              <div className="member-info">
                <h2>代表取締役社長</h2>
                <h3>岩尾 俊兵</h3>
                <p>岩尾俊兵（いわお しゅんぺい、1989年4月19日生まれ）は、日本の経営学者であり、慶應義塾大学商学部の准教授です。専門分野は経営組織論、経営戦略論、ビジネスモデル論、生産管理論など多岐にわたります。</p>
                <div className="career-history">
                  <h4>経歴</h4>
                  <ul>
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

          <section className="member-section">
            <div className="member-content">
              <div className="member-image">
                <img src="/img/profile/tanabe.jpg" alt="田邊勝己" />
              </div>
              <div className="member-info">
                <h2>代表取締役会長</h2>
                <h3>田邊 勝己</h3>
                <p>田邊勝己（たなべ かつき、1960年11月25日生まれ）は、日本の弁護士であり、実業家としても活動しています。中央大学法学部法律学科を卒業後、司法試験に合格し、1989年に弁護士登録（第41期）を果たしました。現在は大阪弁護士会に所属し、弁護士法人カイロス総合法律事務所の代表を務めています。</p>
                <div className="career-history">
                  <h4>経歴</h4>
                  <ul>
                    <li><span className="year">1986年10月</span>司法試験合格</li>
                    <li><span className="year">1989年4月</span>弁護士登録</li>
                    <li><span className="year">1993年4月</span>田邊勝己法律事務所 設立 所長</li>
                    <li><span className="year">2013年7月</span>弁護士法人カイロス総合法律事務所 設立 代表社員（現任）</li>
                    <li><span className="year">2019年11月</span>当社 執行役員</li>
                    <li><span className="year">2020年11月</span>当社 取締役</li>
                    <li><span className="year">2020年12月</span>当社 代表取締役会長</li>
                    <li><span className="year">2021年12月</span>当社 管理部管掌</li>
                    <li><span className="year">2023年8月</span>当社 代表取締役会長兼社長</li>
                    <li><span className="year">2023年9月</span>当社 経営企画部管掌</li>
                    <li><span className="year">2023年11月</span>当社 ㈱宇部整環リサイクルセンター 特別管掌（現任）</li>
                    <li><span className="year">2024年11月</span>当社 代表取締役会長（現任）</li>
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
