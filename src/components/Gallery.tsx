import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const projects = [
  {
    image: '/acril.png',
    title: '',
    material: 'Акриловые изделия'
  },
  {
    image: '/plywood.png',
    title: '',
    material: 'Резка фанеры'
  },
  {
    image: '/carton.png',
    title: '',
    material: 'Изделия из электрокартона'
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
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent opacity-100 group-hover:opacity-0 transition-opacity duration-300" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="mb-2">{project.title}</h3>
                <div className="flex items-center gap-2">
                  <div className="w-1 h-4 bg-[#B22222]" />
                  <p className="text-white text-sm">{project.material}</p>
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
