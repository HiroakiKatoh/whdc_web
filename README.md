# whdc-web

## 更新履歴

### IRメニューの追加 (2024/03/XX)

#### 変更内容
- ナビゲーションバーにIRドロップダウンメニューを追加
- IR MainとIR Newsへの外部リンクを実装

#### 修正したファイル
1. `C:\Users\hirok\Desktop\git\whdc-web\src\components\Navbar\index.jsx`
   - portfolioとcontactの間にIRドロップダウンメニューを追加
   - 外部リンク先:
     - IR Main: https://www.twhdc.co.jp/ir/
     - IR News: https://www.twhdc.co.jp/ir/news/index.html

#### 削除したファイル
1. `C:\Users\hirok\Desktop\git\whdc-web\components\Navbar\index.jsx`
   - 未使用のNavbarコンポーネントを削除
2. `C:\Users\hirok\Desktop\git\whdc-web\components\Navbar\NavbarFullMenu\index.jsx`
   - 未使用のNavbarFullMenuコンポーネントを削除

#### 技術的な詳細
- Bootstrapのドロップダウンメニューコンポーネントを使用
- 外部リンクには`target="_blank"`と`rel="noopener noreferrer"`を設定
- 既存の`handleDropdown`関数を活用してドロップダウン機能を実装

### Contactリンクの変更 (2024/03/XX)

#### 変更内容
- Contactリンクを外部リンクに変更

#### 修正したファイル
1. `C:\Users\hirok\Desktop\git\whdc-web\src\components\Navbar\index.jsx`
   - Contactリンクを内部リンク（`/contact/contact-dark`）から外部リンク（`https://www.twhdc.co.jp/inquiry/`）に変更
   - 外部リンクには`target="_blank"`と`rel="noopener noreferrer"`を設定

### Portfolioメニューの整理 (2024/03/XX)

#### 変更内容
- Portfolioドロップダウンメニューのリンクを2つに整理

#### 修正したファイル
1. `C:\Users\hirok\Desktop\git\whdc-web\src\components\Navbar\index.jsx`
   - 以下の2つのリンクのみを残し、他を削除
     - Mouse Info (`/works/works-dark`)
     - Pinterest List (`/works4/works4-dark`)
   - "Masonry 3 Columns"と"Masonry 2 Columns"のリンクを削除

### 不要コンテンツの削除 (2024/03/XX)

#### 変更内容
- 未使用ページの削除

#### 削除したファイル/フォルダ
1. `C:\Users\hirok\Desktop\git\whdc-web\src\pages\contact`
   - 外部リンクに変更したContactページを削除
2. `C:\Users\hirok\Desktop\git\whdc-web\src\pages\works2`
   - "Masonry 3 Columns"ページを削除
3. `C:\Users\hirok\Desktop\git\whdc-web\src\pages\works3`
   - "Masonry 2 Columns"ページを削除

#### 技術的な詳細
- 外部リンクに変更したページや、メニューから削除したページの関連ファイルを完全に削除
- 不要なルーティングとコンポーネントを整理

### メニュー名の変更 (2024/03/XX)

#### 変更内容
- "Portfolio"メニューを"Team"に変更
- サブメニュー項目の名称を変更
  - "Mouse Info" → "Management Team"
  - "Pinterest List" → "Governance Team"

#### 修正したファイル
1. `C:\Users\hirok\Desktop\git\whdc-web\src\components\Navbar\index.jsx`
   - メインメニュー"Portfolio"を"Team"に変更
   - ドロップダウンメニューの項目名を更新
     - "Mouse Info"を"Management Team"に変更
     - "Pinterest List"を"Governance Team"に変更

### チームページのリニューアル (2024/03/XX)

#### 変更内容
- Management Teamページ（旧Mouse Info）のリニューアル
  - 画像コンテンツを削除
  - シンプルなレイアウトに変更
  - ヘッダーテキストを更新
  - 背景色は維持
- Governance Teamページ（旧Pinterest List）のリニューアル
  - 画像コンテンツを削除
  - シンプルなレイアウトに変更
  - ヘッダーテキストを更新
  - 背景色は維持

