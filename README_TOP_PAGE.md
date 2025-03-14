# トップページ構成について

## メインコンポーネント
`src/pages/whdc/index.jsx`がメインのコンポーネントファイルです。

## 設定可能な変数
- `headerMargin`: ヘッダーからコンテンツまでの距離を制御（デフォルト: '100px'）

## 使用コンポーネント一覧
- AboutUs1
- BlogsTwoColumnSlider
- CallToAction
- Clients1
- Footer
- Navbar
- Numbers1
- Services1
- SkillsCircle
- Works1Slider
- RippleEffect
- DarkTheme (レイアウト)

## CSSファイル構成
各コンポーネントのスタイルは以下の場所に配置されています：

### コンポーネント個別のCSS
```
src/components/About-us1/style.css
src/components/Blogs-two-column-slider/style.css
src/components/Call-to-action/style.css
src/components/Clients1/style.css
src/components/Footer/style.css
src/components/Navbar/style.css
src/components/Numbers/style.css
src/components/Services1/style.css
src/components/Skills-circle/style.css
src/components/Works1-slider/style.css
src/components/rippleEffect/style.css
```

### レイアウト用CSS
```
src/layouts/Dark/style.css
```

### グローバルスタイル（可能性のある場所）
```
src/styles/main.css
```
または
```
src/assets/css/style.css
```

## 特記事項
- トップページ固有のスタイルの多くは、コンポーネント内でインラインスタイルとして直接記述されています
- メインビジュアルには動画（earth.mp4）を使用
- レスポンシブデザインに対応（flexbox, clampなどを使用）

## 変更履歴
### 2024-XX-XX
- トップページから人物画像（iwao.jpg, tanabe.jpg）とその表示用のRippleEffectセクションを削除
- コンポーネントの並びを調整：AboutUs1の直後にServices1が続くように変更
- RippleEffectコンポーネント自体は他ページでの使用のため維持
- ヘッダーからのマージンを変数（headerMargin）として定義し、容易に調整可能に変更

### 2025-03-10 07:20
1. Next.js 13対応の実装完了
   - クライアントコンポーネント化（'use client'の追加）
   - ハイドレーション対策の実装
   - マウント制御の導入

2. バックアップファイル作成
   - `src/pages/index.js.backup`
   - `src/layouts/Dark/index.js.backup`

### 2025-03-10 08:30
1. イントロテキストのアニメーション実装
   - 新規コンポーネント `IntroText` の作成
   - CSSモジュールを使用した安全なスタイリング
   - 3秒遅延のフェードインアニメーション

### 2025-03-10 09:15
1. イントロテキストアニメーションの速度調整
   - アニメーション基本速度を0.6s→0.3sに短縮
   - 文字表示の遅延時間を全体的に短縮
   - ファイル: `src/components/IntroText/style.module.css`

#### アニメーション速度の制御パラメータ
```css
// 基本アニメーション速度（12-15行目）
.word {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

// 各要素の表示タイミング（27-34行目）
.title .word:nth-child(1) { transition-delay: 0.05s; }  // "Welcome"
.title .word:nth-child(2) { transition-delay: 0.1s; }   // "to"
.title .word:nth-child(3) { transition-delay: 0.15s; }  // "WHDC"
.title .word:nth-child(4) { transition-delay: 0.2s; }   // "！"

.subtitle .line:nth-child(1) .word { transition-delay: 0.25s; }
.subtitle .line:nth-child(2) .word { transition-delay: 0.3s; }
.subtitle .line:nth-child(3) .word { transition-delay: 0.35s; }
.subtitle .line:nth-child(4) .word { transition-delay: 0.4s; }
```

#### 調整可能なパラメータ
1. 基本速度
   - `transition`の時間を変更
   - 小さくすると速く、大きくすると遅くなる

2. 表示タイミング
   - `transition-delay`の値を変更
   - 各要素の表示開始タイミングを制御

