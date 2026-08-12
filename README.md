# @trapar-waves/react-mantine-tailwind

![npm version](https://img.shields.io/npm/v/@trapar-waves/react-mantine-tailwind)
![npm dm](https://img.shields.io/npm/dm/@trapar-waves/react-mantine-tailwind)
![License](https://img.shields.io/github/license/Trapar-waves/react-mantine-tailwind)
![GitHub last commit](https://img.shields.io/github/last-commit/Trapar-waves/react-mantine-tailwind)
![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/Trapar-waves/react-mantine-tailwind/release.yml)
![Renovate](https://img.shields.io/badge/renovate-enabled-blue)

---

[中文](./readme/README-CN.md) | [日本語](./readme/README-JP.md) | [Русский язык](./readme/README-RU.md)

> A React template integrating Mantine UI and Tailwind CSS for modern web development, with Rsbuild, TypeScript, ESLint (Antfu config), and Iconify support.

![react-mantine-tailwind hero](assets/readme/hero.svg)

![Features](assets/readme/headers/features.svg)

- **Modern UI Framework:** Built using React (v19) for a component-driven, declarative interface.
- **Rich Component Library:** Integrates with Mantine UI (`@mantine/core` and `@mantine/hooks`) providing pre-built UI elements and utility hooks.
- **Utility-First Styling:** Employs Tailwind CSS along with `@tailwindcss/postcss`, enabling flexible and rapid styling while maintaining consistency.
- **PostCSS Integration:** Leverages PostCSS plugins like `postcss-import`, `autoprefixer`, and `postcss-simple-vars` for advanced CSS processing.
- **Type Safety:** Utilizes TypeScript (v5.9.x) to enhance code reliability and provide robust type checking during development.
- **Fast Development Workflow:** Uses Rsbuild (`@rsbuild/core` and `@rsbuild/plugin-react`) for optimized builds and efficient development server performance.
- **Icon Support:** Includes `@iconify/json` and `@iconify/tailwind` for scalable and customizable iconography.
- **Consistent Design Language:** Combines `postcss-preset-mantine` and `tailwind-preset-mantine` for seamless integration between Mantine and Tailwind styles.
- **Focus on Code Quality:** Includes ESLint with `@antfu/eslint-config` for linting and enforcing best practices in the codebase.
- **Git Hooks:** Integrated with Husky and `lint-staged` for automated code quality checks on commit.
- **Automated Releases:** Utilizes GitHub Actions for automated releases and changelog generation.

![Tech Stack](assets/readme/headers/tech-stack.svg)

- **Framework/Library:** React (v19)
- **UI Toolkit/Styling:** Mantine UI (`@mantine/core`), Tailwind CSS (`tailwindcss`)
- **Build Tool:** Rsbuild (`@rsbuild/core`)
- **Language:** TypeScript (v5.9.x)
- **CSS Processing:** PostCSS with plugins like `autoprefixer` and `postcss-simple-vars`
- **Linting:** ESLint with `@antfu/eslint-config`
- **State Management:** Zustand
- **Routing:** Tanstack Router
- **Data Fetching:** Tanstack Query (React Query)
- **Table Component:** Tanstack Table

See the [package.json](./package.json) for a full list of dependencies.

![Getting Started](assets/readme/headers/getting-started.svg)

### Prerequisites

- Node.js (>= 18.x recommended)
- Package manager (npm, yarn, or pnpm)

### Installation

1. Create a new project using the template:

   ```bash
   pnpm create trapar-waves
   ```

2. Navigate to your project directory and install dependencies:

   ```bash
   pnpm install
   ```

3. Start the development server:

   ```bash
   pnpm dev
   ```

![Project Structure](assets/readme/headers/project-structure.svg)

```
├── public/            # Static assets
├── src/               # Source code
│   ├── app.tsx        # Main application component
│   ├── globals.css    # Global styles and Tailwind imports
│   ├── index.tsx      # Entry point
│   ├── iconify.ts     # Iconify configuration
│   └── env.d.ts       # Environment type declarations
├── rsbuild.config.ts  # Rsbuild configuration
├── tsconfig.json      # TypeScript configuration
├── eslint.config.js   # ESLint configuration
└── package.json       # Project dependencies and scripts
```

![Contributing](assets/readme/headers/contributing.svg)

Contributions are welcome and greatly appreciated! Please follow these steps to contribute:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

![License](assets/readme/headers/license.svg)

MIT License © 2025 Trapar Waves

## 👤 Author

- **Rikka:** [admin@rikka.cc](mailto:admin@rikka.cc)
- **GitHub Profile:** [Muromi-Rikka](https://github.com/Muromi-Rikka)

## 🔗 Links

- **Repository:** [https://github.com/Trapar-waves/react-mantine-tailwind](https://github.com/Trapar-waves/react-mantine-tailwind)
- **Issues:** [https://github.com/Trapar-waves/react-mantine-tailwind/issues](https://github.com/Trapar-waves/react-mantine-tailwind/issues)
