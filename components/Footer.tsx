import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="text-2xl font-bold text-yellow-500">🚛</div>
              <span className="text-xl font-bold text-white">СИНЕРГИЯ+</span>
            </div>
            <p className="mb-4 text-sm">
              Грузоперевозки по РФ и СНГ. Договор, контроль, сроки — без сюрпризов.
            </p>
            <div className="space-y-2 text-sm">
              <p>ООО «Синергия Плюс»</p>
              <p>443124, г. Самара, Просека 5-я, д. 121, кв. 131</p>
              <p>ИНН: 6316267675</p>
              <p>КПП: 631601001</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Навигация</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-yellow-500 transition-colors">
                  Главная
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-yellow-500 transition-colors">
                  Услуги
                </Link>
              </li>
              <li>
                <Link href="/routes" className="hover:text-yellow-500 transition-colors">
                  Направления
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-yellow-500 transition-colors">
                  О компании
                </Link>
              </li>
              <li>
                <Link href="/contacts" className="hover:text-yellow-500 transition-colors">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h3 className="text-white font-semibold mb-4">Контакты</h3>
            <div className="space-y-3 text-sm">
              <div>
                <p className="text-white font-medium mb-1">Телефон</p>
                <a href="tel:+79278996662" className="hover:text-yellow-500 transition-colors">
                  +7 (927) 899-66-62
                </a>
              </div>
              <div>
                <p className="text-white font-medium mb-1">Email</p>
                <a href="mailto:info@sinergiaplus1.ru" className="hover:text-yellow-500 transition-colors">
                  info@sinergiaplus1.ru
                </a>
              </div>
              <div>
                <p className="text-white font-medium mb-2">Мессенджеры</p>
                <div className="flex space-x-4">
                  <a
                    href="https://t.me/sinergia_plus"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-yellow-500 transition-colors"
                    aria-label="Telegram"
                  >
                    📱 Telegram
                  </a>
                  <a
                    href="https://wa.me/79278996662"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-yellow-500 transition-colors"
                    aria-label="WhatsApp"
                  >
                    💬 WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} СИНЕРГИЯ+. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}

