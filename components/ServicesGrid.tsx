const services = [
  {
    title: 'Перевозка бумаги',
    description: 'Безопасная транспортировка бумажной продукции различного формата',
  },
  {
    title: 'Перевозка упаковки',
    description: 'Доставка упаковочных материалов с соблюдением всех требований',
  },
  {
    title: 'Перевозка металла',
    description: 'Транспортировка металлопродукции любого типа и объема',
  },
  {
    title: 'Перевозка оборудования',
    description: 'Перевозка промышленного и торгового оборудования с особой осторожностью',
  },
  {
    title: 'Перевозка стройматериалов',
    description: 'Доставка строительных материалов на объекты любой сложности',
  },
  {
    title: 'Перевозка автомобилей',
    description: 'Безопасная транспортировка легковых и грузовых автомобилей',
  },
];

export default function ServicesGrid() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900">
          Наши услуги
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:border-yellow-500 hover:shadow-lg transition-all"
            >
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <a
            href="/services"
            className="inline-block px-6 py-3 bg-yellow-500 text-gray-900 rounded-lg font-semibold hover:bg-yellow-600 transition-colors"
          >
            Все услуги
          </a>
        </div>
      </div>
    </section>
  );
}


