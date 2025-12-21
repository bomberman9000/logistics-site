export default function CallToAction() {
  return (
    <section className="py-16 bg-yellow-500">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">
          Готовы начать?
        </h2>
        <p className="text-xl mb-8 text-gray-800">
          Получите расчет стоимости перевозки за 15 минут
        </p>
        <a
          href="#lead-form"
          className="inline-block px-8 py-4 bg-gray-900 text-white rounded-lg font-semibold text-lg hover:bg-gray-800 transition-colors"
        >
          Оставить заявку
        </a>
      </div>
    </section>
  );
}


