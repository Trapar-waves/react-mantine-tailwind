# @trapar-waves/react-mantine-tailwind

![npm version](https://img.shields.io/npm/v/@trapar-waves/react-mantine-tailwind)
![npm dm](https://img.shields.io/npm/dm/@trapar-waves/react-mantine-tailwind)
![License](https://img.shields.io/badge/license-ISC-green)
![GitHub last commit](https://img.shields.io/github/last-commit/Trapar-waves/react-mantine-tailwind)

> Современный проект, в котором React, Mantine UI и Tailwind CSS работают вместе для создания современных веб-приложений.

## ✨ Особенности

* **Современный интерфейсный фреймворк:** Построен на React (v19) с использованием компонентного и декларативного подхода.
* **Широкий набор готовых компонентов:** Интеграция с Mantine UI (`@mantine/core` и `@mantine/hooks`) предоставляет готовые элементы интерфейса и полезные хуки.
* **Гибкая стилизация:** Используется Tailwind CSS в сочетании с `@tailwindcss/postcss` для быстрого и гибкого стилизирования с сохранением согласованности.
* **Обработка CSS с помощью PostCSS:** Включает плагины, такие как `postcss-import`, `autoprefixer` и `postcss-simple-vars`, для улучшенной обработки стилей.
* **Типобезопасность:** TypeScript (v5.8.x) обеспечивает надежность кода и предоставляет строгую проверку типов во время разработки.
* **Эффективная разработка:** Rsbuild (`@rsbuild/core` и `@rsbuild/plugin-react`) обеспечивает оптимизированные сборки и высокую производительность сервера разработки.
* **Поддержка иконок:** Встроены `@iconify/json` и `@iconify/tailwind` для масштабируемых и настраиваемых иконок.
* **Единая система дизайна:** Используются `postcss-preset-mantine` и `tailwind-preset-mantine` для гладкой интеграции между стилями Mantine и Tailwind.
* **Высокое качество кода:** ESLint с конфигурацией `@antfu/eslint-config` помогает поддерживать лучшие практики в коде.

## 🚀 Начало работы

Вот инструкции для запуска проекта локально.

### Предварительные требования

* Убедитесь, что у вас установлены:
    * Node.js (рекомендуется версия 18.x или выше)
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
    # Выберите предпочитаемый менеджер пакетов
    npm install
    # или
    yarn install
    # или
    pnpm install
    ```

## 🛠️ Использование

### Доступные команды

Вот основные команды, которые можно использовать через `npm run <команда>`, `yarn <команда>` или `pnpm <команда>`:

* `dev`: Запускает сервер разработки с поддержкой горячей замены модулей (HMR).
* `build`: Создает оптимизированную сборку для продакшена.
* `preview`: Запускает локальный сервер для просмотра продакшен-сборки.

Пример использования:
```bash
# Запуск сервера разработки
npm run dev 

# Создание продакшен-сборки
npm run build 

# Просмотр продакшен-сборки
npm run preview
```

## 💻 Технологический стек

Основные технологии, используемые в проекте:

* **Фреймворк/Библиотека:** React (v19)
* **Интерфейсные инструменты и стилизация:** Mantine UI (`@mantine/core`), Tailwind CSS (`tailwindcss`)
* **Сборщик:** Rsbuild (`@rsbuild/core`)
* **Язык:** TypeScript (v5.8.x)
* **Обработка CSS:** PostCSS с плагинами, такими как `autoprefixer` и `postcss-simple-vars`
* **Линтинг:** ESLint с конфигурацией `@antfu/eslint-config`

Полный список зависимостей можно найти в файле [package.json](package.json).

## 🤝 Вклад

Вклады приветствуются! Если у вас есть предложения или исправления, не стесняйтесь открывать pull request.

## 📄 Лицензия

Проект распространяется под лицензией **ISC**. Подробности можно найти в файле `LICENSE`.

## 👤 Автор

* **Рикка** (admin@rikka.cc)
* **Профиль GitHub:** [Muromi-Rikka](https://github.com/Muromi-Rikka)

## 🔗 Ссылки

* **Репозиторий:** [https://github.com/Trapar-waves/react-mantine-tailwind](https://github.com/Trapar-waves/react-mantine-tailwind)
* **Домашняя страница:** [https://github.com/Trapar-waves/react-mantine-tailwind](https://github.com/Trapar-waves/react-mantine-tailwind)
* **Проблемы:** [Трекер ошибок](https://github.com/Trapar-waves/react-mantine-tailwind/issues)
