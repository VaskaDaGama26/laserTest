import React from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Gauge, Layers, Zap, Settings } from "lucide-react";

const materials = [
  "Фaнepa (до 18мм)",
  "Оpгстeкло (до 10мм)",
  "Пoлиcтиpол",
  "ЛХДФ",
  "Фетp",
  "Pезина (дo 5мм)",
  "Кapтон",
  "Бумaгa",
  "АBS-плacтик",
  "Элeктрoкapтон",
  "Пaронит",
  "Cиликoн",
  "Любой вид ткaни",
  "Aрамид",
  "Кoжа",
  "ЭBA",
  "Лекaлa из картонa",
  "ПЭT",
  "Boйлoк",
  "Кокосовая мульча",
];

export function Equipment() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-gray-50 rounded-lg shadow-sm mb-4 border border-gray-100">
            <span className="text-[#B22222] tracking-wider text-sm">
              ПОДДЕРЖИВАЕМЫЕ МАТЕРИАЛЫ
            </span>
          </div>
          <h2 className="text-gray-900 mb-4">Разнообразие решений</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Работаем с разными материалами в соответствии с требованиями проекта
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="/materials.webp"
                alt="Laser cutting equipment"
                className="w-full h-auto"
              />
              {/* Overlay Accent */}
              <div className="absolute top-8 right-8 w-16 h-16 border-r-4 border-t-4 border-[#B22222]" />
              <div className="absolute bottom-8 left-8 w-16 h-16 border-l-4 border-b-4 border-[#B22222]" />
            </div>
          </div>

          {/* Right - Materials */}
          <div>
            {/* Supported Materials */}
            <div>
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
                Наши станки обеспечивают высокую скорость работы при сохранении
                максимальной точности. Мы можем выполнить заказы любой сложности
                – от единичных прототипов до серийного производства.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
