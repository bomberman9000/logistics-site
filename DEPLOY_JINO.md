# 🚀 Деплой на Jino.ru

## 📋 Подготовка к деплою на Jino.ru

### ✅ Что уже готово:
- Все файлы проекта готовы
- 50 направлений сгенерированы
- SEO настроено
- IndexNow готов

---

## 🔧 Настройка проекта для Jino.ru

### 1. Проверьте package.json

Убедитесь, что в `package.json` есть:
```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  }
}
```

### 2. Создайте файл `.htaccess` (если нужен)

Jino.ru поддерживает Next.js, но может потребоваться настройка.

---

## 📦 Деплой на Jino.ru

### Способ 1: Через панель управления Jino

1. **Войдите в панель управления Jino.ru**
   - Откройте https://jino.ru/
   - Войдите в аккаунт

2. **Создайте Node.js приложение:**
   - Перейдите в "Приложения" или "Хостинг"
   - Выберите "Создать Node.js приложение"
   - Укажите домен: `sinergiaplus1.ru`

3. **Загрузите файлы проекта:**
   - Используйте FTP/SFTP или файловый менеджер Jino
   - Загрузите все файлы из папки `logistics-site`
   - Исключите: `node_modules`, `.next`, `.git`

4. **Установите зависимости:**
   - В терминале Jino выполните:
   ```bash
   npm install --production
   ```

5. **Соберите проект:**
   ```bash
   npm run build
   ```

6. **Настройте запуск:**
   - В настройках приложения укажите:
     - **Start command:** `npm start`
     - **Port:** `3000` (или порт, который выделил Jino)

---

### Способ 2: Через Git (если Jino поддерживает)

1. **Создайте репозиторий на GitHub/GitLab**

2. **В панели Jino:**
   - Выберите "Развертывание из Git"
   - Укажите URL репозитория
   - Настройте автодеплой

---

## 🔐 Настройка переменных окружения на Jino

### В панели управления Jino:

1. Найдите раздел "Переменные окружения" или "Environment Variables"
2. Добавьте:

```
TELEGRAM_BOT_TOKEN=your_telegram_bot_token
TELEGRAM_CHAT_ID=your_chat_id
INDEXNOW_KEY=a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0
NODE_ENV=production
```

**Где взять:**
- `TELEGRAM_BOT_TOKEN` - создайте бота через @BotFather
- `TELEGRAM_CHAT_ID` - узнайте через @userinfobot

---

## 🌐 Настройка домена

### 1. В панели Jino:

1. Перейдите в настройки домена
2. Добавьте домен: `sinergiaplus1.ru`
3. Настройте DNS записи (если нужно):
   - **A-запись:** IP сервера Jino
   - **CNAME:** (если указан в Jino)

### 2. SSL сертификат:

- Jino.ru обычно предоставляет SSL автоматически
- Или используйте Let's Encrypt через панель

---

## 📝 Настройка Next.js для Jino.ru

### Создайте файл `next.config.ts` (если нужно):

```typescript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone', // Для лучшей производительности
  // или
  // output: 'export', // Если нужен статический экспорт
};

module.exports = nextConfig;
```

**Важно:** Проверьте, какой режим поддерживает Jino:
- **Standalone** - для Node.js сервера (рекомендуется)
- **Export** - для статического хостинга

---

## ✅ Проверка после деплоя

### 1. Проверьте URL:

```bash
# robots.txt
curl https://sinergiaplus1.ru/robots.txt

# sitemap.xml
curl https://sinergiaplus1.ru/sitemap.xml | head -20

# indexnow-key.txt
curl https://sinergiaplus1.ru/indexnow-key.txt

# Главная страница
curl -I https://sinergiaplus1.ru/
```

### 2. Проверьте работу API:

```bash
# Тест IndexNow API
curl -X POST https://sinergiaplus1.ru/api/indexnow \
  -H "Content-Type: application/json" \
  -d '{"urls": ["https://sinergiaplus1.ru/"]}'
```

---

## 🐛 Возможные проблемы

### Ошибка сборки:
- Проверьте версию Node.js в Jino (нужна 18+)
- Убедитесь, что все зависимости установлены
- Проверьте логи сборки в панели Jino

### Порт не работает:
- Проверьте, какой порт выделил Jino
- Обновите настройки приложения
- Проверьте firewall настройки

### Статические файлы не отдаются:
- Убедитесь, что папка `public` загружена
- Проверьте права доступа к файлам
- Проверьте настройки веб-сервера

---

## 📋 Чек-лист после деплоя

- [ ] Сайт доступен по домену sinergiaplus1.ru
- [ ] robots.txt работает: https://sinergiaplus1.ru/robots.txt
- [ ] sitemap.xml работает: https://sinergiaplus1.ru/sitemap.xml (55 страниц)
- [ ] indexnow-key.txt доступен: https://sinergiaplus1.ru/indexnow-key.txt
- [ ] Все страницы открываются без ошибок
- [ ] Форма заявки работает (если настроен Telegram)
- [ ] API IndexNow работает
- [ ] Переменные окружения настроены
- [ ] SSL сертификат активен

---

## 🎯 Следующие шаги

После успешного деплоя:

1. **Настройте Яндекс.Вебмастер:**
   - См. `YANDEX_WEBMASTER_CHECKLIST.md`

2. **Отправьте URL в IndexNow:**
   ```bash
   npx tsx scripts/send-all-to-indexnow.ts
   ```

3. **Мониторьте логи:**
   - Проверяйте логи в панели Jino
   - Следите за ошибками

---

## 📞 Поддержка Jino.ru

Если возникли проблемы:
- Документация: https://help.jino.ru/
- Поддержка: через панель управления Jino
- Проверьте статус сервисов Jino

---

**Готово к деплою на Jino.ru! 🚀**


