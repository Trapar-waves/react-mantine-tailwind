# @trapar-waves/react-mantine-tailwind

![npm version](https://img.shields.io/npm/v/@trapar-waves/react-mantine-tailwind)
![npm dm](https://img.shields.io/npm/dm/@trapar-waves/react-mantine-tailwind)
![License](https://img.shields.io/github/license/Trapar-waves/react-mantine-tailwind)
![GitHub last commit](https://img.shields.io/github/last-commit/Trapar-waves/react-mantine-tailwind)
![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/Trapar-waves/react-mantine-tailwind/release.yml)
![Renovate](https://img.shields.io/badge/renovate-enabled-blue)

---

[English](../README.md) | [中文](/readme/README-CN.md) | [Русский язык](/readme/README-RU.md)

> React、Mantine UI、Tailwind CSSを組み合わせた現代的なWebアプリケーション構築用プロジェクトです。

## ✨ 特徴

- **モダンUIフレームワーク:** コンポーネント駆動の宣言型インターフェースのためにReact (v19)を使用して構築されています。
- **充実したコンポーネントライブラリ:** Mantine UI（`@mantine/core`と`@mantine/hooks`）を統合し、事前構築されたUI要素とユーティリティフックを提供します。
- **ユーティリティファーストスタイリング:** Tailwind CSSと`@tailwindcss/postcss`を採用し、一貫性を維持しながら柔軟で迅速なスタイリングを可能にします。
- **PostCSS統合:** `postcss-import`、`autoprefixer`、`postcss-simple-vars`などのPostCSSプラグインを活用し、高度なCSS処理を実現します。
- **型安全性:** TypeScript (v5.8.x)を使用してコードの信頼性を向上させ、開発中の堅牢な型チェックを提供します。
- **高速開発ワークフロー:** Rsbuild（`@rsbuild/core`と`@rsbuild/plugin-react`）を使用して最適化されたビルドと効率的な開発サーバーパフォーマンスを実現します。
- **アイコンサポート:** `@iconify/json`と`@iconify/tailwind`を含み、スケーラブルでカスタマイズ可能なアイコンを提供します。
- **一貫したデザイン言語:** `postcss-preset-mantine`と`tailwind-preset-mantine`を組み合わせて、MantineとTailwindスタイルのシームレスな統合を実現します。
- **コード品質への注力:** ESLintと`@antfu/eslint-config`を含み、コードベースのリンティングとベストプラクティスの適用を実現します。

## 💻 技術スタック

- **フレームワーク/ライブラリ:** React (v19)
- **UIツールキット/スタイリング:** Mantine UI（`@mantine/core`）、Tailwind CSS（`tailwindcss`）
- **ビルドツール:** Rsbuild（`@rsbuild/core`）
- **言語:** TypeScript (v5.8.x)
- **CSS処理:** `autoprefixer`や`postcss-simple-vars`などのプラグインを備えたPostCSS
- **リンティング:** `@antfu/eslint-config`を備えたESLint
- **状態管理:** Zustand
- **ルーティング:** Tanstack Router
- **データフェッチング:** Tanstack Query (React Query)
- **テーブルコンポーネント:** Tanstack Table

依存関係の完全なリストについては[package.json](package.json)を参照してください。

## 🚀 始め方

以下の手順に従ってプロジェクトをローカルで実行してください。

### 前提条件

以下がインストールされていることを確認してください：

- Node.js (推奨バージョン >= 18.x)
- パッケージマネージャー (npm, yarn または pnpm)

```bash
node -v
npm -v
```

### インストール

スクリプトの実行

```bash
pnpm create trapar-waves
```

依存関係のインストール

```bash
npm install
yarn install
pnpm install
```

## 🤝 コントリビューション

貢献は歓迎され、非常に高く評価されています！貢献するには以下の手順に従ってください：

1. リポジトリをフォークする
2. 機能ブランチを作成する（`git checkout -b feature/amazing-feature`）
3. 変更をコミットする（`git commit -m 'Add some amazing feature'`）
4. ブランチにプッシュする（`git push origin feature/amazing-feature`）
5. Pull Requestを開く

## 👤 Author

- **Rikka:** (admin@rikka.cc)
- **GitHub Profile:** [Muromi-Rikka](https://github.com/Muromi-Rikka)

## 🔗 Links

- **リポジトリ:** [https://github.com/Trapar-waves/react-mantine-tailwind](https://github.com/Trapar-waves/react-mantine-tailwind)
- **ホームページ:** [https://github.com/Trapar-waves/react-mantine-tailwind](https://github.com/Trapar-waves/react-mantine-tailwind)
- **イシュー:** [https://github.com/Trapar-waves/react-mantine-tailwind/issues](https://github.com/Trapar-waves/react-mantine-tailwind/issues)
