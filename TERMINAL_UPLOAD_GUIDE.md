# 📤 Загрузка через терминал на Jino.ru

## 🚀 Быстрая загрузка (автоматически)

### Способ 1: Использовать скрипт

```bash
cd "/Users/mac/sinergia+ /logistics-site"
./upload-via-terminal.sh
```

Скрипт автоматически загрузит архив на сервер.

---

## 📋 Ручная загрузка через SFTP

### Шаг 1: Загрузите архив

```bash
cd "/Users/mac/sinergia+ /logistics-site"

sftp -P 2222 j49565549@debdbd0f4ad5.hosting.myjino.ru
```

Вам будет предложено ввести пароль от аккаунта Jino.

### Шаг 2: В SFTP консоли выполните:

```bash
# Перейдите в корневую директорию
cd /

# Загрузите архив
put logistics-site-upload.tar.gz

# Проверьте, что файл загружен
ls -lh logistics-site-upload.tar.gz

# Выйдите
quit
```

---

## 🔧 Подключение по SSH и установка

### Шаг 1: Подключитесь по SSH

```bash
ssh j49565549@debdbd0f4ad5.hosting.myjino.ru -p 2222
```

Введите пароль.

### Шаг 2: Распакуйте архив

```bash
# Проверьте наличие архива
ls -lh logistics-site-upload.tar.gz

# Распакуйте
tar -xzf logistics-site-upload.tar.gz

# Проверьте файлы
ls -la
```

### Шаг 3: Установите зависимости

```bash
npm install --production
```

Это займет несколько минут.

### Шаг 4: Соберите проект

```bash
npm run build
```

### Шаг 5: Запустите приложение

```bash
npm start
```

Или настройте в панели Jino:
- Start command: `npm start`
- Port: `3000`

---

## 🎯 Все в одной команде (после SSH)

После подключения по SSH выполните все команды:

```bash
# Распаковка
tar -xzf logistics-site-upload.tar.gz && \
# Установка зависимостей
npm install --production && \
# Сборка
npm run build && \
# Проверка
echo "✅ Готово! Теперь настройте переменные окружения в панели Jino и запустите: npm start"
```

---

## ⚙️ Настройка переменных окружения

В панели управления Jino → "Переменные окружения":

```
TELEGRAM_BOT_TOKEN=ваш_токен
TELEGRAM_CHAT_ID=ваш_chat_id
INDEXNOW_KEY=a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0
NODE_ENV=production
```

---

## ✅ Проверка после установки

```bash
# Проверьте, что приложение запускается
npm start

# В другом терминале проверьте доступность
curl http://localhost:3000
```

---

## 📋 Чек-лист

- [ ] Архив загружен через SFTP
- [ ] Подключение по SSH работает
- [ ] Архив распакован
- [ ] `npm install --production` выполнен
- [ ] `npm run build` выполнен
- [ ] Переменные окружения настроены
- [ ] Приложение запущено
- [ ] Сайт доступен

---

**Готово! Следуйте инструкциям выше.** 🚀


