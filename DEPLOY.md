# 🚀 Инструкция по деплою на Vercel

## ✅ Предварительная проверка

### Файлы готовы:
- ✅ `app/robots.ts` - robots.txt
- ✅ `app/sitemap.ts` - sitemap.xml (55 страниц)
- ✅ `public/indexnow-key.txt` - ключ для IndexNow
- ✅ `app/api/indexnow/route.ts` - API для IndexNow
- ✅ Все компоненты и страницы готовы
- ✅ 50 направлений сгенерированы

### Нет ошибок линтера:
- ✅ TypeScript проверка пройдена
- ✅ ESLint ошибок нет

---

## 📦 Деплой на Vercel

### Способ 1: Через GitHub (рекомендуется)

1. **Создайте репозиторий на GitHub:**
   ```bash
   cd logistics-site
   git init
   git add .
   git commit -m "Initial commit: Logistics site with 50 routes"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Подключите к Vercel:**
   - Откройте: https://vercel.com/
   - Войдите через GitHub
   - Нажмите "New Project"
   - Выберите репозиторий `logistics-site`
   - Нажмите "Deploy"

3. **Настройте переменные окружения:**
   - В настройках проекта → Environment Variables
   - Добавьте:
     ```
     TELEGRAM_BOT_TOKEN=your_telegram_bot_token
     TELEGRAM_CHAT_ID=your_chat_id
     INDEXNOW_KEY=a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0
     ```

4. **Настройте домен:**
   - В настройках проекта → Domains
   - Добавьте: `sinergiaplus1.ru`
   - Настройте DNS записи (инструкция будет в Vercel)

---

### Способ 2: Через Vercel CLI

1. **Установите Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Деплой:**
   ```bash
   cd logistics-site
   vercel
   ```

3. **Добавьте переменные окружения:**
   ```bash
   vercel env add TELEGRAM_BOT_TOKEN
   vercel env add TELEGRAM_CHAT_ID
   vercel env add INDEXNOW_KEY
   ```

4. **Добавьте production домен:**
   ```bash
   vercel domains add sinergiaplus1.ru
   ```

---

## 🔧 После деплоя

### 1. Проверьте все URL:

```bash
# robots.txt
curl https://sinergiaplus1.ru/robots.txt

# sitemap.xml
curl https://sinergiaplus1.ru/sitemap.xml | head -20

# indexnow-key.txt
curl https://sinergiaplus1.ru/indexnow-key.txt

# Главная страница
curl https://sinergiaplus1.ru/
```

### 2. Настройте Яндекс.Вебмастер:

См. инструкцию: `YANDEX_WEBMASTER_CHECKLIST.md`

### 3. Отправьте URL в IndexNow:

```bash
# После деплоя выполните локально:
cd logistics-site
npx tsx scripts/send-all-to-indexnow.ts
```

Или через API:
```bash
curl -X POST https://sinergiaplus1.ru/api/indexnow \
  -H "Content-Type: application/json" \
  -d '{"urls": ["https://sinergiaplus1.ru/", "https://sinergiaplus1.ru/routes/samara-moscow"]}'
```

---

## 🔐 Переменные окружения

Создайте файл `.env.local` (для локальной разработки) или добавьте в Vercel:

```env
# Telegram бот для формы заявок
TELEGRAM_BOT_TOKEN=your_telegram_bot_token
TELEGRAM_CHAT_ID=your_chat_id

# IndexNow ключ (уже установлен в коде, но можно через переменную)
INDEXNOW_KEY=a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0
```

**Важно:** Не коммитьте `.env.local` в git!

---

## 📋 Чек-лист после деплоя

- [ ] Сайт доступен по домену sinergiaplus1.ru
- [ ] robots.txt открывается: https://sinergiaplus1.ru/robots.txt
- [ ] sitemap.xml открывается: https://sinergiaplus1.ru/sitemap.xml (55 страниц)
- [ ] indexnow-key.txt открывается: https://sinergiaplus1.ru/indexnow-key.txt
- [ ] Все страницы открываются без ошибок
- [ ] Форма заявки работает (если настроен Telegram)
- [ ] Добавлен сайт в Яндекс.Вебмастер
- [ ] Подтверждены права в Вебмастере
- [ ] Добавлен sitemap в Вебмастер
- [ ] Отправлены URL в переобход
- [ ] Отправлены URL через IndexNow

---

## 🐛 Возможные проблемы

### Build ошибки:
- Проверьте, что все зависимости установлены: `npm install`
- Проверьте TypeScript ошибки: `npm run lint`

### Домен не работает:
- Проверьте DNS настройки
- Убедитесь, что домен добавлен в Vercel
- Проверьте SSL сертификат (Vercel создает автоматически)

### IndexNow не работает:
- Проверьте, что файл `indexnow-key.txt` доступен
- Проверьте формат запроса к API
- Проверьте логи в Vercel

---

## 📞 Поддержка

Если что-то не работает:
- Логи Vercel: https://vercel.com/dashboard
- Проверьте статус деплоя
- Проверьте переменные окружения

---

**Готово к деплою! 🚀**


