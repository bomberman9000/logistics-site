# 🚀 Деплой на Vercel - делаем прямо сейчас!

## ✅ ШАГ 1: Подготовка кода (выполните в терминале)

Откройте терминал и выполните:

```bash
cd "/Users/mac/sinergia+ /logistics-site"

# Добавить все файлы
git add .

# Создать коммит
git commit -m "Ready for Vercel deploy: 50 routes, SEO optimized"

# Проверить статус
git status
```

---

## 📤 ШАГ 2: Создать репозиторий на GitHub

1. Откройте: **https://github.com/new**
2. Repository name: `logistics-site`
3. Описание (опционально): "Логистическая компания СИНЕРГИЯ+"
4. Выберите: **Public** или **Private**
5. ❌ НЕ добавляйте README (он уже есть)
6. ❌ НЕ добавляйте .gitignore (он уже есть)
7. Нажмите **"Create repository"**

---

## 🔗 ШАГ 3: Подключить к GitHub

После создания репозитория GitHub покажет команды. Выполните:

```bash
cd "/Users/mac/sinergia+ /logistics-site"

# Добавить remote (замените ВАШ_ЛОГИН на ваш GitHub логин!)
git remote add origin https://github.com/ВАШ_ЛОГИН/logistics-site.git

# Или если используется SSH:
# git remote add origin git@github.com:ВАШ_ЛОГИН/logistics-site.git

# Загрузить код
git branch -M main
git push -u origin main
```

Введите ваш GitHub логин/пароль если попросит.

---

## 🚀 ШАГ 4: Деплой на Vercel (2 минуты!)

1. Откройте: **https://vercel.com/**
2. Нажмите **"Sign Up"** → выберите **"Continue with GitHub"**
3. Авторизуйтесь через GitHub
4. Нажмите **"New Project"**
5. Выберите репозиторий **`logistics-site`**
6. Нажмите **"Deploy"**

**ГОТОВО!** Через 2 минуты сайт будет работать!

---

## ⚙️ ШАГ 5: Настроить переменные окружения

1. В проекте на Vercel → **Settings** → **Environment Variables**
2. Добавьте переменные:

| Key | Value |
|-----|-------|
| `TELEGRAM_BOT_TOKEN` | ваш_токен_от_BotFather |
| `TELEGRAM_CHAT_ID` | ваш_chat_id_от_userinfobot |
| `INDEXNOW_KEY` | `a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0` |
| `NODE_ENV` | `production` |

3. Выберите **Production, Preview, Development** для всех
4. Нажмите **"Save"**

---

## 🌐 ШАГ 6: Добавить домен (если нужен)

1. В проекте → **Settings** → **Domains**
2. Добавьте: `sinergiaplus1.ru`
3. Vercel покажет DNS записи (обычно CNAME)
4. Идите к регистратору домена и настройте DNS:
   - Добавьте CNAME запись, как указано в Vercel
5. Подождите 5-10 минут для активации

---

## ✅ Проверка после деплоя

После деплоя проверьте:

```bash
# Замените YOUR_PROJECT на ваш проект
curl https://YOUR_PROJECT.vercel.app/robots.txt
curl https://YOUR_PROJECT.vercel.app/sitemap.xml
curl https://YOUR_PROJECT.vercel.app/indexnow-key.txt
```

Или откройте в браузере:
- `https://YOUR_PROJECT.vercel.app/`
- `https://YOUR_PROJECT.vercel.app/routes`

---

## 🎯 После деплоя - настройка SEO

1. Настройте Яндекс.Вебмастер (см. `YANDEX_WEBMASTER_CHECKLIST.md`)
2. Отправьте URL через IndexNow
3. Настройте Яндекс.Бизнес

---

## 🆘 Если что-то не работает

### Ошибка при git push:
- Проверьте, что репозиторий создан на GitHub
- Проверьте правильность URL (ваш логин)
- Попробуйте использовать SSH ключ

### Ошибка при деплое на Vercel:
- Проверьте, что все файлы загружены на GitHub
- Проверьте логи сборки в Vercel
- Убедитесь, что `package.json` корректен

---

## 📋 Чек-лист

- [ ] Код закоммичен
- [ ] Репозиторий создан на GitHub
- [ ] Код загружен на GitHub (`git push`)
- [ ] Проект создан на Vercel
- [ ] Деплой прошел успешно
- [ ] Переменные окружения настроены
- [ ] Сайт открывается
- [ ] robots.txt работает
- [ ] sitemap.xml работает (55 страниц)

---

**Все готово! Выполняйте шаги по порядку.** 🚀