## バックアップファイル
### src/pages/index.js.backup
```javascript
'use client';
import React from 'react';
import DarkTheme from "../layouts/Dark";
import WHDC from "./whdc/index";

const Home = () => {
  const [mounted, setMounted] = React.useState(false);
  // ... 省略 ...
};

export default Home;
```

### src/layouts/Dark/index.js.backup
```javascript
'use client';
import React from "react";
import "./style.css";

const DarkTheme = ({ children }) => {
  const [mounted, setMounted] = React.useState(false);
  // ... 省略 ...
};

export default DarkTheme;
```

## バックアップからの復元手順
1. 必要なファイルのバックアップを確認
2. 対象ファイルの拡張子`.backup`を削除
3. 元のファイルと置き換え

## 注意点
- バックアップファイルは2025-03-10 07:20時点の動作確認済みコードを保存
- 'use client'ディレクティブやマウント制御などの重要な実装を含む
- 復元時は必ずファイル全体を置き換えること

# トップページ実装について

## ファイル構成

### メインコンポーネントファイル
```
src/pages/whdc/index.jsx  // WHDCメインコンテンツ
src/pages/index.js        // アプリケーションのエントリーポイント
```

### レイアウト
```
src/layouts/Dark/index.js   // ダークテーマレイアウト
src/layouts/Dark/style.css  // ダークテーマのスタイル
```

### CSS構成
```
src/styles/main.css          // グローバルスタイル
src/assets/css/style.css     // 追加のグローバルスタイル
src/components/*/style.css   // コンポーネント固有のスタイル
```

## 実装の要点

### 1. Next.js 13のApp Router対応
- 'use client'ディレクティブを使用
- クライアントサイドコンポーネントとして明示的に指定

### 2. ダークテーマの実装
```javascript
// src/layouts/Dark/index.js
const DarkTheme = ({ children }) => {
  const [mounted, setMounted] = React.useState(false);
  
  React.useEffect(() => {
    setMounted(true);
    if (typeof window !== 'undefined') {
      window.theme = "dark";
    }
  }, []);

  if (!mounted) return null;
  // ... レンダリング部分
};
```

### 3. トップページの構造
```javascript
// src/pages/index.js
const Home = () => {
  const [mounted, setMounted] = React.useState(false);
  
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <DarkTheme>
      <WHDC />
    </DarkTheme>
  );
};
```

## 主な変更履歴

1. ページ構造の整理
   - WHDCコンポーネントをメインコンテンツとして配置
   - DarkThemeでラップして全体のテーマを管理

2. ハイドレーション対策
   - mountedステートを導入
   - window参照の安全性確保
   - クライアントサイドレンダリングの制御

3. スタイリングの改善
   - dark-themeクラスの追加
   - グラデーション円の実装
   - レスポンシブ対応の準備

4. パフォーマンス最適化
   - コンポーネントのマウント制御
   - 不要なレンダリングの防止

## 注意点
- コンポーネントは必ず'use client'ディレクティブを使用
- windowオブジェクトへのアクセスは必ずマウント後に行う
- スタイルの変更は各コンポーネントのstyle.cssで管理

## 今後の課題
- アニメーションの追加
- レスポンシブデザインの完成
- パフォーマンスの最適化

## 新規コンポーネント
### IntroText
```
src/components/IntroText/
├── index.jsx        // コンポーネントの実装
└── style.module.css // スタイル定義
```

#### 主な機能
- ページ読み込み後3秒遅延でのアニメーション開始
- 文字ごとの段階的なフェードイン効果
- レスポンシブなフォントサイズ（vwユニット使用）

#### 実装詳細
```javascript
// コンポーネントの基本構造
const IntroText = () => {
  const [show, setShow] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className={`${styles.introText} ${show ? styles.show : ''}`}>
      // ... テキストコンテンツ
    </div>
  );
};
```

#### スタイリング手法
```css
// CSSモジュールによるスコープ付きスタイル
.word {
  display: inline-block;
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.show .word {
  opacity: 1;
  transform: translateY(0);
}
```

#### アニメーションの特徴
1. タイミング制御
   - 初期表示: 非表示状態
   - 3秒後: フェードイン開始
   - 文字ごとの遅延: 0.1s～1.1s

