/**
 * Скрипт для отправки ВСЕХ 50 URL направлений в IndexNow
 * Запуск: npx tsx scripts/send-all-to-indexnow.ts
 */

const BASE_URL = 'https://sinergiaplus1.ru';

// Импортируем все маршруты
async function getAllRoutes() {
  // В Node.js окружении нужно использовать динамический импорт
  const { getAllRoutes } = await import('../data/routes.ts');
  return getAllRoutes();
}

async function sendAllToIndexNow() {
  console.log('🚀 Подготовка всех URL для IndexNow...\n');

  try {
    // Получаем все маршруты
    const routes = await getAllRoutes();
    
    // Статические страницы
    const staticPages = [
      '',
      '/services',
      '/routes',
      '/about',
      '/contacts',
    ];

    // Формируем полный список URL
    const staticUrls = staticPages.map((path) => `${BASE_URL}${path}`);
    const routeUrls = routes.map((route) => `${BASE_URL}/routes/${route.slug}`);
    const allUrls = [...staticUrls, ...routeUrls];

    console.log(`📊 Всего URL: ${allUrls.length}`);
    console.log(`   - Статических: ${staticUrls.length}`);
    console.log(`   - Направлений: ${routeUrls.length}\n`);

    // Отправляем в IndexNow
    console.log('📤 Отправка в IndexNow...\n');

    const response = await fetch(`${BASE_URL}/api/indexnow`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ urls: allUrls }),
    });

    const result = await response.json();

    if (result.success) {
      console.log('✅ Успешно отправлено в IndexNow!\n');
      console.log('📊 Результаты:');
      console.log(`   - Всего URL: ${result.totalUrls}`);
      console.log(`   - Чанков отправлено: ${result.results.length}`);
      result.results.forEach((r: any, i: number) => {
        console.log(`   - Чанк ${i + 1}: ${r.urlsCount} URL, статус: ${r.success ? '✅' : '❌'}`);
      });
    } else {
      console.error('❌ Ошибка:', result);
    }
  } catch (error) {
    console.error('❌ Ошибка при отправке:', error);
  }
}

sendAllToIndexNow();