#### 修正したファイル
1. `C:\Users\hirok\Desktop\git\whdc-web\src\pages\works\works-dark.jsx`
   - `WorksStyle1`コンポーネントと関連インポートを削除
   - `addParlx`関連の機能を削除
   - ヘッダーテキストを"Management Team"に変更
   - メインコンテンツを空のコンテナに変更
2. `C:\Users\hirok\Desktop\git\whdc-web\src\pages\works4\works4-dark.jsx`
   - `WorksStyle4`コンポーネントと関連インポートを削除
   - `addParlx`関連の機能を削除
   - ヘッダーテキストを"Governance Team"に変更
   - メインコンテンツを空のコンテナに変更

#### 削除したコンポーネント
- `WorksStyle1`の使用を停止
- `WorksStyle4`の使用を停止
- `addParlx`機能の使用を停止

#### 技術的な詳細
- 画像ギャラリー関連のコードを削除
- レスポンシブデザインのためのBootstrapグリッドシステムを維持
- ナビゲーションとスクロール関連の機能は維持

### ファイル構造の整理 (2024/03/XX)

#### 変更内容
- Management TeamとGovernance Teamページのファイル構造を整理
  - ファイル名とパスをより明確な名称に変更
  - 関連するリンクを更新

#### 修正したファイル
1. ファイル移動
   - 移動元: `C:\Users\hirok\Desktop\git\whdc-web\src\pages\works\works-dark.jsx`
   - 移動先: `C:\Users\hirok\Desktop\git\whdc-web\src\pages\management_team\management_team.jsx`
   - 移動元: `C:\Users\hirok\Desktop\git\whdc-web\src\pages\works4\works4-dark.jsx`
   - 移動先: `C:\Users\hirok\Desktop\git\whdc-web\src\pages\governance_team\governance_team.jsx`

2. リンク更新
   - `C:\Users\hirok\Desktop\git\whdc-web\src\components\Navbar\index.jsx`
     - パスを`/works/works-dark`から`/management_team/management_team`に更新
     - パスを`/works4/works4-dark`から`/governance_team/governance_team`に更新

#### 削除したファイル/フォルダ
- `C:\Users\hirok\Desktop\git\whdc-web\src\pages\works`フォルダを削除
- `C:\Users\hirok\Desktop\git\whdc-web\src\pages\works4`フォルダを削除

#### 技術的な詳細
- Next.jsのルーティングパスを更新
- より明確なファイル構造に整理

### Governance Teamページの背景動画追加 (2024/03/XX)

#### 変更内容
- Governance Teamページにループ再生する背景動画を追加

#### 修正したファイル
1. `C:\Users\hirok\Desktop\git\whdc-web\src\pages\governance_team\governance_team.jsx`
   - ヘッダー部分に背景動画を追加
   - 動画の自動再生、ループ再生、ミュート設定を追加
   - レスポンシブ対応のスタイリングを実装

#### 追加したファイル
1. `C:\Users\hirok\Desktop\git\whdc-web\public\movies\governance_movie.mp4`
   - Governance Teamページの背景動画

#### 技術的な詳細
- HTML5 video要素を使用
- CSS positioningで全画面背景として配置
- パフォーマンスのためにplaysinline属性を追加

### 背景動画のレイアウト調整 (2024/03/XX)

#### 変更内容
- Governance Teamページの背景動画の位置とサイズを調整
  - ナビゲーションバーの幅に合わせてサイズ調整
  - ヘッダーとの重なりを避けるため位置を下方に移動
  - 縦横比を維持したまま縮小表示

#### 修正したファイル
1. `C:\Users\hirok\Desktop\git\whdc-web\src\pages\governance_team\governance_team.jsx`
   - video要素のスタイルを更新
     - width: 70%に設定
     - objectFit: containに変更
     - top位置を60%に調整
     - 最大幅とセンタリングを設定

#### 技術的な詳細
- CSSのposition: absoluteとtransformを使用した中央配置
- objectFit: containで縦横比を維持
- レスポンシブ対応のための相対的なサイズ指定

