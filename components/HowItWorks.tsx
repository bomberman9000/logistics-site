const steps = [
  {
    number: '1',
    title: 'Получаем параметры груза',
    description: 'Вы указываете маршрут, тип груза, вес и объем',
  },
  {
    number: '2',
    title: 'Даём ставку и сроки',
    description: 'Рассчитываем стоимость и согласовываем сроки доставки',
  },
  {
    number: '3',
    title: 'Заключаем договор',
    description: 'Оформляем все документы: договор, УПД, ЭДО',
  },
  {
    number: '4',
    title: 'Ведём рейс + закрывающие',
    description: 'Контролируем доставку и предоставляем закрывающие документы',
  },
];

export default function HowItWorks() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900">
          Как мы работаем
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-yellow-500 text-gray-900 rounded-full flex items-center justify-center font-bold text-xl mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-yellow-500 transform -translate-y-1/2">
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-8 border-l-yellow-500 border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


