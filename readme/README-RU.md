# @trapar-waves/react-mantine-tailwind

![npm version](https://img.shields.io/npm/v/@trapar-waves/react-mantine-tailwind)
![npm dm](https://img.shields.io/npm/dm/@trapar-waves/react-mantine-tailwind)
![License](https://img.shields.io/github/license/Trapar-waves/react-mantine-tailwind)
![GitHub last commit](https://img.shields.io/github/last-commit/Trapar-waves/react-mantine-tailwind)
![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/Trapar-waves/react-mantine-tailwind/release.yml)
![Renovate](https://img.shields.io/badge/renovate-enabled-blue)

---

[English](../README.md) | [中文](./README-CN.md) | [日本語](./README-JP.md)

> Шаблон React, интегрирующий Mantine UI и Tailwind CSS для современной веб-разработки, с поддержкой Rsbuild, TypeScript, ESLint (конфигурация Antfu) и Iconify.

![react-mantine-tailwind hero](../assets/readme/hero.svg)

![Features](../assets/readme/headers/features.svg)

- **Современный UI фреймворк:** Построен на React (v19) для компонентно-ориентированного декларативного интерфейса.
- **Богатая библиотека компонентов:** Интегрируется с Mantine UI (`@mantine/core` и `@mantine/hooks`), предоставляя предварительно созданные элементы интерфейса и утилитарные хуки.
- **Утилитарный подход к стилям:** Использует Tailwind CSS вместе с `@tailwindcss/postcss`, обеспечивая гибкую и быструю стилизацию с сохранением согласованности.
- **Интеграция с PostCSS:** Использует плагины PostCSS, такие как `postcss-import`, `autoprefixer` и `postcss-simple-vars`, для расширенной обработки CSS.
- **Типобезопасность:** Использует TypeScript (v5.9.x) для повышения надежности кода и обеспечения строгой проверки типов во время разработки.
- **Быстрый рабочий процесс разработки:** Использует Rsbuild (`@rsbuild/core` и `@rsbuild/plugin-react`) для оптимизированных сборок и эффективной работы сервера разработки.
- **Поддержка иконок:** Включает `@iconify/json` и `@iconify/tailwind` для масштабируемых и настраиваемых иконок.
- **Согласованный дизайн:** Комбинирует `postcss-preset-mantine` и `tailwind-preset-mantine` для бесперебойной интеграции стилей Mantine и Tailwind.
- **Фокус на качестве кода:** Включает ESLint с `@antfu/eslint-config` для линтинга и применения лучших практик.
- **Git Hooks:** Интегрированы Husky и `lint-staged` для автоматических проверок качества кода при коммите.
- **Автоматические релизы:** Использует GitHub Actions для автоматических релизов и генерации журналов изменений.

![Tech Stack](../assets/readme/headers/tech-stack.svg)

- **Фреймворк/библиотека:** React (v19)
- **UI тулкит/стилизация:** Mantine UI (`@mantine/core`), Tailwind CSS (`tailwindcss`)
- **Инструмент сборки:** Rsbuild (`@rsbuild/core`)
- **Язык:** TypeScript (v5.9.x)
- **Обработка CSS:** PostCSS с плагинами `autoprefixer` и `postcss-simple-vars`
- **Линтинг:** ESLint с `@antfu/eslint-config`
- **Управление состоянием:** Zustand
- **Маршрутизация:** Tanstack Router
- **Получение данных:** Tanstack Query (React Query)
- **Табличный компонент:** Tanstack Table

Полный список зависимостей смотрите в [package.json](../package.json).

![Getting Started](../assets/readme/headers/getting-started.svg)

## Предварительные требования

- Node.js (рекомендуется >= 18.x)
- Менеджер пакетов (npm, yarn или pnpm)

### Установка

1. Создайте новый проект с помощью шаблона:

   ```bash
   pnpm create trapar-waves
   ```

2. Перейдите в директорию проекта и установите зависимости:

   ```bash
   pnpm install
   ```

3. Запустите сервер разработки:

   ```bash
   pnpm dev
   ```

![Project Structure](../assets/readme/headers/project-structure.svg)

```
├── public/            # Статические ресурсы
├── src/               # Исходный код
│   ├── app.tsx        # Основной компонент приложения
│   ├── globals.css    # Глобальные стили и импорты Tailwind
│   ├── index.tsx      # Точка входа
│   ├── iconify.ts     # Конфигурация Iconify
│   └── env.d.ts       # Объявления типов окружения
├── rsbuild.config.ts  # Конфигурация Rsbuild
├── tsconfig.json      # Конфигурация TypeScript
├── eslint.config.js   # Конфигурация ESLint
└── package.json       # Зависимости и скрипты проекта
```

![Contributing](../assets/readme/headers/contributing.svg)

Участие приветствуется и высоко ценится! Пожалуйста, следуйте этим шагам для вклада:

1. Fork репозиторий
2. Создайте ветку для новой функции (`git checkout -b feature/amazing-feature`)
3. Зафиксируйте изменения (`git commit -m 'Add some amazing feature'`)
4. Отправьте изменения в ветку (`git push origin feature/amazing-feature`)
5. Откройте Pull Request

![License](../assets/readme/headers/license.svg)

MIT License © 2025 Trapar Waves

## 👤 Автор

- **Rikka:** [admin@rikka.cc](mailto:admin@rikka.cc)
- **Профиль GitHub:** [Muromi-Rikka](https://github.com/Muromi-Rikka)

## 🔗 Ссылки

- **Репозиторий:** [https://github.com/Trapar-waves/react-mantine-tailwind](https://github.com/Trapar-waves/react-mantine-tailwind)
- **Issues:** [https://github.com/Trapar-waves/react-mantine-tailwind/issues](https://github.com/Trapar-waves/react-mantine-tailwind/issues)
