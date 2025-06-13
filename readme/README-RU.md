# @trapar-waves/react-mantine-tailwind

![npm version](https://img.shields.io/npm/v/@trapar-waves/react-mantine-tailwind)
![npm dm](https://img.shields.io/npm/dm/@trapar-waves/react-mantine-tailwind)
![License](https://img.shields.io/badge/license-ISC-green)
![GitHub last commit](https://img.shields.io/github/last-commit/Trapar-waves/react-mantine-tailwind)

[English](../README.md) | [中文](README-CN.md) | [日本語](README-JP.md) | [Русский](README-RU.md)

> Проект, объединяющий React, Mantine UI и Tailwind CSS для разработки современных веб-приложений.

## ✨ Особенности

* **Современный UI-фреймворк**: Построен с использованием React (v19) для компонентно-ориентированного, декларативного интерфейса.
* **Богатая библиотека компонентов**: Интегрируется с Mantine UI (`@mantine/core` и `@mantine/hooks`), предоставляя предварительно разработанные элементы интерфейса и утилитарные хуки.
* **Стилизация Utility-First**: Использует Tailwind CSS вместе с `@tailwindcss/postcss`, обеспечивая гибкую и быструю стилизацию при сохранении согласованности.
* **Интеграция с PostCSS**: Использует плагины PostCSS, такие как `postcss-import`, `autoprefixer` и `postcss-simple-vars`, для продвинутой обработки CSS.
* **Типовая безопасность**: Применяет TypeScript (v5.8.x) для повышения надежности кода и обеспечения надежной проверки типов во время разработки.
* **Быстрый рабочий процесс разработки**: Использует Rsbuild (`@rsbuild/core` и `@rsbuild/plugin-react`) для оптимизированных сборок и эффективной производительности сервера разработки.
* **Поддержка иконок**: Включает `@iconify/json` и `@iconify/tailwind` для масштабируемой и настраиваемой иконографии.
* **Согласованный дизайн**: Комбинирует `postcss-preset-mantine` и `tailwind-preset-mantine` для бесперебойной интеграции стилей Mantine и Tailwind.
* **Фокус на качество кода**: Включает ESLint с `@antfu/eslint-config` для линтинга и соблюдения лучших практик в кодовой базе.

## 🚀 Начало работы

Следуйте этим инструкциям, чтобы запустить проект локально.

### Предварительные требования

* Убедитесь, что у вас установлены:
    * Node.js (>= 18.x рекомендуется)
    * Менеджер пакетов (npm, yarn или pnpm)
    ```bash
    node -v
    npm -v # или yarn -v или pnpm -v
    ```

### Установка

1. Клонируйте репозиторий:
    ```bash
    git clone https://github.com/Trapar-waves/react-mantine-tailwind.git
    cd react-mantine-tailwind
    ```
2. Установите зависимости:
    ```bash
    # Используйте предпочитаемый менеджер пакетов
    npm install
    # или
    yarn install
    # или
    pnpm install
    ```

## 🛠️ Использование

### Структура проекта

```
├── .github/workflows/release.yml - Конфигурация CI/CD
├── public/ - Статические ресурсы
├── src/
│   ├── app.tsx - Основной компонент приложения
│   ├── index.tsx - Точка входа приложения
│   ├── globals.css - Глобальные стили
│   └── iconify.ts - Конфигурация иконок
├── rsbuild.config.ts - Конфигурация сборки
└── tsconfig.json - Конфигурация TypeScript
```

### Доступные скрипты

Общие скрипты, доступные через `npm run <script>`, `yarn <script>` или `pnpm <script>`:

* `dev`: Запускает сервер разработки с горячей заменой модулей (HMR).
  ```bash
  npm run dev
  ```
* `build`: Создает готовую к производству сборку приложения.
  ```bash
  npm run build
  ```
* `preview`: Запускает локальный сервер для предварительного просмотра производственной сборки.
  ```bash
  npm run preview
  ```
* `lint`: Запускает ESLint для проверки проблем с качеством кода.
  ```bash
  npm run lint
  ```

Пример:
```bash
# Запустить сервер разработки
npm run dev

# Создать производственную сборку
npm run build

# Предварительно просмотреть производственную сборку
npm run preview
```

## 💻 Технологический стек

Основные технологии, используемые в этом проекте:

* **Фреймворк/Библиотека**: React (v19)
* **UI-фреймворк/Стилизация**: Mantine UI (`@mantine/core`), Tailwind CSS (`tailwindcss`)
* **Инструмент сборки**: Rsbuild (`@rsbuild/core`)
* **Язык**: TypeScript (v5.8.x)
* **Обработка CSS**: PostCSS с плагинами, такими как `autoprefixer` и `postcss-simple-vars`
* **Линтинг**: ESLint с `@antfu/eslint-config`
* **Управление состоянием**: Zustand
* **Маршрутизация**: Tanstack Router
* **Получение данных**: Tanstack Query (React Query)
* **Табличный компонент**: Tanstack Table

* **Фреймворк/Библиотека**: React (v19)
* **UI-фреймворк/Стилизация**: Mantine UI (`@mantine/core`), Tailwind CSS (`tailwindcss`)
* **Инструмент сборки**: Rsbuild (`@rsbuild/core`)
* **Язык**: TypeScript (v5.8.x)
* **Обработка CSS**: PostCSS с плагинами, такими как `autoprefixer` и `postcss-simple-vars`
* **Линтинг**: ESLint с `@antfu/eslint-config`

Полный список зависимостей см. в [package.json](package.json).

## 🤝 Вклад в проект

Вклады приветствуются и очень ценятся! Чтобы внести вклад, следуйте этим шагам:

1. Сделайте форк репозитория
2. Создайте ветку с функцией (`git checkout -b feature/amazing-feature`)
3. Зафиксируйте изменения (`git commit -m 'Add some amazing feature'`)
4. Отправьте ветку (`git push origin feature/amazing-feature`)
5. Откройте Pull Request

Обязательно обновляйте тесты при необходимости и придерживайтесь нашего [Кода поведения](CODE_OF_CONDUCT.md).

## 📄 Лицензия

Распространяется под лицензией **ISC**. Подробности см. в файле `LICENSE`.

## 🐛 Устранение неполадок

### Общие проблемы

* **Проблемы с зависимостями**: Попробуйте удалить `node_modules` и переустановить зависимости
  ```bash
  rm -rf node_modules && npm install
  ```
* **Ошибки сборки**: Убедитесь, что вы используете Node.js v18 или выше
* **Конфликты стилей**: Проверьте наличие конфликтов стилей Tailwind и Mantine в `globals.css`

## 📝 История изменений

Подробности изменений версий см. в файле [CHANGELOG.md](CHANGELOG.md).

## 👤 Автор

* **Rikka** (admin@rikka.cc)
* **Профиль на GitHub**: [Muromi-Rikka](https://github.com/Muromi-Rikka)

## 🔗 Ссылки

* **Репозиторий**: [https://github.com/Trapar-waves/react-mantine-tailwind](https://github.com/Trapar-waves/react-mantine-tailwind)
* **Домашняя страница**: [https://github.com/Trapar-waves/react-mantine-tailwind](https://github.com/Trapar-waves/react-mantine-tailwind)
* **Проблемы**: [Трекер ошибок](https://github.com/Trapar-waves/react-mantine-tailwind/issues)
