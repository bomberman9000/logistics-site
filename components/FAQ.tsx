'use client';

import { useState } from 'react';

const faqs = [
  {
    question: 'Как быстро вы подберете машину?',
    answer: 'Обычно мы находим подходящий транспорт в течение 1–2 часов после получения заявки. В срочных случаях — еще быстрее.',
  },
  {
    question: 'Какие документы вы предоставляете?',
    answer: 'Мы оформляем полный пакет документов: договор перевозки, УПД (универсальный передаточный документ), ЭДО (электронный документооборот). Все документы соответствуют требованиям законодательства.',
  },
  {
    question: 'Можно ли отслеживать груз в пути?',
    answer: 'Да, мы предоставляем связь с водителем 24/7 и можем отслеживать местоположение груза. Вы всегда будете в курсе статуса доставки.',
  },
  {
    question: 'Страхуете ли вы груз?',
    answer: 'Да, мы работаем только с проверенными перевозчиками и можем организовать страхование груза. Это гарантирует защиту ваших интересов.',
  },
  {
    question: 'Работаете ли вы по СНГ?',
    answer: 'Да, мы осуществляем перевозки по всей России, странам СНГ и Европе. Имеем опыт международных перевозок.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900">
          Часто задаваемые вопросы
        </h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-200 last:border-b-0"
            >
              <button
                className="w-full py-4 text-left flex items-center justify-between"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
                <svg
                  className={`w-5 h-5 text-gray-500 transform transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="pb-4 text-gray-600">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


