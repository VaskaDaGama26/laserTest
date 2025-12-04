import React from 'react';
import { Crosshair, Clock, Zap, Maximize2 } from 'lucide-react';

const benefits = [
  {
    icon: Crosshair,
    title: 'Точность',
    description: 'Высокоточное оборудование для идеального результата'
  },
  {
    icon: Zap,
    title: 'Быстрые сроки',
    description: 'Оперативное выполнение заказов любой сложности'
  },
  {
    icon: Clock,
    title: 'Производство от 1 дня',
    description: 'Срочные заказы выполняем в кратчайшие сроки'
  },
  {
    icon: Maximize2,
    title: 'Любые формы и размеры',
    description: 'Работаем с проектами любой сложности и конфигурации'
  }
];

export function Benefits() {
  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-[#B22222]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gray-200/50 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-white rounded-lg shadow-sm mb-4">
            <span className="text-[#B22222] tracking-wider text-sm">НАШИ ПРЕИМУЩЕСТВА</span>
          </div>
          <h2 className="text-gray-900 mb-4">Почему выбирают нас</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#B22222]/20 group"
              >
                {/* Icon Container */}
                <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-50 rounded-lg flex items-center justify-center mb-6 group-hover:from-[#B22222]/10 group-hover:to-[#B22222]/5 transition-all duration-300">
                  <Icon className="w-8 h-8 text-[#B22222]" strokeWidth={1.5} />
                </div>

                {/* Content */}
                <h3 className="text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>

                {/* Decorative Line */}
                <div className="mt-6 w-12 h-0.5 bg-gradient-to-r from-[#B22222] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