2. 視覚効果
   - 下から上へのスライド
   - 透明度の変化
   - テキストシャドウによる視認性向上

## 注意点
- Next.js 13の制約に対応するためCSSモジュールを使用
- コンポーネントレベルでのスタイルスコープ管理
- アニメーション時のパフォーマンスに配慮

## 今後の改善案
- アニメーション開始タイミングのカスタマイズ機能
- より細かい文字単位のアニメーション制御
- 異なるアニメーションパターンの追加 

## アニメーション速度の調整（2024/03/10）
### About-us1コンポーネントのテキストアニメーション
- 対象ファイル: `src/styles/main.css`
- 変更内容：
  - Splittingアニメーションの基本速度を0.6sから0.3sに短縮
  - 文字ごとの遅延時間を30msから15msに短縮
  - 行ごとのアニメーション遅延も全体的に短縮

  1. テキストアニメーションの高速化
     - `src/styles/main.css`の`.splitting`関連クラスの調整
       - アニメーション時間を0.3秒から0.15秒に短縮
       - 文字ごとの遅延時間を30msから15msに短縮
       - 行ごとのアニメーション遅延も全体的に短縮

  2. WOW.jsアニメーションの遅延時間短縮
     - `src/components/About-us1/index.jsx`の調整
       - メインタイトル（"About Us"など）の表示遅延を0.5秒から0.1秒に短縮
       - テキストコンテンツの表示遅延を0.15秒に設定
     - 目的：テキストの表示をより迅速に行い、UXを向上

## 変更履歴

### 2024/03/10
- About-us1コンポーネントのアニメーション速度調整
  1. テキストアニメーションの高速化
     - `src/styles/main.css`の`.splitting`関連クラスの調整
       - アニメーション時間を0.3秒から0.15秒に短縮
       - 文字ごとの遅延時間を30msから15msに短縮
       - 行ごとのアニメーション遅延も全体的に短縮

  2. WOW.jsアニメーションの遅延時間短縮
     - `src/components/About-us1/index.jsx`の調整
       - メインタイトル（"About Us"など）の表示遅延を0.5秒から0.1秒に短縮
       - テキストコンテンツの表示遅延を0.15秒に設定
     - 目的：テキストの表示をより迅速に行い、UXを向上 

### 2024/03/10
- メインビジュアルのスクロール固定機能の実装
  1. スタイルの追加（`src/styles/main.css`）
     - `.main-visual`クラスに`position: sticky`を適用
     - 画面高さいっぱいに表示（`height: 100vh`）
     - スクロール時の固定位置を設定（`top: 0`）
  
  2. コンポーネント構造の調整（`src/pages/whdc/index.jsx`）
     - メインビジュアル部分を`.main-visual`クラスでラップ
     - コンテンツ部分を`.content-wrapper`クラスでラップ
     - z-indexによる重なり順の制御

  目的：スクロール体験の向上とビジュアルインパクトの強化 

## メインビジュアルとサブビジュアルの実装 (2024/03/10)

### 構造の分離
1. メインビジュアル
   - 範囲：ヘッダーから動画最下部まで
   - 実装：`main-visual-container`として独立したコンテナを作成
   - 高さ：`height: 100vh`で画面高に固定
   - スクロール制御：`overflow: hidden`で制限

2. サブビジュアル
   - 範囲：動画最下部の線から下の領域全体
   - 実装：`sub-visual`クラスとして実装
   - レイヤー：`z-index: 2`でメインビジュアルの上位層に配置

### 重要な実装ポイント
1. レイヤー構造
```jsx
<div className="main-visual-container">  // メインビジュアル（下層）
  <Navbar />
  <div className="main-visual">
    <div className="caption">  // イントロテキスト
      <IntroText />
    </div>
    <video />  // 背景動画
  </div>
</div>
<div className="sub-visual">  // サブビジュアル（上層）
  <AboutUs1 />
  // ... その他のコンポーネント
</div>
```

