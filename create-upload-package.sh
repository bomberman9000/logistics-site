#!/bin/bash
# Скрипт для создания архива для загрузки на Jino.ru

echo "📦 Создание архива для загрузки на Jino.ru..."

# Переходим в директорию проекта
cd "$(dirname "$0")"

# Имя архива с датой
ARCHIVE_NAME="logistics-site-$(date +%Y%m%d-%H%M%S).tar.gz"

# Создаем временную директорию для подготовки файлов
TEMP_DIR=$(mktemp -d)
echo "📁 Временная директория: $TEMP_DIR"

# Копируем нужные файлы и папки
echo "📋 Копирование файлов..."

# Копируем основные папки
cp -r app "$TEMP_DIR/"
cp -r components "$TEMP_DIR/"
cp -r data "$TEMP_DIR/"
cp -r public "$TEMP_DIR/"
cp -r scripts "$TEMP_DIR/"

# Копируем конфигурационные файлы
cp package.json "$TEMP_DIR/"
cp package-lock.json "$TEMP_DIR/"
cp tsconfig.json "$TEMP_DIR/"
cp next.config.ts "$TEMP_DIR"
cp postcss.config.mjs "$TEMP_DIR/"
cp eslint.config.mjs "$TEMP_DIR/"
cp .gitignore "$TEMP_DIR/"
cp .jino.config "$TEMP_DIR/"

# Создаем архив
echo "🗜️  Создание архива..."
cd "$TEMP_DIR"
tar -czf "../$ARCHIVE_NAME" .

# Перемещаем архив обратно в директорию проекта
mv "../$ARCHIVE_NAME" "$(dirname "$0")/"

# Удаляем временную директорию
rm -rf "$TEMP_DIR"

echo "✅ Архив создан: $ARCHIVE_NAME"
echo "📊 Размер архива:"
du -h "$ARCHIVE_NAME"

echo ""
echo "📤 Следующие шаги:"
echo "1. Загрузите архив $ARCHIVE_NAME на сервер Jino через SFTP/FTP"
echo "2. Распакуйте архив в корневую директорию"
echo "3. Выполните: npm install --production"
echo "4. Выполните: npm run build"
echo "5. Настройте переменные окружения в панели Jino"
echo "6. Запустите: npm start"
echo ""
echo "📖 Подробная инструкция: UPLOAD_TO_JINO.md"


