'use client';

import { useState } from 'react';

interface FormData {
  name: string;
  phone: string;
  route: string;
  cargoType: string;
  weight: string;
  volume: string;
  comment: string;
}

export default function LeadForm({ presetRoute = '' }: { presetRoute?: string }) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    route: presetRoute || '',
    cargoType: '',
    weight: '',
    volume: '',
    comment: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          phone: '',
          route: presetRoute || '',
          cargoType: '',
          weight: '',
          volume: '',
          comment: '',
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="lead-form" className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">
            Оставить заявку
          </h2>
          <p className="text-center text-gray-300 mb-8">
            Заполните форму, и мы свяжемся с вами в течение 15 минут
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium">
                  Имя *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-yellow-500"
                  placeholder="Ваше имя"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block mb-2 text-sm font-medium">
                  Телефон *
                </label>
                <input
                  type="tel"
                  id="phone"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-yellow-500"
                  placeholder="+7 (___) ___-__-__"
                />
              </div>
            </div>

            <div>
              <label htmlFor="route" className="block mb-2 text-sm font-medium">
                Маршрут *
              </label>
              <input
                type="text"
                id="route"
                required
                value={formData.route}
                onChange={(e) => setFormData({ ...formData, route: e.target.value })}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-yellow-500"
                placeholder="Откуда → Куда"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label htmlFor="cargoType" className="block mb-2 text-sm font-medium">
                  Тип груза *
                </label>
                <select
                  id="cargoType"
                  required
                  value={formData.cargoType}
                  onChange={(e) => setFormData({ ...formData, cargoType: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-yellow-500"
                >
                  <option value="">Выберите</option>
                  <option value="paper">Бумага</option>
                  <option value="packaging">Упаковка</option>
                  <option value="metal">Металл</option>
                  <option value="equipment">Оборудование</option>
                  <option value="building">Стройматериалы</option>
                  <option value="cars">Автомобили</option>
                  <option value="other">Другое</option>
                </select>
              </div>

              <div>
                <label htmlFor="weight" className="block mb-2 text-sm font-medium">
                  Вес (кг)
                </label>
                <input
                  type="number"
                  id="weight"
                  value={formData.weight}
                  onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-yellow-500"
                  placeholder="0"
                />
              </div>

              <div>
                <label htmlFor="volume" className="block mb-2 text-sm font-medium">
                  Объем (м³)
                </label>
                <input
                  type="number"
                  id="volume"
                  step="0.1"
                  value={formData.volume}
                  onChange={(e) => setFormData({ ...formData, volume: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-yellow-500"
                  placeholder="0"
                />
              </div>
            </div>

            <div>
              <label htmlFor="comment" className="block mb-2 text-sm font-medium">
                Комментарий
              </label>
              <textarea
                id="comment"
                rows={4}
                value={formData.comment}
                onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-yellow-500"
                placeholder="Дополнительная информация о грузе"
              />
            </div>

            {submitStatus === 'success' && (
              <div className="p-4 bg-green-500/20 border border-green-500 rounded-lg text-green-400">
                Спасибо! Ваша заявка отправлена. Мы свяжемся с вами в ближайшее время.
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="p-4 bg-red-500/20 border border-red-500 rounded-lg text-red-400">
                Произошла ошибка. Пожалуйста, попробуйте еще раз или свяжитесь с нами по телефону.
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-6 py-4 bg-yellow-500 text-gray-900 rounded-lg font-semibold text-lg hover:bg-yellow-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Отправка...' : 'Отправить заявку'}
            </button>
          </form>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+79278996662"
              className="flex items-center space-x-2 px-6 py-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <span>📞</span>
              <span>+7 (927) 899-66-62</span>
            </a>
            <a
              href="https://t.me/sinergia_plus"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-6 py-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <span>📱</span>
              <span>Telegram</span>
            </a>
            <a
              href="https://wa.me/79278996662"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-6 py-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <span>💬</span>
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

