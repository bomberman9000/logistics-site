#!/bin/bash
# Скрипт для загрузки архива на Jino.ru через SFTP

echo "📤 Загрузка архива на Jino.ru через SFTP..."
echo ""

# Путь к архиву
ARCHIVE_FILE="logistics-site-upload.tar.gz"

# Данные подключения
HOST="debdbd0f4ad5.hosting.myjino.ru"
PORT="2222"
USER="j49565549"
REMOTE_DIR="/"

# Проверка наличия архива
if [ ! -f "$ARCHIVE_FILE" ]; then
    echo "❌ Ошибка: Файл $ARCHIVE_FILE не найден!"
    echo "💡 Создайте архив: ./create-upload-package.sh"
    exit 1
fi

echo "📋 Информация:"
echo "   Файл: $ARCHIVE_FILE"
echo "   Размер: $(du -h "$ARCHIVE_FILE" | cut -f1)"
echo "   Сервер: $HOST:$PORT"
echo "   Пользователь: $USER"
echo ""

echo "🚀 Начинаю загрузку..."
echo "💡 Вам будет предложено ввести пароль от аккаунта Jino"
echo ""

# Загрузка через SFTP
sftp -P "$PORT" "$USER@$HOST" << EOF
cd $REMOTE_DIR
put $ARCHIVE_FILE
ls -lh $ARCHIVE_FILE
quit
EOF

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Архив успешно загружен на сервер!"
    echo ""
    echo "📋 Следующие шаги:"
    echo "1. Подключитесь по SSH:"
    echo "   ssh $USER@$HOST -p $PORT"
    echo ""
    echo "2. Распакуйте архив:"
    echo "   tar -xzf $ARCHIVE_FILE"
    echo ""
    echo "3. Установите зависимости:"
    echo "   npm install --production"
    echo ""
    echo "4. Соберите проект:"
    echo "   npm run build"
    echo ""
    echo "5. Запустите приложение:"
    echo "   npm start"
    echo ""
else
    echo ""
    echo "❌ Ошибка при загрузке файла!"
    echo "💡 Проверьте подключение и пароль"
fi


