#!/bin/bash
# Скрипт для загрузки кода на GitHub

echo "🚀 Загрузка кода на GitHub..."
echo ""

cd "/Users/mac/sinergia+ /logistics-site"

# Проверяем, существует ли remote
if git remote get-url origin &>/dev/null; then
    echo "✅ Remote 'origin' уже настроен"
    git remote -v
else
    echo "📌 Добавляю remote..."
    git remote add origin https://github.com/bomberman9000/logistics-site.git
    git remote -v
fi

echo ""
echo "📤 Загружаю код на GitHub..."
echo ""

# Загружаем код
git push -u origin main

echo ""
echo "✅ Готово! Проверьте: https://github.com/bomberman9000/logistics-site"

