# @trapar-waves/react-mantine-tailwind

![npm version](https://img.shields.io/npm/v/@trapar-waves/react-mantine-tailwind)
![npm dm](https://img.shields.io/npm/dm/@trapar-waves/react-mantine-tailwind)
![License](https://img.shields.io/badge/license-ISC-green)
![GitHub last commit](https://img.shields.io/github/last-commit/Trapar-waves/react-mantine-tailwind)

[English](../README.md) | [中文](README-CN.md) | [日本語](README-JP.md) | [Русский](README-RU.md)

> 一个结合React、Mantine UI和Tailwind CSS的现代化Web应用开发项目。

## ✨ 特性

* **现代化UI框架**：使用React (v19)构建，支持组件驱动的声明式界面。
* **丰富的组件库**：集成Mantine UI (`@mantine/core` 和 `@mantine/hooks`)，提供预构建的UI元素和实用钩子。
* **实用优先的样式**：采用Tailwind CSS和`@tailwindcss/postcss`，实现灵活快速的样式开发，同时保持一致性。
* **PostCSS集成**：利用PostCSS插件如`postcss-import`、`autoprefixer`和`postcss-simple-vars`进行高级CSS处理。
* **类型安全**：使用TypeScript (v5.8.x)增强代码可靠性，提供强大的开发时类型检查。
* **快速开发工作流**：使用Rsbuild (`@rsbuild/core` 和 `@rsbuild/plugin-react`)实现优化构建和高效开发服务器性能。
* **图标支持**：包含`@iconify/json`和`@iconify/tailwind`，提供可缩放和可定制的图标解决方案。
* **一致的设计语言**：结合`postcss-preset-mantine`和`tailwind-preset-mantine`，实现Mantine和Tailwind样式的无缝集成。
* **注重代码质量**：集成ESLint和`@antfu/eslint-config`进行代码检查和最佳实践执行。

## 🚀 快速开始

按照以下说明在本地运行项目。

### 前置条件

* 确保已安装以下工具：
    * Node.js (推荐 >= 18.x)
    * 包管理器 (npm, yarn 或 pnpm)
    ```bash
    node -v
    npm -v # 或 yarn -v 或 pnpm -v
    ```

### 安装步骤

1. 克隆仓库：
    ```bash
    git clone https://github.com/Trapar-waves/react-mantine-tailwind.git
    cd react-mantine-tailwind
    ```
2. 安装依赖：
    ```bash
    # 使用您偏好的包管理器
    npm install
    # 或
    yarn install
    # 或
    pnpm install
    ```

## 🛠️ 使用指南

### 项目结构

```
├── .github/workflows/release.yml - CI/CD配置
├── public/ - 静态资源
├── src/
│   ├── app.tsx - 主应用组件
│   ├── index.tsx - 应用入口点
│   ├── globals.css - 全局样式
│   └── iconify.ts - 图标配置
├── rsbuild.config.ts - 构建配置
└── tsconfig.json - TypeScript配置
```

### 可用脚本

通过`npm run <script>`、`yarn <script>`或`pnpm <script>`执行以下常用脚本：

* `dev`：启动开发服务器，支持热模块替换(HMR)。
  ```bash
  npm run dev
  ```
* `build`：创建生产环境就绪的应用构建。
  ```bash
  npm run build
  ```
* `preview`：启动本地服务器预览生产构建。
  ```bash
  npm run preview
  ```
* `lint`：运行ESLint检查代码质量问题。
  ```bash
  npm run lint
  ```

示例：
```bash
# 启动开发服务器
npm run dev

# 创建生产构建
npm run build

# 预览生产构建
npm run preview
```

## 💻 技术栈

项目使用的关键技术包括：

* **框架/库**：React (v19)
* **UI工具包/样式**：Mantine UI (`@mantine/core`)、Tailwind CSS (`tailwindcss`)
* **构建工具**：Rsbuild (`@rsbuild/core`)
* **语言**：TypeScript (v5.8.x)
* **CSS处理**：PostCSS及插件如`autoprefixer`和`postcss-simple-vars`
* **代码检查**：ESLint与`@antfu/eslint-config`
* **状态管理**：Zustand
* **路由**：Tanstack Router
* **数据获取**：Tanstack Query (React Query)
* **表格组件**：Tanstack Table

* **框架/库**：React (v19)
* **UI工具包/样式**：Mantine UI (`@mantine/core`)、Tailwind CSS (`tailwindcss`)
* **构建工具**：Rsbuild (`@rsbuild/core`)
* **语言**：TypeScript (v5.8.x)
* **CSS处理**：PostCSS及插件如`autoprefixer`和`postcss-simple-vars`
* **代码检查**：ESLint与`@antfu/eslint-config`

完整依赖列表参见[package.json](package.json)。

## 🤝 贡献指南

欢迎并非常感谢您的贡献！请按照以下步骤进行贡献：

1. Fork本仓库
2. 创建特性分支 (`git checkout -b feature/amazing-feature`)
3. 提交更改 (`git commit -m 'Add some amazing feature'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 打开Pull Request

请确保适当更新测试，并遵守我们的[行为准则](CODE_OF_CONDUCT.md)。

## 📄 许可证

根据**ISC**许可证分发。详见`LICENSE`文件。

## 🐛 故障排除

### 常见问题

* **依赖问题**：尝试删除`node_modules`并重新安装依赖
  ```bash
  rm -rf node_modules && npm install
  ```
* **构建错误**：确保使用Node.js v18或更高版本
* **样式冲突**：检查`globals.css`中Tailwind和Mantine样式的冲突

## 📝 更新日志

详见[CHANGELOG.md](CHANGELOG.md)文件了解版本变更详情。

## 👤 作者

* **Rikka** (admin@rikka.cc)
* **GitHub个人资料**：[Muromi-Rikka](https://github.com/Muromi-Rikka)

## 🔗 链接

* **仓库**：[https://github.com/Trapar-waves/react-mantine-tailwind](https://github.com/Trapar-waves/react-mantine-tailwind)
* **主页**：[https://github.com/Trapar-waves/react-mantine-tailwind](https://github.com/Trapar-waves/react-mantine-tailwind)
* **问题**：[Bug跟踪](https://github.com/Trapar-waves/react-mantine-tailwind/issues)
