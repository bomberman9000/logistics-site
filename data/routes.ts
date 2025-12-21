export interface Route {
  slug: string;
  from: string;
  to: string;
  title: string;
  cities: string[];
  description: string;
  features: string[];
  vehicleTypes: string[];
  deliveryTime: string;
  cargoTypes: string[];
  documents: string[];
  faq: {
    question: string;
    answer: string;
  }[];
}

// Базовые данные для генерации направлений
const routeTemplates = [
  // БАЗА (ядро)
  { from: 'Самара', to: 'Москва', deliveryTime: '1–2 дня', days: 1 },
  { from: 'Москва', to: 'Самара', deliveryTime: '1–2 дня', days: 1 },
  { from: 'Самара', to: 'Санкт-Петербург', deliveryTime: '2–3 дня', days: 2 },
  { from: 'Санкт-Петербург', to: 'Самара', deliveryTime: '2–3 дня', days: 2 },
  { from: 'Самара', to: 'Казань', deliveryTime: '1 день', days: 1 },
  { from: 'Казань', to: 'Самара', deliveryTime: '1 день', days: 1 },
  { from: 'Самара', to: 'Уфа', deliveryTime: '1–2 дня', days: 1 },
  { from: 'Уфа', to: 'Самара', deliveryTime: '1–2 дня', days: 1 },
  { from: 'Самара', to: 'Екатеринбург', deliveryTime: '2–3 дня', days: 2 },
  { from: 'Екатеринбург', to: 'Самара', deliveryTime: '2–3 дня', days: 2 },
  
  // ПОВОЛЖЬЕ
  { from: 'Самара', to: 'Тольятти', deliveryTime: '1 день', days: 1 },
  { from: 'Самара', to: 'Набережные Челны', deliveryTime: '1–2 дня', days: 1 },
  { from: 'Самара', to: 'Нижний Новгород', deliveryTime: '1–2 дня', days: 1 },
  { from: 'Самара', to: 'Саратов', deliveryTime: '1 день', days: 1 },
  { from: 'Самара', to: 'Пенза', deliveryTime: '1 день', days: 1 },
  { from: 'Самара', to: 'Ульяновск', deliveryTime: '1 день', days: 1 },
  { from: 'Самара', to: 'Оренбург', deliveryTime: '1–2 дня', days: 1 },
  { from: 'Самара', to: 'Чебоксары', deliveryTime: '1–2 дня', days: 1 },
  
  // УРАЛ
  { from: 'Самара', to: 'Челябинск', deliveryTime: '2–3 дня', days: 2 },
  { from: 'Самара', to: 'Пермь', deliveryTime: '2–3 дня', days: 2 },
  { from: 'Самара', to: 'Тюмень', deliveryTime: '3–4 дня', days: 3 },
  { from: 'Самара', to: 'Курган', deliveryTime: '3–4 дня', days: 3 },
  
  // ЦЕНТР РОССИИ
  { from: 'Самара', to: 'Воронеж', deliveryTime: '1–2 дня', days: 1 },
  { from: 'Самара', to: 'Липецк', deliveryTime: '1–2 дня', days: 1 },
  { from: 'Самара', to: 'Тамбов', deliveryTime: '1–2 дня', days: 1 },
  { from: 'Самара', to: 'Белгород', deliveryTime: '2 дня', days: 2 },
  { from: 'Самара', to: 'Курск', deliveryTime: '1–2 дня', days: 1 },
  { from: 'Самара', to: 'Тула', deliveryTime: '1–2 дня', days: 1 },
  { from: 'Самара', to: 'Рязань', deliveryTime: '1–2 дня', days: 1 },
  
  // ЮГ РОССИИ
  { from: 'Самара', to: 'Ростов-на-Дону', deliveryTime: '2–3 дня', days: 2 },
  { from: 'Самара', to: 'Краснодар', deliveryTime: '2–3 дня', days: 2 },
  { from: 'Самара', to: 'Волгоград', deliveryTime: '1–2 дня', days: 1 },
  { from: 'Самара', to: 'Астрахань', deliveryTime: '2–3 дня', days: 2 },
  { from: 'Самара', to: 'Ставрополь', deliveryTime: '2–3 дня', days: 2 },
  
  // СИБИРЬ
  { from: 'Самара', to: 'Новосибирск', deliveryTime: '3–4 дня', days: 3 },
  { from: 'Самара', to: 'Омск', deliveryTime: '3–4 дня', days: 3 },
  { from: 'Самара', to: 'Томск', deliveryTime: '4–5 дней', days: 4 },
  { from: 'Самара', to: 'Барнаул', deliveryTime: '4–5 дней', days: 4 },
  { from: 'Самара', to: 'Кемерово', deliveryTime: '4–5 дней', days: 4 },
  { from: 'Самара', to: 'Красноярск', deliveryTime: '4–5 дней', days: 4 },
  
  // СЕВЕРО-ЗАПАД
  { from: 'Самара', to: 'Архангельск', deliveryTime: '4–5 дней', days: 4 },
  { from: 'Самара', to: 'Мурманск', deliveryTime: '5–6 дней', days: 5 },
  { from: 'Самара', to: 'Петрозаводск', deliveryTime: '3–4 дня', days: 3 },
  
  // СНГ
  { from: 'Самара', to: 'Алматы', deliveryTime: '5–7 дней', days: 6 },
  { from: 'Самара', to: 'Астана', deliveryTime: '5–7 дней', days: 6 },
  { from: 'Самара', to: 'Минск', deliveryTime: '3–4 дня', days: 3 },
  { from: 'Самара', to: 'Бишкек', deliveryTime: '6–8 дней', days: 7 },
  
  // ПРОМ + ХАБЫ
  { from: 'Самара', to: 'Калуга', deliveryTime: '1–2 дня', days: 1 },
  { from: 'Самара', to: 'Ярославль', deliveryTime: '2–3 дня', days: 2 },
  { from: 'Самара', to: 'Владимир', deliveryTime: '1–2 дня', days: 1 },
];

