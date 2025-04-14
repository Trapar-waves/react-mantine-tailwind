# @trapar-waves/react-mantine-tailwind

![npm版本号](https://img.shields.io/npm/v/@trapar-waves/react-mantine-tailwind)
![npm月下载量](https://img.shields.io/npm/dm/@trapar-waves/react-mantine-tailwind)
![许可](https://img.shields.io/badge/license-ISC-green)
![GitHub最后提交](https://img.shields.io/github/last-commit/Trapar-waves/react-mantine-tailwind)

> 一个结合 React、Mantine UI 和 Tailwind CSS 的现代化网络应用开发项目。

## ✨ 项目特性

* **现代化的 UI 框架**：基于 React（v19）构建，支持组件驱动和声明式界面。
* **丰富的组件库**：集成 Mantine UI（`@mantine/core` 和 `@mantine/hooks`），提供预构建的 UI 组件和实用钩子。
* **实用优先的样式设计**：采用 Tailwind CSS 及 `@tailwindcss/postcss`，支持灵活高效的设计，同时确保风格一致性。
* **PostCSS 集成**：通过 `postcss-import`、`autoprefixer` 和 `postcss-simple-vars` 等插件，实现自动前缀添加、CSS 变量支持等高级功能。
* **类型安全**：使用 TypeScript（v5.8.x）提升代码可靠性，并在开发中提供强大的类型检查。
* **高效的开发流程**：通过 Rsbuild（`@rsbuild/core` 和 `@rsbuild/plugin-react`）优化构建流程，提升开发服务器性能。
* **强大的图标支持**：集成 `@iconify/json` 和 `@iconify/tailwind`，提供可缩放且高度自定义的图标解决方案。
* **一致的设计语言**：结合 `postcss-preset-mantine` 和 `tailwind-preset-mantine`，实现 Mantine 和 Tailwind 样式的深度整合，确保设计统一性。
* **代码质量保障**：通过 ESLint 和 `@antfu/eslint-config` 进行代码检查，确保代码库遵循最佳实践。

## 🚀 快速开始

按照以下步骤在本地运行项目。

### 前置条件

* 确保已安装以下工具：
  * Node.js（建议版本 >= 18.x）
  * 包管理工具（npm、yarn 或 pnpm）
  ```bash
  node -v
  npm -v # 或 yarn -v 或 pnpm -v
  ```

### 安装步骤

1. 克隆代码库：
    ```bash
    git clone https://github.com/Trapar-waves/react-mantine-tailwind.git
    cd react-mantine-tailwind
    ```
2. 安装依赖：
    ```bash
    # 使用你偏好的包管理工具
    npm install
    # 或
    yarn install
    # 或
    pnpm install
    ```

## 🛠️ 使用指南

### 常用脚本

通过 `npm run <script>`、`yarn <script>` 或 `pnpm <script>` 执行以下命令：

* `dev`：启动开发服务器，支持热模块替换（HMR），便于实时开发。
* `build`：生成生产环境的优化版本。
* `preview`：启动本地服务器，用于预览生产环境版本。

示例：
```bash
# 启动开发服务器
npm run dev 

# 生成生产版本
npm run build 

# 预览生产环境
npm run preview
```

> **提示**：`npm run dev` 适用于开发阶段，支持实时更新；`npm run preview` 用于模拟生产环境的运行效果。

## 💻 技术栈

本项目使用的核心技术包括：

* **框架/库**：React（v19）
* **UI 工具包/样式**：Mantine UI（`@mantine/core`）、Tailwind CSS（`tailwindcss`）
* **构建工具**：Rsbuild（`@rsbuild/core`）
* **语言**：TypeScript（v5.8.x）
* **CSS 处理**：PostCSS 及插件（如 `autoprefixer` 和 `postcss-simple-vars`）
* **代码检查**：ESLint 与 `@antfu/eslint-config`

完整的依赖列表详见 [package.json](package.json)。

## 🤝 如何贡献

欢迎提交贡献！如果您有任何改进建议或发现问题，请随时提交 Pull Request 或 Issue。

## 📄 许可协议

本项目遵循 **ISC** 许可协议。更多详情请参阅 `LICENSE` 文件。

## 👤 作者

* **Rikka**（admin@rikka.cc）
* **GitHub 主页**：[Muromi-Rikka](https://github.com/Muromi-Rikka)

## 🔗 相关链接

* **代码仓库**：[https://github.com/Trapar-waves/react-mantine-tailwind](https://github.com/Trapar-waves/react-mantine-tailwind)
* **主页**：[https://github.com/Trapar-waves/react-mantine-tailwind](https://github.com/Trapar-waves/react-mantine-tailwind)
* **问题追踪**：[Bug 跟踪](https://github.com/Trapar-waves/react-mantine-tailwind/issues)
