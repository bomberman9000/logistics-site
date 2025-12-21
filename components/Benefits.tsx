const benefits = [
  {
    icon: '📄',
    title: 'Работа по договору',
    description: 'УПД / ЭДО. Все документы в порядке.',
  },
  {
    icon: '📞',
    title: 'Контроль рейса 24/7',
    description: 'Связь с водителем и отслеживание груза в реальном времени.',
  },
  {
    icon: '✅',
    title: 'Проверенные перевозчики',
    description: 'Страхование груза. Только надежные партнеры.',
  },
  {
    icon: '⚡',
    title: 'Быстрый подбор машины',
    description: 'Найдем подходящий транспорт за 1–2 часа.',
  },
];

export default function Benefits() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900">
          Почему выбирают нас
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