// Функция генерации slug
function generateSlug(from: string, to: string): string {
  const fromSlug = from.toLowerCase().replace(/\s+/g, '-').replace(/[^a-zа-яё0-9-]/g, '');
  const toSlug = to.toLowerCase().replace(/\s+/g, '-').replace(/[^a-zа-яё0-9-]/g, '');
  return `${fromSlug}-${toSlug}`;
}

// Функция генерации текста описания
function generateDescription(from: string, to: string): string {
  return `Организуем грузоперевозки по маршруту ${from} → ${to}. Подбор транспорта, контроль рейса, договор и закрывающие документы.`;
}

// Функция генерации features в зависимости от расстояния
function generateFeatures(days: number): string[] {
  const baseFeatures = [
    'Возможность отслеживания груза в реальном времени',
    'Работа с документами УПД/ЭДО',
  ];
  
  if (days <= 1) {
    return [
      'Регулярные рейсы 4–5 раз в неделю',
      ...baseFeatures,
      'Срочные перевозки — по согласованию',
    ];
  } else if (days <= 2) {
    return [
      'Регулярные рейсы 2–3 раза в неделю',
      ...baseFeatures,
      'Страхование груза',
    ];
  } else {
    return [
      'Регулярные рейсы 1–2 раза в неделю',
      ...baseFeatures,
      'Страхование груза',
      'Круглосуточная поддержка',
    ];
  }
}

// Функция генерации FAQ
function generateFAQ(from: string, to: string, deliveryTime: string): { question: string; answer: string }[] {
  return [
    {
      question: `Сколько стоит перевозка ${from} → ${to}?`,
      answer: `Стоимость зависит от типа груза, веса, объема и типа транспорта. Получите точный расчет, оставив заявку.`,
    },
    {
      question: `Сколько по срокам доставки?`,
      answer: `В среднем ${deliveryTime}, зависит от типа транспорта и загрузки.`,
    },
    {
      question: 'Можно ли доставить срочно?',
      answer: 'Да, организуем срочные перевозки по согласованию. Подбираем транспорт под срочные доставки.',
    },
    {
      question: 'Какие документы вы предоставляете?',
      answer: 'Полный пакет документов: договор перевозки, УПД, ЭДО. Работаем с НДС и без НДС.',
    },
    {
      question: 'Как быстро подбираете машину?',
      answer: 'Обычно в течение 1–2 часов после получения заявки. В срочных случаях — быстрее.',
    },
  ];
}

// Генерация всех маршрутов
export const routes: Route[] = routeTemplates.map((template) => {
  const slug = generateSlug(template.from, template.to);
  
  return {
    slug,
    from: template.from,
    to: template.to,
    title: `Перевозки ${template.from} → ${template.to}`,
    cities: [template.from, template.to],
    description: generateDescription(template.from, template.to),
    features: generateFeatures(template.days),
    vehicleTypes: template.days <= 2 
      ? ['Тент 20т', 'Тент 10т', 'Тент 5т', 'Рефрижератор', 'Изотерм']
      : ['Тент 20т', 'Тент 10т', 'Рефрижератор'],
    deliveryTime: template.deliveryTime,
    cargoTypes: ['Генгруз', 'Паллеты', 'Оборудование', 'Коммерческие грузы'],
    documents: ['Договор', 'УПД', 'ЭДО', 'НДС / без НДС'],
    faq: generateFAQ(template.from, template.to, template.deliveryTime),
  };
});

export function getRouteBySlug(slug: string): Route | undefined {
  return routes.find((route) => route.slug === slug);
}

export function getAllRoutes(): Route[] {
  return routes;
}
