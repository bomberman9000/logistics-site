# ⚡ Быстрый старт индексации в Яндекс

## 🎯 Домен: sinergiaplus1.ru

---

## ✅ ЧТО УЖЕ ГОТОВО:

1. ✅ **robots.txt** - разрешает индексацию
2. ✅ **sitemap.xml** - генерирует 55 страниц автоматически
3. ✅ **Метаданные** - все страницы с title/description
4. ✅ **IndexNow API** - готов к использованию
5. ✅ **JSON-LD** - структурированные данные

---

## 🚀 БЫСТРЫЙ СТАРТ (5 минут)

### 1. Добавьте сайт в Яндекс.Вебмастер

1. Откройте: https://webmaster.yandex.ru/
2. Нажмите **"Добавить сайт"**
3. Введите: `sinergiaplus1.ru`

### 2. Подтвердите права (мета-тег)

1. Выберите **"HTML-файл или мета-тег"**
2. Скопируйте мета-тег (например: `<meta name="yandex-verification" content="xxxxx" />`)
3. Откройте файл: `app/layout.tsx`
4. Раскомментируйте строку и вставьте ваш код:
   ```tsx
   <meta name="yandex-verification" content="ВАШ_КОД_ВЕРИФИКАЦИИ" />
   ```
5. Сохраните и задеплойте
6. Нажмите **"Проверить"** в Вебмастере

### 3. Добавьте sitemap

1. В Вебмастере: **"Индексирование" → "Файлы Sitemap"**
2. Нажмите **"Добавить файл Sitemap"**
3. Введите: `https://sinergiaplus1.ru/sitemap.xml`
4. Нажмите **"Добавить"**

### 4. Переобход топ-страниц

1. В Вебмастере: **"Индексирование" → "Переобход страниц"**
2. Добавьте эти URL (по одному или файлом):

```
https://sinergiaplus1.ru/
https://sinergiaplus1.ru/services
https://sinergiaplus1.ru/routes
https://sinergiaplus1.ru/contacts
https://sinergiaplus1.ru/about
https://sinergiaplus1.ru/routes/samara-moscow
https://sinergiaplus1.ru/routes/moscow-samara
https://sinergiaplus1.ru/routes/samara-sankt-peterburg
https://sinergiaplus1.ru/routes/sankt-peterburg-samara
https://sinergiaplus1.ru/routes/samara-kazan
```

### 5. Отправьте через IndexNow (опционально)

После деплоя выполните:
```bash
curl -X POST https://sinergiaplus1.ru/api/indexnow \
  -H "Content-Type: application/json" \
  -d '{"urls": ["https://sinergiaplus1.ru/", "https://sinergiaplus1.ru/routes/samara-moscow"]}'
```

Или используйте скрипт:
```bash
cd logistics-site
npx tsx scripts/notify-indexnow.ts
```

---

## 📋 ПОЛНАЯ ИНСТРУКЦИЯ

См. файл: `YANDEX_WEBMASTER_CHECKLIST.md`

---

## ⏱️ ВРЕМЕННЫЕ РАМКИ

- **День 1-2:** Начало индексации (10-20 страниц)
- **День 3-5:** Основная индексация (40-50 страниц)  
- **День 7+:** Все 55 страниц в поиске

---

## 🏢 ВАЖНО: Яндекс.Бизнес

**Обязательно настройте:**
1. https://yandex.ru/business/
2. Добавьте организацию: **ООО «Синергия Плюс»**
3. Телефон: **+7 (927) 899-66-62**
4. Адрес: **443124, г. Самара, Просека 5-я, д. 121, кв. 131**

Это критично для локального SEO!

---

Готово! Через 2-4 недели увидите первые результаты 🚀


