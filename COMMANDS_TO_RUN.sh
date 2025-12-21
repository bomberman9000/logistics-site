#!/bin/bash
# Команды для выполнения вручную в терминале

cd "/Users/mac/sinergia+ /logistics-site"

echo "📦 Добавляю все файлы в git..."
git add .

echo "💾 Создаю коммит..."
git commit -m "Ready for Vercel deploy: 50 routes, SEO optimized, IndexNow ready"

echo ""
echo "✅ Готово! Теперь:"
echo ""
echo "1️⃣ Если репозитория на GitHub еще нет:"
echo "   • Откройте: https://github.com/new"
echo "   • Создайте репозиторий: logistics-site"
echo "   • НЕ добавляйте README"
echo "   • Скопируйте URL"
echo ""
echo "2️⃣ Добавьте remote (замените ВАШ_ЛОГИН на ваш GitHub логин):"
echo "   git remote add origin https://github.com/ВАШ_ЛОГИН/logistics-site.git"
echo ""
echo "3️⃣ Загрузите код:"
echo "   git push -u origin main"
echo ""
echo "4️⃣ Деплой на Vercel:"
echo "   • Откройте: https://vercel.com/"
echo "   • Войдите через GitHub"
echo "   • New Project → Выберите репозиторий → Deploy"
echo ""


