# СИНЕРГИЯ+ - Сайт логистической компании

Современный сайт для транспортной компании на Next.js 14+ с TypeScript, Tailwind CSS и интеграцией с Telegram.

## 🚀 Быстрый старт

### Установка зависимостей

```bash
npm install
```

### Настройка переменных окружения

Создайте файл `.env.local` на основе `.env.local.example`:

```bash
cp .env.local.example .env.local
```

Заполните переменные:
- `TELEGRAM_BOT_TOKEN` - токен бота от @BotFather
- `TELEGRAM_CHAT_ID` - ваш chat_id (узнайте через @userinfobot)

### Запуск dev-сервера

```bash
npm run dev
```

Откройте [http://localhost:3000](http://localhost:3000) в браузере.

## 📁 Структура проекта

```
logistics-site/
├── app/                    # App Router (Next.js 14+)
│   ├── api/               # API routes
│   │   └── lead/          # Отправка заявок в Telegram
│   ├── routes/            # Страницы направлений
│   │   └── [slug]/       # Динамические страницы направлений
│   ├── services/          # Страница услуг
│   ├── about/             # О компании
│   ├── contacts/          # Контакты
│   ├── layout.tsx         # Корневой layout
│   └── page.tsx           # Главная страница
├── components/            # React компоненты
│   ├── Header.tsx         # Шапка сайта
│   ├── Footer.tsx         # Подвал
│   ├── Hero.tsx           # Главный баннер
│   ├── Benefits.tsx       # Преимущества
│   ├── ServicesGrid.tsx   # Сетка услуг
│   ├── HowItWorks.tsx     # Как работаем
│   ├── FAQ.tsx            # Частые вопросы
│   ├── LeadForm.tsx       # Форма заявки
│   └── CallToAction.tsx   # Призыв к действию
└── data/                  # Данные
    └── routes.ts          # Данные направлений
```

## 🛣️ Роуты

- `/` - Главная страница
- `/services` - Услуги
- `/routes` - Список направлений
- `/routes/[slug]` - Страница направления
- `/about` - О компании
- `/contacts` - Контакты

## 📝 Настройка Telegram бота

1. Создайте бота через [@BotFather](https://t.me/BotFather)
2. Получите токен бота
3. Узнайте свой chat_id через [@userinfobot](https://t.me/userinfobot)
4. Добавьте переменные в `.env.local`

## 🎨 Технологии

- **Next.js 14+** - React фреймворк с App Router
- **TypeScript** - Типизация
- **Tailwind CSS** - Стилизация
- **Telegram Bot API** - Отправка заявок

## 📦 Деплой

### Vercel (рекомендуется)

1. Подключите репозиторий к Vercel
2. Добавьте переменные окружения в настройках проекта
3. Деплой произойдет автоматически

### Другие платформы

Проект можно задеплоить на любую платформу, поддерживающую Next.js:
- Netlify
- Railway
- DigitalOcean App Platform

## 🔧 Разработка

### Добавление нового направления

Отредактируйте файл `data/routes.ts` и добавьте новый объект в массив `routes`.

### Изменение компонентов

Все компоненты находятся в папке `components/`. Они переиспользуемые и легко настраиваются.

## 📞 Контакты

- Телефон: +7 (927) 899-66-62
- Telegram: @sinergia_plus
- WhatsApp: +7 (927) 899-66-62

## 📄 Лицензия

© 2024 СИНЕРГИЯ+. Все права защищены.