### 背景テキストの削除 (2024/03/XX)

#### 変更内容
- Management TeamとGovernance Teamページの背景テキスト("team")を削除

#### 修正したファイル
1. `C:\Users\hirok\Desktop\git\whdc-web\src\pages\management_team\management_team.jsx`
   - ヘッダー部分から背景テキストを表示する要素を削除
   - `bactxt`クラスを持つ要素を削除
2. `C:\Users\hirok\Desktop\git\whdc-web\src\pages\governance_team\governance_team.jsx`
   - ヘッダー部分から背景テキストを表示する要素を削除
   - `bactxt`クラスを持つ要素を削除

#### 技術的な詳細
- 装飾的な背景テキストの削除によるデザインのシンプル化
- 両ページで統一したヘッダーデザインを実現

### トップページのアニメーション削除 (2024/03/XX)

#### 変更内容
- トップページの地球動画上のアニメーションを削除
  - パーティクルアニメーションを削除
  - オープニングテキストアニメーションを削除
  - 地球動画のみのシンプルな表示に変更

#### 修正したファイル
1. `C:\Users\hirok\Desktop\git\whdc-web\src\pages\whdc\index.jsx`
   - `VideoWithTestimonials`コンポーネントの削除
   - `ParticlesBackground`コンポーネントの削除
   - `OpeningText`コンポーネントの削除
   - 関連するインポート文を削除

#### 技術的な詳細
- 不要なアニメーションレイヤーを削除
- メインコンテンツ（地球動画）の視認性を向上
- パフォーマンスの改善

### トップページの動画サイズ調整 (2024/03/XX)

#### 変更内容
- トップページの地球動画のサイズを1.2倍に拡大
  - 最大幅を1440pxに変更（1200px * 1.2）
  - 垂直方向の中央配置に変更
  - 中央配置を維持

#### 修正したファイル
1. `C:\Users\hirok\Desktop\git\whdc-web\src\pages\whdc\index.jsx`
   - video要素のスタイルを更新
     - maxWidthを1440pxに変更
     - top位置を50%に変更（完全な中央配置）

#### 技術的な詳細
- 動画の視認性を向上
- アスペクト比は維持
- レスポンシブ対応の維持

### Management Teamページの改善 (2024/03/xx)
1. ヘッダーレイアウトの調整
   - タイトル「Management Team」の上部マージンを200pxに設定
   - タイトルと説明文の間のマージンを60pxに調整
   - 説明文とスクロールインジケーターの配置を最適化

2. スクロールインジケーターの改善
   - 画像サイズを90px × 90pxに設定
   - 表示/非表示のアニメーションを実装
   - スクロール時の動作を改善

3. レスポンシブデザインの維持
   - モバイル表示時のレイアウトを保持
   - 各セクションの余白を適切に調整

### スクロールインジケーターのアニメーション追加 (2024/03/xx)

#### 変更内容
- スクロールインジケーターに点滅アニメーションを追加
  - 1秒間隔で透明度を変化させるアニメーション
  - opacity: 1 → 0.3 → 1 のサイクル
  - ease-in-out効果による滑らかな遷移

#### 修正したファイル
1. `src/styles/management-team.css`
   - スクロールインジケーター画像に`animation: blink`を追加
   - `@keyframes blink`アニメーションを定義
   - アニメーション時間を2秒に設定

#### 技術的な詳細
- CSSアニメーションを使用
- `ease-in-out`タイミング関数で自然な点滅効果を実現
- `infinite`プロパティで継続的なアニメーションを実現

### スクロールインジケーターの画像パス変更 (2024/03/xx)

#### 変更内容
- スクロールインジケーターの画像パスを変更
  - 変更前: `/img/slick/next.png`
  - 変更後: `/img/scroll_indicater.jpg`

#### 修正したファイル
1. `src/pages/management_team/management_team.jsx`
   - スクロールインジケーター画像のsrc属性を更新
   - より適切な画像ファイルを使用するように変更

#### 技術的な詳細
- 新しい画像パスを使用することで、デザインの一貫性を向上
- スクロールインジケーターの視認性を改善