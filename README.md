# @trapar-waves/react-mantine-tailwind

![npm version](https://img.shields.io/npm/v/@trapar-waves/react-mantine-tailwind)
![npm dm](https://img.shields.io/npm/dm/@trapar-waves/react-mantine-tailwind)
![License](https://img.shields.io/badge/license-ISC-green)
![GitHub last commit](https://img.shields.io/github/last-commit/Trapar-waves/react-mantine-tailwind)

[中文](README-CN.md) | [日本語](README-JP.md) | [Русский](README-RU.md)

> A project combining React, Mantine UI, and Tailwind CSS for building modern web applications.

## ✨ Features

* **Modern UI Framework:** Built using React (v19) for a component-driven, declarative interface.
* **Rich Component Library:** Integrates with Mantine UI (`@mantine/core` and `@mantine/hooks`) providing pre-built UI elements and utility hooks.
* **Utility-First Styling:** Employs Tailwind CSS along with `@tailwindcss/postcss`, enabling flexible and rapid styling while maintaining consistency.
* **PostCSS Integration:** Leverages PostCSS plugins like `postcss-import`, `autoprefixer`, and `postcss-simple-vars` for advanced CSS processing.
* **Type Safety:** Utilizes TypeScript (v5.8.x) to enhance code reliability and provide robust type checking during development.
* **Fast Development Workflow:** Uses Rsbuild (`@rsbuild/core` and `@rsbuild/plugin-react`) for optimized builds and efficient development server performance.
* **Icon Support:** Includes `@iconify/json` and `@iconify/tailwind` for scalable and customizable iconography.
* **Consistent Design Language:** Combines `postcss-preset-mantine` and `tailwind-preset-mantine` for seamless integration between Mantine and Tailwind styles.
* **Focus on Code Quality:** Includes ESLint with `@antfu/eslint-config` for linting and enforcing best practices in the codebase.

## 🚀 Getting Started

Follow these instructions to get the project running locally.

### Prerequisites

* Ensure you have the following installed:
    * Node.js (>= 18.x recommended)
    * Package manager (npm, yarn, or pnpm)
    ```bash
    node -v
    npm -v # or yarn -v or pnpm -v
    ```

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/Trapar-waves/react-mantine-tailwind.git
    cd react-mantine-tailwind
    ```
2. Install dependencies:
    ```bash
    # Use your preferred package manager
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

## 🛠️ Usage

### Project Structure

```
├── .github/workflows/release.yml - CI/CD configuration
├── public/ - Static assets
├── src/
│   ├── app.tsx - Main application component
│   ├── index.tsx - Application entry point
│   ├── globals.css - Global styles
│   └── iconify.ts - Icon configuration
├── rsbuild.config.ts - Build configuration
└── tsconfig.json - TypeScript configuration
```

### Available Scripts

Common scripts available via `npm run <script>`, `yarn <script>`, or `pnpm <script>`:

* `dev`: Starts the development server with hot module replacement (HMR).
  ```bash
  npm run dev
  ```
* `build`: Creates a production-ready build of the application.
  ```bash
  npm run build
  ```
* `preview`: Launches a local server to preview the production build.
  ```bash
  npm run preview
  ```
* `lint`: Runs ESLint to check for code quality issues.
  ```bash
  npm run lint
  ```

Example:
```bash
# Start development server
npm run dev

# Create production build
npm run build

# Preview production build
npm run preview
```

## 💻 Tech Stack

Key technologies used in this project include:

* **Framework/Library:** React (v19)
* **UI Toolkit/Styling:** Mantine UI (`@mantine/core`), Tailwind CSS (`tailwindcss`)
* **Build Tool:** Rsbuild (`@rsbuild/core`)
* **Language:** TypeScript (v5.8.x)
* **CSS Processing:** PostCSS with plugins like `autoprefixer` and `postcss-simple-vars`
* **Linting:** ESLint with `@antfu/eslint-config`
* **State Management:** Zustand
* **Routing:** Tanstack Router
* **Data Fetching:** Tanstack Query (React Query)
* **Table Component:** Tanstack Table

* **Framework/Library:** React (v19)
* **UI Toolkit/Styling:** Mantine UI (`@mantine/core`), Tailwind CSS (`tailwindcss`)
* **Build Tool:** Rsbuild (`@rsbuild/core`)
* **Language:** TypeScript (v5.8.x)
* **CSS Processing:** PostCSS with plugins like `autoprefixer` and `postcss-simple-vars`
* **Linting:** ESLint with `@antfu/eslint-config`

See the [package.json](package.json) for a full list of dependencies.

## 🤝 Contributing

Contributions are welcome and greatly appreciated! Please follow these steps to contribute:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

Please make sure to update tests as appropriate and adhere to our [Code of Conduct](CODE_OF_CONDUCT.md).

## 📄 License

Distributed under the **ISC** License. See `LICENSE` file for more information.

## 🐛 Troubleshooting

### Common Issues

* **Dependency problems**: Try removing `node_modules` and reinstalling dependencies
  ```bash
  rm -rf node_modules && npm install
  ```
* **Build errors**: Ensure you're using Node.js v18 or higher
* **Style conflicts**: Check for conflicting Tailwind and Mantine styles in `globals.css`

## 📝 Changelog

See the [CHANGELOG.md](CHANGELOG.md) file for details on version changes.

## 👤 Author

* **Rikka** (admin@rikka.cc)
* **GitHub Profile:** [Muromi-Rikka](https://github.com/Muromi-Rikka)

## 🔗 Links

* **Repository:** [https://github.com/Trapar-waves/react-mantine-tailwind](https://github.com/Trapar-waves/react-mantine-tailwind)
* **Homepage:** [https://github.com/Trapar-waves/react-mantine-tailwind](https://github.com/Trapar-waves/react-mantine-tailwind)
* **Issues:** [Bug Tracker](https://github.com/Trapar-waves/react-mantine-tailwind/issues)
