# @trapar-waves/react-mantine-tailwind

![npm version](https://img.shields.io/npm/v/@trapar-waves/react-mantine-tailwind)
![npm dm](https://img.shields.io/npm/dm/@trapar-waves/react-mantine-tailwind)
![License](https://img.shields.io/github/license/Trapar-waves/react-mantine-tailwind)
![GitHub last commit](https://img.shields.io/github/last-commit/Trapar-waves/react-mantine-tailwind)
![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/Trapar-waves/react-mantine-tailwind/release.yml)
![Renovate](https://img.shields.io/badge/renovate-enabled-blue)

---

[English](../README.md) | [中文](./README-CN.md) | [Русский язык](./README-RU.md)

> React、Mantine UI、Tailwind CSS を統合したモダンな Web 開発テンプレート。Rsbuild、TypeScript、ESLint（Antfu 設定）、Iconify サポート付き。

![react-mantine-tailwind hero](../assets/readme/hero.svg)

![Features](../assets/readme/headers/features.svg)

- **モダン UI フレームワーク：** React (v19) を使用したコンポーネント駆動の宣言的インターフェース。
- **充実したコンポーネントライブラリ：** Mantine UI（`@mantine/core` と `@mantine/hooks`）を統合し、事前構築された UI 要素とユーティリティフックを提供。
- **ユーティリティファーストのスタイリング：** Tailwind CSS と `@tailwindcss/postcss` を採用し、柔軟で迅速なスタイリングを実現しながら一貫性を維持。
- **PostCSS 統合：** `postcss-import`、`autoprefixer`、`postcss-simple-vars` などの PostCSS プラグインを活用し、高度な CSS 処理を実現。
- **型安全性：** TypeScript (v5.9.x) を活用し、コードの信頼性を向上させ、開発中に堅牢な型チェックを提供。
- **高速開発ワークフロー：** Rsbuild（`@rsbuild/core` と `@rsbuild/plugin-react`）を使用し、最適化されたビルドと効率的な開発サーバー性能を実現。
- **アイコンサポート：** `@iconify/json` と `@iconify/tailwind` を含み、スケーラブルでカスタマイズ可能なアイコンを提供。
- **一貫したデザイン言語：** `postcss-preset-mantine` と `tailwind-preset-mantine` を組み合わせ、Mantine と Tailwind スタイルのシームレスな統合を実現。
- **コード品質への注力：** ESLint と `@antfu/eslint-config` を含み、コードベースのリンティングとベストプラクティスの適用を実現。
- **Git Hooks：** Husky と `lint-staged` を統合し、コミット時の自動コード品質チェックを実行。
- **自動リリース：** GitHub Actions を使用して自動リリースと変更履歴の生成を実現。

![Tech Stack](../assets/readme/headers/tech-stack.svg)

- **フレームワーク/ライブラリ：** React (v19)
- **UI ツールキット/スタイリング：** Mantine UI（`@mantine/core`）、Tailwind CSS（`tailwindcss`）
- **ビルドツール：** Rsbuild（`@rsbuild/core`）
- **言語：** TypeScript (v5.9.x)
- **CSS 処理：** PostCSS と `autoprefixer`、`postcss-simple-vars` などのプラグイン
- **リンティング：** ESLint と `@antfu/eslint-config`
- **状態管理：** Zustand
- **ルーティング：** Tanstack Router
- **データフェッチング：** Tanstack Query (React Query)
- **テーブルコンポーネント：** Tanstack Table

依存関係の完全なリストは [package.json](../package.json) を参照してください。

![Getting Started](../assets/readme/headers/getting-started.svg)

### 前提条件

- Node.js（>= 18.x 推奨）
- パッケージマネージャー（npm、yarn、または pnpm）

### インストール

1. テンプレートを使用して新しいプロジェクトを作成：

   ```bash
   pnpm create trapar-waves
   ```

2. プロジェクトディレクトリに移動し、依存関係をインストール：

   ```bash
   pnpm install
   ```

3. 開発サーバーを起動：

   ```bash
   pnpm dev
   ```

![Project Structure](../assets/readme/headers/project-structure.svg)

```
├── public/            # 静的アセット
├── src/               # ソースコード
│   ├── app.tsx        # メインアプリケーションコンポーネント
│   ├── globals.css    # グローバルスタイルと Tailwind インポート
│   ├── index.tsx      # エントリーポイント
│   ├── iconify.ts     # Iconify 設定
│   └── env.d.ts       # 環境型宣言
├── rsbuild.config.ts  # Rsbuild 設定
├── tsconfig.json      # TypeScript 設定
├── eslint.config.js   # ESLint 設定
└── package.json       # プロジェクトの依存関係とスクリプト
```

![Contributing](../assets/readme/headers/contributing.svg)

コントリビュートを歓迎します！以下の手順に従ってコントリビュートしてください：

1. リポジトリをフォーク
2. 機能ブランチを作成（`git checkout -b feature/amazing-feature`）
3. 変更をコミット（`git commit -m 'Add some amazing feature'`）
4. ブランチにプッシュ（`git push origin feature/amazing-feature`）
5. Pull Request を作成

![License](../assets/readme/headers/license.svg)

MIT License © 2025 Trapar Waves

## 👤 作者

- **Rikka：** [admin@rikka.cc](mailto:admin@rikka.cc)
- **GitHub プロフィール：** [Muromi-Rikka](https://github.com/Muromi-Rikka)

## 🔗 リンク

- **リポジトリ：** [https://github.com/Trapar-waves/react-mantine-tailwind](https://github.com/Trapar-waves/react-mantine-tailwind)
- **Issues：** [https://github.com/Trapar-waves/react-mantine-tailwind/issues](https://github.com/Trapar-waves/react-mantine-tailwind/issues)
