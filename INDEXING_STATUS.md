# ✅ Статус готовности к индексации

## 🎯 Домен: sinergiaplus1.ru

---

## ✅ ЧТО УЖЕ ГОТОВО (автоматически):

### 1. ✅ robots.txt
- **Файл:** `app/robots.ts`
- **URL:** https://sinergiaplus1.ru/robots.txt
- **Статус:** Готово к деплою
- **Проверка:** После деплоя откройте URL в браузере

### 2. ✅ sitemap.xml
- **Файл:** `app/sitemap.ts`
- **URL:** https://sinergiaplus1.ru/sitemap.xml
- **Содержит:** 55 страниц (5 статических + 50 направлений)
- **Статус:** Готово к деплою
- **Проверка:** После деплоя откройте URL в браузере

### 3. ✅ indexnow-key.txt
- **Файл:** `public/indexnow-key.txt`
- **URL:** https://sinergiaplus1.ru/indexnow-key.txt
- **Статус:** Готово к деплою
- **Проверка:** После деплоя откройте URL в браузере

### 4. ✅ IndexNow API
- **Файл:** `app/api/indexnow/route.ts`
- **URL:** https://sinergiaplus1.ru/api/indexnow
- **Статус:** Готово к деплою
- **Использование:** POST запрос с массивом URL

### 5. ✅ Скрипты для IndexNow
- **Все 50 направлений:** `scripts/send-all-to-indexnow.ts`
- **Топ-20 направлений:** `scripts/send-top-routes-to-indexnow.ts`
- **Статус:** Готово к использованию

---

## ⏳ ЧТО НУЖНО СДЕЛАТЬ ВРУЧНУЮ:

### 1. ⏳ Яндекс.Вебмастер: Добавить сайт
- Откройте: https://webmaster.yandex.ru/
- Добавьте сайт: `sinergiaplus1.ru`

### 2. ⏳ Яндекс.Вебмастер: Подтвердить права
- Выберите способ: "HTML-файл или мета-тег"
- Получите мета-тег
- Добавьте в `app/layout.tsx` (раскомментируйте строку)
- Задеплойте и проверьте

### 3. ⏳ Яндекс.Вебмастер: Добавить sitemap
- В Вебмастере: "Индексирование" → "Файлы Sitemap"
- Добавьте: `https://sinergiaplus1.ru/sitemap.xml`

### 4. ⏳ Яндекс.Вебмастер: Переобход страниц
- В Вебмастере: "Индексирование" → "Переобход страниц"
- Добавьте 10-20 топ URL (см. `INDEXING_CHECKLIST.md`)

### 5. ⏳ IndexNow: Отправить URL (после деплоя)
```bash
# После деплоя выполните:
npx tsx scripts/send-all-to-indexnow.ts
```

---

## 🚀 БЫСТРАЯ ПРОВЕРКА (после деплоя)

Выполните эти команды:

```bash
# 1. Проверка robots.txt
curl https://sinergiaplus1.ru/robots.txt

# 2. Проверка sitemap.xml (первые 20 строк)
curl https://sinergiaplus1.ru/sitemap.xml | head -20

# 3. Проверка indexnow-key.txt
curl https://sinergiaplus1.ru/indexnow-key.txt

# 4. Тест IndexNow API
curl -X POST https://sinergiaplus1.ru/api/indexnow \
  -H "Content-Type: application/json" \
  -d '{"urls": ["https://sinergiaplus1.ru/"]}'
```

---

## 📊 ИТОГОВЫЙ СТАТУС

| Пункт | Статус | Когда проверить |
|-------|--------|-----------------|
| robots.txt | ✅ Готово | После деплоя |
| sitemap.xml | ✅ Готово | После деплоя |
| indexnow-key.txt | ✅ Готово | После деплоя |
| IndexNow API | ✅ Готово | После деплоя |
| Скрипты IndexNow | ✅ Готово | После деплоя |
| Права в Вебмастере | ⏳ Вручную | Сейчас |
| Sitemap в Вебмастере | ⏳ Вручную | После деплоя |
| Переобход URL | ⏳ Вручную | После деплоя |

---

## 🎯 СЛЕДУЮЩИЕ ШАГИ

1. **Задеплойте сайт** на production
2. **Проверьте** все 3 URL (robots.txt, sitemap.xml, indexnow-key.txt)
3. **Настройте Яндекс.Вебмастер** (см. `YANDEX_WEBMASTER_CHECKLIST.md`)
4. **Запустите IndexNow** скрипт

**Все готово к индексации! 🚀**


