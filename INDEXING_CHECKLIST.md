# ✅ Чек-лист готовности к индексации

## 🎯 Домен: sinergiaplus1.ru

---

## 📋 МИНИ-ЧЕК "ВСЁ ЛИ ГОТОВО"

### 1. ✅ robots.txt открывается
**URL:** https://sinergiaplus1.ru/robots.txt

**Проверка:**
- Откройте в браузере
- Должно быть: `User-agent: *` и `Allow: /`
- Должна быть строка: `Sitemap: https://sinergiaplus1.ru/sitemap.xml`

**Статус:** ✅ Готово (файл: `app/robots.ts`)

---

### 2. ✅ sitemap.xml открывается
**URL:** https://sinergiaplus1.ru/sitemap.xml

**Проверка:**
- Откройте в браузере
- Должно быть 55 URL (5 статических + 50 направлений)
- Все URL должны начинаться с `https://sinergiaplus1.ru`

**Статус:** ✅ Готово (файл: `app/sitemap.ts`)

---

### 3. ✅ indexnow-key.txt открывается
**URL:** https://sinergiaplus1.ru/indexnow-key.txt

**Проверка:**
- Откройте в браузере
- Должен отображаться ключ (строка символов)

**Статус:** ✅ Готово (файл: `public/indexnow-key.txt`)

---

### 4. ⏳ В Вебмастере права подтверждены
**Действие:** Нужно сделать вручную

**Инструкция:**
1. Откройте: https://webmaster.yandex.ru/
2. Добавьте сайт: `sinergiaplus1.ru`
3. Выберите "HTML-файл или мета-тег"
4. Скопируйте мета-тег
5. Откройте `app/layout.tsx`
6. Раскомментируйте и вставьте:
   ```tsx
   <meta name="yandex-verification" content="ВАШ_КОД" />
   ```
7. Задеплойте
8. Нажмите "Проверить" в Вебмастере

**Статус:** ⏳ Требует действий

---

### 5. ⏳ Sitemap добавлен в Вебмастер
**Действие:** Нужно сделать вручную

**Инструкция:**
1. В Яндекс.Вебмастер: "Индексирование" → "Файлы Sitemap"
2. Нажмите "Добавить файл Sitemap"
3. Введите: `https://sinergiaplus1.ru/sitemap.xml`
4. Нажмите "Добавить"

**Статус:** ⏳ Требует действий

---

### 6. ⏳ 10–20 URL отправлены в переобход
**Действие:** Нужно сделать вручную

**Инструкция:**
1. В Яндекс.Вебмастер: "Индексирование" → "Переобход страниц"
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
https://sinergiaplus1.ru/routes/kazan-samara
https://sinergiaplus1.ru/routes/samara-ufa
https://sinergiaplus1.ru/routes/ufa-samara
https://sinergiaplus1.ru/routes/samara-ekaterinburg
https://sinergiaplus1.ru/routes/ekaterinburg-samara
https://sinergiaplus1.ru/routes/samara-tolyatti
https://sinergiaplus1.ru/routes/samara-nizhny-novgorod
https://sinergiaplus1.ru/routes/samara-saratov
https://sinergiaplus1.ru/routes/samara-penza
https://sinergiaplus1.ru/routes/samara-ulyanovsk
```

**Статус:** ⏳ Требует действий

---

### 7. ✅ 50 URL отправлены через IndexNow
**Действие:** Можно сделать автоматически

**Вариант 1: Через скрипт (после деплоя)**
```bash
cd logistics-site
npx tsx scripts/send-all-to-indexnow.ts
```

**Вариант 2: Через API (после деплоя)**
```bash
curl -X POST https://sinergiaplus1.ru/api/indexnow \
  -H "Content-Type: application/json" \
  -d '{
    "urls": [
      "https://sinergiaplus1.ru/",
      "https://sinergiaplus1.ru/services",
      "https://sinergiaplus1.ru/routes",
      "https://sinergiaplus1.ru/about",
      "https://sinergiaplus1.ru/contacts",
      "https://sinergiaplus1.ru/routes/samara-moscow",
      "https://sinergiaplus1.ru/routes/moscow-samara"
      // ... и так далее для всех 50 направлений
    ]
  }'
```

**Вариант 3: Только топ-20 (быстрее)**
```bash
npx tsx scripts/send-top-routes-to-indexnow.ts
```

**Статус:** ✅ Готово (скрипты созданы, нужно запустить после деплоя)

---

## 🚀 БЫСТРАЯ ПРОВЕРКА (после деплоя)

Выполните эти команды для проверки:

```bash
# 1. Проверка robots.txt
curl https://sinergiaplus1.ru/robots.txt

# 2. Проверка sitemap.xml
curl https://sinergiaplus1.ru/sitemap.xml | head -20

# 3. Проверка indexnow-key.txt
curl https://sinergiaplus1.ru/indexnow-key.txt

# 4. Проверка API IndexNow
curl -X POST https://sinergiaplus1.ru/api/indexnow \
  -H "Content-Type: application/json" \
  -d '{"urls": ["https://sinergiaplus1.ru/"]}'
```

---

## 📊 ИТОГОВЫЙ СТАТУС

| Пункт | Статус | Действие |
|-------|--------|----------|
| robots.txt | ✅ Готово | Проверить после деплоя |
| sitemap.xml | ✅ Готово | Проверить после деплоя |
| indexnow-key.txt | ✅ Готово | Проверить после деплоя |
| Права в Вебмастере | ⏳ Требует действий | Сделать вручную |
| Sitemap в Вебмастере | ⏳ Требует действий | Сделать вручную |
| Переобход URL | ⏳ Требует действий | Сделать вручную |
| IndexNow отправка | ✅ Готово | Запустить после деплоя |

---

## 🎯 СЛЕДУЮЩИЕ ШАГИ

1. **Задеплойте сайт** на production (Vercel/другой хостинг)
2. **Проверьте** все 3 URL (robots.txt, sitemap.xml, indexnow-key.txt)
3. **Настройте Яндекс.Вебмастер** (права + sitemap)
4. **Отправьте URL** в переобход
5. **Запустите IndexNow** скрипт

После этого начнется индексация! 🚀


