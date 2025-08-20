# @trapar-waves/react-mantine-tailwind

![npm version](https://img.shields.io/npm/v/@trapar-waves/react-mantine-tailwind)
![npm dm](https://img.shields.io/npm/dm/@trapar-waves/react-mantine-tailwind)
![License](https://img.shields.io/github/license/Trapar-waves/react-mantine-tailwind)
![GitHub last commit](https://img.shields.io/github/last-commit/Trapar-waves/react-mantine-tailwind)
![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/Trapar-waves/react-mantine-tailwind/release.yml)
![Renovate](https://img.shields.io/badge/renovate-enabled-blue)

---

[English](../README.md) | [中文](./README-CN.md) | [日本語](./README-JP.md)

> Проект, сочетающий React, Mantine UI и Tailwind CSS для создания современных веб-приложений.

## ✨ Особенности

- **Современный UI-фреймворк:** Строится с использованием React (v19) для компонентно-ориентированного декларативного интерфейса.
- **Богатая библиотека компонентов:** Интегрируется с Mantine UI (`@mantine/core` и `@mantine/hooks`), предоставляя предварительно созданные элементы интерфейса и утилитарные хуки.
- **Стилизация с упором на утилиты:** Использует Tailwind CSS вместе с `@tailwindcss/postcss`, обеспечивая гибкую и быструю стилизацию при сохранении согласованности.
- **Интеграция с PostCSS:** Получает преимущества от плагинов PostCSS, таких как `postcss-import`, `autoprefixer` и `postcss-simple-vars`, для расширенной обработки CSS.
- **Безопасность типов:** Использует TypeScript (v5.9.x) для повышения надежности кода и обеспечения надежной проверки типов во время разработки.
- **Быстрый рабочий процесс разработки:** Использует Rsbuild (`@rsbuild/core` и `@rsbuild/plugin-react`) для оптимизированных сборок и эффективной производительности сервера разработки.
- **Поддержка иконок:** Включает `@iconify/json` и `@iconify/tailwind` для масштабируемой и настраиваемой иконографии.
- **Согласованный дизайн:** Комбинирует `postcss-preset-mantine` и `tailwind-preset-mantine` для бесперебойной интеграции стилей Mantine и Tailwind.
- **Фокус на качестве кода:** Включает ESLint с `@antfu/eslint-config` для линтинга и соблюдения лучших практик в кодовой базе.
- **Git Hooks:** Интегрирован с Husky и `lint-staged` для автоматических проверок качества кода при коммите.
- **Автоматические релизы:** Использует GitHub Actions для автоматических релизов и генерации журналов изменений.

## 💻 Технологический стек

- **Фреймворк/Библиотека:** React (v19)
- **UI-тулкит/Стилизация:** Mantine UI (`@mantine/core`), Tailwind CSS (`tailwindcss`)
- **Инструмент сборки:** Rsbuild (`@rsbuild/core`)
- **Язык:** TypeScript (v5.9.x)
- **Обработка CSS:** PostCSS с плагинами вроде `autoprefixer` и `postcss-simple-vars`
- **Линтинг:** ESLint с `@antfu/eslint-config`
- **Управление состоянием:** Zustand
- **Маршрутизация:** Tanstack Router
- **Получение данных:** Tanstack Query (React Query)
- **Табличный компонент:** Tanstack Table

Полный список зависимостей см. в [package.json](../package.json).

## 🚀 Начало работы

Следуйте этим инструкциям, чтобы запустить проект локально.

### Предварительные требования

Убедитесь, что у вас установлены следующие компоненты:

- Node.js (рекомендуется версия >= 18.x)
- Пакетный менеджер (npm, yarn или pnpm)

```bash
node -v
npm -v
```

### Установка

Запустить скрипт

```bash
pnpm create trapar-waves
```

Установить зависимости

```bash
npm install
yarn install
pnpm install
```

### Разработка

Запустить сервер разработки:

```bash
npm run dev
yarn dev
pnpm dev
```

### Сборка

Собрать проект для продакшена:

```bash
npm run build
yarn build
pnpm build
```

### Предпросмотр

Предварительный просмотр продакшн-сборки локально:

```bash
npm run preview
yarn preview
pnpm preview
```

### Линтинг

Проверить кодовую базу на соответствие стандартам:

```bash
npm run lint
yarn lint
pnpm lint
```

## 🤝 Участие в разработке

Вклад в проект приветствуется и очень ценится! Чтобы внести вклад, следуйте этим шагам:

1. Сделайте форк репозитория
2. Создайте ветку с функцией (`git checkout -b feature/amazing-feature`)
3. Зафиксируйте свои изменения (`git commit -m 'Add some amazing feature'`)
4. Отправьте изменения в ветку (`git push origin feature/amazing-feature`)
5. Откройте Pull Request

Перед отправкой PR убедитесь, что ваш код соответствует правилам линтинга проекта и проходит все проверки.

## 📄 Лицензия

Этот проект лицензирован по лицензии MIT - см. файл [LICENSE](../LICENSE) для получения подробной информации.

## 👤 Author

- **Rikka:** (admin@rikka.cc)
- **GitHub Profile:** [Muromi-Rikka](https://github.com/Muromi-Rikka)

## 🔗 Links

- **Репозиторий:** [https://github.com/Trapar-waves/react-mantine-tailwind](https://github.com/Trapar-waves/react-mantine-tailwind)
- **Домашняя страница:** [https://github.com/Trapar-waves/react-mantine-tailwind](https://github.com/Trapar-waves/react-mantine-tailwind)
- **Проблемы:** [https://github.com/Trapar-waves/react-mantine-tailwind/issues](https://github.com/Trapar-waves/react-mantine-tailwind/issues)
