export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white pt-32 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Логистическая компания Самара
          </h1>
          <p className="text-xl sm:text-2xl mb-4 text-gray-300">
            Грузоперевозки по РФ и СНГ
          </p>
          <p className="text-lg sm:text-xl mb-8 text-gray-400">
            Договор, контроль, сроки — без сюрпризов.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#lead-form"
              className="px-8 py-4 bg-yellow-500 text-gray-900 rounded-lg font-semibold text-lg hover:bg-yellow-600 transition-colors"
            >
              Рассчитать перевозку
            </a>
            <a
              href="#lead-form"
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold text-lg hover:bg-white hover:text-gray-900 transition-colors"
            >
              Оставить заявку
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

