import { Metadata } from 'next';
import LeadForm from '@/components/LeadForm';

export const metadata: Metadata = {
  title: 'Контакты | Логистическая компания Самара | СИНЕРГИЯ+',
  description: 'Контакты логистической компании СИНЕРГИЯ+ в Самаре. Телефон: +7 (927) 899-66-62. Мессенджеры, форма обратной связи.',
  keywords: 'контакты логистической компании Самара, телефон грузоперевозки Самара',
};

export default function ContactsPage() {
  return (
    <div className="pt-32 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl font-bold text-center mb-12 text-gray-900">
          Контакты
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">Свяжитесь с нами</h2>
              <p className="text-gray-600 mb-6">
                Мы работаем круглосуточно. Свяжитесь с нами любым удобным способом.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Телефон</h3>
                <a
                  href="tel:+79278996662"
                  className="text-2xl text-yellow-500 hover:text-yellow-600 transition-colors"
                >
                  +7 (927) 899-66-62
                </a>
                <p className="text-gray-600 mt-2">Работаем 24/7</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Email</h3>
                <a
                  href="mailto:info@sinergiaplus1.ru"
                  className="text-xl text-yellow-500 hover:text-yellow-600 transition-colors"
                >
                  info@sinergiaplus1.ru
                </a>
                <p className="text-gray-600 mt-2 text-sm">Напишите нам, и мы ответим в течение рабочего дня</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Мессенджеры</h3>
                <div className="space-y-3">
                  <a
                    href="https://t.me/sinergia_plus"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-gray-700 hover:text-yellow-500 transition-colors"
                  >
                    <span className="text-2xl">📱</span>
                    <span className="font-medium">Telegram</span>
                  </a>
                  <a
                    href="https://wa.me/79278996662"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-gray-700 hover:text-yellow-500 transition-colors"
                  >
                    <span className="text-2xl">💬</span>
                    <span className="font-medium">WhatsApp</span>
                  </a>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">География работы</h3>
                <p className="text-gray-600 mb-2">Россия, СНГ, Европа</p>
                <p className="text-gray-900 font-semibold mb-4">Регион: Самара и Самарская область</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Email</h3>
                <a
                  href="mailto:info@sinergiaplus1.ru"
                  className="text-xl text-yellow-500 hover:text-yellow-600 transition-colors"
                >
                  info@sinergiaplus1.ru
                </a>
                <p className="text-gray-600 mt-2 text-sm">Напишите нам, и мы ответим в течение рабочего дня</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Реквизиты</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <p><strong>ООО «Синергия Плюс»</strong></p>
                  <p>443124, г. Самара, Просека 5-я, д. 121, кв. 131</p>
                  <p>ИНН: 6316267675</p>
                  <p>КПП: 631601001</p>
                  <p className="mt-4 pt-4 border-t border-gray-200">
                    <strong>Банковские реквизиты:</strong>
                  </p>
                  <p>Р/с: 40702810602500129367</p>
                  <p>Банк: ТОЧКА ПАО БАНКА "ФК ОТКРЫТИЕ"</p>
                  <p>БИК: 044525999</p>
                  <p>Корр. счёт: 30101810845250000999</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <LeadForm />
          </div>
        </div>
      </div>
    </div>
  );
}

