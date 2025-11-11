import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Gauge, Layers, Zap, Settings } from 'lucide-react';

const specs = [
  {
    icon: Gauge,
    label: 'Точность резки',
    value: '±0.1 мм'
  },
  {
    icon: Zap,
    label: 'Мощность лазера',
    value: 'до 150 Вт'
  },
  {
    icon: Layers,
    label: 'Макс. толщина',
    value: 'до 20 мм'
  },
  {
    icon: Settings,
    label: 'Рабочая область',
    value: '1300×900 мм'
  }
];

const materials = [
  'Акрил (ПММА)',
  'Фанера',
  'МДФ, ДВП',
  'Натуральная кожа',
  'Пластик (ПВХ, ПЭТ)',
  'Резина',
  'Картон, бумага',
  'Текстиль'
];

export function Equipment() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-gray-50 rounded-lg shadow-sm mb-4 border border-gray-100">
            <span className="text-[#B22222] tracking-wider text-sm">НАШЕ ОБОРУДОВАНИЕ</span>
          </div>
          <h2 className="text-gray-900 mb-4">Современное оборудование</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Используем высокоточные лазерные станки последнего поколения
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1715059120691-d6b06c275d74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwbWFjaGluZXJ5JTIwd29ya3NwYWNlfGVufDF8fHx8MTc2MjU0Mzc4Nnww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Laser cutting equipment"
                className="w-full h-auto"
              />
              {/* Overlay Accent */}
              <div className="absolute top-8 right-8 w-16 h-16 border-r-4 border-t-4 border-[#B22222]" />
              <div className="absolute bottom-8 left-8 w-16 h-16 border-l-4 border-b-4 border-[#B22222]" />
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-[#B22222] text-white p-6 rounded-xl shadow-xl">
              <div className="text-center">
                <div className="text-3xl mb-1">99.9%</div>
                <div className="text-sm opacity-90">Точность</div>
              </div>
            </div>
          </div>

          {/* Right - Specs & Materials */}
          <div>
            {/* Technical Specs */}
            <div className="mb-12">
              <h3 className="text-gray-900 mb-6">Технические характеристики</h3>
              <div className="grid grid-cols-2 gap-4">
                {specs.map((spec, index) => {
                  const Icon = spec.icon;
                  return (
                    <div
                      key={index}
                      className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:border-[#B22222]/20 hover:shadow-lg transition-all duration-300"
                    >
                      <Icon className="w-8 h-8 text-[#B22222] mb-4" strokeWidth={1.5} />
                      <div className="text-2xl text-gray-900 mb-1">{spec.value}</div>
                      <div className="text-sm text-gray-600">{spec.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Supported Materials */}
            <div>
              <h3 className="text-gray-900 mb-6">Поддерживаемые материалы</h3>
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <div className="grid grid-cols-2 gap-3">
                  {materials.map((material, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-[#B22222] rounded-full flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{material}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-8 p-6 bg-gradient-to-r from-[#B22222]/5 to-transparent rounded-xl border-l-4 border-[#B22222]">
              <p className="text-gray-700 leading-relaxed">
                Наши станки обеспечивают высокую скорость работы при сохранении максимальной точности. 
                Мы можем выполнить заказы любой сложности – от единичных прототипов до серийного производства.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
