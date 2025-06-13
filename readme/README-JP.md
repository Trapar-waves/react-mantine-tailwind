# @trapar-waves/react-mantine-tailwind

![npm version](https://img.shields.io/npm/v/@trapar-waves/react-mantine-tailwind)
![npm dm](https://img.shields.io/npm/dm/@trapar-waves/react-mantine-tailwind)
![License](https://img.shields.io/badge/license-ISC-green)
![GitHub last commit](https://img.shields.io/github/last-commit/Trapar-waves/react-mantine-tailwind)

[English](../README.md) | [中文](README-CN.md) | [日本語](README-JP.md) | [Русский](README-RU.md)

> React、Mantine UI、およびTailwind CSSを組み合わせた、モダンなWebアプリケーション構築のためのプロジェクトです。

## ✨ 特徴

* **モダンUIフレームワーク**: React (v19)を使用して構築され、コンポーネント駆動の宣言型インターフェースを提供します。
* **豊富なコンポーネントライブラリ**: Mantine UI (`@mantine/core` および `@mantine/hooks`)と統合し、事前構築されたUI要素とユーティリティフックを提供します。
* **ユーティリティファーストのスタイリング**: Tailwind CSSと`@tailwindcss/postcss`を採用し、柔軟かつ迅速なスタイリングを実現しながら一貫性を維持します。
* **PostCSS統合**: `postcss-import`、`autoprefixer`、`postcss-simple-vars`などのPostCSSプラグインを活用し、高度なCSS処理を実現します。
* **型安全性**: TypeScript (v5.8.x)を使用してコードの信頼性を高め、開発中の堅牢な型チェックを提供します。
* **高速な開発ワークフロー**: Rsbuild (`@rsbuild/core` および `@rsbuild/plugin-react`)を使用し、最適化されたビルドと効率的な開発サーバー性能を実現します。
* **アイコンサポート**: `@iconify/json` および `@iconify/tailwind`を含み、スケーラブルでカスタマイズ可能なアイコンを提供します。
* **一貫したデザイン言語**: `postcss-preset-mantine` および `tailwind-preset-mantine`を組み合わせ、MantineとTailwindのスタイルをシームレスに統合します。
* **コード品質への注力**: ESLintと`@antfu/eslint-config`を含み、コードのリンティングとベストプラクティスの適用を実現します。

## 🚀 始め方

以下の手順に従って、プロジェクトをローカルで実行してください。

### 前提条件

* 以下がインストールされていることを確認してください:
    * Node.js (>= 18.x 推奨)
    * パッケージマネージャ (npm、yarn、またはpnpm)
    ```bash
    node -v
    npm -v # または yarn -v または pnpm -v
    ```

### インストール

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

## 🛠️ 使用方法

### プロジェクト構造

```
├── .github/workflows/release.yml - CI/CD設定
├── public/ - 静的アセット
├── src/
│   ├── app.tsx - メインアプリケーションコンポーネント
│   ├── index.tsx - アプリケーションエントリーポイント
│   ├── globals.css - グローバルスタイル
│   └── iconify.ts - アイコン設定
├── rsbuild.config.ts - ビルド設定
└── tsconfig.json - TypeScript設定
```

### 使用可能なスクリプト

`npm run <script>`、`yarn <script>`、または`pnpm <script>`を介して利用可能な一般的なスクリプト:

* `dev`: ホットモジュールリプレースメント(HMR)を備えた開発サーバーを起動します。
  ```bash
  npm run dev
  ```
* `build`: 本番環境用のアプリケーションビルドを作成します。
  ```bash
  npm run build
  ```
* `preview`: 本番ビルドをプレビューするためのローカルサーバーを起動します。
  ```bash
  npm run preview
  ```
* `lint`: ESLintを実行してコード品質の問題をチェックします。
  ```bash
  npm run lint
  ```

例:
```bash
# 開発サーバーを起動
npm run dev

# 本番ビルドを作成
npm run build

# 本番ビルドをプレビュー
npm run preview
```

## 💻 技術スタック

このプロジェクトで使用されている主な技術:

* **フレームワーク/ライブラリ**: React (v19)
* **UIツールキット/スタイリング**: Mantine UI (`@mantine/core`)、Tailwind CSS (`tailwindcss`)
* **ビルドツール**: Rsbuild (`@rsbuild/core`)
* **言語**: TypeScript (v5.8.x)
* **CSS処理**: `autoprefixer`や`postcss-simple-vars`などのプラグインを備えたPostCSS
* **リンティング**: `@antfu/eslint-config`を使用したESLint
* **状態管理**: Zustand
* **ルーティング**: Tanstack Router
* **データフェッチング**: Tanstack Query (React Query)
* **テーブルコンポーネント**: Tanstack Table

* **フレームワーク/ライブラリ**: React (v19)
* **UIツールキット/スタイリング**: Mantine UI (`@mantine/core`)、Tailwind CSS (`tailwindcss`)
* **ビルドツール**: Rsbuild (`@rsbuild/core`)
* **言語**: TypeScript (v5.8.x)
* **CSS処理**: `autoprefixer`や`postcss-simple-vars`などのプラグインを備えたPostCSS
* **リンティング**: `@antfu/eslint-config`を使用したESLint

依存関係の完全なリストについては[package.json](package.json)を参照してください。

## 🤝 貢献方法

貢献は大歓迎です！以下の手順に従って貢献してください:

1. リポジトリをフォークします
2. フィーチャーブランチを作成します (`git checkout -b feature/amazing-feature`)
3. 変更をコミットします (`git commit -m 'Add some amazing feature'`)
4. ブランチにプッシュします (`git push origin feature/amazing-feature`)
5. Pull Requestを開きます

適切にテストを更新し、[行動規範](CODE_OF_CONDUCT.md)に準拠するようにしてください。

## 📄 ライセンス

**ISC**ライセンスの下で配布されています。詳細については`LICENSE`ファイルを参照してください。

## 🐛 トラブルシューティング

### 一般的な問題

* **依存関係の問題**: `node_modules`を削除して依存関係を再インストールしてみてください
  ```bash
  rm -rf node_modules && npm install
  ```
* **ビルドエラー**: Node.js v18以上を使用していることを確認してください
* **スタイルの競合**: `globals.css`でのTailwindとMantineのスタイルの競合を確認してください

## 📝 変更履歴

バージョン変更の詳細については[CHANGELOG.md](CHANGELOG.md)ファイルを参照してください。

## 👤 作者

* **Rikka** (admin@rikka.cc)
* **GitHubプロフィール**: [Muromi-Rikka](https://github.com/Muromi-Rikka)

## 🔗 リンク

* **リポジトリ**: [https://github.com/Trapar-waves/react-mantine-tailwind](https://github.com/Trapar-waves/react-mantine-tailwind)
* **ホームページ**: [https://github.com/Trapar-waves/react-mantine-tailwind](https://github.com/Trapar-waves/react-mantine-tailwind)
* **イシュー**: [バグトラッカー](https://github.com/Trapar-waves/react-mantine-tailwind/issues)
