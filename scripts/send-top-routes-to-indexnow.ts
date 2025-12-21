/**
 * Скрипт для отправки ТОП-20 направлений в IndexNow
 * Запуск: npx tsx scripts/send-top-routes-to-indexnow.ts
 */

const BASE_URL = 'https://sinergiaplus1.ru';

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

// Статические страницы
const staticPages = [
  '',
  '/services',
  '/routes',
  '/about',
  '/contacts',
];

// Формируем полный список URL
const urls = [
  ...staticPages.map((path) => `${BASE_URL}${path}`),
  ...topRoutes.map((slug) => `${BASE_URL}/routes/${slug}`),
];

async function sendTopToIndexNow() {
  console.log(`🚀 Отправка ${urls.length} URL (топ-20 направлений) в IndexNow...\n`);

  try {
    const response = await fetch(`${BASE_URL}/api/indexnow`, {
      method: 'POST',
      headers: {
        'Content-Type: application/json',
      },
      body: JSON.stringify({ urls }),
    });

    const result = await response.json();

    if (result.success) {
      console.log('✅ Успешно отправлено в IndexNow!\n');
      console.log('📊 Результаты:', JSON.stringify(result, null, 2));
      console.log(`\n📋 Отправлено URL:`);
      urls.forEach((url, i) => {
        console.log(`   ${i + 1}. ${url}`);
      });
    } else {
      console.error('❌ Ошибка:', result);
    }
  } catch (error) {
    console.error('❌ Ошибка при отправке:', error);
  }
}

sendTopToIndexNow();


