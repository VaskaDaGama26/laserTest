import React from 'react';
import { FileText, Calculator, Cog, Truck } from 'lucide-react';

const steps = [
  {
    icon: FileText,
    title: 'Заявка',
    description: 'Отправьте чертеж или опишите задачу'
  },
  {
    icon: Calculator,
    title: 'Расчёт',
    description: 'Получите смету'
  },
  {
    icon: Cog,
    title: 'Производство',
    description: 'Изготовление от 1 рабочего дня'
  },
  {
    icon: Truck,
    title: 'Сдача заказа',
    description: ''
  }
];

export function Process() {
  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Decorative Grid */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(#374151 1px, transparent 1px), linear-gradient(90deg, #374151 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-white rounded-lg shadow-sm mb-4">
            <span className="text-[#B22222] tracking-wider text-sm">ПРОЦЕСС РАБОТЫ</span>
          </div>
          <h2 className="text-gray-900 mb-4">Как мы работаем</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Простой и прозрачный процесс от заявки до получения готового изделия
          </p>
        </div>

        {/* Desktop Version - Horizontal */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Connection Line */}
            <div className="absolute top-16 left-0 right-0 h-0.5 bg-gray-300">
              <div className="h-full bg-[#B22222] w-0 animate-[expand_2s_ease-in-out_forwards]" />
            </div>

            <div className="grid grid-cols-4 gap-8">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={index} className="relative">
                    {/* Step Number Circle */}
                    <div className="flex justify-center mb-8">
                      <div className="w-32 h-32 bg-white rounded-xl shadow-lg border-2 border-gray-200 flex items-center justify-center relative group hover:border-[#B22222] hover:shadow-xl transition-all duration-300">
                        <Icon className="w-12 h-12 text-[#B22222]" strokeWidth={1.5} />
                        <div className="absolute -top-3 -right-3 w-10 h-10 bg-[#B22222] text-white rounded-lg flex items-center justify-center shadow-lg">
                          <span>{index + 1}</span>
                        </div>
                      </div>
                    </div>

                    {/* Step Content */}
                    <div className="text-center">
                      <h3 className="text-gray-900 mb-2">{step.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                    {/* Arrow */}
                    {index < steps.length - 1 && (
                      <div className="absolute top-16 -right-4 w-8 h-0.5 bg-[#B22222] hidden lg:block">
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-t-4 border-t-transparent border-l-8 border-l-[#B22222] border-b-4 border-b-transparent" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile Version - Vertical */}
        <div className="lg:hidden space-y-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="flex gap-6">
                {/* Left Side - Icon */}
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-white rounded-xl shadow-lg border-2 border-gray-200 flex items-center justify-center relative">
                    <Icon className="w-8 h-8 text-[#B22222]" strokeWidth={1.5} />
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#B22222] text-white rounded-lg flex items-center justify-center shadow-lg text-sm">
                      {index + 1}
                    </div>
                  </div>

                  {/* Connecting Line */}
                  {index < steps.length - 1 && (
                    <div className="w-0.5 h-16 bg-gray-300 mx-auto mt-4" />
                  )}
                </div>

                {/* Right Side - Content */}
                <div className="flex-1 pt-2">
                  <h3 className="text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes expand {
          from { width: 0; }
          to { width: 100%; }
        }
      `}</style>
    </section>
  );
}
