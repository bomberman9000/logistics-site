# ✅ Чек-лист перед деплоем

## 📋 Проверка файлов

### ✅ Основные файлы готовы:
- [x] `app/robots.ts` - robots.txt
- [x] `app/sitemap.ts` - sitemap.xml (55 страниц)
- [x] `public/indexnow-key.txt` - ключ IndexNow
- [x] `app/api/indexnow/route.ts` - API IndexNow
- [x] `app/api/lead/route.ts` - API для формы заявок
- [x] Все компоненты (Header, Footer, Hero, etc.)
- [x] Все страницы (/, /services, /routes, /about, /contacts)
- [x] 50 направлений в `data/routes.ts`

### ✅ SEO готово:
- [x] Метаданные на всех страницах
- [x] JSON-LD разметка (LocalBusiness)
- [x] Структурированные данные
- [x] Правильные title/description

### ✅ Конфигурация:
- [x] `package.json` настроен
- [x] `.gitignore` настроен (исключает .env)
- [x] `tsconfig.json` настроен
- [x] `next.config.ts` настроен

---

## 🔧 Что нужно настроить перед деплоем

### 1. Переменные окружения (для Vercel):

**В настройках Vercel → Environment Variables:**

```
TELEGRAM_BOT_TOKEN=your_bot_token_here
TELEGRAM_CHAT_ID=your_chat_id_here
INDEXNOW_KEY=a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0
```

**Где взять:**
- `TELEGRAM_BOT_TOKEN` - создайте бота через @BotFather
- `TELEGRAM_CHAT_ID` - узнайте через @userinfobot

### 2. Яндекс верификация (после деплоя):

1. Добавьте сайт в Яндекс.Вебмастер
2. Получите мета-тег верификации
3. Раскомментируйте строку в `app/layout.tsx`:
   ```tsx
   <meta name="yandex-verification" content="ВАШ_КОД" />
   ```
4. Задеплойте снова

---

## 🚀 Команды для деплоя

### Вариант 1: Через Vercel (GitHub)

```bash
cd logistics-site
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin YOUR_GITHUB_REPO
git push -u origin main
```

Затем в Vercel:
- New Project → Import Git Repository
- Выберите репозиторий
- Добавьте переменные окружения
- Deploy

### Вариант 2: Через Vercel CLI

```bash
npm i -g vercel
cd logistics-site
vercel
```

---

## ✅ После деплоя - проверка

Выполните эти команды:

```bash
# 1. Проверка robots.txt
curl https://sinergiaplus1.ru/robots.txt

# 2. Проверка sitemap.xml
curl https://sinergiaplus1.ru/sitemap.xml | head -30

# 3. Проверка indexnow-key.txt
curl https://sinergiaplus1.ru/indexnow-key.txt

# 4. Проверка главной страницы
curl -I https://sinergiaplus1.ru/

# 5. Проверка страницы направления
curl -I https://sinergiaplus1.ru/routes/samara-moscow
```

**Ожидаемый результат:**
- Все URL возвращают 200 OK
- robots.txt содержит правильные правила
- sitemap.xml содержит 55 URL
- indexnow-key.txt доступен

---

## 📋 Чек-лист после деплоя

### Техническая проверка:
- [ ] Сайт доступен по домену
- [ ] robots.txt работает
- [ ] sitemap.xml работает (55 страниц)
- [ ] indexnow-key.txt доступен
- [ ] Все страницы открываются
- [ ] Форма заявки работает
- [ ] API IndexNow работает

### SEO настройка:
- [ ] Яндекс.Вебмастер: добавлен сайт
- [ ] Яндекс.Вебмастер: подтверждены права
- [ ] Яндекс.Вебмастер: добавлен sitemap
- [ ] Яндекс.Вебмастер: отправлены URL в переобход
- [ ] IndexNow: отправлены все URL
- [ ] Яндекс.Бизнес: добавлена организация

---

## 🎯 Готово к деплою!

Все файлы проверены, ошибок нет. Можно деплоить! 🚀

См. подробную инструкцию: `DEPLOY.md`


