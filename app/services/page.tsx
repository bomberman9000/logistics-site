import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Услуги логистики | Логистическая компания Самара | СИНЕРГИЯ+',
  description: 'Услуги логистики в Самаре. Перевозка бумаги, упаковки, металла, оборудования, стройматериалов, автомобилей. Работа по договору, УПД, ЭДО.',
  keywords: 'услуги логистики, грузоперевозки Самара, перевозка грузов, экспедирование',
};

const services = [
  {
    title: 'Перевозка бумаги',
    description: 'Безопасная транспортировка бумажной продукции различного формата. Соблюдение условий хранения и транспортировки.',
    features: ['Защита от влаги', 'Соблюдение температурного режима', 'Аккуратная погрузка/разгрузка'],
  },
  {
    title: 'Перевозка упаковки',
    description: 'Доставка упаковочных материалов с соблюдением всех требований. Работа с картоном, пленкой, стрейч-пленкой.',
    features: ['Различные типы упаковки', 'Габаритные грузы', 'Срочная доставка'],
  },
  {
    title: 'Перевозка металла',
    description: 'Транспортировка металлопродукции любого типа и объема. От листового металла до металлоконструкций.',
    features: ['Листовой металл', 'Металлоконструкции', 'Арматура', 'Прокат'],
  },
  {
    title: 'Перевозка оборудования',
    description: 'Перевозка промышленного и торгового оборудования с особой осторожностью. Опыт работы с хрупким оборудованием.',
    features: ['Промышленное оборудование', 'Торговое оборудование', 'Хрупкие грузы', 'Специальная упаковка'],
  },
  {
    title: 'Перевозка стройматериалов',
    description: 'Доставка строительных материалов на объекты любой сложности. От кирпича до ЖБИ.',
    features: ['Кирпич, блоки', 'ЖБИ', 'Сухие смеси', 'Кровельные материалы'],
  },
  {
    title: 'Перевозка автомобилей',
    description: 'Безопасная транспортировка легковых и грузовых автомобилей. Специализированный транспорт.',
    features: ['Автовозы', 'Низкорамные платформы', 'Страхование', 'Безопасная фиксация'],
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-32 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl font-bold text-center mb-4 text-gray-900">
          Наши услуги
        </h1>
        <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Полный спектр услуг по грузоперевозкам. Работаем с различными типами грузов и обеспечиваем безопасную доставку.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200"
            >
              <h2 className="text-2xl font-semibold mb-3 text-gray-900">{service.title}</h2>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-yellow-500 mr-2">✓</span>
                    <span className="text-gray-600 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

