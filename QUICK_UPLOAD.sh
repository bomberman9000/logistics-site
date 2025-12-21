#!/bin/bash
# Быстрая загрузка и установка на Jino.ru

echo "🚀 Загрузка и установка проекта на Jino.ru"
echo ""

HOST="debdbd0f4ad5.hosting.myjino.ru"
PORT="2222"
USER="j49565549"
ARCHIVE="logistics-site-upload.tar.gz"

# Шаг 1: Загрузка через SFTP
echo "📤 Шаг 1: Загрузка архива..."
echo "💡 Введите пароль от аккаунта Jino"
echo ""

sftp -P "$PORT" "$USER@$HOST" << EOF
cd /
put $ARCHIVE
ls -lh $ARCHIVE
quit
EOF

if [ $? -ne 0 ]; then
    echo "❌ Ошибка при загрузке!"
    exit 1
fi

echo ""
echo "✅ Архив загружен!"
echo ""
echo "📋 Теперь подключитесь по SSH и выполните:"
echo ""
echo "ssh $USER@$HOST -p $PORT"
echo ""
echo "Затем в SSH выполните:"
echo ""
echo "tar -xzf $ARCHIVE && npm install --production && npm run build"
echo ""
echo "Или запустите полный скрипт установки:"
echo "./install-on-server.sh"


