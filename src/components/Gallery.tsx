import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const projects = [
  {
    image: 'https://images.unsplash.com/photo-1744056996022-c33f1cc49030?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY3J5bGljJTIwZGVzaWduJTIwcHJvZHVjdHxlbnwxfHx8fDE3NjI1NDM3ODV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Акриловые изделия',
    material: 'Акрил 5 мм'
  },
  {
    image: 'https://images.unsplash.com/photo-1615553926216-31d23b97a564?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kJTIwbGFzZXIlMjBlbmdyYXZpbmd8ZW58MXx8fHwxNzYyNTQzNzg1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Резка фанеры',
    material: 'Фанера 10 мм'
  },
  {
    image: 'https://images.unsplash.com/photo-1711548244678-be7019032b59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWF0aGVyJTIwY3JhZnQlMjBjdXR0aW5nfGVufDF8fHx8MTc2MjU0Mzc4Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Изделия из кожи',
    material: 'Натуральная кожа'
  },
  {
    image: 'https://images.unsplash.com/photo-1758387836566-6a342434f5b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVjaXNpb24lMjB0ZWNobm9sb2d5JTIwbWFudWZhY3R1cmluZ3xlbnwxfHx8fDE3NjI1NDM3ODR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Сложные детали',
    material: 'Композитные материалы'
  },
  {
    image: 'https://images.unsplash.com/photo-1615378809998-afc205e73bad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXNlciUyMGN1dHRpbmclMjBtYWNoaW5lfGVufDF8fHx8MTc2MjU0Mzc4NHww&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Прототипирование',
    material: 'Пластик 3 мм'
  },
  {
    image: 'https://images.unsplash.com/photo-1715059120691-d6b06c275d74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwbWFjaGluZXJ5JTIwd29ya3NwYWNlfGVufDF8fHx8MTc2MjU0Mzc4Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Промышленные детали',
    material: 'Резина 8 мм'
  }
];

export function Gallery() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-gray-50 rounded-lg shadow-sm mb-4 border border-gray-100">
            <span className="text-[#B22222] tracking-wider text-sm">ПРИМЕРЫ РАБОТ</span>
          </div>
          <h2 className="text-gray-900 mb-4">Наши проекты</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Мы работаем с широким спектром материалов и создаем изделия любой сложности
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl bg-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="mb-2">{project.title}</h3>
                <div className="flex items-center gap-2">
                  <div className="w-1 h-4 bg-[#B22222]" />
                  <p className="text-gray-300 text-sm">{project.material}</p>
                </div>
              </div>

              {/* Corner Accent */}
              <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-[#B22222] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
