# 🚀 Быстрая проверка готовности к индексации

## ✅ ЧЕК-ЛИСТ (после деплоя)

### 1. robots.txt
**URL:** https://sinergiaplus1.ru/robots.txt
**Статус:** ✅ Готово

### 2. sitemap.xml  
**URL:** https://sinergiaplus1.ru/sitemap.xml
**Статус:** ✅ Готово (55 страниц)

### 3. indexnow-key.txt
**URL:** https://sinergiaplus1.ru/indexnow-key.txt
**Статус:** ✅ Готово

### 4. Яндекс.Вебмастер
- [ ] Добавить сайт
- [ ] Подтвердить права
- [ ] Добавить sitemap
- [ ] Отправить 10-20 URL в переобход

### 5. IndexNow (после деплоя)
```bash
# Все 50 направлений
npx tsx scripts/send-all-to-indexnow.ts

# Или только топ-20
npx tsx scripts/send-top-routes-to-indexnow.ts
```

---

## 📋 Подробная инструкция

См. файл: `INDEXING_CHECKLIST.md`


