import { NextRequest, NextResponse } from 'next/server';

// IndexNow API endpoint для уведомления поисковых систем об обновлениях
export async function POST(request: NextRequest) {
  try {
    const { urls } = await request.json();

    if (!urls || !Array.isArray(urls) || urls.length === 0) {
      return NextResponse.json(
        { error: 'URLs array is required' },
        { status: 400 }
      );
    }

    // IndexNow поддерживает максимум 10,000 URL за один запрос
    const chunks = [];
    for (let i = 0; i < urls.length; i += 10000) {
      chunks.push(urls.slice(i, i + 10000));
    }

    const baseUrl = 'https://sinergiaplus1.ru';
    const indexNowEndpoint = 'https://yandex.com/indexnow';
    
    const results = [];

    for (const chunk of chunks) {
      // Формируем полные URL
      const fullUrls = chunk.map((url: string) => {
        if (url.startsWith('http')) return url;
        return `${baseUrl}${url.startsWith('/') ? url : `/${url}`}`;
      });

      try {
        // Отправляем в IndexNow (Yandex)
        // IndexNow использует формат: POST с JSON, где urlList - массив URL
        const response = await fetch(indexNowEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            host: baseUrl.replace('https://', ''),
            key: process.env.INDEXNOW_KEY || 'a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0',
            keyLocation: `${baseUrl}/indexnow-key.txt`,
            urlList: fullUrls,
          }),
        });

        results.push({
          status: response.status,
          urlsCount: fullUrls.length,
          success: response.ok,
        });
      } catch (error) {
        results.push({
          error: error instanceof Error ? error.message : 'Unknown error',
          urlsCount: fullUrls.length,
        });
      }
    }

    return NextResponse.json({
      success: true,
      results,
      totalUrls: urls.length,
    });
  } catch (error) {
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}

