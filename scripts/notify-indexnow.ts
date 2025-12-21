/**
 * Скрипт для массовой отправки URL в IndexNow
 * Запуск: npx tsx scripts/notify-indexnow.ts
 */

const BASE_URL = 'https://sinergiaplus1.ru';

// Статические страницы
const staticPages = [
  '',
  '/services',
  '/routes',
  '/about',
  '/contacts',
];

// Топ-20 направлений для быстрой индексации
const topRoutes = [
  'samara-moscow',
  'moscow-samara',
  'samara-sankt-peterburg',
  'sankt-peterburg-samara',
  'samara-kazan',
  'kazan-samara',
  'samara-ufa',
  'ufa-samara',
  'samara-ekaterinburg',
  'ekaterinburg-samara',
  'samara-tolyatti',
  'samara-nizhny-novgorod',
  'samara-saratov',
  'samara-penza',
  'samara-ulyanovsk',
  'samara-orenburg',
  'samara-cheboksary',
  'samara-chelyabinsk',
  'samara-perm',
  'samara-voronezh',
];

// Формируем полный список URL
const urls = [
  ...staticPages.map((path) => `${BASE_URL}${path}`),
  ...topRoutes.map((slug) => `${BASE_URL}/routes/${slug}`),
];

async function notifyIndexNow() {
  console.log(`🚀 Отправка ${urls.length} URL в IndexNow...\n`);

  try {
    const response = await fetch(`${BASE_URL}/api/indexnow`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ urls }),
    });

    const result = await response.json();

    if (result.success) {
      console.log('✅ Успешно отправлено в IndexNow!\n');
      console.log('Результаты:', JSON.stringify(result, null, 2));
    } else {
      console.error('❌ Ошибка:', result);
    }
  } catch (error) {
    console.error('❌ Ошибка при отправке:', error);
  }
}

notifyIndexNow();


