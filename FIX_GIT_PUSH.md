# 🔧 Исправление проблемы с git push

## Проблема
При выполнении `git push` возникает ошибка SSL сертификатов.

## ✅ Remote уже настроен правильно!
```
origin  https://github.com/bomberman9000/logistics-site.git
```

## 🔧 Решения

### Решение 1: Использовать SSH (РЕКОМЕНДУЕТСЯ)

1. **Проверьте, есть ли SSH ключ:**
   ```bash
   ls -la ~/.ssh/id_*.pub
   ```

2. **Если нет ключа, создайте:**
   ```bash
   ssh-keygen -t ed25519 -C "your_email@example.com"
   # Нажмите Enter для всех вопросов
   ```

3. **Добавьте публичный ключ на GitHub:**
   ```bash
   cat ~/.ssh/id_ed25519.pub
   # Скопируйте вывод
   # Откройте: https://github.com/settings/keys
   # New SSH key → вставьте ключ → Save
   ```

4. **Измените remote на SSH:**
   ```bash
   cd "/Users/mac/sinergia+ /logistics-site"
   git remote set-url origin git@github.com:bomberman9000/logistics-site.git
   ```

5. **Загрузите код:**
   ```bash
   git push -u origin main
   ```

---

### Решение 2: Использовать GitHub CLI (gh)

1. **Установите GitHub CLI:**
   ```bash
   brew install gh
   ```

2. **Авторизуйтесь:**
   ```bash
   gh auth login
   ```

3. **Загрузите код:**
   ```bash
   cd "/Users/mac/sinergia+ /logistics-site"
   git push -u origin main
   ```

---

### Решение 3: Временно отключить проверку SSL (небезопасно, только для теста)

```bash
cd "/Users/mac/sinergia+ /logistics-site"
git config http.sslVerify false
git push -u origin main
git config http.sslVerify true  # Включите обратно!
```

---

### Решение 4: Настроить SSL сертификаты для macOS

```bash
# Установите сертификаты через Homebrew
brew install ca-certificates

# Или скачайте вручную:
# https://curl.se/ca/cacert.pem
# Сохраните в: /usr/local/etc/openssl/cert.pem
```

---

## 💡 Самый простой способ

Просто выполните команды в **вашем терминале** (не через Cursor):

```bash
cd "/Users/mac/sinergia+ /logistics-site"
git push -u origin main
```

В обычном терминале SSL должен работать нормально.

---

## ✅ После успешного push

Код будет доступен по адресу:
**https://github.com/bomberman9000/logistics-site**

Затем можно деплоить на Vercel!

