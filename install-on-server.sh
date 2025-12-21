#!/bin/bash
# Скрипт для выполнения на сервере Jino после загрузки архива

ARCHIVE="logistics-site-upload.tar.gz"

echo "🔧 Установка проекта на сервере..."
echo ""

# Проверка наличия архива
if [ ! -f "$ARCHIVE" ]; then
    echo "❌ Ошибка: Файл $ARCHIVE не найден!"
    echo "💡 Сначала загрузите архив через SFTP"
    exit 1
fi

# Распаковка
echo "📦 Шаг 1: Распаковка архива..."
tar -xzf "$ARCHIVE"
if [ $? -ne 0 ]; then
    echo "❌ Ошибка при распаковке!"
    exit 1
fi
echo "✅ Распаковано"
echo ""

# Установка зависимостей
echo "📥 Шаг 2: Установка зависимостей..."
npm install --production
if [ $? -ne 0 ]; then
    echo "❌ Ошибка при установке зависимостей!"
    exit 1
fi
echo "✅ Зависимости установлены"
echo ""

# Сборка проекта
echo "🔨 Шаг 3: Сборка проекта..."
npm run build
if [ $? -ne 0 ]; then
    echo "❌ Ошибка при сборке!"
    exit 1
fi
echo "✅ Проект собран"
echo ""

# Очистка
echo "🧹 Шаг 4: Очистка..."
rm -f "$ARCHIVE"
echo "✅ Архив удален"
echo ""

echo "✅ Установка завершена!"
echo ""
echo "📋 Следующие шаги:"
echo "1. Настройте переменные окружения в панели Jino:"
echo "   - TELEGRAM_BOT_TOKEN"
echo "   - TELEGRAM_CHAT_ID"
echo "   - INDEXNOW_KEY=a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0"
echo "   - NODE_ENV=production"
echo ""
echo "2. Запустите приложение:"
echo "   npm start"
echo ""
echo "   Или настройте в панели Jino:"
echo "   Start command: npm start"
echo "   Port: 3000"


