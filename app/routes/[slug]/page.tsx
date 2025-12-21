import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getRouteBySlug, getAllRoutes } from '@/data/routes';
import LeadForm from '@/components/LeadForm';

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const routes = getAllRoutes();
  return routes.map((route) => ({
    slug: route.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const route = getRouteBySlug(params.slug);
  
  if (!route) {
    return {
      title: 'Направление не найдено | СИНЕРГИЯ+',
    };
  }

  return {
    title: `Перевозки ${route.from} → ${route.to} | Логистика Самара | СИНЕРГИЯ+`,
    description: `Грузоперевозки по маршруту ${route.from} → ${route.to}. Подбор транспорта, контроль рейса, договор. Срок доставки: ${route.deliveryTime}. Логистическая компания Самара.`,
    keywords: `перевозки ${route.from} ${route.to}, грузоперевозки ${route.from} ${route.to}, логистика ${route.from} ${route.to}, экспедирование ${route.from} ${route.to}`,
  };
}

export default function RoutePage({ params }: PageProps) {
  const route = getRouteBySlug(params.slug);

  if (!route) {
    notFound();
  }

  return (
    <div className="pt-32 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900">
          {route.title}
        </h1>
        <p className="text-xl text-gray-600 mb-8">{route.description}</p>

        {/* Что перевозим */}
        <div className="mb-12 bg-gray-50 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">Что перевозим</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {route.cargoTypes.map((type, index) => (
              <div key={index} className="flex items-center">
                <span className="text-yellow-500 mr-2">✓</span>
                <span className="text-gray-700">{type}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Документы */}
        <div className="mb-12 bg-gray-50 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">Документы</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
            {route.documents.map((doc, index) => (
              <div key={index} className="flex items-center">
                <span className="text-yellow-500 mr-2">✓</span>
                <span className="text-gray-700">{doc}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">Особенности</h2>
              <ul className="space-y-2">
                {route.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-yellow-500 mr-2">✓</span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">Типы транспорта</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {route.vehicleTypes.map((type, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 p-4 rounded-lg border border-gray-200"
                  >
                    {type}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">Срок доставки</h2>
              <p className="text-xl text-gray-700 font-semibold">{route.deliveryTime}</p>
            </div>

            {route.faq.length > 0 && (
              <div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">Частые вопросы</h2>
                <div className="space-y-4">
                  {route.faq.map((item, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-semibold mb-2 text-gray-900">{item.question}</h3>
                      <p className="text-gray-600">{item.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="lg:col-span-1">
            <div className="bg-gray-50 p-6 rounded-lg sticky top-32">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Оставить заявку</h3>
              <p className="text-gray-600 mb-4 text-sm">
                Заполните форму, и мы рассчитаем стоимость перевозки по маршруту {route.title}
              </p>
              <a
                href="#lead-form"
                className="block w-full px-6 py-3 bg-yellow-500 text-gray-900 rounded-lg font-semibold text-center hover:bg-yellow-600 transition-colors mb-4"
              >
                Перейти к форме
              </a>
              <div className="text-sm text-gray-600">
                <p className="mb-2">Или свяжитесь напрямую:</p>
                <a href="tel:+79278996662" className="text-yellow-500 hover:text-yellow-600">
                  +7 (927) 899-66-62
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Форма заявки внизу страницы */}
      <div className="mt-16">
        <LeadForm presetRoute={route.cities.join(' → ')} />
      </div>
    </div>
  );
}