2. スクロール制御
- メインビジュアル：`overflow: hidden`で固定
- 動画：`position: fixed`で画面に固定
- サブビジュアル：独立したスクロール領域として実装

3. スタイリング
```css
.main-visual-container {
  position: relative;
  z-index: 1;
  height: 100vh;
  overflow: hidden;
}

.main-visual-video {
  position: fixed;
  width: 100%;
  height: 100vh;
  object-fit: cover;
}

.sub-visual {
  position: relative;
  z-index: 2;
  background: #0C0C0C;
}
```

### 実装ファイル
- メイン実装：`src/pages/whdc/index.jsx`
- スタイル定義：`src/styles/main.css`

## GROUP COMPANIES セクション

グループ企業を紹介するインタラクティブなネットワーク図を実装。

### 主な機能
- vis.jsを使用したインタラクティブなネットワーク図
- 各企業のロゴを配置し、クリックで各企業のウェブサイトへ遷移
- 物理演算による自然な動きのアニメーション

### 実装詳細
1. ノードの設定
   - 各企業のロゴを画像ノードとして表示
   - サイズ統一（120x70px）
   - クリッカブルなロゴ（URLリンク付き）

2. エッジ（接続線）の設定
   - 半透明の緑色（rgba(0, 255, 128, 0.5)）
   - ホバー時に鮮やかな緑色（#00ff80）にハイライト
   - アニメーションする伸縮効果（220px〜280px）

3. レイアウトと動き
   - 物理演算による自然な浮遊感
   - バネモデルによる接続
   - ドラッグ可能なノード
   - 画面サイズ: 800px高

4. 物理演算パラメータ
   - gravitationalConstant: -1500
   - centralGravity: 0.2
   - springLength: 250
   - damping: 0.12
   - minVelocity: 0.3
   - maxVelocity: 1.5

### 対応企業
- WHDC（中心）
- Acrodea
- Interplan
- Media Incuvate
- Nikuyoko
- Sunrise Japan
- UBE
- Dream Planet

# TOP PAGE 実装内容

## メインビジュアル
- 全画面表示のビデオ背景を実装
- 動画ファイル: `/movies/earth.mp4`
- 自動再生、ループ再生、ミュート設定
- opacity: 0.8で透明度調整

## ナビゲーションバー
- スクロール時の挙動を実装
  - スクロール位置が300px以上で`nav-scroll`クラスを付与
  - `useEffect`を使用してスクロールイベントを管理
  - コンポーネントのアンマウント時にイベントリスナーを適切に解除
- モバイルメニューの実装
  - ハンバーガーメニューのトグル機能
  - レスポンシブ対応

## レイアウト構造
1. メインビジュアルコンテナ
   - 100vhの高さで全画面表示
   - 相対位置指定でコンテンツを配置
   - オーバーフロー制御

2. キャプション
   - 中央配置（上下左右中央）
   - z-indexで動画より前面に配置

3. サブビジュアルセクション
   - 相対位置指定
   - z-index: 2で前面に配置
   - 背景色: #0C0C0C（ダークテーマ）

## コンポーネント構成
以下のコンポーネントを順番に配置：
1. Topics
2. GroupCompanies
3. Services1
4. Numbers1
5. Works1Slider
6. SkillsCircle（ダークテーマ）
7. Clients1（ダークテーマ）
8. BlogsTwoColumnSlider
9. CallToAction
10. Footer

## アニメーション実装
- Splittingライブラリを使用したテキストアニメーション
  - 文字ごとのアニメーション制御
  - カスタム属性による遅延設定
- テキストアニメーション
  - 文字を個別のspanに分割
  - アニメーション遅延を文字ごとに設定
  - CSSアニメーションとの連携

## その他の機能
- スライダーの高さに応じたメインコンテンツの位置調整
- レスポンシブデザイン対応
- パフォーマンス最適化（setIntervalによる定期的な高さ調整）

## 使用ライブラリ
- Splitting.js: テキストアニメーション用
- React Hooks: useEffect, useRefの活用