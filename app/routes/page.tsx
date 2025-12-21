import { Metadata } from 'next';
import Link from 'next/link';
import { getAllRoutes } from '@/data/routes';

export const metadata: Metadata = {
  title: 'Грузоперевозки по направлениям | 50+ маршрутов из Самары | СИНЕРГИЯ+',
  description: 'Грузоперевозки по 50+ направлениям из Самары: Москва, Санкт-Петербург, Казань, Уфа, Екатеринбург, Новосибирск, Поволжье, Урал, Сибирь, СНГ. Регулярные рейсы, контроль доставки.',
  keywords: 'грузоперевозки по направлениям, перевозки из Самары, перевозки в Самару, логистика Самара, перевозки Москва Самара, перевозки СПб Самара',
};

export default function RoutesPage() {
  const routes = getAllRoutes();

  return (
    <div className="pt-32 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl font-bold text-center mb-4 text-gray-900">
          Направления перевозок
        </h1>
        <p className="text-xl text-center text-gray-600 mb-4 max-w-3xl mx-auto">
          Регулярные рейсы по 50+ популярным направлениям. Работаем по всей России и СНГ.
        </p>
        <p className="text-center text-gray-500 mb-12 max-w-2xl mx-auto">
          Выберите маршрут и получите точный расчет стоимости перевозки. Все перевозки осуществляются по договору с полным пакетом документов.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {routes.map((route) => (
            <Link
              key={route.slug}
              href={`/routes/${route.slug}`}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all border border-gray-200 hover:border-yellow-500"
            >
              <h2 className="text-2xl font-semibold mb-3 text-gray-900">{route.title}</h2>
              <p className="text-gray-600 mb-4">{route.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">Срок: {route.deliveryTime}</span>
                <span className="text-yellow-500 font-semibold">Подробнее →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

