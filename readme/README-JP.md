# @trapar-waves/react-mantine-tailwind

![npm version](https://img.shields.io/npm/v/@trapar-waves/react-mantine-tailwind)
![npm ダウンロード数（月間）](https://img.shields.io/npm/dm/@trapar-waves/react-mantine-tailwind)
![ライセンス](https://img.shields.io/badge/license-ISC-green)
![GitHub 最終コミット](https://img.shields.io/github/last-commit/Trapar-waves/react-mantine-tailwind)

> React、Mantine UI、および Tailwind CSS を統合した、モダンなウェブアプリケーションを構築するためのプロジェクトです。

## ✨ 主な特徴

* **モダンなUIフレームワーク:** React (v19) を使用し、コンポーネント駆動型で宣言的なインターフェースを提供します。
* **豊富なUIコンポーネントライブラリ:** Mantine UI (`@mantine/core` および `@mantine/hooks`) と統合されており、事前に構築されたUI要素や便利なフックが利用可能です。
* **ユーティリティファーストのスタイリング:** Tailwind CSS と `@tailwindcss/postcss` を組み合わせることで、柔軟かつ迅速なスタイリングを実現しつつ一貫性を保ちます。
* **PostCSS 統合:** `postcss-import`、`autoprefixer`、`postcss-simple-vars` などの PostCSS プラグインを活用して、高度な CSS 処理をサポートします。
* **型安全性:** TypeScript (v5.8.x) を導入することで、開発時の信頼性を高め、堅牢な型チェックを提供します。
* **高速な開発ワークフロー:** Rsbuild (`@rsbuild/core` および `@rsbuild/plugin-react`) を採用し、最適化されたビルド処理と効率的な開発サーバーのパフォーマンスを実現します。
* **アイコンサポート:** `@iconify/json` および `@iconify/tailwind` を用いることで、スケーラブルかつカスタマイズ可能なアイコンを提供します。
* **一貫したデザイン言語:** Mantine と Tailwind のデザインをシームレスに統合するため、`postcss-preset-mantine` および `tailwind-preset-mantine` を活用します。
* **コード品質の向上:** ESLint および `@antfu/eslint-config` を用いて、コードベース内でベストプラクティスを適用します。

## 🚀 開始方法

以下の手順に従って、プロジェクトをローカル環境で実行してください。

### 必要条件

以下のソフトウェアがインストールされていることを確認してください:
* Node.js (>= 18.x 推奨)
* パッケージマネージャ (npm、yarn、または pnpm)
    ```bash
    node -v
    npm -v # または yarn -v、または pnpm -v
    ```

### インストール手順

1. リポジトリをクローンします:
    ```bash
    git clone https://github.com/Trapar-waves/react-mantine-tailwind.git
    cd react-mantine-tailwind
    ```
2. 依存関係をインストールします:
    ```bash
    # お好みのパッケージマネージャを使用してください
    npm install
    # または
    yarn install
    # または
    pnpm install
    ```

## 🛠️ 利用可能なコマンド

`npm run <コマンド>`、`yarn <コマンド>`、または `pnpm <コマンド>` を使用して以下のコマンドを実行できます:

* `dev`: ホットモジュール置換 (HMR: ホットモジュール置換) 付きの開発サーバーを起動します。
* `build`: 本番環境向けのビルドを作成します。
* `preview`: 本番環境向けビルドをプレビューするためのローカルサーバーを起動します。

例:
```bash
# 開発サーバーを起動
npm run dev 

# 本番環境向けビルドを作成
npm run build 

# 本番環境向けビルドをプレビュー
npm run preview
```

## 💻 技術スタック

本プロジェクトで使用されている主要な技術は以下の通りです:

* **フレームワーク/ライブラリ:** React (v19)
* **UIツールキット/スタイリング:** Mantine UI (`@mantine/core`)、Tailwind CSS (`tailwindcss`)
* **ビルドツール:** Rsbuild (`@rsbuild/core`)
* **プログラミング言語:** TypeScript (v5.8.x)
* **CSS処理:** `autoprefixer` や `postcss-simple-vars` などのプラグインを含む PostCSS
* **リント:** `@antfu/eslint-config` を使用した ESLint

依存関係の詳細は [package.json](package.json) をご参照ください。

## 🤝 貢献について

貢献を歓迎いたします。詳細はリポジトリをご覧ください。

## 📄 ライセンス

本プロジェクトは **ISC** ライセンスに基づいて配布されています。詳細は `LICENSE` ファイルをご覧ください。

## 👤 作者

* **リッカ** (admin@rikka.cc)
* **GitHub プロフィール:** [Muromi-Rikka](https://github.com/Muromi-Rikka)

## 🔗 リンク

* **リポジトリおよびホームページ:** [https://github.com/Trapar-waves/react-mantine-tailwind](https://github.com/Trapar-waves/react-mantine-tailwind)
* **問題報告:** [バグトラッカー](https://github.com/Trapar-waves/react-mantine-tailwind/issues)
