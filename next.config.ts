import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Для Jino.ru - используем standalone режим для лучшей производительности
  // Если Jino не поддерживает Node.js сервер, можно использовать 'export'
  // output: 'standalone',
  
  // Настройки для production
  compress: true,
  poweredByHeader: false,
  
  // Оптимизация изображений (если будут использоваться)
  images: {
    formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;
