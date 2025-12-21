import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'О компании | Логистическая компания Самара | СИНЕРГИЯ+',
  description: 'О логистической компании СИНЕРГИЯ+ в Самаре. Опыт работы, преимущества, гарантии качества. Работаем по договору, УПД, ЭДО.',
  keywords: 'логистическая компания Самара, о компании, транспортная компания Самара',
};

export default function AboutPage() {
  return (
    <div className="pt-32 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl font-bold text-center mb-12 text-gray-900">
          О компании
        </h1>

        <div className="max-w-4xl mx-auto space-y-8">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">Наша миссия</h2>
            <p className="text-gray-700 leading-relaxed">
              ООО «Синергия Плюс» — это надежный партнер в сфере грузоперевозок. Мы специализируемся на перевозке 
              различных видов грузов по территории России, стран СНГ и Европы. Наша цель — обеспечить 
              безопасную и своевременную доставку ваших грузов с соблюдением всех договорных обязательств.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              Компания работает в Самаре и обеспечивает качественные логистические услуги с соблюдением всех 
              требований законодательства и индивидуальным подходом к каждому клиенту.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">Почему выбирают нас</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-yellow-500 mr-3 text-xl">✓</span>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Опыт работы</h3>
                  <p className="text-gray-600">Более 10 лет на рынке грузоперевозок</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-3 text-xl">✓</span>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Современный автопарк</h3>
                  <p className="text-gray-600">Различные типы транспорта для любых грузов</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-3 text-xl">✓</span>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Опытные водители</h3>
                  <p className="text-gray-600">Профессиональные водители с большим стажем</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-3 text-xl">✓</span>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Страхование грузов</h3>
                  <p className="text-gray-600">Полная защита ваших грузов</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">Наши гарантии</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Мы гарантируем профессиональный подход, индивидуальный расчёт стоимости и ответственное 
              отношение к каждому заказу. Все перевозки осуществляются по договору с полным пакетом 
              документов (УПД, ЭДО).
            </p>
            <p className="text-gray-700 leading-relaxed">
              Контроль рейса осуществляется 24/7, вы всегда будете в курсе местоположения вашего груза.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">Реквизиты компании</h2>
            <div className="space-y-3 text-sm text-gray-700">
              <p><strong>ООО «Синергия Плюс»</strong></p>
              <p>443124, г. Самара, Просека 5-я, д. 121, кв. 131</p>
              <p>ИНН: 6316267675</p>
              <p>КПП: 631601001</p>
              <p className="mt-4 pt-4 border-t border-gray-200">
                <strong>Банковские реквизиты:</strong>
              </p>
              <p>Расчётный счёт: 40702810602500129367</p>
              <p>Банк: ТОЧКА ПАО БАНКА "ФК ОТКРЫТИЕ"</p>
              <p>БИК: 044525999</p>
              <p>Корр. счёт: 30101810845250000999</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

