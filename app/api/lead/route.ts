import { NextRequest, NextResponse } from 'next/server';

interface LeadData {
  name: string;
  phone: string;
  route: string;
  cargoType: string;
  weight: string;
  volume: string;
  comment: string;
}

export async function POST(request: NextRequest) {
  try {
    const data: LeadData = await request.json();

    // Валидация
    if (!data.name || !data.phone || !data.route) {
      return NextResponse.json(
        { error: 'Заполните обязательные поля' },
        { status: 400 }
      );
    }

    // Получаем токен и chat_id из переменных окружения
    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!botToken || !chatId) {
      console.error('TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID not set');
      return NextResponse.json(
        { error: 'Сервис временно недоступен' },
        { status: 500 }
      );
    }

    // Формируем сообщение для Telegram
    const message = `
🎯 Новая заявка с сайта СИНЕРГИЯ+

👤 Имя: ${data.name}
📞 Телефон: ${data.phone}
📍 Маршрут: ${data.route}
📦 Тип груза: ${data.cargoType || 'Не указан'}
⚖️ Вес: ${data.weight || 'Не указан'} кг
📏 Объем: ${data.volume || 'Не указан'} м³
💬 Комментарий: ${data.comment || 'Нет комментария'}

⏰ ${new Date().toLocaleString('ru-RU', { timeZone: 'Europe/Moscow' })}
    `.trim();

    // Отправляем в Telegram
    const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;
    const response = await fetch(telegramUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: 'HTML',
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Telegram API error:', errorData);
      return NextResponse.json(
        { error: 'Ошибка отправки сообщения' },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Error processing lead:', error);
    return NextResponse.json(
      { error: 'Внутренняя ошибка сервера' },
      { status: 500 }
    );
  }
}


